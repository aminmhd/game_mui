import SideBar from "./Sidebar/SideBar";
import { useEffect } from "react";
import AppBarUp from "./AppBar/AppBarUp";
import { Box, CircularProgress, Container, Grid } from "@mui/material";
import SearchBar from "./SearchBar/SearchBar";
import Cart from "./Cart/Cart";
import { useDispatch, useSelector } from "react-redux";
import { getGames } from "../redux/gameSlice/GameSlice";



import { m } from "../paraglide/messages.js"
// import { localizeUrl } from "../paraglide/runtime.js";
// import { compile } from "@inlang/paraglide-js";
// import updatepir_invalidheader4 from "../paraglide/messages"
import { getLocale, setLocale } from "../paraglide/runtime";


// await compile({
// 	project: "../../project.inlang",
// 	outdir: "../src/paraglide",
// });


export default function Main() {
    const gamesList = useSelector((store) => store.gamesApiSlice.games);
    const isLoading = useSelector((store) => store.gamesApiSlice.isLoading);
    const dispatch = useDispatch();

    setLocale("fr")
    console.log(getLocale())
    console.log(
        m["addClient.successHeader"]());
    console.log(
        m["greetingXXX.greeting"]({name: "amin"})
    )


    useEffect(() => {
        dispatch(getGames());
    }, [dispatch]);


    if (isLoading) {
        return (
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100vh',
                }}
            >
                <CircularProgress color="blue" />
            </Box>
        );
    }

    return (
        <>
            <AppBarUp />
            <SideBar />

            <Box sx={{ display: "flex", flexDirection: "row" }}>
                <SearchBar />
                <Container
                    sx={{
                        flex: 1,
                        mt: 1,
                        height: "90vh",
                        background: "transparent",
                        borderRadius: 2,
                        boxShadow: 3,
                        overflow: "auto",
                        p: 2,
                    }}
                >
                    <Grid container spacing={2}>
                        {gamesList.map((game) => (
                            <Grid item xs={12} md={4} key={game.id}>
                                {/* md=4 -> 12/4 = 3 columns on md+ screens */}
                                <Cart gameItems={game} />
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>
        </>
    );
}
