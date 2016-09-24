//Expressões Regulares 2

var exp = '(15) 2993-4231';

var regExp2 = /^\(\d{2}\)\s\d{4,5}-?\d{4}$/;

// '\d' conjunto de [0-9] '\D' negação
// '\s' espaço em branco '\S' negação
// '\w' conjunto de [a-zA-Z0-9] '\W' negação
// . qualquer caracter

console.log(regExp2.test(exp));
