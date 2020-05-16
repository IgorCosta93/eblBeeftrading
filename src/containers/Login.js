import { connect } from 'react-redux';
import LoginWrapper from "../components/general/LoginWrapper";
import { LOGIN_RESQUEST } from "../store/actions/login";

const mapStateToProps = state => {
    return {
        login: state.loginR
    };
};

const mapDispatchToProps = dispatch => {
    return {
        LOGIN_RESQUEST: body => dispatch(LOGIN_RESQUEST(body)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginWrapper);