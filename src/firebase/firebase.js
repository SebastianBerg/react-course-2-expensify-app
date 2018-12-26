import * as firebase from "firebase";

const config = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENSER_ID
};

firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };

// // child_removed
// database.ref("expenses").on("child_removed", snapshot => {
//   console.log(snapshot.key, snapshot.val());
// });

// // child_changed
// database.ref("expenses").on("child_changed", snapshot => {
//   console.log(snapshot.key, snapshot.val());
// });

// // child_added
// database.ref("expenses").on("child_added", snapshot => {
//   console.log(snapshot.key, snapshot.val());
// });

// // database.ref("expenses").on("value", snapshot => {
// //   const expenses = [];
// //   snapshot.forEach(childSnapshot => {
// //     expenses.push({
// //       id: childSnapshot.key,
// //       ...childSnapshot.val()
// //     });
// //   });
// //   console.log(expenses);
// // });

// // database
// //   .ref("expenses")
// //   .once("value")
// //   .then(snapshot => {
// //     const expenses = [];

// //     snapshot.forEach(childSnapshot => {
// //       expenses.push({
// //         id: childSnapshot.key,
// //         ...childSnapshot.val()
// //       });
// //     });

// //     console.log(expenses);
// //   });

// // database.ref("expenses").push({
// //   description: "Rent number 2",
// //   note: "",
// //   amount: 5400,
// //   createdAt: 0
// // });

// // database.ref("notes").push({
// //   title: "Course Topics",
// //   body: "React Native, Angular, Python"
// // });

// // database
// //   .ref("location/city")
// //   .once("value")
// //   .then(snapshot => {
// //     const val = snapshot.val();
// //     console.log(val);
// //   })
// //   .catch(e => {
// //     console.log("Error fetching data", e);
// //   });

// // database
// //   .ref()
// //   .set({
// //     name: "Sebastian Berg",
// //     age: 36,
// //     stressLevel: 6,
// //     job: {
// //       title: "Software developer",
// //       company: "Google"
// //     },
// //     location: {
// //       city: "Jönköping",
// //       country: "Sweden"
// //     }
// //   })
// //   .then(() => {
// //     console.log("Data is saved");
// //   })
// //   .catch(e => {
// //     console.log("This failed", e);
// //   });

// // database.ref().on("value", snapshot => {
// //   const data = snapshot.val();
// //   console.log(`${data.name} is a ${data.job.title} at ${data.job.company}`);
// // });

// // setTimeout(() => {
// //   database.ref("job/company").set("Toxic");
// // }, 3000);

// // database.ref().update({
// //   stressLevel: 9,
// //   "job/company": "Amazon",
// //   "location/city": "Stockholm"
// // });

// // database
// //   .ref("isSingle")
// //   .remove()
// //   .then(function() {
// //     console.log("Remove succeeded.");
// //   })
// //   .catch(function(error) {
// //     console.log("Remove failed: " + error.message);
// //   });
