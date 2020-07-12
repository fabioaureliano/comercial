


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


function mostrar_barra() {
  document.getElementById("myBar").style.display = "block";
}
function ocultar_barra() {
swal("Sucesso!", "Solução XGracco precificada com sucesso", "success");
  document.getElementById("myBar").style.display = "none";
}
// document.getElementById("myBar").addEventListener("mouseover", showElement, false);
// document.getElementById("myBar").addEventListener("mouseout", hideElement, false);


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

function regiao_norte(){
if(customCheck_reg_norte.checked == true ||
  customCheck_brasil.checked == true){
    document.getElementById('sistemas_norte').textContent = 12;
  var acre = document.getElementById('shape_ac');
  acre.style.fill = '#5e80c4e7'
  document.getElementById('linha_ac').style.display = "table-row";

  var amazonas = document.getElementById('shape_am');
  amazonas.style.fill = '#5e80c4e7'
  document.getElementById('linha_am').style.display = "table-row";

  var roraima = document.getElementById('shape_rr');
  roraima.style.fill = '#5e80c4e7'
  document.getElementById('linha_rr').style.display = "table-row";

  var rondonia = document.getElementById('shape_ro');
  rondonia.style.fill = '#5e80c4e7'
  document.getElementById('linha_ro').style.display = "table-row";

  var amapa = document.getElementById('shape_ap');
  amapa.style.fill = '#5e80c4e7'
  document.getElementById('linha_ap').style.display = "table-row";

  var para = document.getElementById('shape_pa');
  para.style.fill = '#5e80c4e7'
  document.getElementById('linha_pa').style.display = "table-row";

}else{
  document.getElementById('sistemas_norte').textContent = 0;

  var acre = document.getElementById('shape_ac');
  acre.style.fill = '#D3D3D3'
  document.getElementById('linha_ac').style.display = "none";

  var amazonas = document.getElementById('shape_am');
  amazonas.style.fill = '#D3D3D3'
  document.getElementById('linha_am').style.display = "none";

  var roraima = document.getElementById('shape_rr');
  roraima.style.fill = '#D3D3D3'
  document.getElementById('linha_rr').style.display = "none";

  var rondonia = document.getElementById('shape_ro');
  rondonia.style.fill = '#D3D3D3'
  document.getElementById('linha_ro').style.display = "none";

  var amapa = document.getElementById('shape_ap');
  amapa.style.fill = '#D3D3D3'
  document.getElementById('linha_ap').style.display = "none";

  var para = document.getElementById('shape_pa');
  para.style.fill = '#D3D3D3'
  document.getElementById('linha_pa').style.display = "none";
}
}

  function regiao_nordeste(){
    if(customCheck_reg_nordeste.checked == true||
  customCheck_brasil.checked == true){
    document.getElementById('sistemas_nordeste').textContent = 42;

      var maranhao = document.getElementById('shape_ma');
      maranhao.style.fill = '#5e80c4e7'
      document.getElementById('linha_ma').style.display = "table-row";
    
      var piaui = document.getElementById('shape_pi');
      piaui.style.fill = '#5e80c4e7'
      document.getElementById('linha_pi').style.display = "table-row";
    
      var ceara = document.getElementById('shape_ce');
      ceara.style.fill = '#5e80c4e7'
      document.getElementById('linha_ce').style.display = "table-row";
    
      var rio_grande_do_norte = document.getElementById('shape_rn');
      var rio_grande_do_norte_circle = document.getElementById('shape_rn_circle');
      rio_grande_do_norte.style.fill = '#5e80c4e7'
      rio_grande_do_norte_circle.style.fill = '#5e80c4e7'
      document.getElementById('linha_rn').style.display = "table-row";
    
      var paraiba = document.getElementById('shape_pb');
      var paraiba_circle = document.getElementById('shape_pb_circle');
      paraiba.style.fill = '#5e80c4e7'
      paraiba_circle.style.fill = '#5e80c4e7'
      document.getElementById('linha_pb').style.display = "table-row";
    
      var pernambuco = document.getElementById('shape_pe');
      pernambuco.style.fill = '#5e80c4e7'
      document.getElementById('linha_pe').style.display = "table-row";
  
      var alagoas = document.getElementById('shape_al');
      var alagoas_circle = document.getElementById('shape_al_circle');
      alagoas.style.fill = '#5e80c4e7'
      alagoas_circle.style.fill = '#5e80c4e7'
      document.getElementById('linha_al').style.display = "table-row";
  
      var sergipe = document.getElementById('shape_se');
      var sergipe_circle = document.getElementById('shape_se_circle');
      sergipe.style.fill = '#5e80c4e7'
      sergipe_circle.style.fill = '#5e80c4e7'
      document.getElementById('linha_se').style.display = "table-row";
  
      var bahia = document.getElementById('shape_ba');
      bahia.style.fill = '#5e80c4e7'
      document.getElementById('linha_ba').style.display = "table-row";
    
    }else{
      document.getElementById('sistemas_nordeste').textContent = 0;
      var acre = document.getElementById('shape_ac');
      acre.style.fill = '#D3D3D3'
      document.getElementById('linha_ac').style.display = "none";
    
      var maranhao = document.getElementById('shape_ma');
      maranhao.style.fill = '#D3D3D3'
      document.getElementById('linha_ma').style.display = "none";
    
      var piaui = document.getElementById('shape_pi');
      piaui.style.fill = '#D3D3D3'
      document.getElementById('linha_pi').style.display = "none";
    
      var ceara = document.getElementById('shape_ce');
      ceara.style.fill = '#D3D3D3'
      document.getElementById('linha_ce').style.display = "none";
    
      var rio_grande_do_norte = document.getElementById('shape_rn');
      var rio_grande_do_norte_circle = document.getElementById('shape_rn_circle');
      rio_grande_do_norte.style.fill = '#D3D3D3'
      rio_grande_do_norte_circle.style.fill = '#D3D3D3'
      document.getElementById('linha_rn').style.display = "none";
    
      var paraiba = document.getElementById('shape_pb');
      var paraiba_circle = document.getElementById('shape_pb_circle');
      paraiba.style.fill = '#D3D3D3'
      paraiba_circle.style.fill = '#D3D3D3'
      document.getElementById('linha_pb').style.display = "none";
  
      var pernambuco = document.getElementById('shape_pe');
      pernambuco.style.fill = '#D3D3D3'
      document.getElementById('linha_pe').style.display = "none";
  
      var alagoas = document.getElementById('shape_al');
      var alagoas_circle = document.getElementById('shape_al_circle');
      alagoas.style.fill = '#D3D3D3'
      alagoas_circle.style.fill = '#D3D3D3'
      document.getElementById('linha_al').style.display = "none";
  
      var sergipe = document.getElementById('shape_se');
      var sergipe_circle = document.getElementById('shape_se_circle');
      sergipe.style.fill = '#D3D3D3'
      sergipe_circle.style.fill = '#D3D3D3'
      document.getElementById('linha_se').style.display = "none";
  
      var bahia = document.getElementById('shape_ba');
      bahia.style.fill = '#D3D3D3'
      document.getElementById('linha_ba').style.display = "none";
    }
  }


function regiao_sul(){
  if(customCheck_reg_sul.checked == true ||
    customCheck_brasil.checked == true){

      document.getElementById('sistemas_sul').textContent = 9;
    var santa_catarina = document.getElementById('shape_sc');
    santa_catarina.style.fill = '#5e80c4e7'
    document.getElementById('linha_sc').style.display = "table-row";

    var parana = document.getElementById('shape_pr');
    parana.style.fill = '#5e80c4e7'
    document.getElementById('linha_pr').style.display = "table-row";

    var rio_grande_do_sul = document.getElementById('shape_rs');
    rio_grande_do_sul.style.fill = '#5e80c4e7'
    document.getElementById('linha_rs').style.display = "table-row";
    
  }else{
    document.getElementById('sistemas_sul').textContent = 0;
    var santa_catarina = document.getElementById('shape_sc');
    santa_catarina.style.fill ='#D3D3D3'
    document.getElementById('linha_sc').style.display = "none";

    var parana = document.getElementById('shape_pr');
    parana.style.fill = '#D3D3D3'
    document.getElementById('linha_pr').style.display = "none";

    var rio_grande_do_sul = document.getElementById('shape_rs');
    rio_grande_do_sul.style.fill = '#D3D3D3'
    document.getElementById('linha_rs').style.display = "none";
  }
}


function regiao_sudeste(){
  if(customCheck_sudeste.checked == true ||
    customCheck_brasil.checked == true){
      document.getElementById('sistemas_sudeste').textContent = 13;
    var sao_paulo = document.getElementById('shape_sp');
    sao_paulo.style.fill = '#5e80c4e7'
    document.getElementById('linha_sp').style.display = "table-row";

    var minas_gerais = document.getElementById('shape_mg');
    minas_gerais.style.fill = '#5e80c4e7'
    document.getElementById('linha_mg').style.display = "table-row";

    var espiritosanto = document.getElementById('shape_es');
    var espiritosanto_circle = document.getElementById('shape_es_circle');
    espiritosanto.style.fill = '#5e80c4e7'
    espiritosanto_circle.style.fill = '#5e80c4e7'
    document.getElementById('linha_es').style.display = "table-row";

    var rio_de_janeiro = document.getElementById('shape_rj');
    var rio_de_janeiro_circle = document.getElementById('shape_rj_circle');
    rio_de_janeiro.style.fill = '#5e80c4e7'
    rio_de_janeiro_circle.style.fill = '#5e80c4e7'

    document.getElementById('linha_rj').style.display = "table-row";
    
  }else{
    document.getElementById('sistemas_sudeste').textContent = 0;
    var sao_paulo = document.getElementById('shape_sp');
    sao_paulo.style.fill ='#D3D3D3'
    document.getElementById('linha_sp').style.display = "none";

    var minas_gerais = document.getElementById('shape_mg');
    minas_gerais.style.fill = '#D3D3D3'
    document.getElementById('linha_mg').style.display = "none";

    var espiritosanto = document.getElementById('shape_es');
    var espiritosanto_circle = document.getElementById('shape_es_circle');
    espiritosanto.style.fill = '#D3D3D3'
    espiritosanto_circle.style.fill = '#D3D3D3'
    document.getElementById('linha_es').style.display = "none";

    var rio_de_janeiro = document.getElementById('shape_rj');
    var rio_de_janeiro_circle = document.getElementById('shape_rj_circle');
    rio_de_janeiro.style.fill = '#D3D3D3'
    rio_de_janeiro_circle.style.fill = '#D3D3D3'
    document.getElementById('linha_rj').style.display = "none";
  }
}


function reg_centro_oeste(){
  if(regiao_centro_oeste.checked == true || customCheck_brasil.checked == true ){
    document.getElementById('sistemas_centro_oeste').textContent = 11;
    var dist_fed = document.getElementById('shape_df');
    dist_fed.style.fill = '#5e80c4e7'
    document.getElementById('linha_df').style.display = "table-row";
    var dist_fed_circle = document.getElementById('shape_df_circle');
    dist_fed_circle.style.fill = '#5e80c4e7'
    document.getElementById('linha_df').style.display = "table-row";

    var goias = document.getElementById('shape_go');
    goias.style.fill = '#5e80c4e7'
    document.getElementById('linha_go').style.display = "table-row";

    var mato_grosso_do_sul = document.getElementById('shape_ms');
    mato_grosso_do_sul.style.fill = '#5e80c4e7'
    document.getElementById('linha_ms').style.display = "table-row";

    var mato_grosso = document.getElementById('shape_mt');
    mato_grosso.style.fill = '#5e80c4e7'
    document.getElementById('linha_mt').style.display = "table-row";

    var tocantins = document.getElementById('shape_to');
    tocantins.style.fill = '#5e80c4e7'
    document.getElementById('linha_to').style.display = "table-row";

  }else{
    document.getElementById('sistemas_centro_oeste').textContent = 0;
    var dist_fed = document.getElementById('shape_df');
    dist_fed.style.fill = '#D3D3D3'
    document.getElementById('linha_df').style.display = "none";
    var dist_fed_circle = document.getElementById('shape_df_circle');
    dist_fed_circle.style.fill = '#D3D3D3'
    document.getElementById('linha_df').style.display = "none";

    var goias = document.getElementById('shape_go');
    goias.style.fill = '#D3D3D3'
    document.getElementById('linha_go').style.display = "none";

    var mato_grosso_do_sul = document.getElementById('shape_ms');
    mato_grosso_do_sul.style.fill = '#D3D3D3'
    document.getElementById('linha_ms').style.display = "none";

    var mato_grosso = document.getElementById('shape_mt');
    mato_grosso.style.fill = '#D3D3D3'
    document.getElementById('linha_mt').style.display = "none";

    var tocantins = document.getElementById('shape_to');
    tocantins.style.fill = '#D3D3D3'
    document.getElementById('linha_to').style.display = "none";
  }
}



// d_f.style.fill = '#5e80c4e7' 
// if(document.getElementById('linha_df').style.display == "none"){ document.getElementById('linha_df').style.display = "table-row"; } else{ document.getElementById('linha_df').style.display = "none"; 
// d_f.style.fill = '#D3D3D3'

function tribunais_trabalhistas(){
  if(customCheck_trib_trab.checked == true){
    document.getElementById('linha_trt02').style.display = "table-row";
    document.getElementById('linha_trt03').style.display = "table-row";
    document.getElementById('linha_trt06').style.display = "table-row";
    document.getElementById('linha_trt07').style.display = "table-row";
    document.getElementById('linha_trt10').style.display = "table-row";
    document.getElementById('linha_trt11').style.display = "table-row";
    document.getElementById('linha_trt12').style.display = "table-row";
    document.getElementById('linha_trt13').style.display = "table-row";
    document.getElementById('linha_trt15').style.display = "table-row";
    document.getElementById('linha_trt17').style.display = "table-row";
    document.getElementById('linha_trt18').style.display = "table-row";
    document.getElementById('linha_trt21').style.display = "table-row";
    document.getElementById('linha_trt22').style.display = "table-row";
    document.getElementById('linha_trt23').style.display = "table-row";
    document.getElementById('linha_trt24').style.display = "table-row";
  }else{
    document.getElementById('linha_trt02').style.display = "none";
    document.getElementById('linha_trt03').style.display = "none";
    document.getElementById('linha_trt06').style.display = "none";
    document.getElementById('linha_trt07').style.display = "none";
    document.getElementById('linha_trt10').style.display = "none";
    document.getElementById('linha_trt11').style.display = "none";
    document.getElementById('linha_trt12').style.display = "none";
    document.getElementById('linha_trt13').style.display = "none";
    document.getElementById('linha_trt15').style.display = "none";
    document.getElementById('linha_trt17').style.display = "none";
    document.getElementById('linha_trt18').style.display = "none";
    document.getElementById('linha_trt21').style.display = "none";
    document.getElementById('linha_trt22').style.display = "none";
    document.getElementById('linha_trt23').style.display = "none";
    document.getElementById('linha_trt24').style.display = "none";
  }
}

function tribunais_superiores(){
  if(customCheck_trib_sup.checked == true){
    document.getElementById('linha_stf').style.display = "table-row";
    document.getElementById('linha_tst').style.display = "table-row";
  }else{
    document.getElementById('linha_stf').style.display = "none";
    document.getElementById('linha_tst').style.display = "none";
  }
}


function tribunais_federais(){
  if(customCheck_trib_fed.checked == true){
    document.getElementById('linha_trf01').style.display = "table-row";
    document.getElementById('linha_trf02').style.display = "table-row";
    document.getElementById('linha_trf03').style.display = "table-row";
    document.getElementById('linha_trf03_jef').style.display = "table-row";
    document.getElementById('linha_trf04').style.display = "table-row";
    document.getElementById('linha_trf05').style.display = "table-row";
    document.getElementById('linha_trf05_jef').style.display = "table-row";
  }else{
    document.getElementById('linha_trf01').style.display = "none";
    document.getElementById('linha_trf02').style.display = "none";
    document.getElementById('linha_trf03').style.display = "none";
    document.getElementById('linha_trf03_jef').style.display = "none";
    document.getElementById('linha_trf04').style.display = "none";
    document.getElementById('linha_trf05').style.display = "none";
    document.getElementById('linha_trf05_jef').style.display = "none";
  }
}


function tribunais_estaduais(){
  if(customCheck_trib_est.checked == true || customCheck_brasil.checked == true ){
    var acre = document.getElementById('shape_ac');
    acre.style.fill = '#5e80c4e7'
    document.getElementById('linha_ac').style.display = "table-row";

    var alagoas = document.getElementById('shape_al');
    alagoas.style.fill = '#5e80c4e7'
    document.getElementById('linha_al').style.display = "table-row";
    var alagoas_circle = document.getElementById('shape_al_circle');
    alagoas_circle.style.fill = '#5e80c4e7'
    document.getElementById('linha_al').style.display = "table-row";

    var amazonas = document.getElementById('shape_am');
    amazonas.style.fill = '#5e80c4e7'
    document.getElementById('linha_am').style.display = "table-row";

    var amapa = document.getElementById('shape_ap');
    amapa.style.fill = '#5e80c4e7'
    document.getElementById('linha_ap').style.display = "table-row";

    var bahia = document.getElementById('shape_ba');
    bahia.style.fill = '#5e80c4e7'
    document.getElementById('linha_ba').style.display = "table-row";

    var ceara = document.getElementById('shape_ce');
    ceara.style.fill = '#5e80c4e7'
    document.getElementById('linha_ce').style.display = "table-row";

    var dist_fed = document.getElementById('shape_df');
    dist_fed.style.fill = '#5e80c4e7'
    document.getElementById('linha_df').style.display = "table-row";
    var dist_fed_circle = document.getElementById('shape_df_circle');
    dist_fed_circle.style.fill = '#5e80c4e7'
    document.getElementById('linha_df').style.display = "table-row";

    var espiritosanto = document.getElementById('shape_es');
    espiritosanto.style.fill = '#5e80c4e7'
    document.getElementById('linha_es').style.display = "table-row";
    var espiritosanto_circle = document.getElementById('shape_es_circle');
    espiritosanto_circle.style.fill = '#5e80c4e7'
    document.getElementById('linha_es').style.display = "table-row";

    var goias = document.getElementById('shape_go');
    goias.style.fill = '#5e80c4e7'
    document.getElementById('linha_go').style.display = "table-row";

    var maranhao = document.getElementById('shape_ma');
    maranhao.style.fill = '#5e80c4e7'
    document.getElementById('linha_ma').style.display = "table-row";

    var minas = document.getElementById('shape_mg');
    minas.style.fill = '#5e80c4e7'
    document.getElementById('linha_mg').style.display = "table-row";

    var mato_grosso_do_sul = document.getElementById('shape_ms');
    mato_grosso_do_sul.style.fill = '#5e80c4e7'
    document.getElementById('linha_ms').style.display = "table-row";

    var mato_grosso = document.getElementById('shape_mt');
    mato_grosso.style.fill = '#5e80c4e7'
    document.getElementById('linha_mt').style.display = "table-row";

    var para = document.getElementById('shape_pa');
    para.style.fill = '#5e80c4e7'
    document.getElementById('linha_pa').style.display = "table-row";

    var paraiba = document.getElementById('shape_pb');
    paraiba.style.fill = '#5e80c4e7'
    document.getElementById('linha_pb').style.display = "table-row";
    var paraiba_circle = document.getElementById('shape_pb_circle');
    paraiba_circle.style.fill = '#5e80c4e7'
    document.getElementById('linha_pb').style.display = "table-row";

    var pernambuco = document.getElementById('shape_pe');
    pernambuco.style.fill = '#5e80c4e7'
    document.getElementById('linha_pe').style.display = "table-row";

    var piaui = document.getElementById('shape_pi');
    piaui.style.fill = '#5e80c4e7'
    document.getElementById('linha_pi').style.display = "table-row";

    var parana = document.getElementById('shape_pr');
    parana.style.fill = '#5e80c4e7'
    document.getElementById('linha_pr').style.display = "table-row";

    var rio_de_janeiro = document.getElementById('shape_rj');
    rio_de_janeiro.style.fill = '#5e80c4e7'
    document.getElementById('linha_rj').style.display = "table-row";
    var rio_de_janeiro_circle = document.getElementById('shape_rj_circle');
    rio_de_janeiro_circle.style.fill = '#5e80c4e7'
    document.getElementById('linha_rj').style.display = "table-row";

    var rio_grande_do_norte = document.getElementById('shape_rn');
    rio_grande_do_norte.style.fill = '#5e80c4e7'
    document.getElementById('linha_rn').style.display = "table-row";
    var rio_grande_do_norte_circle = document.getElementById('shape_rn_circle');
    rio_grande_do_norte_circle.style.fill = '#5e80c4e7'
    document.getElementById('linha_rn').style.display = "table-row";

    var rondonia = document.getElementById('shape_ro');
    rondonia.style.fill = '#5e80c4e7'
    document.getElementById('linha_ro').style.display = "table-row";

    var roraima = document.getElementById('shape_rr');
    roraima.style.fill = '#5e80c4e7'
    document.getElementById('linha_rr').style.display = "table-row";

    var rio_grande_do_sul = document.getElementById('shape_rs');
    rio_grande_do_sul.style.fill = '#5e80c4e7'
    document.getElementById('linha_rs').style.display = "table-row";

    var santa_catarina = document.getElementById('shape_sc');
    santa_catarina.style.fill = '#5e80c4e7'
    document.getElementById('linha_sc').style.display = "table-row";

    var sergipe = document.getElementById('shape_se');
    sergipe.style.fill = '#5e80c4e7'
    document.getElementById('linha_se').style.display = "table-row";
    var sergipe_circle = document.getElementById('shape_se_circle');
    sergipe_circle.style.fill = '#5e80c4e7'
    document.getElementById('linha_se').style.display = "table-row";

    var sao_paulo = document.getElementById('shape_sp');
    sao_paulo.style.fill = '#5e80c4e7'
    document.getElementById('linha_sp').style.display = "table-row";

    var tocantins = document.getElementById('shape_to');
    tocantins.style.fill = '#5e80c4e7'
    document.getElementById('linha_to').style.display = "table-row";

  }else{
    var acre = document.getElementById('shape_ac');
    acre.style.fill = '#D3D3D3'
    document.getElementById('linha_ac').style.display = "none";

    var alagoas = document.getElementById('shape_al');
    alagoas.style.fill = '#D3D3D3'
    document.getElementById('linha_al').style.display = "none";
    var alagoas_circle = document.getElementById('shape_al_circle');
    alagoas_circle.style.fill = '#D3D3D3'
    document.getElementById('linha_al').style.display = "none";
    
    var amazonas = document.getElementById('shape_am');
    amazonas.style.fill = '#D3D3D3'
    document.getElementById('linha_am').style.display = "none";

    var amapa = document.getElementById('shape_ap');
    amapa.style.fill = '#D3D3D3'
    document.getElementById('linha_ap').style.display = "none";

    var bahia = document.getElementById('shape_ba');
    bahia.style.fill = '#D3D3D3'
    document.getElementById('linha_ba').style.display = "none";

    var ceara = document.getElementById('shape_ce');
    ceara.style.fill = '#D3D3D3'
    document.getElementById('linha_ce').style.display = "none";

    var dist_fed = document.getElementById('shape_df');
    dist_fed.style.fill = '#D3D3D3'
    document.getElementById('linha_df').style.display = "none";
    var dist_fed_circle = document.getElementById('shape_df_circle');
    dist_fed_circle.style.fill = '#D3D3D3'
    document.getElementById('linha_df').style.display = "none";

    var espiritosanto = document.getElementById('shape_es');
    espiritosanto.style.fill = '#D3D3D3'
    document.getElementById('linha_es').style.display = "none";
    var espiritosanto_circle = document.getElementById('shape_es_circle');
    espiritosanto_circle.style.fill = '#D3D3D3'
    document.getElementById('linha_es').style.display = "none";

    var goias = document.getElementById('shape_go');
    goias.style.fill = '#D3D3D3'
    document.getElementById('linha_go').style.display = "none";

    var maranhao = document.getElementById('shape_ma');
    maranhao.style.fill = '#D3D3D3'
    document.getElementById('linha_ma').style.display = "none";

    var minas = document.getElementById('shape_mg');
    minas.style.fill = '#D3D3D3'
    document.getElementById('linha_mg').style.display = "none";

    var mato_grosso_do_sul = document.getElementById('shape_ms');
    mato_grosso_do_sul.style.fill = '#D3D3D3'
    document.getElementById('linha_ms').style.display = "none";

    var mato_grosso = document.getElementById('shape_mt');
    mato_grosso.style.fill = '#D3D3D3'
    document.getElementById('linha_mt').style.display = "none";

    var para = document.getElementById('shape_pa');
    para.style.fill = '#D3D3D3'
    document.getElementById('linha_pa').style.display = "none";

    var paraiba = document.getElementById('shape_pb');
    paraiba.style.fill = '#D3D3D3'
    document.getElementById('linha_pb').style.display = "none";
    var paraiba_circle = document.getElementById('shape_pb_circle');
    paraiba_circle.style.fill = '#D3D3D3'
    document.getElementById('linha_pb').style.display = "none";

    var pernambuco = document.getElementById('shape_pe');
    pernambuco.style.fill = '#D3D3D3'
    document.getElementById('linha_pe').style.display = "none";

    var piaui = document.getElementById('shape_pi');
    piaui.style.fill = '#D3D3D3'
    document.getElementById('linha_pi').style.display = "none";

    var parana = document.getElementById('shape_pr');
    parana.style.fill = '#D3D3D3'
    document.getElementById('linha_pr').style.display = "none";

    var rio_de_janeiro = document.getElementById('shape_rj');
    rio_de_janeiro.style.fill = '#D3D3D3'
    document.getElementById('linha_rj').style.display = "none";
    var rio_de_janeiro_circle = document.getElementById('shape_rj_circle');
    rio_de_janeiro_circle.style.fill = '#D3D3D3'
    document.getElementById('linha_rj').style.display = "none";

    var rio_grande_do_norte = document.getElementById('shape_rn');
    rio_grande_do_norte.style.fill = '#D3D3D3'
    document.getElementById('linha_rn').style.display = "none";
    var rio_grande_do_norte_circle = document.getElementById('shape_rn_circle');
    rio_grande_do_norte_circle.style.fill = '#D3D3D3'
    document.getElementById('linha_rn').style.display = "none";

    var rondonia = document.getElementById('shape_ro');
    rondonia.style.fill = '#D3D3D3'
    document.getElementById('linha_ro').style.display = "none";

    var roraima = document.getElementById('shape_rr');
    roraima.style.fill = '#D3D3D3'
    document.getElementById('linha_rr').style.display = "none";

    var rio_grande_do_sul = document.getElementById('shape_rs');
    rio_grande_do_sul.style.fill = '#D3D3D3'
    document.getElementById('linha_rs').style.display = "none";

    var santa_catarina = document.getElementById('shape_sc');
    santa_catarina.style.fill = '#D3D3D3'
    document.getElementById('linha_sc').style.display = "none";

    var sergipe = document.getElementById('shape_se');
    sergipe.style.fill = '#D3D3D3'
    document.getElementById('linha_se').style.display = "none";
    var sergipe_circle = document.getElementById('shape_se_circle');
    sergipe_circle.style.fill = '#D3D3D3'
    document.getElementById('linha_se').style.display = "none";

    var sao_paulo = document.getElementById('shape_sp');
    sao_paulo.style.fill = '#D3D3D3'
    document.getElementById('linha_sp').style.display = "none";

    var tocantins = document.getElementById('shape_to');
    tocantins.style.fill = '#D3D3D3'
    document.getElementById('linha_to').style.display = "none";
  }
}



function acr(){
  var acre = document.getElementById('shape_ac');
  function muda_cor(){
    acre.style.fill = '#5e80c4e7'
    if(document.getElementById('linha_ac').style.display == "none"){ document.getElementById('linha_ac').style.display = "table-row"; }else{ document.getElementById('linha_ac').style.display = "none"; 
    acre.style.fill = '#D3D3D3'
  } 
  }
acre.addEventListener('click',muda_cor, false);
}


function ala(){
  var alagoas = document.getElementById('shape_al');
  var alagoas_circle = document.getElementById('shape_al_circle');
  function muda_cor(){
    alagoas.style.fill = '#5e80c4e7'
    alagoas_circle.style.fill = '#5e80c4e7'
    if(document.getElementById('linha_al').style.display == "none"){ document.getElementById('linha_al').style.display = "table-row"; } else{ document.getElementById('linha_al').style.display = "none";
    alagoas.style.fill = '#D3D3D3'
    alagoas_circle.style.fill = '#D3D3D3'
   }  
  }
alagoas.addEventListener('click',muda_cor, false);
alagoas_circle.addEventListener('click',muda_cor, false);
}


function amaz(){
  var amazonas = document.getElementById('shape_am');
  function muda_cor(){
    amazonas.style.fill = '#5e80c4e7'
    if(document.getElementById('linha_am').style.display == "none"){ document.getElementById('linha_am').style.display = "table-row"; } else{ document.getElementById('linha_am').style.display = "none";
    amazonas.style.fill = '#D3D3D3'
   } 
  }
amazonas.addEventListener('click',muda_cor, false);
}


function amapa(){
  var amapa = document.getElementById('shape_ap');
  function muda_cor(){
    amapa.style.fill = '#5e80c4e7'
    if(document.getElementById('linha_ap').style.display == "none"){ document.getElementById('linha_ap').style.display = "table-row"; } else{ document.getElementById('linha_ap').style.display = "none"; 
    amapa.style.fill = '#D3D3D3'
  } 
  }
amapa.addEventListener('click',muda_cor,  false);
}


function bah(){
  var bahia = document.getElementById('shape_ba');
  function muda_cor(){
    bahia.style.fill = '#5e80c4e7' 
    if(document.getElementById('linha_ba').style.display == "none"){ document.getElementById('linha_ba').style.display = "table-row"; } else{ document.getElementById('linha_ba').style.display = "none";
    bahia.style.fill = '#D3D3D3'
  } 
  }
bahia.addEventListener('click',muda_cor, false);
}


function cea(){
  var ceara = document.getElementById('shape_ce');
  function muda_cor(){
    ceara.style.fill = '#5e80c4e7' 
    if(document.getElementById('linha_ce').style.display == "none"){ document.getElementById('linha_ce').style.display = "table-row"; } else{ document.getElementById('linha_ce').style.display = "none";
    ceara.style.fill = '#D3D3D3'
   } 
  }
ceara.addEventListener('click',muda_cor, false);
}


function dist_fed(){
  var d_f = document.getElementById('shape_df');
  function muda_cor(){
    d_f.style.fill = '#5e80c4e7' 
    if(document.getElementById('linha_df').style.display == "none"){ document.getElementById('linha_df').style.display = "table-row"; } else{ document.getElementById('linha_df').style.display = "none"; 
    d_f.style.fill = '#D3D3D3'
  } 
  }
d_f.addEventListener('click',muda_cor, false);
}


function esp(){
  var espiritosanto = document.getElementById('shape_es');
  var espiritosanto_circle = document.getElementById('shape_es_circle');
  function muda_cor(){
    espiritosanto.style.fill = '#5e80c4e7' 
    espiritosanto_circle.style.fill = '#5e80c4e7' 
    if(document.getElementById('linha_es').style.display == "none"){ document.getElementById('linha_es').style.display = "table-row"; } else{ document.getElementById('linha_es').style.display = "none";
    espiritosanto.style.fill = '#D3D3D3'
    espiritosanto_circle.style.fill = '#D3D3D3'
   } 
  }
espiritosanto.addEventListener('click',muda_cor, false);
espiritosanto_circle.addEventListener('click',muda_cor, false);
}


function goias(){
  var goias = document.getElementById('shape_go');
  function muda_cor(){
    goias.style.fill = '#5e80c4e7' 
    if(document.getElementById('linha_go').style.display == "none"){ document.getElementById('linha_go').style.display = "table-row"; } else{ document.getElementById('linha_go').style.display = "none";
    goias.style.fill = '#D3D3D3'
  } 
  }
goias.addEventListener('click',muda_cor,  false);
}


function mar(){
  var maranhao = document.getElementById('shape_ma');
  function muda_cor(){
    maranhao.style.fill = '#5e80c4e7' 
    if(document.getElementById('linha_ma').style.display == "none"){ document.getElementById('linha_ma').style.display = "table-row"; } else{ document.getElementById('linha_ma').style.display = "none";
    maranhao.style.fill = '#D3D3D3'
   } 
  }
maranhao.addEventListener('click',muda_cor,  false);
}


function minas(){
  var minas_gerais = document.getElementById('shape_mg');
  function muda_cor(){
    minas_gerais.style.fill = '#5e80c4e7' 
    if(document.getElementById('linha_mg').style.display == "none"){ document.getElementById('linha_mg').style.display = "table-row"; } else{ document.getElementById('linha_mg').style.display = "none";
    minas_gerais.style.fill = '#D3D3D3'
   } 
  }
minas_gerais.addEventListener('click',muda_cor,  false);
}


function ms(){
  var mato_grosso_do_sul = document.getElementById('shape_ms');
  function muda_cor(){
    mato_grosso_do_sul.style.fill = '#5e80c4e7' 
    if(document.getElementById('linha_ms').style.display == "none"){ document.getElementById('linha_ms').style.display = "table-row"; } else{ document.getElementById('linha_ms').style.display = "none"; 
    mato_grosso_do_sul.style.fill = '#D3D3D3'
  } 
  }
mato_grosso_do_sul.addEventListener('click',muda_cor, false);
}


function mt(){
  var mato_grosso = document.getElementById('shape_mt');
  function muda_cor(){
    mato_grosso.style.fill = '#5e80c4e7' 
    if(document.getElementById('linha_mt').style.display == "none"){ document.getElementById('linha_mt').style.display = "table-row"; } else{ document.getElementById('linha_mt').style.display = "none";
    mato_grosso.style.fill = '#D3D3D3'
   } 
  }
mato_grosso.addEventListener('click',muda_cor, false);
}


function pa(){
  var para = document.getElementById('shape_pa');
  function muda_cor(){
    para.style.fill = '#5e80c4e7' 
    if(document.getElementById('linha_pa').style.display == "none"){ document.getElementById('linha_pa').style.display = "table-row"; } else{ document.getElementById('linha_pa').style.display = "none"; 
    para.style.fill = '#D3D3D3'
  } 
  }
para.addEventListener('click',muda_cor, false);
}


function pb(){
  var paraiba = document.getElementById('shape_pb');
  var paraiba_circle = document.getElementById('shape_pb_circle');
  function muda_cor(){
    paraiba.style.fill = '#5e80c4e7' 
    paraiba_circle.style.fill = '#5e80c4e7' 
    if(document.getElementById('linha_pb').style.display == "none"){ document.getElementById('linha_pb').style.display = "table-row"; } else{ document.getElementById('linha_pb').style.display = "none"; 
    paraiba.style.fill = '#D3D3D3'
    paraiba_circle.style.fill = '#D3D3D3'
  } 
  }
paraiba.addEventListener('click',muda_cor, false);
paraiba_circle.addEventListener('click',muda_cor, false);
}


function pi(){
  var piaui = document.getElementById('shape_pi');
  function muda_cor(){
    piaui.style.fill = '#5e80c4e7' 
    if(document.getElementById('linha_pi').style.display == "none"){ document.getElementById('linha_pi').style.display = "table-row"; } else{ document.getElementById('linha_pi').style.display = "none"; 
    piaui.style.fill = '#D3D3D3'
  } 
  }
piaui.addEventListener('click',muda_cor, false);
}


function pe(){
  var pernambuco = document.getElementById('shape_pe');
  function muda_cor(){
    pernambuco.style.fill = '#5e80c4e7' 
    if(document.getElementById('linha_pe').style.display == "none"){ document.getElementById('linha_pe').style.display = "table-row"; } else{ document.getElementById('linha_pe').style.display = "none"; 
    pernambuco.style.fill = '#D3D3D3'
  } 
  }
pernambuco.addEventListener('click',muda_cor, false);
}


function pr(){
  var parana = document.getElementById('shape_pr');
  function muda_cor(){
    parana.style.fill = '#5e80c4e7' 
    if(document.getElementById('linha_pr').style.display == "none"){ document.getElementById('linha_pr').style.display = "table-row"; } else{ document.getElementById('linha_pr').style.display = "none"; 
    parana.style.fill = '#D3D3D3'
  } 
  }
parana.addEventListener('click',muda_cor, false);
}


function rj(){
  var rio_de_janeiro = document.getElementById('shape_rj');
  var rio_de_janeiro_circle = document.getElementById('shape_rj_circle');
  function muda_cor(){
    rio_de_janeiro.style.fill = '#5e80c4e7' 
    rio_de_janeiro_circle.style.fill = '#5e80c4e7' 
    if(document.getElementById('linha_rj').style.display == "none"){ document.getElementById('linha_rj').style.display = "table-row"; } else{ document.getElementById('linha_rj').style.display = "none"; 
    rio_de_janeiro.style.fill = '#D3D3D3'
    rio_de_janeiro_circle.style.fill = '#D3D3D3'
  } 
  }
rio_de_janeiro.addEventListener('click',muda_cor, false);
rio_de_janeiro_circle.addEventListener('click',muda_cor, false);
}


function rn(){
  var rio_grande_do_norte = document.getElementById('shape_rn');
  var rio_grande_do_norte_circle = document.getElementById('shape_rn_circle');
  function muda_cor(){
    rio_grande_do_norte.style.fill = '#5e80c4e7' 
    rio_grande_do_norte_circle.style.fill = '#5e80c4e7' 
    if(document.getElementById('linha_rn').style.display == "none"){ document.getElementById('linha_rn').style.display = "table-row"; } else{ document.getElementById('linha_rn').style.display = "none"; 
    rio_grande_do_norte.style.fill = '#D3D3D3'
    rio_grande_do_norte_circle.style.fill = '#D3D3D3'
  } 
  }
rio_grande_do_norte.addEventListener('click',muda_cor, false);
rio_grande_do_norte_circle.addEventListener('click',muda_cor, false);
}


function ro(){
  var rondonia = document.getElementById('shape_ro');
    function muda_cor(){
      rondonia.style.fill = '#5e80c4e7' 
      if(document.getElementById('linha_ro').style.display == "none"){ document.getElementById('linha_ro').style.display = "table-row"; } else{ document.getElementById('linha_ro').style.display = "none"; 
      rondonia.style.fill = '#D3D3D3'    
    } 
    }
  rondonia.addEventListener('click',muda_cor, false);
}

function rr(){
  var roraima = document.getElementById('shape_rr');
    function muda_cor(){
      roraima.style.fill = '#5e80c4e7' 
      if(document.getElementById('linha_rr').style.display == "none"){ document.getElementById('linha_rr').style.display = "table-row"; } else{ document.getElementById('linha_rr').style.display = "none"; 
      roraima.style.fill = '#D3D3D3'
    } 
    }
  
  roraima.addEventListener('click',muda_cor, false);
}

function rs(){
  var rio_grande_do_sul= document.getElementById('shape_rs');
    function muda_cor(){
      rio_grande_do_sul.style.fill = '#5e80c4e7' 
      if(document.getElementById('linha_rs').style.display == "none"){ document.getElementById('linha_rs').style.display = "table-row"; } else{ document.getElementById('linha_rs').style.display = "none";
      rio_grande_do_sul.style.fill = '#D3D3D3'
     } 
    }
  rio_grande_do_sul.addEventListener('click',muda_cor, false);
}


function sc(){
  var santa_catarina= document.getElementById('shape_sc');
    function muda_cor(){
      santa_catarina.style.fill = '#5e80c4e7' 
      if(document.getElementById('linha_sc').style.display == "none"){ document.getElementById('linha_sc').style.display = "table-row"; } else{ document.getElementById('linha_sc').style.display = "none"; 
      santa_catarina.style.fill = '#D3D3D3'    
    } 
    }
  santa_catarina.addEventListener('click',muda_cor, false);
}


function se(){
  var sergipe = document.getElementById('shape_se');
  var sergipe_circle = document.getElementById('shape_se_circle');
  function muda_cor(){
    sergipe.style.fill = '#5e80c4e7' 
    sergipe_circle.style.fill = '#5e80c4e7' 
    if(document.getElementById('linha_se').style.display == "none"){ document.getElementById('linha_se').style.display = "table-row"; } else{ document.getElementById('linha_se').style.display = "none"; 
    sergipe.style.fill = '#D3D3D3'
    sergipe_circle.style.fill = '#D3D3D3'  
  } 
  }
sergipe.addEventListener('click',muda_cor, false);
sergipe_circle.addEventListener('click',muda_cor, false);
}


function sp(){
  var sao_paulo= document.getElementById('shape_sp');
    function muda_cor(){
      sao_paulo.style.fill = '#5e80c4e7' 
      if(document.getElementById('linha_sp').style.display == "none"){ document.getElementById('linha_sp').style.display = "table-row"; } else{ document.getElementById('linha_sp').style.display = "none"; 
      sao_paulo.style.fill = '#D3D3D3'
    } 
    }
  sao_paulo.addEventListener('click',muda_cor,  false);
}


function tocant(){
  var tocantins = document.getElementById('shape_to');
    function muda_cor(){
      tocantins.style.fill = '#5e80c4e7' 
      if(document.getElementById('linha_to').style.display == "none"){ document.getElementById('linha_to').style.display = "table-row"; } else{ document.getElementById('linha_to').style.display = "none"; 
      tocantins.style.fill = '#D3D3D3'    
    } 
    }
  tocantins.addEventListener('click',muda_cor, false);
}




var i = 0;
function move_cap() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("myBar_cap");
    var width = 10;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
        elem.innerHTML = width + "%";
      }
    }
  }
}

function mostrar_precos() {
  document.getElementById("precos_captura").style.display = "inline-flex";
}
function ocultar() {
  document.getElementById("precos_captura").style.display = "none";
}
document.getElementById("precos_captura").addEventListener("mouseover", showElement, false);
document.getElementById("precos_captura").addEventListener("mouseout", hideElement, false);

function mostrar_regioes() {
  document.getElementById("regioes_sistemas").style.display = "block";
}
function ocultar() {
  document.getElementById("regioes_sistemas").style.display = "none";
}

function mostrar_tribunais() {
  document.getElementById("tribunais_sistemas").style.display = "block";
}
function ocultar() {
  document.getElementById("tribunais_sistemas").style.display = "none";
}


function mostrar_sistemas() {
  document.getElementById("sistemas").style.display = "block";
}
function ocultar() {
  document.getElementById("sistemas").style.display = "none";
}
// document.getElementById("sistemas").addEventListener("mouseover", showElement, false);
// document.getElementById("sistemas").addEventListener("mouseout", hideElement, false);


function mostrar_barra_cap() {
  document.getElementById("myBar_cap").style.display = "block";
}
function ocultar_barra_cap() {
  document.getElementById("myBar_cap").style.display = "none";
  swal("Sucesso!", "Solução Captura de Novas Ações precificada com sucesso", "success");
  


  // document.getElementById("myBar_cap").addEventListener("mouseover", showElement, false);
  // document.getElementById("myBar_cap").addEventListener("mouseout", hideElement, false);
}

function funcoes_cap(){
  var tmp1 = setTimeout(move_cap,1000);
  var tmp2 = setTimeout(mostrar_barra,2000);
  var tmp3 = setInterval(mostrar_regioes, 2500);
  var tmp4 = setInterval(mostrar_tribunais, 3000);
  var tmp5 = setInterval(mostrar_sistemas, 3500);
  var tmp6 = setInterval(mostrar_precos, 4500);
  var tem7 = setTimeout(ocultar_barra_cap,5500);
}

function trib_estaduais(){
  var tribunais_estaduais = 60;
  var sistemas_e = document.getElementById('sistemas_estaduais');
  if(customCheck_trib_est.checked == true) {
    sistemas_e.innerHTML = tribunais_estaduais;
  }else{
    (customCheck_trib_est.checked == false)
    sistemas_e.innerHTML = "";
  }
}

function trib_federais(){
  var tribunais_federais = 41;
  var sistemas_f = document.getElementById('sistemas_federais');
  if(customCheck_trib_fed.checked == true) {
    sistemas_f.innerHTML = tribunais_federais;
  }else{
    sistemas_f.innerHTML = "";
  }
}

function trib_superiores(){
  var tribunais_superiores = 3;
  var sistemas_s = document.getElementById('sistemas_superiores');
  if(customCheck_trib_sup.checked == true) {
    sistemas_s.innerHTML = tribunais_superiores;
  }else{
    sistemas_s.innerHTML = "";
  }
}

function trib_trabalhistas(){
  var tribunais_trabalhistas = 15;
  var sistemas_t = document.getElementById('sistemas_trabalhistas');
  if(customCheck_trib_trab.checked == true) {
    sistemas_t.innerHTML = tribunais_trabalhistas;
  }else{
    sistemas_t.innerHTML = "";
  }
}

// function brasil(){
//   if(customCheck_brasil.checked == true){
//     document.getElementById('t_sistemas').textContent = 119;
//   }else{
//     document.getElementById('t_sistemas').textContent = 0;
//   }
// }

function sistemas_monitorados(){
 
var tribunais_estaduais = document.getElementById('sistemas_estaduais').innerHTML;
var tribunais_federais = document.getElementById('sistemas_federais').innerHTML;
var tribunais_superiores   = document.getElementById('sistemas_superiores').innerHTML;
var tribunais_trabalhistas = document.getElementById('sistemas_trabalhistas').innerHTML;
if(customCheck_trib_trab.checked == true) {
  tribunais_trabalhistas = 15;
}else{
  tribunais_trabalhistas= "";
}
var trab = document.getElementById('sistemas_trabalhistas').innerHTML;
var arrayTotal = parseInt([tribunais_estaduais +++ tribunais_federais +++ tribunais_superiores +++ tribunais_trabalhistas]);
document.getElementById('t_sistemas').innerHTML = arrayTotal ;
// console.log(arrayTotal);
}

function calcular_captura_acoes(){

   var cnpj = document.querySelector("#qtde_nome_cnpj").value;
   var sites = document.getElementById('t_sistemas').innerHTML;
   var margem = 0.35;
   var impostos = 0.09;
 	 var select = document.getElementById('frequencia');
   var freq = select.options[select.selectedIndex].value;
   var custo_unit = 69809.37 /(1377000 + (cnpj * sites * freq));
   var preco_cnpj = ((cnpj * sites * freq) * (custo_unit /(1-margem) / (1-impostos))).toFixed(0);
   var preco_sem_copia =(custo_unit / (1-margem) / (1-impostos)).toFixed(2);
   var preco_com_copia =(custo_unit / (1-margem) / (1-impostos)+7).toFixed(2);

   if(cnpj == "" || freq == ""){
    swal("Erro!", "Dados de Quantidade de CNPJ / Nome ou Frequência não foram inseridos", "error");
   }

document.getElementById('vlr_cap_cnpj').innerHTML = preco_cnpj;
document.getElementById('vlr_cap_sem_copia').innerHTML = preco_sem_copia;
document.getElementById('vlr_cap_com_copia').innerHTML = preco_com_copia;


}