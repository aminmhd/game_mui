
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import { useDispatch } from 'react-redux';
import { openSideBar } from '../../redux/MenuBarSlice/MenuBarSlice';
import SideBar from '../Sidebar/SideBar';
import { Container } from '@mui/material';
import { red } from '@mui/material/colors';

export default function AppBarUp() {
    const dispatch = useDispatch()

    const toggleMenu = () => {
        dispatch(openSideBar())
    }


    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static" sx={{
                    background: '#121212'
                }}>
                    <Toolbar>
                        <IconButton
                            onClick={toggleMenu}
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            Menu
                        </Typography>
                        <Box display={'flex'} sx={{
                            'justifyContent': 'space-between',
                            'alignContent': 'center',
                            'padding': 1,
                        }}>
                            <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                                <Badge badgeContent={4} color="error">
                                    <MailIcon />
                                </Badge>
                            </IconButton>
                            <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                                <Badge badgeContent={17} color="error">
                                    <NotificationsIcon />
                                </Badge>
                            </IconButton>
                        </Box>
                        <Button color="inherit">Login</Button>
                    </Toolbar>
                </AppBar>

            </Box>
        </>
    )
}