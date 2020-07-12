 function pdf_gracco(){
    var tabela1 = document.querySelector("#tabela_xgracco").innerHTML;
    var cliente = document.querySelector("#nome_cliente").value;
    var crm = document.querySelector("#cod_crm").value;
    var comercial = document.querySelector("#responsavel").value;
    var nome_cli = "Cliente:";
    var cod_crm = "Código CRM:";
   var janela = window.open('','','width=800, height=800');
       janela.document.write('<html><head>');
       janela.document.write('<link rel="stylesheet" href="css/styles_comercial.css">');
       janela.document.write('<title>Quadro XGracco</title></head>');
       janela.document.write('<body>');
       janela.document.write(nome_cli + " " +  cliente + " ",cod_crm + " " + crm + " ",comercial);
       janela.document.write(tabela1);
       janela.document.write('</body></html>');
       janela.document.close();
       janela.print();
}

function calcular_xgracco(){
    var margem = 0.8;
    var vlr_inception = 640;
    var vlr_instalacao = 460;
    var vlr_parametrizacoes = 800;
    var vlr_treinamentos = 480;
    var impostos = 0.09;
    document.querySelector("#qtde_implantacao").innerHTML = 1;
    var preco_inception =  (vlr_inception/(1-margem)/(1-impostos));
    var preco_instalacao = (vlr_instalacao/(1-margem)/(1-impostos));
    var preco_parametrizacao = (vlr_parametrizacoes/(1-margem)/(1-impostos));
    var preco_treinamento = (vlr_treinamentos/(1-margem)/(1-impostos));
    console.log(preco_inception);
    console.log(preco_instalacao);
    console.log(preco_parametrizacao);
    console.log(preco_treinamento);
    console.log(preco_treinamento+preco_inception+preco_parametrizacao+preco_instalacao);

    if(customCheck1.checked == true){
        // document.querySelector("#total_setup").innerHTML =(preco_inception + preco_instalacao + preco_parametrizacao + preco_treinamento).toFixed(0);
        document.querySelector("#preco_unit_implantacao").innerHTML =(preco_inception + preco_instalacao + preco_parametrizacao + preco_treinamento).toFixed(0);
        document.querySelector("#preco_total_implantacao").innerHTML =(preco_inception + preco_instalacao + preco_parametrizacao + preco_treinamento).toFixed(0);
     }else {
      // document.querySelector("#total_setup").innerHTML =(preco_instalacao + preco_parametrizacao + preco_treinamento).toFixed(0);
      document.querySelector("#preco_unit_implantacao").innerHTML =(preco_instalacao + preco_parametrizacao + preco_treinamento).toFixed(0);
      document.querySelector("#preco_total_implantacao").innerHTML =(preco_instalacao + preco_parametrizacao + preco_treinamento).toFixed(0);
     }
}


function calc_xgracco(){
    var media_transacoes_gracco = 881;
    var custo_total_gracco = 43649.52;
    var qtde_usuarios = document.querySelector("#qtde_usu").value;
    var impostos = 0.09;
    var margem = 0.8
    var custo_unit = (custo_total_gracco/(qtde_usuarios+++media_transacoes_gracco));
    document.querySelector("#qtde_gracco_usu").innerHTML = qtde_usuarios;
    if (qtde_usuarios < 10){
        swal  ("Atenção", "A quantidade de usuários informada é menor que o mínimo solicitado. O cálculo foi feito com o quantidade mínima de 10 usuários.", "info");
        qtde_usuarios=10;
        document.querySelector("#qtde_gracco_usu").innerHTML = 10;
        document.querySelector("#preco_unit_gracco_usu").innerHTML = 270;
        document.querySelector("#preco_total_gracco_usu").innerHTML = (10*270).toFixed(0);
        // document.querySelector("#total_recorrente").innerHTML = (10*270).toFixed(0);
        }else{
            document.querySelector("#qtde_gracco_usu").innerHTML = qtde_usuarios-1;
            document.querySelector("#preco_unit_gracco_usu").innerHTML = (custo_unit/(1-margem)/(1-impostos)+0.05).toFixed(0);
            var preco_unit =  document.querySelector("#preco_unit_gracco_usu").innerHTML = (custo_unit/(1-margem)/(1-impostos)+0.05).toFixed(0);
            document.querySelector("#preco_total_gracco_usu").innerHTML = ((qtde_usuarios-1)*preco_unit).toFixed(0);
            document.querySelector("#total_recorrente").innerHTML = ((qtde_usuarios-1)*preco_unit).toFixed(0);
            }   
   
}

var i = 0;
function move() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("myBar");
    var width = 10;
    var id = setInterval(frame, 25);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
      }else {
        width++;
        elem.style.width = width + "%";
        elem.innerHTML = width + "%";

        elem.style.width = width + "%";
        elem.innerHTML = width + "%";
      }
    }
  }
}

function mostrar_tabela() {
    document.getElementById("tabela_xgracco").style.display = "block";
}
function ocultar() {
    document.getElementById("tabela_xgracco").style.display = "none";
}
// document.getElementById("tabela_xgracco").addEventListener("mouseover", showElement, false);
// document.getElementById("tabela_xgracco").addEventListener("mouseout", hideElement, false);



function mostrar_barra() {
    document.getElementById("myBar").style.display = "block";
}
function ocultar_barra() {
  swal("Sucesso!", "Solução XGracco precificada com sucesso", "success");
    document.getElementById("myBar").style.display = "none";
}
// document.getElementById("myBar").addEventListener("mouseover", showElement, false);
// document.getElementById("myBar").addEventListener("mouseout", hideElement, false);


function mostrar_setup_recorrente() {
    // document.getElementById("setup").style.display = "block";
}
function ocultar_btn() {
    document.getElementById("setup").style.display = "none";
}
// document.getElementById("setup").addEventListener("mouseover", showElement, false);
// document.getElementById("setup").addEventListener("mouseout", hideElement, false);


function mostrar_btn_imprimir_gracco() {
  document.getElementById("btn_imprimir_gracco").style.display = "block";
}
function ocultar_btn() {
  document.getElementById("btn_imprimir_gracco").style.display = "none";
}
// document.getElementById("btn_imprimir_gracco").addEventListener("mouseover", showElement, false);
// document.getElementById("btn_imprimir_gracco").addEventListener("mouseout", hideElement, false);

function mostrar_obs() {
  document.getElementById("obs").style.display = "block";
}



function funcoes(){
    var tmp1 = setTimeout(move,500);
    var tmp2 = setTimeout(mostrar_barra,500);
    var tmp6= setTimeout(mostrar_setup_recorrente,1000);
    var tmp7 = setTimeout(mostrar_btn_imprimir_gracco,3000);
    var tmp8 = setTimeout(mostrar_obs,3500);
    var tmp5 = setTimeout(mostrar_tabela, 3000);
    var tmp3 = setTimeout(calc_xgracco,2500);
    var tmp4 = setTimeout(calcular_xgracco,2000);
    var tem5 = setTimeout(ocultar_barra,4500); 
}