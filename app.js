const ciudad=document.getElementById('ciudad');
const pais=document.getElementById('pais');
const enviar=document.getElementById('enviar');
const imprimir=document.querySelector('.imprimir');
enviar.addEventListener('click',e=>{
    e.preventDefault();
    if(ciudad.value =="" || pais.value==""){
        error('Datos vacios');
        return;
    }
    console.log(ciudad.value)
    apia(ciudad.value,pais.value);

})

function error(mensaje){
    
    const hol=document.querySelectorAll('.tempe');
    if(hol.length==0){
        imprimir.classList.add('alert', 'alert-danger','tempe');
imprimir.setAttribute('role','alert');
imprimir.innerHTML=`<strong>${mensaje}</strong>`;          

    setTimeout(()=>{imprimir.innerHTML="",console.log(imprimir.classList.value="col-4")},5000)}     
}


function apia(ciudad,pais){
const key=`430fe26998dfb30d155f549706857a18
`;
const url=`http://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${key}`
console.log(url)
fetch(url).then(resolve=>resolve.json()).
then(man=>{
    const{cod}=man;
    console.log(man)
if(cod==404){
    error('ciudad no valida');
    return;
}
if(cod==200){
    const{main:{temp,temp_max,temp_min}}=man;
 temperatura(temp,temp_max,temp_min);   
}
});
}

function temperatura(temperatura,minima,maxima){
    const estable=Math.trunc(temperatura-273.15),
          mini=Math.trunc(minima-273.15),
          maxi=Math.trunc(maxima-273.15);
       const hol=document.querySelectorAll('.tempe');
       console.log(hol)
    if(hol.length==0){
         imprimir.classList.add('alert', 'alert-success','tempe');
imprimir.setAttribute('role','alert');
imprimir.innerHTML=`<strong><p>Actual:  ${estable}</p><p>Minima:   ${mini}&nbsp</p><p>Maxima:   ${maxi}</p></strong>`          

     setTimeout(()=>{imprimir.innerHTML="",console.log(imprimir.classList.value="col-4")},5000)}     
}