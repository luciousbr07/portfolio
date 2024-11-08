const projetos = document.querySelectorAll(".icons-projetos")
const modal = document.querySelector(".modal")
const fecharModal = document.querySelector(".fechar-modal")
const body = document.querySelector("body")
const titulo = document.querySelector(".titulo-descricao")
const paragrafoDescricao = document.querySelector(".paragrafo-descricao")
const tecnologiasDescricao = document.querySelector(".tecnologias-descricao")
const repositorio = document.querySelector(".repositorio")
let gitPages = document.querySelector(".git-pages")
let bkp = document.querySelector(".git-pages")

projetos.forEach((item, i) =>{
    item.addEventListener('click' , function(){
        modal.classList.add("aberto")
        //body.classList.add('fixed')
        if(item.id == "proj1"){
            modal.children[1].innerHTML = "<img src='./src/imgs/proj1.png'>"
            titulo.innerHTML = "TCC - RecicleJá"
            paragrafoDescricao.innerHTML = "Tcc realizado para conclusao de curso técnico em Informatica para Internet na Etec. Projeto voltado para o auxílio na logística dos catadores de materiais recicláveis, no modelo de delivery. É um site onde o morador tem acesso a dicas de separacao de materiais reciclaveis e principalmente o o pedido de coleta em sua residencia, indicando os materiais que possui, horário de disponibilidade e endereco salvo em seu cadastro. Na área do catador ele vai receber o pedido, com todas as informacoes necessárias, podendo aceitar ou recusar. No momento em que é aceito a coleta passa a ser dele e o morador já é avisado que a coleta foi aceita. Ao realizar a coleta o catador marca como entregue e é fechada a coleta, sendo o morador novamente avisado. Projeto totalmente automatizado e ligado ao banco de dados, desde a área de Administrador, os banner e dicas de separacao e o cadastro de casa usuário, podendo ser categorizado como cliente ou catador."
            tecnologiasDescricao.innerHTML = "HTML, CSS, PHP, Javascript,  Bootstrap, MySQL, Padrão MVC (orientado a objetos)"
            repositorio.href = "https://github.com/luciousbr07/tcc-recicleja"
            gitPages.href = "https://github.com/luciousbr07/tcc-recicleja"

        }
        else if(item.id == "proj2"){
            modal.children[1].innerHTML = "<img src='./src/imgs/proj2.png'>"
            titulo.innerHTML = "Mario o Filme - Page"
            paragrafoDescricao.innerHTML = "Projeto que me despertou a vontade de aprender mais sobre as tecnologias usadas no front-end. Fiz em acompanhamento com as lives do Dev em Dobro."
            tecnologiasDescricao.innerHTML = "HTML, CSS, Javascript"
            repositorio.href = "https://github.com/luciousbr07/mario-projeto"
            gitPages.href = "https://luciousbr07.github.io/mario-projeto/"
            
        }
        else if(item.id == "proj3"){
            modal.children[1].innerHTML = "<img src='./src/imgs/proj3.png'>"
            titulo.innerHTML = "Quest - Market Page"
            paragrafoDescricao.innerHTML = "Projeto realizado para treinar habilidades de Html e Css com responsividade."
            tecnologiasDescricao.innerHTML = "HTML e CSS"
            repositorio.href = "https://github.com/luciousbr07/questHtmlCss"
            gitPages.href = "https://luciousbr07.github.io/questHtmlCss/"
        }
        else if(item.id == "proj4"){
            modal.children[1].innerHTML = "<img src='./src/imgs/proj4.png'>"
            titulo.innerHTML = "Quest - Validacao de formulário"
            paragrafoDescricao.innerHTML = "Projeto realizado para treinar habilidades de Javascript, voltadas para validação de formulários, com o uso de eventos e funções. O que torna a compreensão do formulário mais simples, a fim de evitar erros e dificuldades."
            tecnologiasDescricao.innerHTML = "HTML, CSS, Javascript"
            repositorio.href = "https://github.com/luciousbr07/questHtmlCssJs"
            gitPages.href = "https://luciousbr07.github.io/questHtmlCssJs/"
        }
        else if(item.id == "proj5"){
            modal.children[1].innerHTML = "<img src='./src/imgs/proj5.png'>"
            titulo.innerHTML = "Acccordion FAQ"
            paragrafoDescricao.innerHTML = "Projeto realizado para treinar habilidades de Javascript."
        }
    })

    fecharModal.addEventListener('click' , function(){
        modal.classList.remove("aberto")
        //body.classList.remove('fixed')
    })

})

