function clicou() {
    let num1=Number(prompt('primeiro numero:'));
    let num2=Number(prompt('segundo numero:'));
    let op= ['1.soma','2.subtracao','3.divisao','4.multiplicação'];
    let saida= Number(prompt (`Valores informados: ${num1} e ${num2}\nO que vamos fazer?\n
${op[0]} \n ${op[1]} \n ${op[2]} \n ${op[3]}`));



let text= document.getElementById('text')
text.innerHTML = `<h2>Realizando operação...</h2>`

switch (saida) {
    case 1:
        text.innerHTML += `<p>${num1}+${num2}=${num1+num2}</p>`
        break
    case 2:
        text.innerHTML += `<p>${num1}-${num2}=${num1-num2}</p>`
        break
    case 3:
        text.innerHTML += `<p>${num1}/${num2}=${num1/num2}</p>`
        break
    case 4:
        text.innerHTML += `<p>${num1}*${num2}=${num1*num2}</p>`
        break
    default:
        text.innerHTML += `<p>OPÇÃO INVÁLIDA! Você digitou ${num1} e ${num2}, mas a operação não existe </p>`
         break
}

}