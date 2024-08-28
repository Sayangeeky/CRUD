const user = require('../models/userModel'); 


exports.createUser = async (req, res) => {
    try {
        const { firstName, lastName, userName } = req.body;
        await user.create({ firstName, lastName, userName });
        res.status(200).json({ msg: "Data Inserted" });
    } catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
};


exports.getUser = async (req,res) => {
    const {userName} = req.params
    const users = await user.find({userName})
    res.status(200).send(users)
}