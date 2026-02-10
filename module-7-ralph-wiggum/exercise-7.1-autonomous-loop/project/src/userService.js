// ESLint errors: unused variable, no-var, eqeqeq, no-console
var users = [];
let unusedConfig = { timeout: 3000 };

function getUser(id) {
  console.log("Getting user: " + id);
  for (var i = 0; i < users.length; i++) {
    if (users[i].id == id) {
      return users[i];
    }
  }
  return undefined;
}

function addUser(name, email) {
  var user = {
    id: users.length + 1,
    name: name,
    email: email,
    createdAt: new Date(),
  };
  users.push(user);
  console.log("Added user: " + name);
  return user;
}

function deleteUser(id) {
  var index = -1;
  for (var i = 0; i < users.length; i++) {
    if (users[i].id == id) {
      index = i;
    }
  }
  if (index != -1) {
    users.splice(index, 1);
    console.log("Deleted user: " + id);
  }
}

module.exports = { getUser, addUser, deleteUser };
