
function verificar(){
    usuario = "LilyAlmaraz";
    contra = "Lili123";

    var formulario = document.forms['formulario'];
    var usuario1 = formulario['usuario'].value;
    var contra1 = formulario['contra'].value;

    console.log(usuario);
    console.log(usuario1);
    console.log(contra);
    console.log(contra1);

    if(usuario == usuario1 && contra == contra1){
        alert("Datos correctos");
    }else{
        alert("El usuario o contraseña no coinciden");
    }
}

