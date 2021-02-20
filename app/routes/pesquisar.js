module.exports = function(application) {
    
    application.get('/pesquisar', function(req, res){
        application.app.controllers.pesquisar.pesquisa(application, req, res);
    });

    application.post('/pesquisar/checando', function (req, res) {
        application.app.controllers.pesquisar.pesquisando(application,req, res);
    });

    application.get('/pesquisar/encontrado', function (req, res) {
        application.app.controllers.pesquisar.encontrado(application, req, res);
    });  

    application.get('/pesquisar/naoencontrado', function (req, res) {
        application.app.controllers.pesquisar.naoencontrado(application, req, res);
    }); 

    application.post('/pesquisar/deletar', function (req, res) {
        application.app.controllers.pesquisar.deletando(application, req, res);
   });

   application.get('/deletado', function (req, res) {
        application.app.controllers.pesquisar.deletado(application, req, res);
});

}