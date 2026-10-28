const amigos = []
let editando = null;

const cadastro = document.getElementById('cadastro');
const nome = cadastro.nome;
const nasc = cadastro.nasc
const whatsapp = cadastro.whatsapp

const lista = document.getElementById('lista')

cadastro.addEventListener('submit',function(e){
    e.preventDefault();
    let item = [nome.value, nasc.value, whatsapp.value];
    if (editando == null){
        let check =amigos.find (item => item[0] == nome.value );
        if(check == undefined){
            amigos.unshift(item)
        }
        else{
            alert(`${nome.value} Já cadastrado.`)
        }
    }
    else{
        let amigo = amigos[editando]
        amigo[0]=nome.value
        amigo[1]=nasc.value
        amigo[2]=whatsapp.value
        
    }
    exibirLista()

})

function exibirLista(){
    let itens=''
    for(let i=0; i<amigos.length; i++){
        let item = amigos[i];
        let remover = `<button onclick='remover(${i})'>remover</button>`
        let atualizar = `<button onclick='atualizar(${i})'>atualizar</button>`
        let li = `<li> ${item[0]} | ${item[1]} | ${item[2]} | ${remover} ${atualizar}</li>`;
        itens = itens + li
    }
    lista.innerHTML = itens
    cadastro.reset()
}

function remover (i){
    let item = amigos [i];
    let check = confirm(`deseja realmente excluir ${item} ?`)
    if (check == true){
        amigos.splice(i,1);
    }
    exibirLista()
}

function atualizar(i){
    editando = i;
    let item = amigos [editando];
    nome.value = item[0]
    nasc.value = item[1]
    whatsapp.value = item[2]
}