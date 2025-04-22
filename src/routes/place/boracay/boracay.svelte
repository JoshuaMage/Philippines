<script>
	import Boracay from '../../../image/place/boracay/boracay3.jpg';
	import Boracay2 from '../../../image/place/boracay/boracay2.jpg';
	import Boracay4 from '../../../image/place/boracay/boracay4.jpg';
	import AntiAntihan from '../../../image/place/boracay/anti.antihan.jpg';
	import BoracayVolleyball from '../../../image/place/boracay/boracayvolleyball.jpg';
	import WillyRocks from '../../../image/place/boracay/willy rock .jpg';
	import PlaceSection from '$lib/placeSection.svelte';
	import Carousel from '$lib/carousel.svelte';

	let images = [
        { src: Boracay, alt: "Boracay Island" },
        { src: Boracay2, alt: "Boracay Island 2" },
        { src: Boracay4, alt: "Boracay Island 4" },
        { src: AntiAntihan, alt: "Anti Antihan" },
        { src: BoracayVolleyball, alt: "Boracay Volleyball" },
        { src: WillyRocks, alt: "Willy Rocks" }
    ];
</script>

<div class="m-10 flex flex-col justify-center">
	<div class="flex flex-col items-center">
		<Carousel 
		title="BORACAY ISLAND"
		content="Boracay Island is a tropical paradise known for its stunning white-sand beaches, crystal-clear waters, and vibrant nightlife. Visitors can enjoy a variety of attractions, including <br /> thrilling water sports, luxurious resorts, and diverse dining options, making it an ideal destination for relaxation and adventure."
		imageSrc={images}
	  />
	</div>

	<div class="mt-10 flex flex-col items-center gap-5">
		<h2 class="text-3xl font-bold text-secondary">Best time to go</h2>
		<div>
			<PlaceSection
				title="Dry Season"
				content="The dry season in Boracay, from November to April, is the best time to visit due to its sunny weather, calm waters perfect for water sports, and vibrant nightlife, ensuring an enjoyable and memorable experience."
				imageSrc={Boracay2}
				imageAlt="boracay2"
			/>
			<PlaceSection
				title="PEAK SEASON"
				content="The peak season in Boracay, from November to April, features sunny weather and vibrant activities, attracting large crowds and resulting in higher accommodation prices, making it the most popular time for tourists to visit the island."
				imageSrc={Boracay4}
				imageAlt="boracay4"
			/>
			<PlaceSection
				title="Ati-Atihan Festival"
				content="The main festival celebrated in Boracay is the Ati-Atihan Festival, which takes place every January, typically during the second or third week. This festival honors the Santo Niño and features vibrant parades and cultural activities."
				imageSrc={AntiAntihan}
				imageAlt="AntiAntihan"
			/>
			<PlaceSection
				title="Boracay International Beach Volleyball"
				content="The Boracay International Beach Volleyball event is a prominent tournament held on Boracay Island, showcasing top-level beach volleyball competition. It typically attracts both local and international teams, contributing to the island's vibrant sports and tourism scene.The Nestea Beach Volleyball tournament, held annually in Boracay, is the longest-running beach volleyball event in the Philippines, drawing significant participation and attention from both local and international players."
				imageSrc={BoracayVolleyball}
				imageAlt="boracayvolleyball"
			/>
			<PlaceSection
				title="Willy's Rock"
				content="Willy’s Rock is a unique volcanic rock formation located along the shallow waters of Station 1 on Boracay Island in the Philippines. It features a small shrine dedicated to the Blessed Virgin Mary, accessible via a staircase carved into the rock ."
				imageSrc={WillyRocks}
				imageAlt="boracayvolleyball"
			/>
		</div>
	</div>
</div>
