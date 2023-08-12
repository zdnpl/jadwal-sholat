importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js");

const firebaseConfig = {
  apiKey: "AIzaSyDXM0I7dvg5EeQrhf7eJgaa5ODP5chbf_U",
  authDomain: "jadwal-sholat-jakarta.firebaseapp.com",
  projectId: "jadwal-sholat-jakarta",
  storageBucket: "jadwal-sholat-jakarta.appspot.com",
  messagingSenderId: "56601137541",
  appId: "1:56601137541:web:38b324c9d386dda64334ec",
  measurementId: "G-PDSTK800CP",
};
firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function (payload) {
  const notificationTitle = "Background Message Title";
  const notificationOptions = {
    body: "Background Message body.",
    icon: "/path/to/icon.png", // Path to the notification icon
  };

  return self.registration.showNotification(notificationTitle, notificationOptions);
});
