import User from "../models/UserModel.js";
 const getUsers = async (req, res) => {
    try {
        const resp = await User.findAll({
            attributes:['name','username','position']
        });
        res.status(200).json(resp);
        
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}
export default getUsers;