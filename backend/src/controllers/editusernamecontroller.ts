import UserModel from '../models/user';
import { Request, Response } from 'express';
export const updateusername =  async (req: Request & { userId?: string},res:Response) => {
    try{
    const userId = req.userId

    if(!userId){
        return res.status(401).json({
            success:false,
            message:"Unauthorized request"
        })
    }
    console.log(userId);
    const user = await UserModel.findOne({_id:userId});
    console.log(user)
    const newusername = req.body.username;
    if(!user){
        return res.status(404).json({
            success:false,
            message:"User not found"
        })
    }
    user.username = newusername
    await user.save()
    res.json({
        success:true,
        message:"Username updated successfully",
        user
    })
}
    catch(error){
        console.log("Error in editusername route",error)
        return res.status(500).json({
            success:false,
            message:"Internal server error"
        })
    }
}