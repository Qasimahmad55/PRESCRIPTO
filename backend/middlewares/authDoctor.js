import jwt, { decode } from 'jsonwebtoken'

const authDoctor = async (req, res, next) => {
    try {
        const { dtoken } = req.headers
        // console.log(dtoken);

        if (!dtoken) {
            return res.json({ success: false, message: "Not authorized login again " })
        }

        const decodedToken = jwt.verify(dtoken, process.env.JWT_SECRET)
        // if (!decodedToken) res.json({ success: false, message: "Not Authorized login again" })
        // console.log(decodedToken);

        req.user = { docId: decodedToken.id } 
        next()

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message })
    }
}
export default authDoctor