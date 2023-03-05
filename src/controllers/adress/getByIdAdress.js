const People = require("../../models/people");


const getByIdAdress = async (req, res) => {
    const { id } = req.params;

    try {
        const findUser = await People.findByPk(id, {
            include: {
                people_id: id,
                association: "adresses"
            }
        });

        return res.status(200).json(findUser);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal server error" });
    }
};

module.exports = getByIdAdress;