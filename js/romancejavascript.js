document.getElementById('barra-menu').onclick = ()=>{
    document.getElementById('menu').style.display= 'flex';
}
document.getElementById('x').onclick = ()=>{
    document.getElementById('menu').style.display= 'none';
}

let texto = document.querySelector('.apresentacao-texto');
let genero = document.querySelectorAll('.livrosRomance');
let conteudo ={
    
    orgulhoePreconceito:
                    `<div class="imgRomance">
                        <img src="/img/orgulhoePreconceito-jane.png" alt="">

                    </div>
                    <div class="infRomance">
                        <h1>Orgulho e Preconceito</h1>
                        <h3>Jane Austen</h3>
                        <a href="http://www.dominiopublico.gov.br/download/texto/bk000143.pdf" target="_blank"> <button>Ler</button> </a>

                    </div>`,

    domQuixote: `
                    <div class="imgRomance">
                        <img src="/img/domQuixote.png" alt="">

                    </div>
                    <div class="infRomance">
                        <h1>Dom Quixote de La Mancha</h1>
                        <h3>Miguel de Cervantes</h3>
                        <a href="http://www.dominiopublico.gov.br/download/texto/gu000031.pdf" target="_blank"> <button>Ler</button> </a>

                    </div>
                `,
    osMiseraveis:`
                    <div class="imgRomance">
                        <img src="/img/osMiseraveis.png" alt="">

                    </div>
                    <div class="infRomance">
                        <h1>Os Miseraveis</h1>
                        <h3>Victor Hugo</h3>
                        <a href="http://www.dominiopublico.gov.br/download/texto/ph000284.pdf" target="_blank"> <button>Ler</button> </a>

                    </div>
                `,
    
};                

genero.forEach(elemento=>{
    elemento.addEventListener('click', ()=>{
        let conteudoselect = elemento.getAttribute('data-romance');
        
        texto.innerHTML = conteudo[conteudoselect];


    })
});