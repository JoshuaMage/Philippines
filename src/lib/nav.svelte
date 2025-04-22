<script>
</script>

<nav class="flex m-10 items-center">
	<a href="/" class="flex-1 font-bold text-2xl">Philippines</a>
	<div class="flex items-center gap-6 font-semibold">
		<a href="/place" class="hover-underline">Place</a>
		<a href="/history" class="hover-underline">History</a>
		<a href="/heroes" class="hover-underline">Heroes</a>
		<a href="/tradition" class="hover-underline">Tradition</a>
		<a href="/president" class="hover-underline">President</a>
		<a href="/indingenous" class="hover-underline">Indingenous</a>
		<a href="/animal" class="hover-underline">Animal</a>
		<a href="/food" class="hover-underline">Food</a>
		<a href="/news" class="hover-underline">News</a>
		<input type="text" placeholder="Search"  class="input"/>
	</div>
</nav>

<style>
.hover-underline {
    text-decoration: none;
    position: relative;
}

.hover-underline::after {
    content: '';
    display: block;
    width: 100%;
    height: 2px;
    background: black;
    position: absolute;
    left: 0; 
    bottom: -5px;
    transform: scaleX(0);
    transition: transform 0.3s ease; 
}

.hover-underline:hover::after {
    transform: scaleX(1);
}
</style>
