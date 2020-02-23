import React from 'react';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import {Controller, useForm} from "react-hook-form";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {myNav} from "../Styles/Styles";
import {Link} from "react-router-dom";
import './ResetPass.css';

export default function ResetPass({reset}) {

    const classes = myNav();
    const { handleSubmit, errors, control } = useForm();

    const onSubmit = (data) => {
        reset(data);
    };

    return(
        <div className="resetpass">
            <Card className="card" variant="outlined">
                <CardContent className="card-content">
                    <Typography variant="h6">
                       ¿Ha olvidado su contraseña?
                    </Typography>
                    <Typography  color="textSecondary">
                        Escribenos tu email y te indicaremos los pasos a seguir para recuperarla.
                    </Typography>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Controller
                            name="email"
                            as={<TextField label="email" className="input"/>}
                            control={control}
                            rules={{required: true}}
                            defaultValue=""
                        />
                        {errors.email &&
                        errors.email.type === "required"}
                        <Button variant="contained" className={classes.button6} type="submit">
                            Enviar
                        </Button>
                        <Button variant="contained" className={classes.button2}
                                component={Link} to={'/login'}>
                            Cancelar
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
}