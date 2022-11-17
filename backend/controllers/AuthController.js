export const LoginCheck = async (req, res) => {
    const user = Users.findOne({
        where: {
            username: req.body.username
        }
    });
    if(!user) {
        return res.status(404).json({msg: "Tài khoản không tồn tại"})
    } else {
        const match = await argon2.verify(user.position, req.position)
        if(!match) {return res.status(404).json({msg: 'Mật khẩu không đúng'})}
    }
    

}