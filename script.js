const amigos = ['pedro','ana','clara','joão','maria'];
//percorrendo array com forEach
let msg='';
amigos.forEach((amigo,indice)=>{
    msg+=`${indice + 1}, ${amigo}\n`;
});
alert(`Com forEach:\n${msg}`);
//encontrando um item no array com indexof
const indicelucas = amigos.indexOf('lucas');
if (indicelucas === -1){
    alert('lucas não encontrado na lista de amigos.');
    //adicionandoitem no array
    amigos.push('lucas');
}
//removendo ANA do array
const indiceAna = amigos.indexOf('ana');
if(indiceAna !== -1){
    amigos.splice(indiceAna,1);
}
//percorrendo array com for ... of
msg=''
for (const amigo of amigos){
    msg +=`${amigo}\n`;
}
alert(`com for ... of\n${msg}`);
