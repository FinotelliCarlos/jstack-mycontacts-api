const { v4 } = require('uuid');

let contacts = [
  {
    id: v4(),
    name: 'Carlos',
    email: 'carlos@mail.com',
    phone: '5511970707070',
    category_id: v4(),
  },
  {
    id: v4(),
    name: 'Natalia',
    email: 'natalia@mail.com',
    phone: '5511970707070',
    category_id: v4(),
  },
];

class ContactRepository {
  findAll() {
    return new Promise((resolve) => {
      resolve(contacts);
    });
  }

  findById(id) {
    return new Promise((resolve) => {
      resolve(contacts.find((contact) => contact.id === id));
    });
  }

  delete(id) {
    return new Promise((resolve) => {
      contacts = contacts.filter((contact) => contact.id !== id);
      resolve();
    });
  }
}

module.exports = new ContactRepository();
