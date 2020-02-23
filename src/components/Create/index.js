import Create from "./Create";
import {connect} from "react-redux";
import {getSession} from "../../store/selectors";
import { fetchNewAd } from "../../store/actions";

function mapStateToProps(state) {
    return {
        session: getSession(state),
    };
}

function mapDispatchToProps(dispatch) {
    return {
        saveAd: (token, ad) => dispatch(fetchNewAd(token, ad)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Create);