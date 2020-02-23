import Detail from "./Detail";
import {connect} from "react-redux";
import {fetchAd, addFavorite, getAllFavs, delFav} from "../../store/actions";
import {getAd, getSession, getFavorites} from "../../store/selectors";

function mapStateToProps(state) {
    return {
        ad: getAd(state),
        session: getSession(state),
        getFavs: getFavorites(state),
    };
}

function mapDispatchToProps(dispatch) {
    return {
        getAd: (id) => dispatch(fetchAd(id)),
        setFavorite: (id, ad, token) => dispatch(addFavorite(id, ad, token)),
        getAllFavorites: (id, token) => dispatch(getAllFavs(id, token)),
        deleteFavorite: (id, ad, token) => dispatch(delFav(id, ad, token)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Detail);