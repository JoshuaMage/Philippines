<script>
	import PlaceSection from '$lib/placeSection.svelte';
	import Palawan1 from '../../../image/place/palawan/palawan1.jpg';
	import PuertoPrincesa from '../../../image/place/palawan/puertoPrincesa.jpg';
	import Elnido from '../../../image/place/palawan/Elnido.jpg';
    import Twinlagoon from '../../../image/place/palawan/Twin lagoon.jpg';
    import KagayanLake from '../../../image/place/palawan/Kagayan Lake.jpg';
    import Coron from '../../../image/place/palawan/Coron.jpg';
    import BucuitBay from '../../../image/place/palawan/Bucuit Bay.jpg';
    import FortsantaIsabel from '../../../image/place/palawan/Fort Santa Isabel.jpg';
	import Carousel from '$lib/carousel.svelte';

	let images = [
		{src: Palawan1, alt: 'Palawan Island'},
		{src: PuertoPrincesa, alt: 'PuertoPrincesa Island'},
		{src: Elnido, alt: 'Elnido Island'},
		{src: Twinlagoon, alt: 'Twinlagoon Island'},
		{src: KagayanLake, alt: 'KagayanLake Island'},
		{src: Coron, alt: 'Coron Island'},
		{src: BucuitBay, alt: 'BucuitBay Island'},
		{src: FortsantaIsabel, alt: 'FortsantaIsabel Island'},
	]
</script>

<div class="m-10 flex flex-col justify-center">
	<div class="flex flex-col items-center">
		<Carousel 
		title="PALAWAN ISLAND"
		content="Palawan is the largest island in the Palawan Province, in the western Philippines. The capital, Puerto Princesa, is known for the biodiverse Puerto Princesa Subterranean River National Park, where boats run along an underground river through vast caves. Off the east coast, Honda Bay’s islands are dotted with resorts. Farther out in the Sulu Sea, Tubbataha Reefs Natural Park has reefs teeming with marine life."
		imageSrc={images}
	  />
	
	</div>

	<div class="mt-10 flex flex-col items-center gap-5">
		<h2 class="text-3xl font-bold text-secondary">Most Popular tourist Spots in PALAWAN</h2>
		<div>
			<PlaceSection
				title="PUERTO PRINCESA"
				content="Puerto Princesa is a coastal city on Palawan Island in the western Philippines. It's a base for boat trips through the massive limestone caves and underground river of the biodiverse Puerto Princesa Subterranean River National Park. Dive sites are dotted around Puerto Princesa Bay, home to long-nosed dolphins, turtles and rays. Close to the port is the 19th-century Immaculate Concepcion Cathedral."
				imageSrc={PuertoPrincesa}
				imageAlt="Puerto Princesa"
			/>
			<PlaceSection
				title="El Nido"
				content="El Nido is a Philippine municipality on Palawan island. It’s known for white-sand beaches, coral reefs and as the gateway to the Bacuit archipelago, a group of islands with steep karst cliffs. Miniloc Island is famed for the clear waters of its Small and Big lagoons. Nearby Shimizu Island has fish-filled waters. The area has many dive sites, including Dilumacad Island’s long tunnel leading to an underwater cavern."
				imageSrc={Elnido}
				imageAlt="El Nido"
			/>
            <PlaceSection
				title="Twin Lagoon"
				content="Twin Lagoon in Coron, Palawan is primarily known for its stunning natural beauty, consisting of two lagoons separated by a limestone wall. The outer lagoon has a hidden site with green waters, white sand, and limestone cliffs, while the inner lagoon is accessible by swimming or climbing a staircase. It's a popular stop on island-hopping tours and is celebrated for its crystal-clear waters and dramatic limestone formations. "
				imageSrc={Twinlagoon}
				imageAlt="Twin lagoon"
			/>
            <PlaceSection
            title="Kagayan Lake"
            content="Kayangan Lake, often spelled Kagayan Lake, is a stunning freshwater lake located on Coron Island in the Philippines. It's known for its crystal-clear waters, unique underwater rock formations, and the surrounding lush greenery and limestone cliffs. The lake is a popular destination for swimming, snorkeling, and diving, and is also a great spot for photography"
            imageSrc={KagayanLake}
            imageAlt="Kagayan lake"
        />
        <PlaceSection
        title="Coron"
        content="Coron is another popular tourist destination located in the province of Palawan in the Philippines. It is known for its crystal-clear waters, stunning coral reefs, and World War II shipwrecks that attract divers from around the world."
        imageSrc={Coron}
        imageAlt="Coron"
    />
    <PlaceSection
    title="Bucuit Bay"
    content="Situated in the northmost tip of Mainland Palawan, Bacuit Bay is composed of different islands that feature a wide and unique range of diversity of all living organisms found both underwater and on land which is perfect for nature lovers."
    imageSrc={BucuitBay}
    imageAlt="Bucuit bay"
/>
<PlaceSection
title="Fort Santa Isabel"
content="The Land of Champions offers an abundance of natural beauty and baseball. Known as The Land of Champions thanks to the area's rich sports tradition, Santa Isabel is located on the south coast of Puerto Rico between Juana Díaz and Salinas in what is known as the Costanera del Su"
imageSrc={FortsantaIsabel}
imageAlt="Fort Santa Isabel"
/>
		</div>
	</div>
</div>
