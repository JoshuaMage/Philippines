<script>
    let {title, content, imageSrc} = $props();
  </script>
  
  <div class="card bg-base-100 w-full shadow-sm m-5 ">
    <div class="carousel w-full">
      {#each imageSrc as image, index (image.src)}
        <div id={`slide${index}`} class="carousel-item relative w-full">
          <img src={image.src} alt={image.alt} class="w-full object-cover h-[500px] mb-2 rounded-2xl" />
  
          <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href={`#slide${(index - 1 + imageSrc.length) % imageSrc.length}`} class="btn btn-circle">❮</a>
            <a href={`#slide${(index + 1) % imageSrc.length}`} class="btn btn-circle">❯</a>
          </div>
        </div>
      {/each}
    </div>
    <div class="card-body">
        <h2 class="mb-2 text-3xl text-primary font-bold text-center">{title}</h2>
        <p class="text-center font-mono tracking-tighter">{content}</p>
    </div>
  </div>
  