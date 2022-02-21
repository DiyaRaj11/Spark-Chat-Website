var firebaseConfig = {
    apiKey: "AIzaSyALfZnSpuEVHmpbIhALY8VC6-VsVT-srIg",
    authDomain: "kwitter-app-f6c41.firebaseapp.com",
    databaseURL: "https://kwitter-app-f6c41-default-rtdb.firebaseio.com",
    projectId: "kwitter-app-f6c41",
    storageBucket: "kwitter-app-f6c41.appspot.com",
    messagingSenderId: "667907213323",
    appId: "1:667907213323:web:515a3f05376d9c37a31f0e"
  };
  firebase.initializeApp(firebaseConfig);

user_name=localStorage.getItem("username")
room_name=localStorage.getItem("roomname")










function send(){
    msg=document.getElementById("message").value
    firebase.database().ref(room_name).push({
        name:user_name,
        message:msg,
        like:0
    })
    document.getElementById("message").value=""
}
function logout(){
    window.location="index.html"
    localStorage.removeItem("username")
    localStorage.removeItem("roomname")
}