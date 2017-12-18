// have variable firebase with all of the exports as methods on the variable
import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyAM-xrd-pizKqEmig2h-gev-OC-0mBPaSE",
    authDomain: "expensify-1af89.firebaseapp.com",
    databaseURL: "https://expensify-1af89.firebaseio.com",
    projectId: "expensify-1af89",
    storageBucket: "expensify-1af89.appspot.com",
    messagingSenderId: "440500947393"
};

firebase.initializeApp(config);

const database = firebase.database();

// child_removed
database.ref('expenses').on('child_removed', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
});

// child_changed
database.ref('expenses').on('child_changed', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
});

// child_added
// also gets initially called for existing children
database.ref('expenses').on('child_added', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
});

// database.ref('expenses').on('value', (snapshot) => {
//     const expenses = [];

//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         })
//     });

//     console.log(expenses);
// });

// database.ref('expenses')
//     .once('value')
//     .then((snapshot) => {
//         const expenses = [];

//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             })
//         });

//         console.log(expenses);
//     })

// database.ref('expenses').push({
//     description: 'Rent',
//     note: 'too much money',
//     amount: 109500,
//     createdAt: 123412341234
// });

// database.ref('notes/-L0exCAqNwkKI9L0tO-f').remove();

// database.ref('notes').push({
//     title: 'Course Topics',
//     body: 'React, Angular, Python'
// })

// const onValueChange = database.ref().on('value', (snapshot) => {
//     const val = snapshot.val();
//     console.log(`${val.name} is a ${val.job.title} at ${val.job.company}.`);
// });


// const onValueChange = database.ref().on('value', (snapshot) => {
//     console.log(snapshot.val());
// }, (e) => {
//     console.log('Error with data fetching', e);
// });

// setTimeout(() => {
//     database.ref('age').set(29);
// }, 3500);

// setTimeout(() => {
//     database.ref().off(onValueChange);
// }, 7000);

// setTimeout(() => {
//     database.ref('age').set(30);
// }, 10500);

// database.ref('location/city')
//     .once('value')
//     .then((snapshot) => {
//         const val = snapshot.val();
//         console.log(val);
//     })
//     .catch((e) => {
//         console.log('Error fetching data', e);
//     });

// firebase does more than just databases, so .database() shows you want to access stuff for the db
// database.ref().set({
//     name: 'Andrew Mead',
//     age: 26,
//     stressLevel: 6,
//     job: {
//         title: 'Software developer',
//         company: 'Google'
//     },
//     location: {
//         city: 'Philadelphia',
//         country: 'United States'
//     }
// }).then(() => {
//     console.log('Data is saved');
// }).catch((e) => {
//     console.log('This failed.', e);
// });

// database.ref().update({
//     stressLevel: 9,
//     'job/company': 'Amazon',
//     'location/city': 'Seattle'
// });

// database.ref('isSingle').set(null)

// database.ref('isSingle')
//     .remove()
//     .then(() => {
//         console.log('got it');
//     })
//     .catch((e) => {
//         console.log('Failed', e);
//     });