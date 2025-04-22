<script>
	import Carousel from '$lib/carousel.svelte';
	import PlaceSection from '$lib/placeSection.svelte';
	import BatadRice from '../../../image/place/banaue/BatadRice.jpg';
	import RiceTerraces from '../../../image/place/banaue/RiceTerraces.jpg';
	import HapaoTerraces from '../../../image/place/banaue/Hapao Rice.jpg';
	import Banaue from '../../../image/place/banaue/banaue.jpg';
	import BanauePhilippines from '../../../image/place/banaue/BanauePhilippines.jpg';

	let images = [
		{ src: BanauePhilippines, alt: 'BanauePhilippines' },
		{ src: Banaue, alt: 'Banaue' },
		{ src: BatadRice, alt: 'BatadRice' },
		{ src: HapaoTerraces, alt: 'HapaoTerraces' },
		{ src: RiceTerraces, alt: 'RiceTerraces' }
	];
</script>

<div class="m-10 flex flex-col justify-center">
	<div class="flex flex-col items-center">
		<Carousel
			title="Banaue"
			content="The Banaue Rice Terraces, located in the Cordillera region of the Philippines, are ancient, hand-carved rice terraces created by the Ifugao people over 2,000 years ago. Often called the Eighth Wonder of the World, they are a UNESCO World Heritage Site and a testament to sustainable agriculture and the ingenuity of the Ifugao people. "
			imageSrc={images}
		/>
	</div>
	<div class="mt-10 flex flex-col items-center gap-5">
		<h2 class="text-secondary text-3xl font-bold">Most Popular tourist Spots in Banaue</h2>
		<div>
			<PlaceSection
				title="Batad Rice Terraces"
				content="The Banaue Rice Terraces are terraces that were carved into the mountains of Banaue, Ifugao, in the Philippines, by the ancestors of the Igorot people. The terraces are occasionally called the Eighth Wonder of the World. It is commonly thought that the terraces were built with minimal equipment, largely by hand. "
				imageSrc={BatadRice}
				imageAlt="BatadRice"
			/>
			<PlaceSection
				title="Rice Terraces of the Philippines"
				content="The Rice Terraces of the Philippine Cordilleras, particularly the Banaue Rice Terraces, are a remarkable example of a living cultural landscape, showcasing the ingenuity of the Ifugao people in adapting to the mountainous terrain. These terraces, carved into the mountainsides, are a testament to their sustainable farming practices and deep connection to the land. "
				imageSrc={RiceTerraces}
				imageAlt="RiceTerraces"
			/>
			<PlaceSection
				title="Hapao Rice Terraces"
				content="The Hapao Rice Terraces, like the famous Banaue Terraces, are a marvel of ancient engineering and Ifugao culture. They are a UNESCO World Heritage Site, known for their unique, hand-carved landscape used for traditional wet-rice agriculture. While not as widely known as Banaue, Hapao offers a more off-the-beaten-path experience with slightly flatter terrain and natural hot springs. "
				imageSrc={HapaoTerraces}
				imageAlt="HapaoTerraces"
			/>
		</div>
	</div>
</div>
