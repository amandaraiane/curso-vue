<template>
	<div id="app" class="container-fluid">
		<h1>Animações</h1>
		<hr>
		<b-button variant="primary" class="mb-4" @click="exibir= !exibir">Mostrar mensagem</b-button>

		<transition name="fade" appear>
			<b-alert variant="info" show v-if="exibir">{{ msg }}</b-alert>
		</transition>

		<transition name="slide" appear>
			<b-alert variant="info" show v-if="exibir">{{ msg }}</b-alert>
		</transition>

		<transition :name="tipoExibicao" mode="out-in">
			<b-alert variant="info" show v-if="exibir" key="info">{{ msg }}</b-alert>
			<b-alert variant="warning" show v-else key="war">{{ msg }}</b-alert>
		</transition>

		<hr>

		<button @click="exibir2 = !exibir2">Mostrar</button>
		<transition>
			<div v-if="exibir2" class="caixa">

			</div>
		</transition>
	</div>
</template>

<script>

export default {
	data() {
		return {
			msg: 'Essa é uma mensagem a ser exibida',
			exibir: false,
			exibir2: true,
			tipoExibicao: 'fade'
		}
	}
}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
	font-size: 1.5rem;
}

.caixa {
	height: 100px;
	width: 300px;
	margin: 30px auto;
	background-color: lightgreen;
}

.fade-enter, .fade-leave-to {
	opacity: 0;
}

.fade-enter-active, .fade-leave-active {
	transition: opacity 2s;
}

@keyframes slide-in {
	from {transform: translateY(40px);}
	to {transform: translateY(0);}
}

@keyframes slide-out {
	from {transform: translateY(0);}
	to {transform: translateY(40px);}
}

.slide-enter-active {
	animation: slide-in 2s ease;
	transition: opacity 2s;
}

.slide-leave-active {
	animation: slide-out 2s ease;
	transition: opacity 2s;
}

.slide-enter, .slide-leave-to {
	opacity: 0;
}
</style>
