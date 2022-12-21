exports.paginaInicial = (req, res) => {
    res.render ('index'); 
    return; 
};

exports.trataPost = (req , res) => {
    res.send ('Rota de POST');
    return;
};