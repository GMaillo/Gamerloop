import React, {useEffect} from 'react';
import NavBar from "../NavBar";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import IconButton from "@material-ui/core/IconButton";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import {AttachMoney, ThumbUpAlt} from "@material-ui/icons";
import {myNav} from "../Styles/Styles";
import './detail.css';
import Chip from "@material-ui/core/Chip";

export default function Detail({match, getAd, ad}) {

    const classes = myNav();
    useEffect(() => {
        getAd(match.params.id);
    }, [getAd, match.params.id]);

    return(
      <div className="detail">
          <NavBar/>
          <div className="detail2">
              {
                  Object.keys(ad).length !== 0 ?  <Card className={classes.cardDetail}>
                      <CardHeader
                          title={ad.nombre}
                          subheader="25 Diciembre 2019"
                      />
                          <img className="foto" src={`http://localhost:3001/images/anuncios/${ad.foto}`} alt=""/>
                      <CardContent>
                          <Typography className="cardDescription" variant="h6" color="textPrimary" component="p">
                              {ad.descripcion}
                          </Typography>
                      </CardContent>
                      <CardActions disableSpacing>
                          <IconButton aria-label="add to favorites">
                              <ThumbUpAlt />
                          </IconButton>
                          <Chip
                              icon={<AttachMoney />}
                              label={ad.precio}
                              style={{backgroundColor:'#EEF521'}}
                          />
                          {ad.venta ?
                              <Chip
                                    label="En venta"
                                    style={{backgroundColor:'#3F9EF8', color: 'black'}}
                              /> :
                              <Chip
                                    label="Comprar"
                                    style={{backgroundColor:'#F8883F', color: 'black'}}
                              />}
                              
                              Tag:
                          {ad.tags.map((tag, key) =>(
                              <Chip key={key}
                                  label={tag}
                              />
                          ))}
                      </CardActions>
                  </Card> :
                      <div></div>
        }
          </div>
      </div>
    );
}