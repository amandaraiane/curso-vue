new Vue({
    el: '#desafio',
    data: {
        nome: 'Amanda',
        idade: 24,
        link: 'https://miro.medium.com/max/1400/1*ACR0gj0wbx91V_xgURifWg.png'
    },
    methods: {
        multiplicaIdade: function(){
            return this.idade * 3
        },

        numeroAleatorio: function(){
            return Math.random()
        }
    }

})