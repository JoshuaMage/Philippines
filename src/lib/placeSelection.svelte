<script>
    let {imageSrc, imageAlt, description} = $props()
</script>

<div class="relative group">
    <img src={imageSrc} alt={imageAlt} class="image transition-opacity duration-300 group-hover:opacity-50" >
    <p class="title font-black text-4xl">{description}</p>
</div>

<style>
    .image {
        height: 500px;
        width: 500px;
        border-radius: 20px;
        object-fit: cover;
        transition: opacity 0.3s ease;
    }

    .group:hover .image {
        opacity: 0.5;
    }

    .title {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #294B29;
        opacity: 0;
        transition: opacity 0.3s ease;
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    }

    .group:hover .title {
        opacity: 1; /* ShQow title on hover */
    }
</style>