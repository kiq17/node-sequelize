const Adress = require("../../models/adress");
const People = require("../../models/people");

const createAdress = async (req, res) => {
    const { street, zipcode } = req.body;
    const {id} = req.params;

    const findUser = await People.findByPk(id);

    if(!findUser){
        return res.status(401).json({message: "Pessoa não encontrado"});
    }

    const createdAdress = await Adress.create({street, zipcode, people_id: id});

    return res.status(201).json(createdAdress);
};


module.exports = createAdress;