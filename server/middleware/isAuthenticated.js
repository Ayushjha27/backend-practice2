//401 --> unauthrised
import jwt from "jsonwebtoken";
const isAuthenticated = async (req,res,next) =>{
    try {
        const token = req.cookies.token;  //token cookie me store hota hai
        console.log(token);
        if(!token){ //toh token hume cookie se milega agr token nhi milega to hum false return krenge
            return res.status(401).json({
                success: false,
                message: "User not authenticated"
            })
        }
        const decode = await jwt.verify(token, process.env.SECRET_KEY);
        //decode hoke ek object milega decode me is object ke ander jo token me user ka data save kra tha vo milega

        //agr decode nahi ho pata h to
        if(!decode){
            return res.status(401).json({
                success:false,
                message:"Invalid token"
            })
        }
        // console.log(decode);
        //output:--
        // {
        //     userId: '67778d7d52d817955aa4843d',      
        //     iat: 1736251717,
        //     exp: 1736338117
        //   }
        req.id = decode.userId; //ye ek object hai  const req={id:""}
        next();//jb authenticate ho jyega tb next function call hoga or ye next fuction create api ko chala dega
    } catch (error) {
        console.log(error);
    }
}
export default isAuthenticated;