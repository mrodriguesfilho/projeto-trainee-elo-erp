module.exports.pesquisa = function(application, req, res){
    res.render("admin/pesquisar");
}

module.exports.pesquisando = function(application, req, res){
    var pessoa = req.body;

    var connection = application.config.dbConnection();
    var pessoasModel = new application.app.models.pessoasModel(connection);
    
    pessoasModel.pesquisarPessoa(pessoa, function(error, result){
        
        let arrayObj = result;

        if (arrayObj && arrayObj.length > 0) {
                res.render('admin/pesquisar_encontrado', { pessoas : result });

        } else {
            res.render('admin/pesquisar_naoencontrado');
        }

    });
}

module.exports.deletando = function(application, req, res){
    var pessoa = req.body;
    console.log(pessoa);

    var connection = application.config.dbConnection();
    var pessoasModel = new application.app.models.pessoasModel(connection);

    pessoasModel.deletarPessoa(pessoa, function(error, result){
        res.redirect("/deletado");
    });
}

module.exports.deletado = function(application, req, res){
    res.render("admin/deletado");
}