"use strict";

const User = require("../../models/User");

const output = {
  home: (req, res) => {
    res.render("home/index");
  },
  login: (req, res) => {
    res.render("home/login");
  },
  register: (req, res) => {
    res.render("home/register");
  },
};

const process = {
  login: async (req, res) => {
    const user = new User(req.body);
    const response = await user.login();

    return res.json(response);

    // console.log(req.body);
    // const id = req.body.id;
    // const pw = req.body.psword;

    // const users = UserStorage.getUsers("id", "psword");

    // const response = {};
    // if (users.id.includes(id)) {
    //   const idx = users.id.indexOf(id);
    //   if (users.psword[idx] == pw) {
    //     console.log("success");

    //     response.success = true;
    //     return res.json(response);
    //   }
    // }

    // console.log("실패");
    // response.success = false;
    // response.message = "로그인 실패";
    // return res.json(response);
  },

  register: async (req, res) => {
    const user = new User(req.body);
    const response = await user.register();
    return res.json(response);
  },
};

module.exports = {
  output,
  process,
};
