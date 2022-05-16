"use strict";

class UserStorage {
  static #users = {
    id: ['qwe', 'rty', 'uio'],
    psword: ['asd', 'fgh', 'jkl'],
    name: ['LEE','KIM','JO'],
  };

  static getUsers(...fields) {
    const users = this.#users;
    const newUsers = fields.reduce((newUsers, field) => {
      if (users.hasOwnProperty(field)) {
        newUsers[field] = users[field];
      }
      return newUsers;
    }, {});
    return newUsers;
  }
}

module.exports = UserStorage;