import userProgram from '../models/user';
require('crypto');

let userController = {};

userController.register = (req,res) => {
    console.log(req);
    if(!req.body.firstName || !req.body.surName ||
        !req.body.email || 
        !req.body.password){
            res
                .status(400)
                .json({"message" : "All fields required"});
            return;
    }
    //TODO see if email is in use
    if(!userProgram.find({email : req.body.email}) === null){
        res
            .status(400)
            .json({"message" : "Email already in use"});
    }
    const user = new userProgram();
    user.firstName = req.body.firstName;
    user.surName = req.body.surName;
    user.email = req.body.email;
    user.setPassword(req.body.password);
    user.save(function(error){
        var jwtToken;
        if(error){
            res
                .status(400)
                .json({"message" : error});
        }else{
            jwtToken = user.generateJwt();
            res
                .status(200)
                .json({"token" : jwtToken});
        }
    })
}

userController.login = (req,res) => {
    console.log(req);
    if(!req.body.email || !req.body.password){
        res
            .status(400)
            .json({"message" : "All fields required"});
        return;
    }
    const email = req.body.email;
    
    //TODO find user by email, see if password matches
    if(!userProgram.find({email : req.body.email})){
        res
            .status(400)
            .json({"message" : "Email not registered"});
    }
    //TODO find user by email, validate the password for that user, then send json token
    if(userProgram.find({email : req.body.email}).then(user => user.validatePassword(req.body.password))){
        userProgram.find({email : req.body.email}).then(user =>
        res
            .status(200)
            .json({"token" : user.generateJwt, "email" : user.email,
            "firstName" : user.firstName, "lastName" : user.lastName})
        )
    }
}

export default userController;