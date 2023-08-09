
function mostrar_ocultar(id) {
    
  let valor=id;
  let div = document.getElementById(valor);
  
  if(div.hidden){
    div.hidden=false;
    console.log('mostrar');
  }else{
    div.hidden=true;
  }
}