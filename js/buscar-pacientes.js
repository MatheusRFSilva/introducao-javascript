var botaoAdicionar = document.querySelector('#buscar-pacientes');


botaoAdicionar.addEventListener('click', function(){

    var xhr = new XMLHttpRequest();

    xhr.open('GET','https://api-pacientes.herokuapp.com/pacientes');
    //xhr.open('GET','https://api-pacientes.herokuapp.com/paci1111entes');
    xhr.addEventListener('load',function(){
      var erroAjax = document.querySelector('#erro-ajax');
      if(xhr.status == 200){
        erroAjax.classList.add("invisivel");
        var resposta = xhr.responseText;
        //console.log(resposta);
        var pacientes = JSON.parse(resposta);
        //console.log(pacientes);


        pacientes.forEach(function(paciente){
          adicionaPacienteNaTabela(paciente);
        })

      }else {
        console.log(xhr.status);
        console.log(xhr.responseText);

        erroAjax.classList.remove("invisivel");
      }

    });
    xhr.send();


})
