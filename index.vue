<template>
	<html lang="en">
		<head>
			<meta charset="utf-8">
			<title>11ty & vue</title>
			<style v-html="css"/>
		</head>
		<body>
			<room-with-a/>
		</body>
	</html>
</template>
<script>
import roomWithA from "./_includes/room-with-a.vue";

export default {
	components: {
		roomWithA
	},
	computed: {
		css: function() {
			return this.getVueComponentCssForPage(this.page.url);
		}
	}
}
</script>
