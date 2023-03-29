const express = require('express');
const request = require('request');
const bodyParser = require('body-parser');
const https = require('https');
const axios = require('axios');

const app = express();

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended:true}));


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/signup.html');
});

app.post('/', (req, res) => {
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;
    const list_id = "fb7e084f38"
    const api_Key =  "baa3388f4c040138e4ff02a13c920dcb-us21";
    const dc = "us21";
    
    //const list_id = "your_list_id";
    const url = `https://${dc}.api.mailchimp.com/3.0/lists/${list_id}/members`;
    
    //const api_key = "your_api_key";
    const headers = {
      'Authorization': `api_key ${api_Key}`,
      'Content-Type': 'application/json'
    };
    const data = {
      'email_address': email,
      'status': 'subscribed',
      'merge_fields': {
        'FNAME': firstName,
        'LNAME': lastName
      }
    };
    axios.post(url, data, { headers })
      .then((response) => {
        console.log('Subscriber added successfully!');
        res.sendFile(__dirname +"/success.html");
      })
      .catch((error) => {
        console.error('Error adding subscriber:', error.response.data.title);
        res.sendFile(__dirname +"/failure.html");
        //res.send('Error adding subscriber:',error.response.data.title);
      });
});

app.post('/failure', (req, res) => {
    res.redirect('/');
    //res.sendFile(__dirname + 'failure.html');
});

app.listen(process.env.PORT || 3000,()=>{
    console.log('Server is running on port 3000');
});
// baa3388f4c040138e4ff02a13c920dcb-us21
// Audience id- fb7e084f38

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDOn5-b1b8nPAi_gmki1YoXJe4phTpI_n4",
  authDomain: "newsletter-a0eb7.firebaseapp.com",
  projectId: "newsletter-a0eb7",
  storageBucket: "newsletter-a0eb7.appspot.com",
  messagingSenderId: "785765859615",
  appId: "1:785765859615:web:2ca82a7befb84b4bf9302a",
  measurementId: "G-RKJY9H4BGJ"
};

// Initialize Firebase
const app2 = initializeApp(firebaseConfig);
const analytics = getAnalytics(app2);

