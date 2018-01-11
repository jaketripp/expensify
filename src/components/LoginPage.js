import React from 'react';
import { connect } from 'react-redux';
import { startGoogleLogin, startFacebookLogin, startGitHubLogin, startTwitterLogin } from '../actions/auth';

export const LoginPage = ({ startGoogleLogin, startFacebookLogin, startGitHubLogin, startTwitterLogin }) => (
    <div className="box-layout">
        <div className="box-layout__box">
            <h1 className="box-layout__title">Expensify</h1>
            <p>It's time to get your expenses under control.</p>
            <h3 className="box-layout__subtitle">Choose one to log in:</h3>
            <div className="buttons">
                <button className="button button--google button--social" onClick={startGoogleLogin}>Google</button>
                <button className="button button--facebook button--social" onClick={startFacebookLogin}>Facebook</button>
                <button className="button button--twitter button--social" onClick={startTwitterLogin}>Twitter</button>
                <button className="button button--github button--social" onClick={startGitHubLogin}>GitHub</button>
            </div>
        </div>
    </div>
);

const mapDispatchToProps = (dispatch) => ({
    startGoogleLogin: () => dispatch(startGoogleLogin()),
    startFacebookLogin: () => dispatch(startFacebookLogin()),
    startGitHubLogin: () => dispatch(startGitHubLogin()),
    startTwitterLogin: () => dispatch(startTwitterLogin()),
});

export default connect(undefined, mapDispatchToProps)(LoginPage);