function segurancaVirtual() {
    nome = document.querySelector('#nome').value;
    nomeConvidado = document.querySelector('#nomeConvidado').value;
    
    permissaoFesta = ['Bruna', 'Alaim', 'Bianca'];

    if (nome === '') {
        alert('Digite seu nome')
    }
    if (nomeConvidado === '') {
        alert('Digite nome convidado')
    }
    if (permissaoFesta.includes(nomeConvidado)) {
        document.getElementById('PermissaoEntrada').innerText = `Você pode entrar ${nome}`
    }
    else {
        document.getElementById('PermissaoEntrada').innerText = 'Você não pode entrar'
    }
}











