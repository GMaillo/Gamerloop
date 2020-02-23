import Profile from "./Profile";
import {connect} from "react-redux";
import {getSession} from "../../store/selectors";
import { fetchDeleteUser, fetchUpdateUser } from "../../store/actions"

function mapStateToProps(state) {
    return {
        session: getSession(state),
    };
}

function mapDispatchToProps(dispatch) {
    return {
        deleteUser: (id) => dispatch(fetchDeleteUser(id)),
        updateUser: (id, user) => dispatch(fetchUpdateUser(id, user)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Profile);