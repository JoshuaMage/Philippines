<script>
	import Boracay from '../../image/place/boracay/boracay.jpg';
	import Palawan from '../../image/place/palawan/palawan.jpg';
	import Banaue from '../../image/place/banaue/banaue.jpg';
	import Manila from '../../image/place/manila/Manila.jpg';
	import { goto } from '$app/navigation';
	import PlaceSelection from '$lib/placeSelection.svelte';
</script>

<div class="m-10 flex flex-col items-center">
	<div>
		<h1 class="font-[helvetica] text-xl font-bold">
			Most Popular Tourist Attractions in the Philippines
		</h1>
	</div>
	<div class="mt-10 grid grid-cols-3 gap-10">
		<a class="group relative" href="/place/boracay">
			<PlaceSelection imageSrc={Boracay} description="Boracay" />
		</a>
		<a class="group relative" href="/place/palawan">
			<PlaceSelection imageSrc={Palawan} description="Palawan" />
		</a>
		<a class="group relative" href="/place/banaue">
			<PlaceSelection imageSrc={Banaue} description="Banaue" />
		</a>
		<a class="group relative" href="/place/manila">
			<PlaceSelection imageSrc={Manila} description="Manila" />
		</a>
	</div>
</div>
