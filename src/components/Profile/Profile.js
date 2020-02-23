import React from "react";
import NavBar from "../NavBar";
import {myNav} from "../Styles/Styles";
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import './Profile.css';
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";
import {Controller, useForm} from "react-hook-form";
import TextField from "@material-ui/core/TextField";

export default function Profile({ session, deleteUser, updateUser }) {
    const classes = myNav();
    const { handleSubmit, control } = useForm();
    const onSubmit = (data) => {
        updateUser(session.session.id, data);
    };

    const [open, setOpen] = React.useState(false);
    const [openEdit, setOpenEdit] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClickOpenEdit = () => {
        setOpenEdit(true);
    };

    const handleClose = () => {
        setOpen(false);
        setOpenEdit(false);
    };

    const deleteU = (e) => {
        e.preventDefault();
        deleteUser(session.session.id);
    }
    return (
        <div className="profile">
            <NavBar/>
            {Object.keys(session).length !== 0 ?
                <div className="cardContend">
                    <Card className={classes.cardProfile}>
                        <CardContent>
                            <Typography className={classes.pos} color="textSecondary">
                               <b>Nombre de usuario:</b> {session.session.username}
                            </Typography>
                            <Typography className={classes.pos} color="textSecondary">
                                <b>Email:</b> {session.session.email}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button className={classes.button5} size="small"  onClick={handleClickOpenEdit}>Editar</Button>
                            <Button className={classes.button3} size="small" onClick={handleClickOpen}>Dar de baja</Button>
                            <Dialog
                                open={open}
                                onClose={handleClose}
                                aria-labelledby="alert-dialog-title"
                                aria-describedby="alert-dialog-description">
                                <DialogTitle id="alert-dialog-title">{"¡Cuidado!"}</DialogTitle>
                                <DialogContent>
                                    <DialogContentText id="alert-dialog-description">
                                        Si hace click en aceptar se procederan a eliminar sus datos.
                                    </DialogContentText>
                                </DialogContent>
                                <DialogActions>
                                    <Button onClick={handleClose} className={classes.button5}>
                                        Cancelar
                                    </Button>
                                    <Button onClick={e => deleteU(e)} type="submit" className={classes.button3}>
                                        Aceptar
                                    </Button>
                                </DialogActions>
                            </Dialog>
                            <Dialog
                                open={openEdit}
                                onClose={handleClose}
                                aria-labelledby="alert-dialog-title"
                                aria-describedby="alert-dialog-description">
                                <DialogTitle id="alert-dialog-title">{"Menu de edición:"}</DialogTitle>
                                <DialogContent className="dialogEditar">
                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        <div className="inputForm">
                                            <div>
                                                Nombre de usuario:
                                                <Controller
                                                    name="username"
                                                    as={<TextField variant="outlined"  className="controller"/>}
                                                    control={control}
                                                    defaultValue={session.session.username}
                                                />
                                            </div>
                                            <div>
                                                Email:
                                                <Controller
                                                    name="email"
                                                    as={<TextField variant="outlined" className="controller"/>}
                                                    control={control}
                                                    defaultValue={session.session.email}
                                                />
                                            </div>
                                        </div>
                                        <div className="buttons">
                                            <Button onClick={handleClose} className={classes.button5}>
                                                Cancelar
                                            </Button>
                                            <Button className={classes.button3} type="submit">
                                                Guardar
                                            </Button>
                                        </div>
                                    </form>
                                </DialogContent>
                            </Dialog>
                        </CardActions>
                    </Card>
                </div> :
                <div></div>
            }
        </div>
    )
}