new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods:{
        exibirAlerta(){
            alert('Você clicou no botão!')
        },
        alterarValor(event){
            this.valor = event.target.value
        }
    }
})