var botaoAdicionar = document.querySelector('#adicionar-paciente');

botaoAdicionar.addEventListener('click',function(event){
	event.preventDefault();

	var form = document.querySelector('#form-adiciona');
	//extraindo informações do paciente do form
	var paciente =obtemPacienteDoFormulario(form);

	//console.log(paciente);

	//cria a tr do paciente

	var pacienteTr = montaTr(paciente);

var erros = validaPaciente(paciente);

if (erros.length > 0){
		var mensagemErro = document.querySelector("#mensagem-erro");
		mensagemErro.textContent = erros;
		return
}

	//adicionando o paciente na tabela
	var tabela = document.querySelector("#tabela-pacientes");

	tabela.appendChild(pacienteTr);
		form.reset();
});


function obtemPacienteDoFormulario(form){

	var paciente = {
		nome : form.nome.value,
		peso : form.peso.value,
		altura :  form.altura.value,
		gordura : form.gordura.value,
		imc : calculaImc( form.peso.value,form.altura.value)
	}

	return paciente;
}

function montaTr(paciente){
	//cria a tr e a td do paciente
	var pacienteTr = document.createElement("tr");
	pacienteTr.classList.add("paciente");



	var nomeTd = montaTd(paciente.nome,'info-nome');


	var pesoTd = montaTd(paciente.peso,'info-peso');

	var alturaTd = montaTd(paciente.altura,'info-altura');

	var gorduraTd = montaTd(paciente.gordura,'info-gordura');

	var imcTd = montaTd(paciente.imc,'info-imc');


	nomeTd.textContent = paciente.nome;
	pesoTd.textContent = paciente.peso;
	alturaTd.textContent = paciente.altura;
	gorduraTd.textContent = paciente.gordura;
	imcTd.textContent =paciente.imc;

	pacienteTr.appendChild(nomeTd);
	pacienteTr.appendChild(pesoTd);
	pacienteTr.appendChild(alturaTd);
	pacienteTr.appendChild(gorduraTd);
	pacienteTr.append(imcTd);

	return pacienteTr
}

function montaTd(dado,classe){
	var td = document.createElement("td");
	td.textContent = dado;
	td.classList.add(classe);
	return td;
}

function validaPaciente(paciente){
		var erros = [];
		if (!validaPeso(paciente.peso))	erros.push('Peso é Invalido');

		if(!validaAltura(paciente.altura)) {
			erros.push("Altura é Iválido")
		}

		return erros;
}
