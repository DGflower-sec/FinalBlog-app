import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '@/views/index.vue'
import Nav from '@/views/Nav.vue'
Vue.use(VueRouter)

const routes = [{
	path: '/',
	component: Nav,
	children: [{
			path: '/',
			redirect: 'index'
		},
		{
			path: 'index',
			component: Index
		}



	]
}]

const router = new VueRouter({
	routes
})

export default router
