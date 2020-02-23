import NavBar from "./NavBar";
import {getSession} from "../../store/selectors";
import {connect} from "react-redux";
import {logout } from "../../store/actions";

function mapStateToProps(state) {
    return {
        session: getSession(state),
    };
}

function mapDispatchToProps(dispatch) {
    return {
        logout: () => dispatch(logout()),
    }
}
export default connect(mapStateToProps, mapDispatchToProps) (NavBar);