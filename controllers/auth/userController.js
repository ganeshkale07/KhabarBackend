import { UserModel } from "../../models/index.js";
import CustomErrorHandler from "../../services/CustomErrorHandler.js";

const userController = {
    async me(req,res,next) {

        try{
            let userInfo = await UserModel.findOne({_id : req.user._id }).select('-password -__v -updatedAt');
            if(!userInfo){
                return next(CustomErrorHandler.notFound());
            }
            res.json(userInfo);
            next();
        }
        catch(error){
            return next(error);
        }


    }
}

export default userController;