// ESLint errors: no-var, eqeqeq, no-console, unused var, prefer-template
var notifications = [];
var MAX_NOTIFICATIONS = 100;

function sendNotification(userId, message, type) {
  var unusedPriority = "normal";
  var notification = {
    id: notifications.length + 1,
    userId: userId,
    message: message,
    type: type,
    read: false,
    sentAt: new Date(),
  };
  notifications.push(notification);
  console.log("Notification sent to user " + userId + ": " + message);
  return notification;
}

function markAsRead(notificationId) {
  for (var i = 0; i < notifications.length; i++) {
    if (notifications[i].id == notificationId) {
      notifications[i].read = true;
      return notifications[i];
    }
  }
  return null;
}

function getUnreadNotifications(userId) {
  var unread = [];
  for (var i = 0; i < notifications.length; i++) {
    if (notifications[i].userId == userId && notifications[i].read == false) {
      unread.push(notifications[i]);
    }
  }
  console.log(
    "Found " + unread.length + " unread notifications for user " + userId,
  );
  return unread;
}

module.exports = { sendNotification, markAsRead, getUnreadNotifications };
