import { firebase, googleAuthProvider, facebookAuthProvider, githubAuthProvider, twitterAuthProvider } from '../firebase/firebase';

export const login = ({ uid, displayName, photoURL }) => ({
    type: 'LOGIN',
    uid,
    displayName,
    photoURL
});

export const startGoogleLogin = () => {
    return () => {
        return firebase.auth().signInWithPopup(googleAuthProvider);
    };
};

export const startFacebookLogin = startGenericLogin(facebookAuthProvider);
export const startGitHubLogin = startGenericLogin(githubAuthProvider);
export const startTwitterLogin = startGenericLogin(twitterAuthProvider);

export const logout = () => ({
    type: 'LOGOUT'
});

export const startLogout = () => {
    return () => {
        return firebase.auth().signOut();
    };
};

// function that returns a function that returns a function that retuns a bunch of promises. LOL
// this is the generic function that is used to handle signing in
// each auth uses this but with a different provider
function startGenericLogin(provider) {
    return () => {
        return () => {
            // the provider is used here in firebase.auth().signInWithPopup
            return firebase.auth().signInWithPopup(provider).catch(error => {
                if (error.code === 'auth/account-exists-with-different-credential') {
                    const pendingCred = error.credential;
                    return firebase.auth().fetchProvidersForEmail(error.email).then(providers => {
                        return firebase.auth().signInWithRedirect(googleAuthProvider).then(result => {
                            return result.user;
                        });
                    }).then(user => {
                        return user.linkWithCredential(pendingCred);
                    });
                }
                throw error;
            });
        };
    }
}