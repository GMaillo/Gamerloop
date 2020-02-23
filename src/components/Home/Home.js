import React, {useCallback, useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import {myNav} from "../Styles/Styles";
import {AttachMoney,
    SettingsBackupRestore} from "@material-ui/icons";
import TextField from "@material-ui/core/TextField";
import './Home.css'
import {Controller, useForm} from "react-hook-form";
import CardActions from "@material-ui/core/CardActions";
import CardMedia from "@material-ui/core/CardMedia";
import ButtonBase from "@material-ui/core/ButtonBase";
import Chip from "@material-ui/core/Chip";
import ReactSelect from 'react-select';
import Alert from "@material-ui/lab/Alert";
import Snackbar from "@material-ui/core/Snackbar";
import NavBar from "../NavBar";
import Pagination from "@material-ui/lab/Pagination";

const optionsType = [
    { value: "", label: "¿Compras o vendes?"},
    { value: false, label: "Comprar" },
    { value: true, label: "Vender" }
];

const optionsPrice = [
    { value: "", label: "$$$" },
    { value: "1-15", label: "1-15" },
    { value: "15-25", label: "15-25" },
    { value: "25-35", label: "25-35" },
    { value: "35-60", label: "35-60" },
    { value: "60-100", label: "60-100" }
];

export default function Home({getFilterAds, getAllAds, ads, revertAds}) {
    const { handleSubmit, control } = useForm();
    const [tag, setTagState] = useState('');
    const [state,setState] = useState({
            name: '',
            tipo: '',
            precios: '',
        });
    const [page, setPage] = useState(1);
    const [adsRever, setAdsRevState] = useState(false);
    const [pagination, setPagination] = useState({inicio: 0, fin: 3});
    const classes = myNav();

    const getAds = useCallback(
        filters => {
            filters ? getFilterAds(filters) : getAllAds();
        }, [getFilterAds, getAllAds]
    );

    useEffect(() => {
        getAds();
    }, [getAds]);

    const reverseList = () => {
        setAdsRevState(!adsRever);
        revertAds(ads.reverse());
    };

    const changePage = (event, value) => {
        if (page <= value) {
            setPagination({inicio: pagination.inicio + 5, fin: pagination.fin + 5 });
        } else {
            setPagination({inicio: pagination.inicio - 5, fin: pagination.fin - 5 });
        }
        setPage(value);
    };

    return(
        <React.Fragment>
            <div className="home">
               <NavBar/>
                <div className="search">
                    <div className="title">
                        <Typography variant="h5">Bienvenido a Gamerloop</Typography>
                    </div>
                        <div className="selectores">
                        <form onSubmit={handleSubmit(state => { setState(state); getAds({tag, ...state})})} className="fSearch">
                            <div className="filtros">
                                <Controller
                                    name="name"
                                    as={<TextField variant="standard" label="¿Qué estas buscando?" className="controller"/>}
                                    control={control}
                                    defaultValue=""
                                />
                                <Controller
                                    name="tipo"
                                    as={<ReactSelect className="controller" placeholder="Compras o vendes" />}
                                    control={control}
                                    options={optionsType}
                                    defaultValue={optionsType[0]}
                                    onChange={([selected]) => {
                                        return { value: selected };
                                    }}
                                />
                                <Controller
                                    name="precios"
                                    as={<ReactSelect className="controller" placeholder="Rango de precios"/>}
                                    control={control}
                                    options={optionsPrice}
                                    defaultValue={optionsPrice[0]}
                                    onChange={([selected]) => {
                                        return { value: selected };
                                    }}
                                />
                            </div>
                            <Button variant="contained" color="primary" className={classes.button} type="submit" >
                                Buscar
                            </Button>
                        </form>
                    </div>
                </div>
                <div className="cardList">
                  
                    <IconButton aria-label="cambiar orden" onClick={reverseList}>
                        <SettingsBackupRestore fontSize="large"/>
                    </IconButton>
                    {
                        ads.length === 0 ?
                            <Snackbar  open={ads.length === 0} autoHideDuration={6000}>
                                <Alert severity="warning">
                                    Su búsqueda no ha dado resultado
                                </Alert>
                            </Snackbar>:
                            ads.slice(pagination.inicio, pagination.fin).map(ad => (
                                <Card className={classes.card} key={ad._id}>
                                    <ButtonBase className={classes.buttonCard} component={Link} to={`/detail/${(ad.nombre.toLocaleLowerCase()).trim()}/${ad._id}`}>
                                    <CardMedia
                                        className={classes.cover}
                                        image={`http://localhost:3001/images/anuncios/${ad.foto}`}
                                    />
                                        <div className={classes.details}>
                                            <CardContent className={classes.content}>
                                                <Typography component="h5">{ad.nombre}</Typography>
                                                <Typography variant="body2" color="textSecondary" component="p">
                                                    {ad.descripcion}
                                                </Typography>
                                            </CardContent>
                                            <CardActions className={classes.cardactions}>
                                                <Chip
                                                    icon={<AttachMoney />}
                                                    label={ad.precio}
                                                    style={{backgroundColor:'#EEF521'}}
                                                />
                                                {ad.venta ?
                                                    <Chip className={classes.chipventa}
                                                          label="Se vende"
                                                          style={{backgroundColor:'#3F9EF8', color: 'black'}}
                                                    /> :
                                                    <Chip className={classes.chipcompra}
                                                          label="Comprar"
                                                          variant="outlined"
                                                          style={{backgroundColor:'#F8883F', color: 'black'}}
                                                    />}
                                                </CardActions>
                                        </div>
                                    </ButtonBase>
                                </Card>
                        ))
                    }
                    <Pagination count={Math.ceil(ads.length/5)} page={page} onChange={changePage} variant="outlined"  className="paginator"/>
                </div>
            </div>
        </React.Fragment>
    );
};