<script>
	import Manila from '../../../image/place/manila/Manila.jpg';
	import Intramuros from '../../../image/place/manila/Intramuros.jpg';
	import RizalPark from '../../../image/place/manila/RizaPark.jpg';
	import ManilaCathedral from '../../../image/place/manila/ManilaCathedral.jpg';
	import CasaManila from '../../../image/place/manila/Casa Manila.jpg';
	import SanAgustinChurch from '../../../image/place/manila/San agustin.jpg';
	import Binondo from '../../../image/place/manila/Binondo.jpg';
	import PlaceSection from '$lib/placeSection.svelte';
	import Carousel from '$lib/carousel.svelte';

	let images = [
		{ src: Manila, alt: 'Manila' },
		{ src: Intramuros, alt: 'Intramuros' },
		{ src: RizalPark, alt: 'Rizal Park' },
		{ src: ManilaCathedral, alt: 'Manila Cathedral' },
		{ src: SanAgustinChurch, alt: 'San Agustin Church' },
		{ src: Binondo, alt: 'Binondo' },
		{ src: CasaManila, alt: 'Casa Manila' }
	];
</script>

<div class="m-10 flex flex-col justify-center">
	<div class="flex flex-col items-center">
		<Carousel
			title="Manila"
			content="Manila's rich history is evident in landmarks like Intramuros, the historic walled city built during Spanish colonization. Within Intramuros lies the San Agustin Church, a UNESCO World Heritage Site . The city's diverse districts, such as Ermita and Malate, offer a mix of residential, commercial, and cultural experiences .​"
			imageSrc={images}
		/>
	</div>

	<div class="mt-10 flex flex-col items-center gap-5">
		<h2 class="text-secondary text-3xl font-bold">Most Popular tourist Spots in Manila</h2>
		<div>
			<PlaceSection
				title="Intramuros"
				content="Old-world Intramuros is home to Spanish-era landmarks like Fort Santiago, with a large stone gate and a shrine to national hero José Rizal. The ornate Manila Cathedral houses bronze carvings and stained glass windows, while the San Agustin Church museum has religious artwork and statues. Spanish colonial furniture and art fill Casa Manila museum, and horse-drawn carriages (kalesa) ply the area’s cobblestone streets. "
				imageSrc={Intramuros}
				imageAlt="Intramuros"
			/>
			<PlaceSection
				title="Rizal Monument"
				content="Rizal Park, also known as Luneta, is a large urban park in Manila, Philippines, dedicated to the memory of national hero Dr. José Rizal. It's a historic site where Rizal was executed and a popular spot for recreation, cultural events, and learning about Filipino history. The park features the Rizal Monument, a monument enshrining Rizal's remains, and a site commemorating his execution. "
				imageSrc={RizalPark}
				imageAlt="RizalPark"
			/>
			<PlaceSection
				title="Manila Cathedral"
				content="The Minor Basilica and Metropolitan Cathedral of the Immaculate Conception, commonly known as the Manila Cathedral, is a Roman Catholic basilica and cathedral church of the Archdiocese of Manila. It is dedicated to the Blessed Virgin Mary of the Immaculate Conception, the principal Patroness of the Philippines"
				imageSrc={ManilaCathedral}
				imageAlt="ManilaCathedral"
			/>
			<PlaceSection
				title="Casa Manila"
				content="The Casa Manila or “Manila House” is a living museum that features the lifestyle of an affluent Filipino family during the late Spanish colonial period. The façade of Casa Manila was patterned after a house that once stood at Jaboneros Street in the Chinese district of Binondo in the 1850’s. The interior decor of the house follows the taste of the turn of the late 19th century where furniture and furnishings were sourced from Europe and China. Painted walls, crystal chandeliers, carved traceries, Chinese ceramics and gilded furniture shows the elegance and luxury of a 19th century Manila house."
				imageSrc={CasaManila}
				imageAlt="CasaManila"
			/>
			<PlaceSection
				title="San Agustin Church"
				content="The Archdiocesan Shrine of Our Lady of Consolation and Cincture, also known as the Church of Saint Augustine and Immaculate Conception Parish, is a Roman Catholic church under the auspices of the Order of Saint Augustine located inside the historic walled city of Intramuros in Manila, Philippines"
				imageSrc={SanAgustinChurch}
				imageAlt="SanAgustinChurch"
			/>
			<PlaceSection
				title="Binondo"
				content="Binondo, Manila's Chinatown, is renowned as the world's oldest Chinatown. It's a vibrant district known for its rich history, culture, and delicious food, offering a unique blend of Filipino and Chinese traditions. Binondo is a major commercial and financial hub, with popular streets like Escolta and Ongpin featuring various businesses, including gold and jewelry stores, and numerous restaurants serving diverse Chinese cuisine. "
				imageSrc={Binondo}
				imageAlt="Binondo"
			/>
		</div>
	</div>
</div>
