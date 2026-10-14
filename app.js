class Animal{
    constructor(n,c='desconhecido',a=0.0, p=0,r='vira-lata'){
        this.nome=n;
        this.cor=c;
        this.altura=a;
        this.peso=p;
        this.raca=r
    }
    falar(){
        alert('oi')
    }
    comer(kg){
        this.peso= this.peso + kg;
        alert('comi')
    }
    cagar(kg){
        this.peso=this.peso-kg;
        alert('caguei')
    }
    saudar(){
        let msg= `olá meu nome é ${this.nome}\n`
        msg=msg+`cor:${this.cor} Raça: ${this.raca}\n `
        msg=msg+`altura: ${this.altura}\n`
        msg=msg+`peso: ${this.peso}\n`
        return msg
    }
}

class Cachorro extends Animal{
    constructor(n,c='desconhecido',a=0.0, p=0,r='vira-lata'){
        super(n,c,a,p,r);
        this.patas = 4;

    }
    falar(){
        alert('au!au!')
    }
    saudar(){
        let msg = super.saudar();
        msg =msg+'sou um cachorro';
        alert(msg)
    }

}

class Passaro extends Animal{
    constructor(n,c='desconhecido',a=0.0, p=0,r='vira-lata'){
        super(n,c,a,p,r);
    }
    falar(){
        alert('fiu!fiu!')
    }
     saudar(){
        let msg = super.saudar();
        msg =msg+'sou um passaro';
        alert(msg)
    }
}

const balu = new Cachorro ('Balu Brasil');
const mel = new Cachorro ('mel','amarelo',1.10,45,'labrador')
const leleco = new Passaro('leleco Brasil','verde',undefined,undefined,'papagaio')
