function segurancaVirtual() {
    nomeConvidado = document.querySelector('#nomeConvidado').value;
    permissaoFesta = ['Bruna', 'Alaim', 'Bianca'];
    if (permissaoFesta.includes(nomeConvidado)) {
        document.getElementById('PermissaoEntrada').innerText = 'Você pode entrar'
    }
    else {
        document.getElementById('PermissaoEntrada').innerText = 'Você não pode entrar'
    }
}











