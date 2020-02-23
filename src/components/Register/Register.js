import React from 'react';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {Controller, useForm} from 'react-hook-form'
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from '@material-ui/lab/Alert';
import { myButton } from "../Styles/Styles";
import './Register.css';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function Register({regNewUser, regUser}) {
    const { handleSubmit, errors, control } = useForm();
    const onSubmit = (data) => {
        regNewUser(data);
    };

    const classes = myButton();

    const setAlerts = (err) => {
        let openError = false;
        if(err.username){
            openError = true;
            return (
                <Snackbar open={openError} autoHideDuration={6000}>
                    <Alert severity="error">
                        Campo username requerido
                    </Alert>
                </Snackbar>
            );
        } else if (err.email) {
            openError = true;
            return (
                <Snackbar open={openError} autoHideDuration={6000}>
                    <Alert severity="error">
                        Campo email requerido, o formato incorrecto
                    </Alert>
                </Snackbar>
            );
        } else if (err.password) {
            openError = true;
            return (
                <Snackbar open={openError} autoHideDuration={6000}>
                    <Alert severity="error">
                        Campo password requerido
                    </Alert>
                </Snackbar>
            );
        }
    };

    return (
        <div className="register">
            <Card className="card" variant="outlined">
                    <CardContent className="card-content">
                        <Typography variant="h6">
                            Regístrate en GamerLoop
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
                                name="email"
                                as={<TextField label="Introduce tu email" className="input"/>}
                                control={control}
                                rules={{required: true, pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,}}
                                defaultValue=""
                            />
                            {errors.email &&
                            errors.email.type === "required"}
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
                                Registrate
                            </Button>
                        </form>
                    </CardContent>
            </Card>
            {setAlerts(errors)}
            <Snackbar open={!regUser} autoHideDuration={6000}>
                <Alert severity="error">
                    El nombre de usuario o el email ya existen
                </Alert>
            </Snackbar>
        </div>
    );
}