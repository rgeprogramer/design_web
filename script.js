let nasc = prompt('digite seu ano de nascimento:');
nasc = parseInt(nasc);
let fds = confirm('clique em ok se hoje é fim de semana:');
alert(`hoje é fim de semana ? ${fds == true}`);
alert(`Vocé é maior de idade ? ${2025 - nasc >=18}`);
alert(`Vocé pode beber ? ${fds == true && (2025 - nasc) >=18}`);