var firebaseConfig = {
    apiKey: "AIzaSyCHIcc6OW8quaLXF2atHF3yd5ZcG9tdPy0",
    authDomain: "mpm-dpm-trilogi.firebaseapp.com",
    databaseURL: "https://mpm-dpm-trilogi-default-rtdb.firebaseio.com",
    projectId: "mpm-dpm-trilogi",
    storageBucket: "mpm-dpm-trilogi.appspot.com",
    messagingSenderId: "695830310852",
    appId: "1:695830310852:web:4389b78699e30ac0627e91",
    measurementId: "G-X07D9D4Q19"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();


const fullname = document.getElementById('fullname');
const email = document.getElementById('email');
const cp = document.getElementById('cp');
const purpose = document.getElementById('purpose');
const request = document.getElementById('request');

const database = firebase.database();

const reference = database.ref('campusVisit');

window.onload = function() {
    this.getData();
}

function getData() {
    firebase.database().ref('campusVisit/').once('value').then(function(snapshot) {
        var name_product_div = document.getElementById('dataContent');
        name.innerHTML = "";
        var data = snapshot.val();
        console.log(data);
        for (let [key, value] of Object.entries(data)) {
            name_product_div.innerHTML = "<tr>" +
                "<td>" + value.fullname + "</td>" +
                "<td>" + value.email + "</td>" +
                "<td>" + value.cp + "</td>" +
                "<td>" + value.purpose + "</td>" +
                "<td>" + value.request + "</td>" +
                "</tr>" + name_product_div.innerHTML;
        }
    });
}

function dataGagal(err) {
    console.log(err);
}