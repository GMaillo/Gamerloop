import React from "react";
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {myNav} from "../Styles/Styles";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";


export default function NavBar({session, logout}) {
    const classes = myNav();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = event => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar className={classes.nav}>
                    <IconButton edge="start" className={classes.menuButton} color="primary"
                                aria-label="menu" aria-controls="simple-menu" aria-haspopup="true"
                                onClick={handleClick}>
                        <MenuIcon />
                    </IconButton>

                        {session.success && (
                            <Menu
                                id="simple-menu"
                                anchorEl={anchorEl}
                                keepMounted
                                open={Boolean(anchorEl)}
                                onClose={handleClose}
                            >
                                <MenuItem onClick={handleClose}  component={Link} to="/profile">Perfil</MenuItem>
                                <MenuItem onClick={handleClose} component={Link} to={`/anuncios/${session.session.username}`}>Mis anuncios</MenuItem>
                                <MenuItem onClick={handleClose} component={Link} to="/create">Crear anuncio</MenuItem>
                                <MenuItem onClick={handleClose} component={Link} to="/favoritos">Favoritos</MenuItem>
                                <MenuItem onClick={logout}>Logout</MenuItem>
                            </Menu>)
                        }
                        {!session.success && (
                            <Menu
                                id="simple-menu"
                                anchorEl={anchorEl}
                                keepMounted
                                open={Boolean(anchorEl)}
                                onClose={handleClose}
                            >
                                <MenuItem onClick={handleClose} component={Link} to="/register">Registro</MenuItem>
                                <MenuItem onClick={handleClose} component={Link} to="/login">Login</MenuItem>
                            </Menu>)
                        }
                    <Typography variant="h5" component={Link} to="/" className={classes.title}>
                    GamerLoop
                    </Typography>
                    {session.success && (
                        <div>
                            <Button className={classes.button4} component={Link} to="/create">
                                Subir anuncio
                            </Button>
                            <Button className={classes.button5} component={Link} to="/profile">Perfil</Button>
                            <Button className={classes.button3} onClick={logout}>logout</Button>
                        </div>
                    )}
                    {!session.success && (
                        <div>
                            <Button className={classes.button5} component={Link} to="/register">Registro</Button>
                            <Button className={classes.button3} component={Link} to="/login">Login</Button>
                        </div>
                    )}
                </Toolbar>
            </AppBar>
        </div>
    );
}