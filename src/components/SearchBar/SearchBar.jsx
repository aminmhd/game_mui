import { Box, Button, Divider, TextField, Typography } from "@mui/material";
import ScreenSearchDesktopIcon from '@mui/icons-material/ScreenSearchDesktop';
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { searchQuery } from "../../redux/gameSlice/GameSlice";


export default function SearchBar() {
    const dispatch = useDispatch()
    const {
        register,
        handleSubmit,
        formState
    } = useForm()

    const submitHandler = (data) => {
        dispatch(searchQuery(data.name))
    }


    return (

        <Box sx={{
            marginLeft: 3,
            padding: 1,
            marginTop: '10px',
            width: '20%',
            display: 'flex',
            flexDirection: 'column',
            // background: "#757575ff",
            borderRadius: 2,
            boxShadow: 3

        }}>

            <Box sx={{
                paddingTop: 1,
                flex: 1
            }}>
                <form onSubmit={handleSubmit(submitHandler)}>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'row'
                    }}>
                        <ScreenSearchDesktopIcon sx={{
                            fontSize: '32px',
                            padding: '10px'
                        }} />
                        <Typography variant="h5" gutterBottom sx={{
                            padding: '10px',
                        }}>
                            Search Spot
                        </Typography>
                    </Box>
                    <Divider sx={{
                        width: "80%"
                    }} />
                    <Box flex={1} sx={{
                        width: "70%",
                        marginTop: "20px",
                        padding: '10px',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        gap: '30px'

                    }}>
                        <TextField
                            {...register("name", {
                                required: true
                            })}
                            name="name"
                            label="Name"
                            type="text"
                            autoComplete="Name"
                            variant="standard"
                        />
                        {/* <TextField

                            label="email"
                            type="email"
                            autoComplete="email"
                            variant="standard"
                        />
                        <TextField

                            label="Password"
                            type="password"
                            autoComplete="current-password"
                            variant="standard"
                        /> */}
                    </Box>
                    <Box sx={{
                        marginTop: 2,
                        padding: 2
                    }}>
                        <Button type="submit" variant="contained">Search</Button>
                    </Box>
                </form>
            </Box>

        </Box >

    )
}