function Pessoas(connection){
    this._connection = connection;
}

// No padrão MVC apenas os models que podem fazem interações com o banco de dados
// No padrão ODA as funções abaixo vem da Classe Pessoa, o que traz a segurança que não serão sobescritas ou 
// usadas multiplas funções, uma vez que são todas instanciadas ( Assim como as classes normais do java )


Pessoas.prototype.salvarPessoa = function(pessoa, callback){
    this._connection.query('insert into pessoas set ? ', pessoa, callback);
}

Pessoas.prototype.pesquisarPessoa = function(pessoa, callback){
    this._connection.query('select * from pessoas where ?', pessoa, callback);
}

Pessoas.prototype.deletarPessoa = function(pessoa, callback){
    
    this._connection.query('delete from pessoas where ?', pessoa, callback);
}

module.exports = function(){   
    return Pessoas;
}