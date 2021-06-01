var conteudoPrincipalEditorCodigo = document.querySelector(".conteudoPrincipal-editor-codigo");

function mudaCor() {
	var corEscolhida = document.querySelector(".input-color").value;
	conteudoPrincipalEditorCodigo.style.background = corEscolhida;
}
