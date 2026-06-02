function externa() {
 let mensagem = "Olá do escopo externo";
 function interna() {
 console.log(mensagem);
 }
 interna();
}

function contador() {
 let valor = 0;
 return function() {
 valor++;
 return valor;
 };
}
const incrementar = contador();
console.log(incrementar());
console.log(incrementar());

function saudacao() {
  return function(nome) {
    console.log("Olá, " + nome + "!");
  }
}

const dizerOla = saudacao();
dizerOla("Maria");
dizerOla("João");

function multiplicador(x) {
  return function(numero) {
    return numero * x;
  }
}

const vezes2 = multiplicador(2);
console.log(vezes2(5));

const vezes10 = multiplicador(10);
console.log(vezes10(3));