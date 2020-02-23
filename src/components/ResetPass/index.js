import { connect } from 'react-redux';

import ResetPass from "./ResetPass";

import {fetchResetPass} from "../../store/actions";

function mapDispatchToProps(dispatch) {
    return {
        reset: email => dispatch(fetchResetPass(email)),
    };
}

export default connect(null, mapDispatchToProps)(ResetPass);