// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyDW1_aj-GxYGuL29Pc-rT9yvw2rjqNjaZ0",
    authDomain: "fleet-coyote-234300.firebaseapp.com",
    databaseURL: "https://fleet-coyote-234300.firebaseio.com",
    projectId: "fleet-coyote-234300",
    storageBucket: "fleet-coyote-234300.appspot.com",
    messagingSenderId: "252704891926",
    appId: "1:252704891926:web:5ad134713fb9129afd0137",
    measurementId: "G-QDJXTD25FT"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

// Initialize Firebase

const auth = firebase.auth();

function signUp() {

    var email = document.getElementById("email");
    var password = document.getElementById("password");

    const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
    promise.catch(e => alert("Escriba una Direccion y/o contraseña Valida"));

}

function signIn() {

    var email = document.getElementById("email");
    var password = document.getElementById("password");

    const promise = auth.signInWithEmailAndPassword(email.value, password.value);
    promise.catch(e => alert("Escriba una Direccion y/o contraseña Valida"));

}

function signOut() {

    auth.signOut();
    alert("Cerrar Seccion");

}

auth.onAuthStateChanged(function(user) {

    if (user) {




        var email = user.email;
        alert("Inicio de Seccion Correcto! " + email);

        window.open("https://app.powerbi.com/view?r=eyJrIjoiYjJmNWNmZjktZjRkOC00MzMxLWEyOTQtNDdkMGRhYmY4MzdjIiwidCI6IjZkZjY3NDI4LTMwYzYtNDk3Ny1iMTIxLWY1OWZlM2FjZjdhMCIsImMiOjJ9")

        //window.close("index.html")

        //auth.signIn();
        // window.close("index.html")
        //Take user to a different or home page`

        //is signed in

    } else {

        alert("Usuario no Activo");
        //no user is signed in
    }


});