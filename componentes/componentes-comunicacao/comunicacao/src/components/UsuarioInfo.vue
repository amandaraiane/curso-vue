<template>
    <div class="componente">
        <h2>As Informações de Usuário</h2>
        <p>Vários detalhes...</p>
        <p>Nome do usuário <strong>{{ nome }}</strong></p>
        <p>Nome do usuário invertido <strong>{{ inverterNome() }}</strong></p>
        <p>Idade do Usuário: <strong>{{ idade }}</strong></p>
        <button @click="reiniciarNome">Reiniciar nome</button>
        <button @click="reiniciarFn">Reiniciar nome (Callback)</button>
    </div>
</template>

<script>
export default {
    //props: ['nome'],
    props: {
        nome: {
            type: String,
            required: true,
            default: 'Anonimo'
        },
        reiniciarFn: Function,
        idade: Number
    },

    methods: {
        inverterNome(){
            return this.nome.split('').reverse().join('')
        },
        reiniciarNome(){
            this.nome = "Maria"
            this.$emit('nomeMudou', this.nome)
        }
    }
                
}
</script>

<style scoped>
    .componente {
        flex: 1;
        background-color: #ec485f;
        color: #fff;
    }
</style>
