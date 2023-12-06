// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE

var firebaseConfig = {
  apiKey: "AIzaSyD9fmN0uBGhtwzV7YPSgE8XuR4G54LYweo",
  authDomain: "let-s-chat-web-app-69369.firebaseapp.com",
  projectId: "let-s-chat-web-app-69369",
  storageBucket: "let-s-chat-web-app-69369.appspot.com",
  messagingSenderId: "148849311948",
  appId: "1:148849311948:web:98f777b9de74247c334269",
  measurementId: "G-RLKZMLT43N"
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

