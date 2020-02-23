import { connect } from 'react-redux';

import PrivateRoute from './PrivateRoute';
import { userLogged} from "../../store/selectors";

function mapStateToProps ( state ){
    return {
        authorized: userLogged(state),
    }
};

export default connect(mapStateToProps)(PrivateRoute);