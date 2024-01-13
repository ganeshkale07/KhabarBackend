import { newsModel } from "../../models/index.js";
import CustomErrorHandler from "../../services/CustomErrorHandler.js";

const newsDataController = {
    async getAllNews(req,res,next) {

        try{
            let newsData = await newsModel.find();
            if(!newsData){
                return next(CustomErrorHandler.notFound());
            }            
            res.json(newsData);
            next();
        }
        catch(error){
            return next(error);
        }


    }
}

export default newsDataController;