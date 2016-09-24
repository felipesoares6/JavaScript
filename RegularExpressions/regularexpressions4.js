//Expressões Regulares 4

var telefone = "<table><tr><td>(80) 999778899</td><td>(90) 99897-8877</td><td>(70) 98767-9999</td></tr></table>";

// retornará todos os telefones
var regExp4 = /\(\d{2}\)\s\d{4,5}-?\d{4}/g;

// modificador 'g' fará o match ser global (pegando todos os telefones)
// modificador 'i' match com case-INsensitive
// modificador 'm' match multiline

console.log(telefone.match(regExp4));
