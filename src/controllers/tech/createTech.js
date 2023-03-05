const People = require("../../models/people");
const Techs = require("../../models/techs");


const createTech = async (req, res) => {
    const { people_id } = req.params;
    const { name } = req.body;

    try {
        const findPeople = await People.findByPk(people_id);

        if (!findPeople) return res.status(400).json({ message: "People not found" });

        const [tech, state] = await Techs.findOrCreate({
            where: {
                name
            }
        });

        //adicionando a tecnologia ao usuario encontrado

        await findPeople.addTech(tech);
        
        if(state){
            return res.json(tech);
        }

        return res.status(400).json({message: "Tech already exists"});
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal server error" });
    }
};

module.exports = createTech;