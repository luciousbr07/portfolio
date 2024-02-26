// abrir modal
// - pegar todos os elementos projetos
// - add um evento em cada

// fechar modal

//            console.log(item.children)

const projetos = document.querySelectorAll(".icons-projetos")
const modal = document.querySelector(".modal")
const fecharModal = document.querySelector(".fechar-modal")
const body = document.querySelector("body")
const titulo = document.querySelector(".titulo-descricao")
const paragrafoDescricao = document.querySelector(".paragrafo-descricao")
const tecnologiasDescricao = document.querySelector(".tecnologias-descricao")
const repositorio = document.querySelector(".repositorio")

projetos.forEach((item, i) =>{
    item.addEventListener('click' , function(){
        modal.classList.add("aberto")
        body.classList.add('fixed')
        if(item.id == "proj1"){
            modal.children[1].innerHTML = "<img src='./src/imgs/proj1.png'>"
            titulo.innerHTML = "TCC - RecicleJá"
            paragrafoDescricao.innerHTML = "Tcc realizado para conclusao de curso técnico em Informatica para Internet na Etec. Projeto voltado para o auxílio na logística dos catadores de materiais recicláveis, no modelo de delivery. É um site onde o morador tem acesso a dicas de separacao de materiais reciclaveis e principalmente o o pedido de coleta em sua residencia, indicando os materiais que possui, horário de disponibilidade e endereco salvo em seu cadastro. Na área do catador ele vai receber o pedido, com todas as informacoes necessárias, podendo aceitar ou recusar. No momento em que é aceito a coleta passa a ser dele e o morador já é avisado que a coleta foi aceita. Ao realizar a coleta o catador marca como entregue e é fechada a coleta, sendo o morador novamente avisado. Projeto totalmente automatizado e ligado ao banco de dados, desde a área de Administrador, os banner e dicas de separacao e o cadastro de casa usuário, podendo ser categorizado como cliente ou catador."
            tecnologiasDescricao.innerHTML = "HTML, CSS, PHP, Javascript,  Bootstrap, MySQL, Padrão MVC (orientado a objetos)"
            repositorio.href = "https://github.com/luciousbr07/tcc-recicleja"
        }
        else if(item.id == "proj2"){
            modal.children[1].innerHTML = "<img src='./src/imgs/proj2.png'>"
            titulo.innerHTML = "Mario o Filme - Page"
            paragrafoDescricao.innerHTML = "lorem"
            tecnologiasDescricao.innerHTML = "HTML, CSS, Javascript"
            repositorio.href = "https://github.com/luciousbr07/mario-projeto"
        }
        else if(item.id == "proj3"){
            modal.children[1].innerHTML = "<img src='./src/imgs/proj3.png'>"
            titulo.innerHTML = "Quest - Market Page"
        }
        else if(item.id == "proj4"){
            modal.children[1].innerHTML = "<img src='./src/imgs/proj4.png'>"
            titulo.innerHTML = "Quest - Validacao de formulário"
        }
        else if(item.id == "proj5"){
            modal.children[1].innerHTML = "<img src='./src/imgs/proj5.png'>"
            titulo.innerHTML = "Acordeon FAQ"
        }
    })

    fecharModal.addEventListener('click' , function(){
        modal.classList.remove("aberto")
        body.classList.remove('fixed')
    })

})

