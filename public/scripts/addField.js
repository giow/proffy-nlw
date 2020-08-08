// Procurar o botão
document.querySelector("#add-time")
// Quando Clicar no botao
.addEventListener('click', cloneField)
// executar uma ação
function cloneField(){
    //conferindo se deu certo
    console.log("DEU CERTO")
    // duplicar os campos, que campo?
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)//boolean: true or false
    // pegar os campos. que campos
    const fields = newFieldContainer.querySelectorAll('input')
    //para cada campo limpar
    fields.forEach(function(field){
        //pega o field od momento e limpa
        field.value = ""
    })
    // colocar na pagina: onde??
    document.querySelector("#schedule-items").appendChild(newFieldContainer)
}