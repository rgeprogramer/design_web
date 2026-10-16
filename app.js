const form=document.getElementById('Calculadora');
form.addEventListener('submit',calcular);
function calcular(e){
    e.preventDefault();
    let n1=Number(document.getElementById('n1').value)
    let n2=Number(document.getElementById('n2').value)
    let op=document.getElementById('op').value
    switch(op){
        case '+': alert(`resultado ${n1+n2}`);break;
        case '-': alert(`resultado ${n1-n2}`);break;
        case '*': alert(`resultado ${n1*n2}`);break;
        case '/': alert(`resultado ${n1/n2}`);break;
    }
}