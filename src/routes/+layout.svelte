<script>
	import Nav from '$lib/nav.svelte';
import '../app.css';

	let { children } = $props();
</script>

<div>
	<Nav />
</div>

{@render children()}
