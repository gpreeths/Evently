import jwt from'jsonwebtoken'

const userAuth=(req,res,next)=>{

    const authHeader=req.headers.authorization
    if(!authHeader || !authHeader.startsWith('Bearer')){
        return res.status(401).json({message:"Access Denied. Unauthorized"})
    }

    const token=authHeader.split(' ')[1]

    try {
        const decoded=jwt.verify(token,process.env.JWT_SECRET)
        req.user=decoded;
        next()
        
    } catch (error) {
        res.status(403).json({message:"Invalid or expired token",error})
    }

}

const verifyToken=async (req,res)=>{
    const authHeader=req.headers.authorization
    if(!authHeader || !authHeader.startsWith('Bearer')){
        return res.status(401).json({verified:false,message:'Please login first'})
    }
    const token=authHeader.split(' ')[1]
    try {
        const decoded=jwt.verify(token,process.env.JWT_SECRET)
        return res.status(200).json({verified:true,message:'token verified',user:decoded})
    } catch (error) {
        res.status(403).json({verified:false,message:"Invalid or expired token",error})
    }

}

export {userAuth,verifyToken}