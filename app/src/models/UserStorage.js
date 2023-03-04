"use strict";

const fs = require("fs").promises;

class UserStorage {
  // #을 넣으면 public ->private으로 변함 클라스 내에서 밖에 못가져옴
  static #users = {};

  // 변수로 키 값을 받아서 해당 키의 데이터를 객체로 반환 하는 함수
  static getUsers(isAll, ...fields) {
    return fs
      .readFile("./src/databases/fileDB/users.json")
      .then((data) => {
        const users = JSON.parse(data);
        if (isAll) return users;
        const newUsers = fields.reduce((newUsers, field) => {
          if (users.hasOwnProperty(field)) {
            // hasOwnPropety()는 화면에서 받은 값이 키로 등록되어있는지 확인

            newUsers[field] = users[field]; // 빈객체에 받은 값을 키로 등록하고 값을 users에서 가져와 저장함
          }
          return newUsers;
        }, {});

        return newUsers;
      })
      .catch((err) => {
        if (err) throw err;
      });
  }

  static getUserInfo(id) {
    return fs
      .readFile("./src/databases/fileDB/users.json")
      .then((data) => {
        const users = JSON.parse(data);
        const idx = users.id.indexOf(id);
        console.log(idx);
        const userInfo = Object.keys(users).reduce((newUser, info) => {
          console.log(users);
          console.log(users[info][idx]);

          newUser[info] = users[info][idx];
          //console.log(users[info][idx]);
          return newUser;
        }, {});
        //console.log(userInfo);
        return userInfo;
      })
      .catch((err) => {
        if (err) throw err;
      });
  }
  static async save(userInfo) {
    const users = await this.getUsers(true);

    if (users.id.includes(userInfo.id)) {
      throw "이미 존재하는 아이디입니다";
    }
    users.id.push(userInfo.id);
    users.names.push(userInfo.name);
    users.psword.push(userInfo.psword);
    fs.writeFile("./src/databases/fileDB/users.json", JSON.stringify(users));
    return { success: true };
  }
}

module.exports = UserStorage;
