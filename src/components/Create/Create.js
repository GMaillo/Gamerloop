import React, {useState} from "react";
import NavBar from "../NavBar";
import {myNav} from "../Styles/Styles";
import CardActions from "@material-ui/core/CardActions";
import Card from "@material-ui/core/Card";
import {Controller, useForm} from "react-hook-form";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import ReactSelect from 'react-select';
import './Create.css';
import {Link} from "react-router-dom";

const options = [
    { value: 'ps4', label: 'Ps4' },
    { value: 'xbox', label: 'Xbox' },
    { value: 'switch', label: 'Switch' },
];
const optionsVenta = [
    { value: true, label: 'venta' },
    { value: false, label: 'compra' },
];

export default function Create ({session, saveAd}) {
    const classes = myNav();
    const [file, setFile] = useState({});
    const { handleSubmit, errors, control } = useForm();
    const onSubmit = (data) => {
        let formData = new FormData();
        formData.append('foto', file);
        formData.append('token', session.session.token);
        formData.append('nombre', data.nombre);
        formData.append('descripcion', data.descripcion);
        formData.append('precio', data.precio);
        formData.append('venta', data.venta.value);
        formData.append('autor', session.session.id);
        data.tags.forEach(tag => {
            formData.append('tags', tag.value);
        });
        saveAd(session.session.token, formData);
    };

    const getFile = (e) => {
        setFile(e.target.files[0]);
    };

    return (
        <div className="create">
            <NavBar/>
            <div className="content">
                <Card className="card">
                   
                    <CardActions className="cardactions">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="inputForm">
                                <Controller
                                    name="nombre"
                                    as={<TextField variant="standard"  className="controller" placeholder="nombre"/>}
                                    rules={{required: true}}
                                    control={control}
                                    defaultValue=""
                                />
                                {errors.nombre && "Es necesario que introduzca un nombre"}
                                <Controller
                                    name="tags"
                                    as={<ReactSelect className="controller" placeholder="Tags"
                                                     options={options} isMulti/>}
                                    rules={{required: true}}
                                    control={control}
                                    defaultValue=""
                                />
                                {errors.tags && "Es necesario que seleccione un tag"}
                                <Controller
                                    name="descripcion"
                                    as={<TextField variant="filled" className="controller" multiline
                                                   rows="4" placeholder="descripción"/>}
                                    rules={{required: true}}
                                    control={control}
                                    defaultValue=""
                                />
                                {errors.descripcion && "Es necesaria una descripción del artículo"}
                                <Controller
                                    name="precio"
                                    as={<TextField variant="standard" type="number" className="controller" placeholder="precio"/>}
                                    rules={{required: true}}
                                    control={control}
                                    defaultValue=""
                                />
                                {errors.precio && "Es necesario introducir un precio"}
                                <input name="foto" type="file"  className="controller" onChange={getFile} placeholder="foto"/>
                                {errors.foto && "Es necesario seleccionar una imágen"}
                                <Controller
                                    name="venta"
                                    as={<ReactSelect className="controller" placeholder="tipo"
                                                     options={optionsVenta}/>}
                                    onChange={([selected]) => {
                                        return { value: selected };
                                    }}
                                    rules={{required: true}}
                                    control={control}
                                    defaultValue=""
                                />
                                {errors.venta && "Es necesario introducir un tipo de venta"}
                            </div>
                            <div className="buttons">
                                <Button component={Link} to="/" className={classes.button5}>
                                    Cancelar
                                </Button>
                                <Button className={classes.button3} type="submit">
                                    Subir
                                </Button>
                            </div>
                        </form>
                    </CardActions>
                </Card>
            </div>
        </div>
    )
}