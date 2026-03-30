const users = require('../modules/userModules');

//Getting the all users Data 
exports.getUsers = (req,res)=>{
    const q = req.query
    if(q){
        let user;
        users.forEach((item)=>{
            if(item.id==q.id){
                user=item;
            }
            res.json(user);
            return;
        })

    }
    res.json(users);
}

//Getting a user through it's id in parameter
exports.getUserById =(req,res)=>{
    const userId =req.params.id;

    users.forEach((item)=>{
        if(item.id == userId){
            res.json(item);
            return;
        }
    })
}

//Post practice
exports.login=(req,res)=>{
    res.end("Hello! You just logged in.");
}

//Request Methods
exports.getUserById1 = (req, res) => {
    res.send(req.params.id);
};

exports.searchUser = (req, res) => {
    res.send(req.query.q);
};

exports.checkHeader = (req, res) => {
    res.send(req.headers);
};

exports.createUser = (req, res) => {
    users.push(req.body);
    res.send(req.body);
};

