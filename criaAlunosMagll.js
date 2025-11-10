document.getElementById('formAlunos').addEventListener('submit', async function (e) {
    e.preventDefault();

    const id = document.getElementById('id').value;
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const idade = document.getElementById('idade').value;
    const peso = document.getElementById('peso').value;
    const objetivo = document.getElementById('objetivo').value;

    const response = await fetch('http://localhost:3000/aluno', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, nome, email, idade, peso, objetivo })
    });

    const data = await response.json();

    if (response.ok) {
        document.getElementById('message').textContent = 'aluno cadastrado!';
        document.getElementById('formAlunos').reset();
    } else {
        document.getElementById('message').textContent = 'Erro: ' + data.error;
    }
});


