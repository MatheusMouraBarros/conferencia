const form = document.getElementById("inscricao_form");
const radios = document.querySelectorAll('[name = "como_ficou_sabendo"]');
const caixa_outros = document.getElementById('caixa_outros');

form.addEventListener("submit", (event) => {
    const nome = document.querySelector("#nome");
    const email = document.querySelector("#email");
    if (nome.value === "") {
      alert("Por favor, insira o nome");
      event.preventDefault();
      return;
    }
    if (email.value === ""){
        alert("Por favor, insira o email");
      event.preventDefault();
      return;
    }
    alert("Inscrição realizada com sucesso!");
    form.submit();
});

radios.forEach(valor => {
    valor.addEventListener('click', () => {
        if(valor.value == 'Outros'){
            caixa_outros.style.display = 'block';
        }else caixa_outros.style.display = 'none';
    })
})