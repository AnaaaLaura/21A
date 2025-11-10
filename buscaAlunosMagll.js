async function listarTodos() {
    const buscaNoBancoDeDados = await fetch('http://localhost:3000');
    const respostaObtida = await buscaNoBancoDeDados.json();
    console.log(respostaObtida);
    let html = '<table border="1"><tr><th>CPF</th><th>Nome</th></tr>';

    respostaObtida.forEach(alunos => {
        html += `<tr><td>${alunos.id}</td><td>${alunos.nome}</td><td>${alunos.email}</td><td>${alunos.idade}</td><td>${alunos.peso}</td><td>${alunos.objetivo}</td></tr>`;
    });

    html += '</table>';
    document.getElementById('resultado').innerHTML = html;
}
