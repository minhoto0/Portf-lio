//Define uma nova classe chamada 'Aluno'.
class Aluno{
    //Define a propriedade nome com um valor inicial de uma string vazia.
    nome = "";
    //Define a propriedade idade com um valor inicial de 35
    idade = 35;
    // Define a propriedade cursos com um valor inicial de um array vazio.
    cursos = [];
    //Define a propriedade competências com um valor inicial de um array vazio.
    competencias = [];
    //É um método que retorna o valor da propriedade nome da instância(OBJETO).
    get_nome(){
        return this.nome;
    }
    //É um método que retorna o valor da propriedade idade da instância(OBJETO).
    get_idade(){
        return this.idade
    }
 }
 
 //Cria uma nova instância da classe Aluno e atribui essa instância à variável aluno.
 var aluno = new Aluno;
 