import jwt from 'jsonwebtoken'

const authUser = async (req,res,next)=> {
    try {
        const {token} = req.headers
        if(!token){
            return res.json({success:false,message:'Not Authorized Login Again'})
        }
        const token_decode = jwt.verify(token,process.env.JWT_SECRET)
        //req.userId = token_decode.userId
        req.userId = token_decode.id; // instead of token_decode.userId


        next()
    } catch (error) {
        console.log(error)
        res.json({success:false,message:error.message})
        
    }
}

export default authUser

