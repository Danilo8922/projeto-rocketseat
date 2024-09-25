function toggleMode() {
    const html = document.documentElement   
    html.classList.toggle("ligth") 
    /*if(html.classList.contains("ligth")){
        html.classList.remove("ligth")
     }
    else{
        html.classList.add("ligth")
    }*/
    

    // pegar a tag img
    const img = document.querySelector("#profile img")
    // subistituir a imagem
    if(html.classList.contains("ligth")){
        // se tiver light mode, adicionar a imagem.light

        img.setAttribute("src", "img/Avatar-light.png" )

    } else{
        // se tiver sem ligth mode, manter a imagem normal

        img.setAttribute("src", "img/avatar-darck.png" )
    }

    // criando um novo alt
    const alt = document.querySelector("#profile img")

    if(html.classList.contains("ligth")){
        img.setAttribute("alt", "avatar no modo luz")
    }else{
        img.setAttribute("alt", "avatar no modo escuro")
    }
}