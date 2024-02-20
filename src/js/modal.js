// abrir modal
// - pegar todos os elementos projetos
// - add um evento em cada

// fechar modal

//            console.log(item.children)

const projetos = document.querySelectorAll(".icons-projetos")
const modal = document.querySelector(".modal")
const fecharModal = document.querySelector(".fechar-modal")

projetos.forEach((item, i) =>{
    item.addEventListener('click' , function(){
        modal.classList.add("aberto")
        if(item.id == "proj1"){
            modal.children[1].innerHTML = "<img src='./src/imgs/proj1.png'>"
        }
        else if(item.id == "proj2"){
            modal.children[1].innerHTML = "<img src='./src/imgs/proj2.png'>"
        }
        else if(item.id == "proj3"){
            modal.children[1].innerHTML = "<img src='./src/imgs/proj3.png'>"
        }
        else if(item.id == "proj4"){
            modal.children[1].innerHTML = "<img src='./src/imgs/proj4.png'>"
        }
        else if(item.id == "proj5"){
            modal.children[1].innerHTML = "<img src='./src/imgs/proj5.png'>"
        }
    })

    fecharModal.addEventListener('click' , function(){
        modal.classList.remove("aberto")
    })

})

