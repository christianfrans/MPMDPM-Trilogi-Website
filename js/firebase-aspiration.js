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

var messagesRef = firebase.database().ref('aspiration');

document.getElementById('aspirationForm').addEventListener('submit', submitForm);

function submitForm(e) {
    e.preventDefault();

    // Get values
    var fullname = getInputVal('name');
    var nim = getInputVal('nim');
    var departments = getInputVal('departments');
    var aspirations = getInputVal('aspirations');

    saveMessage(fullname, nim, departments, aspirations);
    document.getElementById('aspirationForm').reset();
}

// Function to get get form values
function getInputVal(id) {
    return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(fullname, nim, departments, aspirations) {
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        fullname: fullname,
        nim: nim,
        departments: departments,
        aspirations: aspirations,
    });
    alert("Aspiration Submitted");
    location.href = "aspiration.html";
}