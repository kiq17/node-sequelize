const Adress = require("../../models/adress");


const getAllAdress = async (req, res) => {
    try {
        const adresses = await Adress.findAll();

        return res.status(200).json(adresses);
    } catch (error) {
        return res.status(500).json({ message: "Internal server error" });
    }
};

module.exports = getAllAdress;