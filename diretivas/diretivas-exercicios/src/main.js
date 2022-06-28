import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.directive('destaque', {
	bind(el, binding, vnode) {
		//el.style.backgroundColor = 'lightgreen' //passando o valor
		//el.style.backgroundColor = binding.value //para receber o valor

		let atraso = 0

		if(binding.modifiers['atrasar']) atraso = 3000 //criando modificadores para a diretiva
		
		setTimeout(() => {
			if(binding.arg === 'fundo'){//criando argumentos para a diretiva...
				el.style.backgroundColor = binding.value
			} else {
				el.style.color = binding.value
			}

		}, atraso)

	}
})

new Vue({
	render: h => h(App),
}).$mount('#app')