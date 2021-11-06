const fs = require('fs').promises;

class UserStorage {
   static #getUserInfo(data, id) {
      const users = JSON.parse(data);
      const idx = users.id.indexOf(id);
      const usersKeys = Object.keys(users);  // => [id, pw, name]
      const userInfo = usersKeys.reduce((newUser, info)=>{
         newUser[info] = users[info][idx];
         return newUser;
      }, {});
      return userInfo;
   }
   // #을 붙이면 변수가 은닉화된다
   static getUsers(...fields) {
      // const users = this.#users;
      const newUsers = fields.reduce((newUsers, field) => {
         if (users.hasOwnProperty(field)) {
            newUsers[field] = users[field];
         }
         return newUsers;
      }, {});
      return newUsers;
   }

   static getUserInfo(id) {
      // const users = this.#users;
      return fs
         .readFile('./src/databases/users.json')
         .then((data)=>{
            return this.#getUserInfo(data, id);
         })
         .catch(console.error);
   }

   static save(userInfo) {
      // const users = this.#users;
      users.id.push(userInfo.id);
      users.name.push(userInfo.name);
      users.pw.push(userInfo.pw);
      return { success: true };
   }
}

module.exports = UserStorage;