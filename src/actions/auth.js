import { firebase, googleAuthProvider, facebookAuthProvider } from '../firebase/firebase';

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

// export const startGoogleLogin = () => {
//     return () => {
//         return firebase.auth().signInWithPopup(googleAuthProvider).catch(error => {
//             if (error.code === 'auth/account-exists-with-different-credential') {
//                 const pendingCred = error.credential;
//                 return firebase.auth().fetchProvidersForEmail(error.email).then(providers => {
//                     return firebase.auth().signInWithRedirect(providers[0]).then(result => {
//                             return result.user;
//                         });
//                 }).then(user => {
//                     return user.linkWithCredential(pendingCred);
//                 });
//             }
//             throw error;
//         });
//     };
// };

export const startFacebookLogin = () => {
    return () => {
        return firebase.auth().signInWithPopup(facebookAuthProvider).catch(error => {
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
};

// export const startLoginFacebook = () => {
//     return () => {
//         // try signing up with facebook
//         return firebase.auth().signInWithPopup(facebookAuthProvider).catch((e) => {
//             var email = e.email;
//             var credential = e.credential;
//             console.log(e);
//             // if account already exists (shares an email)
//             if (e.code === 'auth/account-exists-with-different-credential') {
//                 // find which providers (i.e. 'google.com')
//                 firebase.auth().fetchProvidersForEmail(email).then((providers) => {
//                     if (providers.includes('google.com')) {
//                         firebase.auth().signInWithRedirect(googleAuthProvider).then(() => {
//                             console.log(firebase.auth());
//                             // firebase.User.linkWithCredential(credential).then((result) => {
//                             //     console.log('Linked!');
//                             // }).catch((e) => {
//                             //     console.log(e);
//                             // });
//                         }).catch((e) => {
//                             console.log(e);
//                             console.log(firebase.auth());
//                         });
//                     }
//                 });
//             }
//         });
//     };
// };

export const logout = () => ({
    type: 'LOGOUT'
});

export const startLogout = () => {
    return () => {
        return firebase.auth().signOut();
    };
};
