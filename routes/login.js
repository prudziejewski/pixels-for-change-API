// const express = require("express");
// const router = express.Router();
// const fs = require("fs");
// // const { v4: uuid } = require("uuid");

// const userFilePath = "./data/users.json";

// const getUsers = () => {
//     return JSON.parse(fs.readFileSync(userFilePath));
// };

// router.route("/").get((_req, res) => {
//     let users = getUsers();

//     const user = users.find((username) => {
//         return username.user === user
//     });

//     if (!user || user.pwd === pwd) {
//         //   const token = jwt.sign({ name: user.name }, process.env.SECRET_KEY);
//           res.status(400).json({
//               success: {
//                   message: "Login Successful!"
//               },
//           });
//       } else {
//           res.status(401).json({
//               error: {
//                   message: "Login failed",
//               },
//           });
//       }
    
// })


// .post((req, res) => {
//     let users = getUsers();

//     //create new inventory item
//     let newUser = {
//       user: req.body.user,
//       pwd: req.body.pwd,
//     };

//     //add new item to the list of inventories
//     getUsers.push(newUser);

//     //write to the json file the updated list
//     fs.writeFileSync(userFilePath, JSON.stringify(users));

//     //send new item to the api
//     return res.send(newUser);
//   });


//   module.exports = router;


