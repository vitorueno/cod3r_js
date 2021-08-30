// exemplo de callback no browser
document.getElementsByTagName('body')[0].onclick = function (e) {
    console.log('O evento ocorreu!');
}

// com isso a função só será chamada quando o evento clicar acontecer