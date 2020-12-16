<template>
  <div>
    <div class="row">
      <div class="col">
        <b-card
          :title="product.title"
          :sub-title="product.project"
          :img-src="product.url"
          :img-alt="product.title"
          img-top
          class="mb-2">
          <b-card-text>
            {{ product.body }}
          </b-card-text>
        </b-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData (context) {
    const { data } = await context.$axios.get('/api/products/' + context.route.params.id)
    return {
      product: data
    }
  }
}
</script>
