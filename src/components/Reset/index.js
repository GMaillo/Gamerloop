import { connect } from 'react-redux';

import Reset from "./Reset";

import {fetchResetNewPass} from "../../store/actions";

function mapDispatchToProps(dispatch) {
    return {
        resetPass: (pass, email, token) => dispatch(fetchResetNewPass(pass, email, token)),
    };
}

export default connect(null, mapDispatchToProps)(Reset);