// 1. Necessito deste sentimento?
// 2. Quero senti-lo?
// 3. Prefiro senti-lo ou não senti-lo?
// 4. Posso liberar-me deste sentimento?
// 5. Eu permito?
// 6. Quando?

function beginSedona(event){
	event.preventDefault();
	let conteudo = document.querySelector("#conteudo");
	let valor = document.querySelector("#valor").value;
	conteudo.remove();
	this.formulario(valor);
}
function formulario(valor){
	let conteudo = this.conteudo();
	this.montarPergunta(conteudo,valor);
}
function conteudo(){
	let container = document.querySelector(".container");
    const divConteudo = document.createElement('div');
    divConteudo.id = "conteudo";
    return container.appendChild(divConteudo);
}
function montarPergunta(conteudo,valor){
	if(valor == 0){
		let row = this.questao(conteudo);
		let paragrafo = this.criarElemento('p');
		let pergunta = this.criarTexto("1. Necessito deste sentimento?");
		let sim = this.criarElemento('button',"Sim");
		let nao = this.criarElemento('button',"Não");
		let hidden = this.criarElemento('input',null,'hidden',1,'valor');
		paragrafo.appendChild(pergunta);
		paragrafo.appendChild(sim);
		paragrafo.appendChild(nao);
		paragrafo.appendChild(hidden);
		row.appendChild(paragrafo);
	}else if(valor == 1){
		let row = this.questao(conteudo);
		let paragrafo = this.criarElemento('p');
		let pergunta = this.criarTexto("2. Quero senti-lo?");
		let sim = this.criarElemento('button',"Sim");
		let nao = this.criarElemento('button',"Não");
		let hidden = this.criarElemento('input',null,'hidden',2,'valor');
		paragrafo.appendChild(pergunta);
		paragrafo.appendChild(sim);
		paragrafo.appendChild(nao);
		paragrafo.appendChild(hidden);
		row.appendChild(paragrafo);
	}else if(valor == 2){
		let row = this.questao(conteudo);
		let paragrafo = this.criarElemento('p');
		let pergunta = this.criarTexto("3. Prefiro senti-lo ou não senti-lo?");
		let sim = this.criarElemento('button',"Senti-lo");
		let nao = this.criarElemento('button',"Não senti-lo");
		let hidden = this.criarElemento('input',null,'hidden',3,'valor');
		paragrafo.appendChild(pergunta);
		paragrafo.appendChild(sim);
		paragrafo.appendChild(nao);
		paragrafo.appendChild(hidden);
		row.appendChild(paragrafo);
	}else if(valor == 3){
		let row = this.questao(conteudo);
		let paragrafo = this.criarElemento('p');
		let pergunta = this.criarTexto("4. Posso liberar-me deste sentimento?");
		let sim = this.criarElemento('button',"Sim");
		let nao = this.criarElemento('button',"Não");
		let hidden = this.criarElemento('input',null,'hidden',4,'valor');
		paragrafo.appendChild(pergunta);
		paragrafo.appendChild(sim);
		paragrafo.appendChild(nao);
		paragrafo.appendChild(hidden);
		row.appendChild(paragrafo);
	}else if(valor == 4){
		let row = this.questao(conteudo);
		let paragrafo = this.criarElemento('p');
		let pergunta = this.criarTexto("5. Eu permito?");
		let sim = this.criarElemento('button',"Sim");
		let nao = this.criarElemento('button',"Não");
		let hidden = this.criarElemento('input',null,'hidden',5,'valor');
		paragrafo.appendChild(pergunta);
		paragrafo.appendChild(sim);
		paragrafo.appendChild(nao);
		paragrafo.appendChild(hidden);
		row.appendChild(paragrafo);
	}else if(valor == 5){
		let row = this.questao(conteudo);
		let paragrafo = this.criarElemento('p');
		let pergunta = this.criarTexto("6. Quando?");
		let sim = this.criarElemento('button',"Agora");
		let nao = this.criarElemento('button',"Nunca");
		let hidden = this.criarElemento('input',null,'hidden',6,'valor');
		paragrafo.appendChild(pergunta);
		paragrafo.appendChild(sim);
		paragrafo.appendChild(nao);
		paragrafo.appendChild(hidden);
		row.appendChild(paragrafo);
	}else{
		window.location.href = "index.html";
	}
}
function questao(conteudo){
	const divConteudo = document.createElement('div');
    divConteudo.classList.add("row");
    return conteudo.appendChild(divConteudo);
}
function criarElemento(elemento,texto=null,type=null,valor=null,id=null){
	let paragrafo = document.createElement(elemento);
	paragrafo.innerHTML = texto;
	if (type) paragrafo.setAttribute("type", type);paragrafo.value = valor;paragrafo.id = id;
	return paragrafo;
}
function criarTexto(texto){
	let valor = document.createTextNode(texto);
	return valor;
}
function finish(){
	alert("Parabéns! Provavelmente você está sentido-se muito melhor!")
}