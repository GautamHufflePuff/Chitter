// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAEg_59e5Q2y138GPjncPWiP1mMxqwc53s",
  authDomain: "chitter-chat-app-3f709.firebaseapp.com",
  databaseURL: "https://chitter-chat-app-3f709-default-rtdb.firebaseio.com",
  projectId: "chitter-chat-app-3f709",
  storageBucket: "chitter-chat-app-3f709.appspot.com",
  messagingSenderId: "969306437020",
  appId: "1:969306437020:web:5766d837921581bce68459",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
function addRoom() {
  room_name = document.getElementById("room_name").value;
  firebase
    .database()
    .ref("/")
    .child(room_name)
    .update({ purpose: "Adding RoomName!" });
  localStorage.setItem("room_name", room_name);
  window.location = "kwitter_page.html";
}
function getData() {
  firebase
    .database()
    .ref("/")
    .on("value", function (snapshot) {
      document.getElementById("output").innerHTML = "";
      snapshot.forEach(function (childSnapshot) {
        childKey = childSnapshot.key;
        Room_names = childKey;
        //Start code
        console.log("roomname - " + Room_names);
        row =
          "<div class='room_name' id=" +
          Room_names +
          " onclick='redirecttoroomname(this.id)' >#" +
          Room_names +
          "</div> <hr>";
        document.getElementById("output").innerHTML += row;
        //End code
      });
    });
}
getData();
function redirecttoroomname(names) {
  console.log(names);
  localStorage.setItem("room_name", names);
  window.location = "kwitter_page.html";
}
function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "index.html";
}
