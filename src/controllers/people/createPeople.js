const People = require("../../models/people");

const createPeople = async (req, res) => {
    const { name, region } = req.body;

    const createdPeople = await People.create({ name, region });

    return res.status(201).json(createdPeople);
};

module.exports = createPeople;