//Expressões Regulares

var exp = '(15) 2993-4231';

var regExp = /^\([0-9]{2}\) [0-9]{4,5}-?[0-9]{4}$/;

//  '/' e '/' conteudo da expressão regular
// '\' para utilizar algum caracter especial, para que seja literal na expressão
//  ^ indica que deve começar com a expressão
//  $ indica que deve terminar com a expressão
// [abc] o caracter deve conter a ou b ou c
// [a-z] o caracter deve conter de a até z
// {n} indica que o caracter anterior ocorrerá n vezes
// {n, x} indica de n até x ocorrencias do caracter anterior
// ? indica que o caracater pode exister ou não

//retorna os detalhes, como expressão, indice e input
//console.log(regExp.exec(exp));

//retorna true or false
console.log(regExp.test(exp));
