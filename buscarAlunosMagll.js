async function ListarAlunos() {
    const buscaNoBancoDeDados = await fetch('http://localhost:3000/alunosMagll');
    const respostaObtida = await buscaNoBancoDeDados.json();
    console.log(respostaObtida);
    let html = '<table border="1"><tr><th>CPF</th><th>Nome</th></tr>';

    respostaObtida.forEach(alunosMagll => {
        html += `<tr><td>${alunosMagll.id}</td><td>${alunosMaglls.nome}</td><td>${alunosMagll.email}</td><td>${alunosMagll.idade}</td><td>${alunosMagll.peso}</td><td>${alunosMagll.objetivo}</td></tr>`;
    });

    html += '</table>';
    document.getElementById('resultado').innerHTML = html;
}
