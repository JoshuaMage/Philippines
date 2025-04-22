<script>
	let { title, content, imageSrc, imageAlt } = $props();
</script>

<div class="card bg-base-100 w-full shadow-sm m-5">  
    <div class="card-body">
      <h2 class="mb-2 text-2xl text-neutral font-bold text-center">{title}</h2>
      <p class="text-center text-neutral font-mono tracking-tighter">{content}</p>
    </div>
    <figure>
        <img src={imageSrc} alt={imageAlt} class="image" />
      </figure>
  </div>

<style>
	.image {
		height: 600px;
		width: 100%;
		max-width: 1300px;
		border-radius: 20px;
		object-fit: cover;
		transition: opacity 0.3s ease;
        margin-bottom: 5px;
	}
</style>
