import App from "./App";
import {connect} from "react-redux";
import {getSessionSuccesfull} from "../../store/actions";

function mapStateToProps(state) {
    return {
    };
}
function mapDispatchToProps(dispatch) {
    return {
        updateSession: (session) => dispatch(getSessionSuccesfull(session)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps) (App);