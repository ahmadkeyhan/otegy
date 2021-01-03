<template>
  <b-container dir="rtl">
    <headernav :navtitle="'products.'"></headernav>
    <b-form-row>
      <b-col v-for="type in types" :key="type.index">
        <b-card
          :img-src="'/' + type.value + '.png'"
          :img-alt="type.text"
          img-top
          class="mt-2 typeCard"
        >
          <b-button :to="'/products/type/' + type.value" class="cardBut"><i class="material-icons md-18 cardIcon olive"> {{type.icon}} </i></b-button>
        </b-card>
      </b-col>
    </b-form-row>
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
  data () {
    return {
      types: [
        { text: 'عکاسی', value: 'photo', icon: 'camera' },
        { text: 'ویدیوگرافی', value: 'video', icon: 'camera' },
        { text: 'پوستر سازی', value: 'poster', icon: 'create' },
        { text: 'هویت بصری', value: 'visual', icon: 'fingerprint' }
      ]
    }
  },
  async asyncData (context) {
    const { data } = await context.$axios.get('/api/products/')
    return {
      products: data
    }
  }
}
</script>

<style scoped>
h1 {
  font-size: 1.5em;
  color: #f2f2f2;
  margin: auto;
}

.pageHeader {
  text-align: center;
  margin: 2vh 0 1vh 0;
  border-radius: 4vh;
  width: 100%;
  background-color: #262626;
  height: 8vh;
  padding-top: 1vh;
}

.cardIcon {
}

.card-body {
  padding: 0 5px;
}

.typeCard {
  border-radius: 0;
  border: 0;
  background-color: #212121;
}

.cardBut {
  border-radius: 3vh;
  font-size: 1em;
  background-color: #212121;
  height: 6vh;
  width: 6vh;
  border: 0;
  box-shadow: 0 4.5px 4.5px rgba(0,0,0,0.23) ;
  margin-top: -1em;
  padding: 10px;
}

.cardBut:hover, .cardBut:focus {
  background-color: white;

}

.card-img-top {
}


</style>
