<template>
  <b-container dir="rtl">
    <headernav :navtitle="'products.'"></headernav>
    <b-row class="productButs">
      <b-col v-for="type in types" :key="type.index">
        <b-button :to="'/products/type/' + type.value" :style="{ color: type.color }" class="productBut mt-1 mb-3 ml-1"><i class="material-icons md-18 productIcon"> {{type.icon}} </i></b-button>
      </b-col>
    </b-row>
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
  </b-container>
</template>

<script>
export default {
  data () {
    return {
      types: [
        { text: 'ویدیوگرافی', value: 'video', icon: 'camera', color: '#de4143' },
        { text: 'پوستر سازی', value: 'poster', icon: 'create', color: '#03989e' },
        { text: 'هویت بصری', value: 'visual', icon: 'fingerprint', color: '#86a82f' },
        { text: 'عکاسی', value: 'photo', icon: 'camera', color: '#f5da0f' }
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

<style>

.productCard {
  border-radius: 4vw;
  border: 0;
  background-color: #212121;
  box-shadow: 0 3px 3px rgba(0,0,0,0.23);
  padding-bottom: 2em;
}

.productCard:hover, .productCard:focus {
  box-shadow: 0 4.5px 4.5px rgba(0,0,0,0.30);
}

.card-img-top {
  border-radius: 4vw 4vw 0 0;
}

.card-title {
  color: white;
  font-size: 1em;
  margin-top: 0.7em;
}

.card-subtitle {
  font-family: 'Jost', sans-serif;
  font-size: 0.8em;

}

.card-body {
  padding: 0 5px;
}

.typeCard {
  border-radius: 0;
  border: 0;
  background-color: #212121;
}

.productBut {
  border-radius: 3vh;
  background-color: #212121;
  height: 6vh;
  width: 6vh;
  border: 0;
  box-shadow: 0 4.5px 4.5px rgba(0,0,0,0.23);
  padding: .6em;
}

.productBut:hover, .productBut:focus {
  border: 2px solid #86a82f;
}

.projectBut {
  font-family: 'Jost', sans-serif;
  border-radius: 0;
  font-size: 0.9em;
  background-color: #212121;
  height: 6vh;
  font-weight: 500;
  font-kerning: none;
  border-top: 2px solid #86a82f ;
  margin-top: 0;
  padding: 0.4em 0.2em 0.2em 0;
}

.productButs {
  border-bottom: 2px solid #86a82f;
  margin: 2vw 1vw;
}

</style>
