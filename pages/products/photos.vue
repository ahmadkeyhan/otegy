<template>
  <div>
    <h1>عکاسی ها</h1>
    <hr>

    <div class="row">
      <div class="col-md-6">
        <nuxt-link :to="'/products/' + product._id" v-for="product in products" :key="product._id">
          <b-card :title="product.title" :img-src="product.url" :img-alt="product.title" img-top style="max-width: 20rem;" class="mb-2">
            <b-card-text>
              {{ product.project }}
            </b-card-text>
          </b-card>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData(context){
    const {data} = await context.$axios.get('/api/products/type/photo')
    return {
      products : data
    }
  }
}
</script>
