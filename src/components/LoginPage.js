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
                <button className="button--google button--social" onClick={startGoogleLogin}>
                    <img src="/images/google.png" alt="Google logo"/>
                    Google
                </button>
                <button className="button--facebook button--social" onClick={startFacebookLogin}>
                    <i class="fa fa-facebook" aria-hidden="true"></i>
                    Facebook
                </button>
                <button className="button--twitter button--social" onClick={startTwitterLogin}>
                    <i class="fa fa-twitter" aria-hidden="true"></i>
                    Twitter
                </button>
                <button className="button--github button--social" onClick={startGitHubLogin}>
                    <i class="fa fa-github" aria-hidden="true"></i>
                    GitHub
                </button>
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