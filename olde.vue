<template>
	<html lang="en">
	<meta charset="UTF-8" />
	<meta name="viewport" content="width=device-width" />
	<meta name="keywords" content="Tommy, Williams, Wommy, Tilliams, Website, Websites, Design, Develop, Development, Make, Create">
	<meta name="description" content="Tommy Williams's Website - Website Design / Development">
	<meta name="author" content="Tommy Williams, Wommy Tilliams">
	<title>Tommy Williams</title>
	<olde-aside/>
	<section>
		welcome<br>
		<br>
		tommy williams is<br>
		- designer: i design solutions to your problems<br>
		- developer: i develop code to achieve that design<br>
		<br>
		i can build your website from scratch or work off your template<br>
		i can design phone apps, but cannot develop or publish them<br>
		<br>
		most of my work is on the front end: what the user sees and interacts with<br>
		- html<br>
		- css<br>
		- javascript<br>
		- adobe photoshop / illustrator<br>
		<br>
		i also take on back end work: databases and scripts of more complex sites<br>
		- php<br>
		- mysql<br>
		- ruby on rails<br>
		<br>
		i emphasize<br>
		- mobile: as good as, if not better than the desktop site<br>
		- user interface / experience: the user understands what to do and enjoys doing it<br>
		- rapid development: focus on delivering a working prototype asap over long planning phases<br>
		- clean / efficient code: other developers can easily interpret and edit my code<br>
		<br>
		i am more familiar with<br>
		- mac over pc<br>
		- android over iphone<br>
		<br>
	</section>
	<!--
	To Do
		Resume
		Bio
		Icons
		SEO
			http://moz.com/learn/seo/meta-description
			http://googlewebmastercentral.blogspot.com/2014/03/introducing-new-webmaster-academy_18.html
		Split Social Media from Contact
		Inspiration / Websites I like
			http://itemsandthings.com/
		Github Version Control
		Rework Bio to say: Templates suck, you should hire me to upgrade
		Social Media rebranding
			twitter
			fb - wommy tilliams
		Add
			https://depaul.digication.com/toms_portfolio/Final_Media_Piece
			https://docs.google.com/document/d/16n7Eqc_12aQHAs6kDREl4x1FXbrcznPb0EQKfNwfpac/edit
		Email @wommytilliams.com
	-->
	</html>
</template>
<style>
body{
	font-family:tahoma,sans-serif;
	margin:0;
	font-variant:small-caps;

	display: flex;
	flex-direction:row-reverse;
}
section, aside{
	margin:1rem;
}
</style>
<script>
import oldeAside from "./_includes/olde-aside.vue"

export default {
	components: {
		oldeAside
	}	
}
</script>