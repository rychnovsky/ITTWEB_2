import userProgram from '../models/user';

let userController = {};

userController.register = (req,res) => {
    if(!req.body.firstName || !req.body.surName ||
        !req.body.email || 
        !req.body.password){
            res
                .status(400)
                .json({"message" : "All fields required"});
            return;
    }
    //TODO check if email is already taken
    const user = new userProgram();
    user.firstName = req.body.firstName;
    user.surNAme = req.body.surName;
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
    if(!req.body.email || !req.body.password){
        res
            .status(400)
            .json({"message" : "All fields required"});
        return;
    }
    const email = req.body.email;
    
    //TODO find user by email, see if password matches
}

export default userController;