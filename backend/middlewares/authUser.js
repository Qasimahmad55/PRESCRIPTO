import jwt, { decode } from 'jsonwebtoken'

const authUser = async (req, res, next) => {
    try {
        const { token } = req.headers
        // console.log(token);

        if (!token) {
            return res.json({ success: false, message: "Not authorized login again " })
        }

        const decodedToken = jwt.verify(token, process.env.JWT_SECRET)
        // if (!decodedToken) res.json({ success: false, message: "Not Authorized login again" })
        // console.log(decodedToken);

        req.user = { userId: decodedToken.id }
        next()

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message })
    }
}
export default authUser