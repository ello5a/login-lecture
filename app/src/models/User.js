const UserStorage = require('./UserStorage');

class User {
   constructor(body) {
      this.body = body;
   }

   login(){
      const body = this.body
      const {id, pw} = UserStorage.getUserInfo(body.id);
      
      if (id) {
         if (id === body.id && pw === body.pw) {
            return { success: true };
         }
         return { success: false, msg: '비밀번호가 틀림' };
      }
      return { success: false, msg: '없는 아이디' };
   }
}


module.exports = User;