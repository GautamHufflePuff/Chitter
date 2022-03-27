/// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCvZib8Icdag3Sz8Kv4rVz1_MUMS2YYLf8",
  authDomain: "chitter-6ead8.firebaseapp.com",
  databaseURL: "https://chitter-6ead8-default-rtdb.firebaseio.com",
  projectId: "chitter-6ead8",
  storageBucket: "chitter-6ead8.appspot.com",
  messagingSenderId: "230864487117",
  appId: "1:230864487117:web:62267aaa953b5bc138df84",
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
