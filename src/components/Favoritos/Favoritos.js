import React, {useEffect, useState} from "react";
import ButtonBase from "@material-ui/core/ButtonBase";
import {Link} from "react-router-dom";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Chip from "@material-ui/core/Chip";
import {AttachMoney} from "@material-ui/icons";
import Card from "@material-ui/core/Card";
import {myNav} from "../Styles/Styles";
import NavBar from "../NavBar";
import './Favoritos.css';
import Pagination from "@material-ui/lab/Pagination";

export default function Favoritos({favorites, getAllFavorites, session}) {

    const classes = myNav();
    const [page, setPage] = useState(1);
    const [pagination, setPagination] = useState({inicio: 0, fin: 3});

    const changePage = (event, value) => {
        if (page <= value) {
            setPagination({inicio: pagination.inicio + 5, fin: pagination.fin + 5 });
        } else {
            setPagination({inicio: pagination.inicio - 5, fin: pagination.fin - 5 });
        }
        setPage(value);
    };

    useEffect(() => {
        getAllFavorites(session.session.id, session.session.token);
    }, [getAllFavorites]);

    return(
        <div className="favoritos">
            <NavBar/>
            <div className="favoritosCenter">
                <h3>Mis anuncios favoritos</h3>
                {favorites.slice(pagination.inicio, pagination.fin).map(fav => (
                    <Card className={classes.card} key={fav._id}>
                        <ButtonBase className={classes.buttonCard} component={Link} to={`/detail/${fav.nombre}/${fav._id}`}>
                            <CardMedia
                                className={classes.cover}
                                image={`http://localhost:3001/images/anuncios/${fav.foto}`}
                            />
                            <div className={classes.details}>
                                <CardContent className={classes.content}>
                                    <div className="typo">
                                        <Typography component="h5">{fav.nombre}</Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            {fav.descripcion}
                                        </Typography>
                                    </div>
                                </CardContent>
                                <CardActions className={classes.cardactions}>
                                    <Chip
                                        icon={<AttachMoney />}
                                        label={fav.precio}
                                        style={{backgroundColor:'#b3e5fc'}}
                                    />
                                    {fav.venta ?
                                        <Chip className={classes.chipventa}
                                              label="venta"
                                              style={{backgroundColor:'#0288d1', color: 'white'}}
                                        /> :
                                        <Chip className={classes.chipcompra}
                                              label="compra"
                                              color="primary"
                                              variant="outlined"
                                        />}
                                    
                                </CardActions>
                            </div>
                        </ButtonBase>
                    </Card>
                ))}
                <Pagination count={Math.ceil(favorites.length/5)} page={page} onChange={changePage} color="secondary" className="paginator"/>
            </div>
        </div>
    );
}