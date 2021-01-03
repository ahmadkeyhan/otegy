<template>
  <b-container dir="rtl">
    <headernav :navtitle="type + '.'"></headernav>
    <b-form-row>
      <b-col v-for="product in products" :key="product._id" cols="6" md="3">
        <nuxt-link :to="'/products/' + product._id">
          <b-card
            :title="product.title"
            :img-src="product.url"
            :img-alt="product.title"
            img-top
            class="mt-3 productCard">
            <b-button :to="'/projects/' + product.project" class="projectBut">
              {{ product.project }}
              <i class="material-icons md-18 projectIcon olive">store</i>
            </b-button>
          </b-card>
        </nuxt-link>
      </b-col>
    </b-form-row>
  </b-container>
</template>

<script>
export default {
  async asyncData (context) {
    const { data } = await context.$axios.get('/api/products/type/' + context.route.params.type)
    return {
      products: data,
      type: context.route.params.type
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

.projectBut {
  font-family: 'Quicksand', sans-serif;
  border-radius: 0;
  font-size: 0.9em;
  background-color: #212121;
  height: 6vh;
  font-weight: 500;
  font-kerning: none;
  border: 0;
  border-top: 2px solid #86a82f ;
  margin-top: 0;
  margin-bottom: -30px;
  padding: 0.4em 0;
}

.projectIcon {
  float: left;
  margin-right: 0.5em;
}
</style>
