function segurancaVirtual() {
    nome2 = document.querySelector('#nome').value;
    nomeConvidado = document.querySelector('#nomeConvidado').value;
    
    permissaoFesta = ['Bruna', 'Alaim', 'Bianca'];

    //não funciona pq todo campo do tipo text retorna string usar regex abaixo da funcao myfunction()
    // if (typeof nome.value !== 'string' || typeof nomeConvidado.value !== 'string') {
    //     alert('Digite um texto')
    // }

    if (nome2 === '') {
        alert('Digite seu nome')
    }
    if (nomeConvidado === '') {
        alert('Digite nome convidado')
    }
    if (permissaoFesta.includes(nomeConvidado)) {
        document.getElementById('PermissaoEntrada').innerText = `Você pode entrar ${nome2}`
    }
    else {
        document.getElementById('PermissaoEntrada').innerText = 'Você não pode entrar'
    }
}

function apenasLetras(evt) {
    if(!/[a-záéíóúàèìòùãõâêîôûäëïöüç]/i.test(evt.key)) return false;
  }











