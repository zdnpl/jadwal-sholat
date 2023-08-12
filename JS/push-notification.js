// push-notifications.js

const fcmServerKey = "BN8CluwtTj4xp4YJcAHZJMUI1bAe4jSH-14ArZyaRdOYPpJ4TK3jxQ0aGoLzIcrrX2HyEAmxnnj-cyJq6r4RkCs";

function sendPushNotification() {
  const notificationData = {
    to: "target-device-token",
    notification: {
      title: "Hello",
      body: "This is a notification message.",
    },
  };

  fetch("https://fcm.googleapis.com/fcm/send", {
    method: "POST",
    headers: {
      Authorization: `key=${fcmServerKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(notificationData),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Response:", data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
