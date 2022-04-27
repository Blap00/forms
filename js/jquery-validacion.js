const formulario= document.getElementById('formulario');
const inputs= document.querySelectorAll('#formulario input');

const expression={
    nombre: /^[a-zA-Z]{4,12}$/,
    apellido: /^[a-zA-Z]{4,12}$/,
    edad: /^[1-9]{2,3}$/,
    correoele:/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9._]+\.[a-zA-Z]+$/,
    rut: !/^[0-9]+[-|‐]{1}[0-9kK]{1}$/
}

const validarFormulario=(e)=>{
    switch(e.target.name){
        case "nombre":
            if(expression.nombre.test(e.target.value)){
                document.getElementById("grupo__nombre").classList.remove('formulario__grupo-incorrecto');
                document.getElementById("grupo__nombre").classList.add('formulario__grupo-correcto');
                document.querySelector('#grupo__nombre i').classList.remove('fa-solid fa-circle-xmark');
                document.querySelector('#grupo__nombre i').classList.add("fa-solid fa-check");
                document.querySelector('#grupo__nombre .formulario__input-error').classList.remove('formulario__input-error-activo')
            } else{
                document.getElementById("grupo__nombre").classList.add('formulario__grupo-incorrecto');
                document.getElementById("grupo__nombre").classList.remove('formulario__grupo-correcto');
                document.querySelector('#grupo__nombre i').classList.remove("fa-solid fa-check");
                document.querySelector('#grupo__nombre i').classList.add('fa-solid fa-circle-xmark');
                document.querySelector('#grupo__nombre .formulario__input-error').classList.add('formulario__input-error-activo')
            }
        break;
        case "apellido":
            if(expression.apellido.test(e.target.value)){
                document.getElementById("grupo__apellido").classList.remove('formulario__grupo-incorrecto')
                document.getElementById("grupo__apellido").classList.add('formulario__grupo-correcto')
            } else{
                document.getElementById("grupo__apellido").classList.add('formulario__grupo-incorrecto')
            }
        break;
        case "edad":
            var ed=18;
            if(expression.edad.test(e.target.value)<18){
                document.getElementById("grupo__edad").classList.remove('formulario__grupo-incorrecto')
                document.getElementById("grupo__edad").classList.add('formulario__grupo-correcto')
            } else{
                document.getElementById("grupo__edad").classList.add('formulario__grupo-incorrecto')
            }
        break;
        case "correoele":
            if(expression.correoele.test(e.target.value)){
                document.getElementById("grupo__correoele").classList.remove('formulario__grupo-incorrecto')
                document.getElementById("grupo__correoele").classList.add('formulario__grupo-correcto')
            } else{
                document.getElementById("grupo__correoele").classList.add('formulario__grupo-incorrecto')
            }
        break;
        case "Rut":
            if(expression.rut.test(e.target.value)){
                document.getElementById("grupo__rut").classList.remove('formulario__grupo-incorrecto')
                document.getElementById("grupo__rut").classList.add('formulario__grupo-correcto')
            } else{
                document.getElementById("grupo__rut").classList.add('formulario__grupo-incorrecto')
                document.getElementById("grupo__rut").classList.remove('formulario__grupo-correcto')
            }
        break;
    }
}
inputs.forEach((input)=>{
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
})

var Fn = {
    // Valida el rut con su cadena completa "XXXXXXXX-X"
    validaRut : function (rutCompleto) {
      rutCompleto = rutCompleto.replace("‐","-");
      if (!/^[0-9]+[-|‐]{1}[0-9kK]{1}$/.test( rutCompleto ))
        return false;
      var tmp   = rutCompleto.split('-');
      var digv  = tmp[1]; 
      var rut   = tmp[0];
      if ( digv == 'K' ) digv = 'k' ;
      
      return (Fn.dv(rut) == digv );
    },
    dv : function(T){
      var M=0,S=1;
      for(;T;T=Math.floor(T/10))
        S=(S+T%10*(9-M++%6))%11;
      return S?S-1:'k';
    }
  }
  
  
  $("#btnvalida").click(function(){
    if (Fn.validaRut( $("#txt_rut").val() )){
      $("#msgerror").html("El rut ingresado es válido");
    } else {
      $("#msgerror").html("El Rut no es válido");
    }
  });
document.addEventListener("DOMContentLoaded", function() {
document.getElementById("formulario").addEventListener('submit', validarFormulario); 
});
function formenvia(evento){
    evento.preventDefault();
    var nombre =document.getElementById("nombre").value;
    
}
