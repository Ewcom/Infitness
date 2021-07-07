console.log('zonas js cargado c')


const btnZona1 = document.getElementById('btn-zona1')
const btnZona2 = document.getElementById('btn-zona2')
const btnZona3 = document.getElementById('btn-zona3')


const zona1 = document.getElementById('div-zona1')
const zona2 = document.getElementById('div-zona2')
const zona3 = document.getElementById('div-zona3')


//default loading in option 1
zona1.style.display = "block"
btnZona1.classList.add("active")
zona2.classList.add("hidden")
zona3.classList.add("hidden")




btnZona1.onclick = () =>{
    zona1.classList.remove("hidden")
    zona2.classList.add("hidden")
    zona3.classList.add("hidden")
    
    btnZona1.classList.add("active")
    btnZona2.classList.remove("active")
    btnZona3.classList.remove("active")


 
}

btnZona2.onclick = () =>{
    
    zona1.classList.add("hidden")
    zona2.classList.remove("hidden")
    zona3.classList.add("hidden")
   
    btnZona1.classList.remove("active")
    btnZona2.classList.add("active")
    btnZona3.classList.remove("active")


}

btnZona3.onclick = () =>{

    zona1.classList.add("hidden")
    zona2.classList.add("hidden")
    zona3.classList.remove("hidden")

    btnZona1.classList.remove("active")
    btnZona2.classList.remove("active")
    btnZona3.classList.add("active")

  
}

