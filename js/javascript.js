

document.getElementById('barra-menu').onclick = ()=>{
    var menu = document.getElementById('menu').style.display= 'flex';
}
document.getElementById('x').onclick = ()=>{
    var menu = document.getElementById('menu').style.display= 'none';
}

let texto = document.querySelector('.apresentacao-texto');
let genero = document.querySelectorAll('.genero-selecionar');
let conteudo ={
    
    romance:
                    `<h2>Romance</h2>
                    <blockquote>"O amor é uma flor delicada, mas é preciso ter coragem de ir colhê-la à beira de um precipício."</blockquote>
                    <p>– Stendhal</p>
                    <a href="/romance.html"><button>Ver mais romances</button></a>`,

    ficcao: `
                    <h2>Ficção Científica</h2>
                    <blockquote>"A ciência nada mais é do que uma perversão, a menos que tenha como objetivo final o bem da humanidade."</blockquote>
                    <p>– Nikola Tesla</p>
                    <a href="/ficcao.html"><button>Ver mais ficção científica</button></a>
                `,
    aventura: `
                    <h2>Aventura</h2>
                    <blockquote>"A aventura pode machucar você, mas a monotonia vai matar você."</blockquote>
                    <p>– Autor desconhecido</p>
                    <a href="/aventura.html"><button>Ver mais aventuras</button></a>
                `,
    classica: 
                    `<h2>Literatura Clássica</h2>
                    <blockquote>"Clássico é um livro que nunca terminou de dizer o que tem a dizer."</blockquote>
                    <p>– Ítalo Calvino</p>
                    <a href="/classica.html"><button>Explorar clássicos</button></a>`,
    fantasia: `
        <h2>Fantasia</h2>
        <blockquote>"Não é a força do corpo, mas a força do espírito que faz grandes feitos."</blockquote>
        <p>– J.R.R. Tolkien</p>
        <a href="/fantasia.html"><button>Explorar mundos fantásticos</button></a>
    `,
    poesia: `
        <h2>Poesia</h2>
        <blockquote>"A poesia é o eco da melodia do universo no coração dos humanos."</blockquote>
        <p>– Rabindranath Tagore</p>
        <a href="/poesia.html"><button>Ler mais poesias</button></a>
    `,
    
    infantil: `
        <h2>Literatura Infantil</h2>
        <blockquote>"As histórias para crianças devem ser escritas com uma pena mergulhada no arco-íris e polvilhadas com pó de estrelas."</blockquote>
        <p>– Autor desconhecido</p>
        <a href="/infantil.html"><button>Conhecer mais histórias</button></a>
    `,
    filosofia: `
        <h2>Filosofia</h2>
        <blockquote>"A vida não examinada não vale a pena ser vivida."</blockquote>
        <p>– Sócrates</p>
        <a href="/filosofia.html"><button>Refletir mais sobre filosofia</button></a>
    `,
    historia: `
        <h2>História</h2>
        <blockquote>"Aqueles que não conseguem lembrar o passado estão condenados a repeti-lo."</blockquote>
        <p>– George Santayana</p>
        <a href="/historia.html"><button>Descubra mais sobre história</button></a>
    `,
    ciencia: `
        <h2>Ciência</h2>
        <blockquote>"A ciência é a poesia da realidade."</blockquote>
        <p>– Richard Dawkins</p>
        <a href="/ciencia.html"><button>Explorar mais sobre ciência</button></a>
    `,
    religiao: `
        <h2>Religião</h2>
        <blockquote>"A verdadeira religião é real viver; viver com toda a alma, com toda a bondade e com toda a justiça."</blockquote>
        <p>– Albert Einstein</p>
        <a href="/religiao.html"><button>Aprender mais sobre religião</button></a>
    `,
    misterio: `
        <h2>Mistério</h2>
        <blockquote>"A vida é cheia de mistérios, e esse é o seu maior encanto."</blockquote>
        <p>– Autor desconhecido</p>
        <a href="/misterio.html"><button>Desvendar mais mistérios</button></a>
    `
};                

genero.forEach(elemento=>{
    elemento.addEventListener('click', ()=>{
        let conteudoselect = elemento.getAttribute('data-genero');
        
        texto.innerHTML = conteudo[conteudoselect];


    })
});