import { connect } from 'react-redux';
import { getRegistUser } from '../../store/selectors';

import Register from './Register';
import { fetchNewUser } from "../../store/actions";

function mapStateToProps(state) {
    return {
        regUser: getRegistUser(state),
    };
}
function mapDispatchToProps(dispatch, ownProps) {
    return {
        regNewUser: user => dispatch(fetchNewUser(user), ownProps.push),
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(Register);