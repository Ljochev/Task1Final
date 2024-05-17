const express = require("express");
const { getSection } = require("./pkg/config/index");
const {
    createNewUser,
    login,
    resetPassword,
    forgotPassword,
    getAllUserEmailsSorted,
} = require("./handlers/auth");

const {
    createNewSubjects,
    updateNewSubjects,
    getSubjectsById,
} = require("./handlers/subjects");

require("./pkg/db/index");

const app = express();
app.use(express.json());

app.get("/api/user/refresh-token", refreshToken);
app.post("/api/user/register", createNewUser);
app.post("/api/user/login", login);
app.post("/api/user/reset_password", resetPassword);
app.post("/api/user/forgot_password", forgotPassword);
app.get("/api/user/sortedEmails", getAllUserEmailsSorted);


app.listen(getSection("development").PORT, () => {
    console.log(`Server is listening on port ${getSection("development").PORT}`)
});