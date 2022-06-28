<template>
	<div id="app">
		<h1>Diretivas</h1>
		<hr/>
		<p v-text="'Usando diretiva v-text'"></p>
		<p v-html="'Usando diteriva <strong>v-html</strong>'"></p>
		<hr/>
		<p v-destaque:fundo.atrasar="'pink'">Usando diretiva personalizada global</p>
		<p v-destaque-local="'lightgreen'">Usando diretiva localmente</p>
	</div>
</template>

<script>
export default {
	directives: {
		'destaque-local': {
			bind(el, binding, vnode) {
				el.style.backgroundColor = binding.value
			}
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
	font-size: 2.5rem;
}
</style>
