const users = [];

const userOps = {
  addUser: ({ id, name, room }) => {
    name = name.trim().toLowerCase();
    room = room.trim().toLowerCase();

    const existingUser = users.find((u) => u.room === room && u.user === name);

    if (existingUser) {
      return { error: "User already exists" };
    }

    const newUser = { id, name, room };

    users.push(newUser);

    return newUser;
  },

  removeUser: (id) => {
    const index = users.findIndex((user) => user.id === id);

    if (index !== -1) {
      return users.splice(index, 1)[0];
    }
  },

  getUser: (id) => {
    return users.find((user) => user.id === id);
  },

  getUserInRoom: (room) => {
    return users.filter((user) => user.room === room);
  },
};

module.exports = userOps;
