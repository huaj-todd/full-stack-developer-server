import users from './users/users.js';
const userController = (app) => {
    app.get('/api/users', findAllUsers);
    app.get('/api/users/:uid', findUserById);
}
const findAllUsers = (req, res) => {
    const type = req.query['type'];
    if(type) {
        res.json(findUsersByType(type));
        return;
    }
}
const findUserById = (req, res) => {
    const userId = req.params.uid;
    const user = users.find(u => u._id === userId);
    res.json(user);
}

function findUsersByType(type) {
    if(type === "FACULTY"){
        const test = users.filter( user => user.type==="FACULTY");
        return test;
    }else{
        const test = users.filter( user => user.type==="STUDENT");
        return test;
    }
}
export default userController;