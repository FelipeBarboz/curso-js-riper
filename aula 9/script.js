document.querySelector("button").addEventListener("click", function(trocarTexto){
    document.getElementById("paragrafo").textContent = "Novo texto";
})

document.querySelector("input").addEventListener("input",function(capturarTexto){
    document.getElementById("listener").textContent = capturarTexto.target.value;
})

document.querySelector("img").addEventListener("mouseover", function(trocarBorda){
    document.getElementById("trollface").style.borderColor = "green";
})
