exports.paginaInicial = (req, res) => {
    res.render('index', {
        titulo: 'Home'
    });
};