module.exports.cadastrar = function(application, req, res){
    res.render("admin/cadastrar");
}

/* Aqui utilizamos mais uma vez o modulo body-parser para encaspular o formulário HTML extraido pelo front com a função
req.body. Fazemos a chamada do banco de dados no models com a respectiva função para interagir com o banco */

module.exports.cadastrar_salvar = function(application, req, res){
    var pessoa = req.body;

    var connection = application.config.dbConnection();
    var pessoasModel = new application.app.models.pessoasModel(connection);

    pessoasModel.salvarPessoa(pessoa, function(error, result){
        res.redirect('/cadastrado');
    });
}


module.exports.cadastrado = function(application, req, res){
    res.render("admin/cadastrado");
}