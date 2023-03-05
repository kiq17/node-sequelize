const People = require("../../models/people");


const getAllPeople = async (req, res)=>{
    try {
        const peoples = await People.findAll();

        return res.status(200).json(peoples);
    } catch (error) {
        return res.status(500).json({message: "Internal server error"});
    }
};

module.exports = getAllPeople;