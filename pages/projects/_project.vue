<template>
  <b-container dir="rtl">
    <headernav :navtitle="products[0].project + '.'"></headernav>
    <b-form-row>
      <b-col v-for="product in products" :key="product.index" cols="6" md="3">
        <nuxt-link :to="'/products/' + product._id">
          <b-card
            :title="product.title"
            :img-src="product.url"
            :img-alt="product.title"
            img-top
            no-body
            class="mt-3 productCard">
            <b-card-body>
              <b-card-title> {{ product.title }} </b-card-title>
              <b-card-sub-title> {{ product.body }} </b-card-sub-title>
            </b-card-body>
          </b-card>
        </nuxt-link>
      </b-col>
    </b-form-row>
  </b-container>
</template>

<script>
export default {
  async asyncData (context) {
    const { data } = await context.$axios.get('/api/products/project/' + context.route.params.project)
    return {
      products: data
    }
  }
}
</script>

<style>
.productCard {
  border-radius: 2vh;
  border: 0;
  background-color: #212121;
  box-shadow: 0 4.5px 4.5px rgba(0,0,0,0.23) ;
  min-height: 50vw;
  padding-bottom: 30px;
}

.card-img-top {
  border-radius: 2vh 2vh 0 0;
}

.card-title {
  color: white;
  font-size: 1em;
}

</style>
