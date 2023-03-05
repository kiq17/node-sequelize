const People = require("../../models/people");

const getPeopleTechs = async (req, res) => {
    const { people_id } = req.params;

    try {
        const findPeopleTechs = await People.findByPk(people_id, {
            attributes: ["name"],
            include: {
                association: "techs",
                through: { attributes: [] }
            }
        });

        return res.status(200).json(findPeopleTechs);

    } catch (error) {
        console.log(error);
    }
};

module.exports = getPeopleTechs;