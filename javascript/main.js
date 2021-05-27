
/* 
let celdas = document.querySelectorAll("td");

celdas.forEach(function(td){
    td.addEventListener('click',function(){
        console.log(this);
    })
});
 */

//Obtenr loe elementos de la clase .close
const links =document.querySelectorAll('.close');

//recorrerlos
links.forEach(function(link){
    link.addEventListener("click",function(evt){
        evt.preventDefault();
        let content = document.querySelector('.content');

        //quitar las animaciones 
        
        content.classList.remove("animate__fadeInDown");
        content.classList.remove("animate__animated");
        //agrefar clases 
        content.classList.add("animate__fadeOutUp");
        content.classList.add("animate__animated");

        setTimeout(function(){
            location.href="/Boletines";
        },600);

        location.href="/";
        return false;
    });
});





