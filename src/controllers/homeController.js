exports.paginaInicial = (req, res) => {
    res.render ('index', {
        titulo: 'titulo',
        numeros: [0,1,2,3]
    });
    return; 
};

exports.trataPost = (req , res) => {
    res.send (req.body);
    return;
};