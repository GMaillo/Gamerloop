import React from 'react';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import {Controller, useForm} from "react-hook-form";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Snackbar from "@material-ui/core/Snackbar";
import {myButton} from "../Styles/Styles";
import MuiAlert from "@material-ui/lab/Alert";

import './Login.css';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function Login({login, sessionUser}) {
    const { handleSubmit, errors, control } = useForm();
    const onSubmit = (data) => {
        login(data);
    };

    const classes = myButton();

    const setAlerts = (err) => {
        let openError = false;
        if(err.username){
            openError = true;
            return (
                <Snackbar open={openError} autoHideDuration={6000}>
                    <Alert severity="error">
                        Debe introducir un nombre de usuario
                    </Alert>
                </Snackbar>
            );
        } else if (err.password) {
            openError = true;
            return (
                <Snackbar open={openError} autoHideDuration={6000}>
                    <Alert severity="error">
                        Debe introducir un password
                    </Alert>
                </Snackbar>
            );
        }
    };

    return (
        <div className="login">
            <Card className="card" variant="standard">
                <CardContent className="card-content">
                    <Typography variant="h4">
                        Login
                    </Typography>
                    
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Controller
                            name="username"
                            as={<TextField label="Nombre de usuario" className="input"/>}
                            control={control}
                            rules={{required: true}}
                            defaultValue=""
                        />
                        {errors.username &&
                        errors.username.type === "required"}
                        <Controller
                            name="password"
                            as={<TextField label="Password" type="password" className="input"/>}
                            control={control}
                            rules={{required: true}}
                            defaultValue=""
                        />
                        {errors.password &&
                        errors.password.type === "required"}
                        <Button variant="contained" color="secondary" className={classes.button} type="submit">
                            Acceder
                        </Button>
                    </form>
                    <a href={'/resetpass'}>¿Ha olvidado su contraseña?</a>
                </CardContent>
            </Card>
            {setAlerts(errors)}
            <Snackbar open={sessionUser.error === 'Usuario o contraseña incorrectos'} autoHideDuration={6000}>
                <Alert severity="error">
                    El nombre de usuario o el password son incorretos
                </Alert>
            </Snackbar>
        </div>
    );
}