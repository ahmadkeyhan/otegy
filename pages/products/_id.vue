<template>
  <b-container dir="rtl">
    <headernav :navtitle="product.project + '.'"></headernav>
    <b-row>
      <b-col>
        <b-card
          :title="product.title"
          :img-src="product.url"
          :img-alt="product.title"
          img-top
          class="mt-3 productCard">
          <b-button to="/" class="projectBut">
            {{ product.body }}
          </b-button>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
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
