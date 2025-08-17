import jwt from 'jsonwebtoken'

const authAdmin = async (req,res,next)=> {
    try {
        const atoken = req.headers['atoken']  
        if(!atoken){
            return res.json({success:false,message:'Not Authorized Login Again'})
        }
        const token_decode = jwt.verify(atoken,process.env.JWT_SECRET)

        if(token_decode !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD){
          return res.json({success:false,message:'Not Authorized Login Again'})
        }

        next()
    } catch (error) {
        console.log(error)
        res.json({success:false,message:error.message})
        
    }
} 

export default authAdmin

/*import jwt from 'jsonwebtoken';

const authAdmin = async (req, res, next) => {
  try {
    const atoken = req.headers.atoken; // same as frontend header
    if (!atoken) {
      return res.status(401).json({ success: false, message: 'Not Authorized. Login Again' });
    }

    const token_decode = jwt.verify(atoken, process.env.JWT_SECRET);

    req.admin = token_decode; // attach decoded info
    next(); // move to next middleware/controller

  } catch (error) {
    console.log(error);
    return res.status(401).json({ success: false, message: 'Invalid Token' });
  }
};

export default authAdmin;*/
