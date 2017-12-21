var pacientes = document.querySelectorAll('.paciente');

pacientes.forEach(function(paciente){
    paciente.addEventListener('dblclick',function(){
      console.log("Fui clicado em duplo clic");
      this.remove();
    })
});
