import { connect } from 'react-redux';
import Login from './Login';
import { fetchSession } from "../../store/actions";
import {getSession} from "../../store/selectors";

function mapStateToProps(state) {
    return {
        sessionUser: getSession(state),
    };
}
function mapDispatchToProps(dispatch, ownProps) {
    return {
        login: user => dispatch(fetchSession(user), ownProps.push),
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);