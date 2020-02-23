import Favoritos from "./Favoritos";
import { connect } from "react-redux";
import { getAllFavs } from "../../store/actions";
import { getSession, getFavorites } from "../../store/selectors";

function mapStateToProps(state) {
    return {
        session: getSession(state),
        favorites: getFavorites(state),
    };
}

function mapDispatchToProps(dispatch) {
    return {
        getAllFavorites: (id, token) => dispatch(getAllFavs(id, token)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Favoritos);