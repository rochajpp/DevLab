const User = require("../models/User");


module.exports.getAll = async (app, req, res) => {
    
    try{
        const users = await User.findAll();
        return res.status(200).json(users);
    }catch(e){
        console.error(e);
        return res.status(500).send("Erro ao obter dados");
    }

}

module.exports.create = async (app, req, res) => {
    const data = req.body;

    if(!data.name || !data.email){
        return res.status(400).send("Nome e email obrigatórios");
    }

    try{
        User.create(data);
        return res.status(200).send("Usuário salvo com sucesso")
    } catch(e){
        return res.status(500).send("Erro ao salvar dados");
    }
}
