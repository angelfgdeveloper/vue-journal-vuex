<template>
  <div 
    class="entry-container mb-3 pointer p-2"
    @click="$router.push({ name: 'entry', params: { id: 10 } })">

    <div class="entry-title d-flex">
      <span class="text-success fs-5 fw-bold">19</span>
      <span class="mx-1 fs-5">Septiembre</span>
      <span class="mx-2 fw-light">2022, Miércoles</span>
    </div>

    <div class="entry-description">
      Ex fugiat nisi anim elit dolor veniam cupidatat occaecat in do incididunt sunt magna fugiat. In voluptate anim ad voluptate voluptate non. Laborum ad magna occaecat et nostrud veniam exercitation Lorem laborum nostrud cillum qui anim minim. Id ullamco magna ad aliqua do ipsum deserunt ex. Ex ipsum laborum dolore veniam mollit nulla aute mollit mollit.
    </div>

  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

.entry-container {
  border-bottom: 1px solid #2c3e50;
  transition: 0.2s all ease-in;
  
  &:hover {
    background-color: lighten($color: grey, $amount: 45);
    transition: 0.2s all ease-in;
  }

  .entry-description {
    font-size: 12px;
  }

}

</style>