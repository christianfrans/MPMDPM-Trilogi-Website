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

firebase.initializeApp(firebaseConfig);

var messagesRef = firebase.database().ref('campusVisit');

document.getElementById('visitForm').addEventListener('submit', submitForm);

function submitForm(e) {
    e.preventDefault();

    // Get values
    var fullname = getInputVal('name');
    var email = getInputVal('email');
    var date = getInputVal('date');
    var departments = getInputVal('departments');
    var cp = getInputVal('cp');
    var purpose = getInputVal('purpose');
    var request = getInputVal('request');

    saveMessage(fullname, email, date, departments, cp, purpose, request);
    document.getElementById('visitForm').reset();
}

// Function to get get form values
function getInputVal(id) {
    return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(fullname, email, date, departments, cp, purpose, request) {
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        fullname: fullname,
        email: email,
        date: date,
        departments: departments,
        cp: cp,
        purpose: purpose,
        request: request,
    });
    alert("Request Submitted");
    location.href = "campusVisit.html";
}