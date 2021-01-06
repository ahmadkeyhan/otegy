<template>
  <b-form-row>
    <b-col v-for="product in products" :key="product._id" cols="6" md="3">
      <nuxt-link :to="'/products/' + product._id">
        <b-card
          :img-src="product.url"
          :img-alt="product.title"
          img-top
          no-body
          class="mt-3 productCard">
          <b-card-body>
            <b-card-title> {{ product.title }} </b-card-title>
            <b-card-sub-title> {{ product.body }} </b-card-sub-title>
            <b-button :to="'/projects/' + product.project" class="projectBut">
              {{ product.project }}
              <i class="material-icons md-18 projectIcon">store</i>
            </b-button>
        </b-card-body>
        </b-card>
      </nuxt-link>
    </b-col>
  </b-form-row>
</template>

<script>
export default {
  data () {
    return {
      products:[]
    }
  },
  props: {
    type: String
  },
  async fetch () {
    this.products = await this.$axios.$get('/api/products/type/' + this.type)
  }
}
</script>

<style>

</style>
