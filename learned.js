// app.post("/todos", (req, res) => {
//   const { content } = req.body;
//   console.log("content:", content);
//   if (!content) {
//     return res.status(400).json({
//       success: false,
//       message: "invalid input",
//     });
//   }
//   fs.appendFileSync(pathName, `${content}\n`);
//   return res.status(400).json({
//     success: true,
//     message: "wrote file",
//   });
// });

// checkPasswordUser();
// // hashedPasswordUser();

// function handleStringUser(data) {
//   const splitUser = data.split("\n").splice(1);
//   const getUsers = splitUser.map((val) => {
//     const getUser = val.split(",");
//     return {
//       username: getUser[0],
//       firstname: getUser[1],
//       lastname: getUser[2],
//       password: getUser[3].match(/[^\r]/g).join(""),
//     };
//   });
//   return getUsers;
// }

// function checkPasswordUser() {
//   const pathUser = path.join("user", "newUser.csv");
//   const pathFake = path.join("user", "fake_users.csv");

//   const readNewUsers = fs.readFileSync(pathUser, "utf8");
//   const readFake = fs.readFileSync(pathFake, "utf8");
//   const handleString = handleStringUser(readNewUsers);
//   const handleStringFake = handleStringUser(readFake);

//   const checkInvalidUser = handleStringFake.filter((val) => {
//     return handleString.find(
//       (valFake) =>
//         valFake.username === val.username && valFake.password !== val.password
//     );
//   });

//   console.log("checkUser:", checkInvalidUser);
// }

// function hashedPasswordUser() {
//   const pathUser = path.join("user", "users.csv");
//   fs.readFile(pathUser, "utf8", (error, data) => {
//     if (error) {
//       console.error("Lỗi:", error);
//       return;
//     }
//     const splitUser = data.split("\n").splice(1);
//     const pathName = path.join("user", "newUser.csv");
//     fs.writeFileSync(pathName, "username,firstname,lastname,password");
//     splitUser.forEach((val) => {
//       const getUser = val.split(",");
//       const hashedPassword = crypto
//         .createHash("sha256")
//         .update(getUser[3])
//         .digest("hex");

//       fs.appendFileSync(
//         pathName,
//         `\n${getUser[0]},${getUser[1]},${getUser[2]},${hashedPassword}`
//       );
//     });
//   });
// }
