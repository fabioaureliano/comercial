

function login(){
    var nome = document.getElementById('username').value;
    var done = 0;
    
    if(nome != ""){
        swal("Logado!", "Login realizado com sucesso", "success");
        setTimeout(function(){ window.location.href = "menu.html"}, 2000); 
    }else{
        swal("Ops, algo deu errado!", "Insira os dados de login corretamente", "error");
    }
}


