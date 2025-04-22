<script>
    import Boracay from '../../image/place/boracay/boracay.jpg';
    import Palawan from '../../image/place/palawan/palawan.jpg'
    import { goto } from '$app/navigation';
    import PlaceSelection from '$lib/placeSelection.svelte';
</script>

<div class="flex flex-col items-center mx-6">
    <div>
        <h1 class="font-bold text-xl font-[helvetica]">Most Popular Tourist Attractions in the Philippines</h1>
    </div>
    <div class="flex gap-4 mt-10">
        <a class="relative group" href="/place/boracay">
            <PlaceSelection 
            imageSrc = {Boracay}
            description="Boracay Island"
            />
        </a>
        <a class="relative group" href="/place/palawan">
            <PlaceSelection 
            imageSrc = {Palawan}
            description="Palawan Island"
            />
        </a>
    </div>
</div>

