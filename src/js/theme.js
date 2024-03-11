let themeIcon = document.getElementById("theme")
let nav = document.getElementsByTagName("nav")
let codigo = document.querySelector(".codigo")
let info = document.querySelector(".info-adicionais")
let curriculo = document.querySelectorAll(".curriculo")
let habilidades = document.querySelector(".habilidades")
let contato = document.querySelector(".icons-contato")
let areaSobre = document.querySelector(".area-sobre")
let git = document.getElementById("git")
let projetosMensagem = document.querySelector(".projetos")

let elementos = [
    body,
    nav[0],
    codigo, 
    info,
    curriculo[0], curriculo[1],
    habilidades,
    contato,
    areaSobre,
    git,
    projetosMensagem,
    modal
]



themeIcon.addEventListener('click' , ()=>{
    if(themeIcon.classList == "dark"){
        themeIcon.classList.replace("dark", "white")
            elementos.forEach((item) =>{
                item.classList.add("alter")
            })
       
    }
    else{
        themeIcon.classList.replace("white", "dark")
            elementos.forEach((item) =>{
                item.classList.remove("alter")
            })
        
    }
})