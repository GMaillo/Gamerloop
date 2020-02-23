import React, {useCallback, useEffect, useState} from 'react';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {myNav} from "../Styles/Styles";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import {Controller, useForm} from "react-hook-form";
import CardActions from "@material-ui/core/CardActions";
import CardMedia from "@material-ui/core/CardMedia";
import CardHeader from "@material-ui/core/CardHeader";
import Chip from "@material-ui/core/Chip";
import ReactSelect from 'react-select';

const optionsType = [
    { value: false, label: "Comprar" },
    { value: true, label: "Se vende" }
];

const optionsPrice = [
    { value: "", label: "$$$" },
    { value: "1-15", label: "1-15" },
    { value: "15-25", label: "15-25" },
    { value: "25-35", label: "25-35" },
    { value: "35-60", label: "35-60" },
    { value: "60-100", label: "60-100" }
];


export default function Home(props) {
    const { handleSubmit, errors, control } = useForm();
    const [state, setState] = useState( {
        filters: {
            tag: '',
            price: '',
            name: '',
            type: '',
        }
    });

    const classes = myNav();
    const getAds = useCallback(
        filters => {
            filters ? props.getFilterAds(filters) : props.getAllAds();
        }, [props.getFilterAds, props.getAllAds]
    );

    useEffect(() => {
        getAds();
    }, [getAds]);

    const onSubmit = (data) => {
        setState({
            filters: {
                tag: state.filters.tag,
                type: data.tipo.value,
                price: data.precios.value,
                name: data.anuncio,
            }
        });
        getAds(state.filters);
    };

    return(
        <React.Fragment>
            <div className="home">
                               
                <div className="cardList">
                   
                </div>
            </div>
        </React.Fragment>
    );
};