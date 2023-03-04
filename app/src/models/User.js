"use static";

const UserStorage = require("./UserStorage");

class User {
  constructor(body) {
    this.body = body;
  }

  async login() {
    const body = this.body;

    const { id, psword } = await UserStorage.getUserInfo(body.id);
    //console.log(id, psword);
    if (id) {
      if (id === body.id && psword === body.psword) {
        return { success: true };
      }
      return { success: false, message: "비밀번호가 틀렸습니다" };
    }
    return { success: false, message: "존재하지 않는 아이디입니다" };
  }
  async register() {
    const body = this.body;
    try {
      const response = await UserStorage.save(body);
      return response;
    } catch (err) {
      return { success: false, message: err };
    }
  }
}

module.exports = User;
