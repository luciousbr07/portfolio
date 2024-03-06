let themeIcon = document.getElementById("theme")


themeIcon.addEventListener('click' , ()=>{
    if(themeIcon.classList == "dark"){
        themeIcon.classList.replace("dark", "white")
        body.classList.add("alter")
       
    }
    else{
        themeIcon.classList.replace("white", "dark")
        body.classList.remove("alter") 
      
    }
})