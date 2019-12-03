<template>
	<div>
		<div class="nav">
			<li>
				<router-link to="/">
					主页
				</router-link>
			</li>
		</div>
		
		
		<router-view />
		<footer></footer>
	</div>
	
</template>

<script>
</script>

<style>
	.nav{
		display: flex;
		width: 100%;
		position: fixed;
	}
</style>
