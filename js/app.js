window.addEventListener('load', () => {
    // var teste = document.querySelector("#teste");
    // var diferencial = document.querySelector("#diferencial1");

    // teste.addEventListener('click', () => {
    //     diferencial.classList.toggle("expandido");
    // });

    var flipCards = document.querySelectorAll(".flip-card");
    
    //Percorre cada elemento do NodeLIst
    flipCards.forEach(function(node){

        node.addEventListener('click',  () => {
            let idExpansao = node.getAttribute("data-expande");
            let elementoExpandido = document.getElementById(idExpansao);

            //Esconde todo mundo removendo a classe expandido
             Array.from(elementoExpandido.parentElement.children).forEach((o) => {
                o.classList.remove("expandido");
             });

            elementoExpandido.classList.add('expandido');

        });
    });
});