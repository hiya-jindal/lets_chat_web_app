// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE

var firebaseConfig = {
  apiKey: "AIzaSyDSk2SWtCLK8Xl5-inLaNk-3CICnxK11eU",
  authDomain: "let-s-chat-86d38.firebaseapp.com",
  projectId: "let-s-chat-86d38",
  storageBucket: "let-s-chat-86d38.appspot.com",
  messagingSenderId: "818229513245",
  appId: "1:818229513245:web:bb07d19de3cd70c6020af4",
  measurementId: "G-3RDMWMDKTF"
};



// Initialize Firebase
firebase.initializeApp(firebaseConfig);



function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding user"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "chat_page.html";
}

function redirectToRoomName(name)
  {
    console.log(name);
    localStorage.setItem("room_name", name);
      window.location = "chat_page.html";
  }

