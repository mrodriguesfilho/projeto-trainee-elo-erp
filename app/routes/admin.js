module.exports = function(application) {

    // Pelo Modelo MVC as rotas somente apontam para seus respectivos controllers.
    // Portanto não existem regras de negócio aqui

    application.get('/cadastrar', function (req, res) {
      	application.app.controllers.admin.cadastrar(application, req, res);
    });
    
    application.post('/cadastrar/salvar', function (req, res) {
      	application.app.controllers.admin.cadastrar_salvar(application, req, res);
    });

    application.get('/cadastrado', function (req, res) {
     	application.app.controllers.admin.cadastrado(application, req, res);
    });

}