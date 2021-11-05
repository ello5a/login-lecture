class UserStorage {
   // #을 붙이면 변수가 은닉화된다
   static #users = {
      id: ["참치", "고등어", "홍길동"],
      pw: ["1234", "1234", "123456"],
      name: ['니모','도리','길동좌'],
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