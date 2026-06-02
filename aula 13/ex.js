function executarDuasVezes(funcao) {
    funcao();
    funcao();
}

function brasil() {
    console.log("Brasil é o melhor país do mundo!");
}

executarDuasVezes(brasil);

function criarSaudacao(saudacao) {
    return function(nome){
        console.log(`${saudacao}, ${nome}!`);
    }
}

const dizerOi = criarSaudacao("Oi");
dizerOi("Ana");

function calcular(a, b, operacao) {
    return operacao(a, b);
}

function multiplicar(x, y) {
    return x * y;
}

console.log(calcular(5, 3, multiplicar));

function compose(f,g){
    return function(x){
        return f(g(x));
    }
}

function dobrar(x){
    return x * 2;
}

function somar3(x){
    return x + 3;
}

const dobrarEAdicionar3 = compose(somar3, dobrar);
console.log(dobrarEAdicionar3(4));