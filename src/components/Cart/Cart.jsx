import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Box, Chip, Divider } from '@mui/material';
import Rating from "@mui/material/Rating";
import DesktopWindowsIcon from '@mui/icons-material/DesktopWindows';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme }) => ({
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
    variants: [
        {
            props: ({ expand }) => !expand,
            style: {
                transform: 'rotate(0deg)',
            },
        },
        {
            props: ({ expand }) => !!expand,
            style: {
                transform: 'rotate(180deg)',
            },
        },
    ],
}));


export default function Cart({ gameItems }) {
  
    return (
        <Card key={gameItems.id}  sx={{ maxWidth: 345, boxShadow: 3 }}>

            <CardMedia
                component="img"
                height="194"
                image={gameItems.background_image}
                alt="Paella dish"
            />
            <CardContent>
                <Box sx={{
                    padding: 1,
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between'
                }}>
                    <Typography variant="body2">
                        <span style={{ fontWeight: "bold" }}>Name:</span> {gameItems.name}
                    </Typography>
                </Box>
                <Divider sx={{
                    background: '#9e9b9bff'
                }} />
                <Box sx={{
                    padding: 1,
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between'
                }}>
                    <Typography variant="body2">
                        <span style={{ fontWeight: "bold" }}>Released Date:</span> {gameItems.released}
                    </Typography>

                </Box>
                <Divider sx={{
                    background: '#9e9b9bff'
                }} />
                <Box
                    sx={{
                        p: 1,
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}
                >
                    <Typography variant="body2">
                        <span style={{ fontWeight: "bold" }}>Rating:</span>
                    </Typography>
                    <Rating
                        name="game-rating"
                        value={Number(gameItems?.rating_top) || 0}
                        precision={0.5}
                        readOnly
                    />
                </Box>
                <Divider sx={{
                    background: '#9e9b9bff'
                }} />
                <Box sx={{
                    p: 1,
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}>
                    <Typography variant="body2">
                        <span style={{ fontWeight: "bold" }}>Genres:</span>
                    </Typography>
                    <Box>
                        {gameItems.genres.map((value) => {
                            return (
                                <Chip sx={{
                                    padding: 1
                                }} label={value.name} variant="outlined" />
                            )
                        })}
                    </Box>
                </Box>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <DesktopWindowsIcon />
                </IconButton>
                <IconButton aria-label="share">
                    <SportsEsportsIcon />
                </IconButton>
            </CardActions>
        </Card>
    );
}