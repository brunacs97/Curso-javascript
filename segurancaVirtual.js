function segurancaVirtual() {
    nome = document.querySelector('#nome').value;
    nomeConvidado = document.querySelector('#nomeConvidado').value;
    
    permissaoFesta = ['Bruna', 'Alaim', 'Bianca'];
    if (permissaoFesta.includes(nomeConvidado)) {
        document.getElementById('PermissaoEntrada').innerText = `Você pode entrar ${nome}`
    }
    else {
        document.getElementById('PermissaoEntrada').innerText = 'Você não pode entrar'
    }
}











