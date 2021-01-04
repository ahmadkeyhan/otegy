<template>
  <b-container dir="rtl">
    <headernav :navtitle="type + '.'"></headernav>
    <b-row class="productButs">
      <b-col cols="3">
        <b-button to="/products/" style="{ color: #86a82f }" class="productBut mt-1 mb-3"><i class="material-icons md-18 productIcon">keyboard_arrow_right</i></b-button>
      </b-col>
      <b-col class="typeHeader" cols="6">
          {{ typeHeader }}
      </b-col>
      <b-col cols="3">
        <div class="productBut mt-1 mb-3">
          <i :style="{ color: iconColor }" class="material-icons md-18 productIcon"> {{icon}} </i>
        </div>
      </b-col>
    </b-row>
    <b-form-row>
      <b-col v-for="product in products" :key="product._id" cols="6" md="3">
        <nuxt-link :to="'/products/' + product._id">
          <b-card
            :title="product.title"
            :sub-title="product.body"
            :img-src="product.url"
            :img-alt="product.title"
            img-top
            class="mt-3 productCard">
            <b-button :to="'/projects/' + product.project" class="projectBut">
              {{ product.project }}
              <i class="material-icons md-18 projectIcon">store</i>
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
    let type = context.route.params.type
    let icon
    let iconColor
    let typeHeader
    if (type === 'poster') {
      icon = "create"
      iconColor = '#03989e'
      typeHeader = 'پوسترها'
    } else if (type === 'visual') {
      icon = "fingerprint"
      iconColor = '#86a82f'
      typeHeader = 'هویت های بصری'
    } else if (type === 'video') {
      icon = "camera"
      iconColor = '#de4143'
      typeHeader = 'فیلم برداری ها'
    } else {
      icon = "camera"
      iconColor = '#f5da0f'
      typeHeader = 'عکاسی ها'
    }
    return {
      products: data,
      type,
      icon,
      iconColor,
      typeHeader
    }
  }
}
</script>

<style>
.typeHeader {
  font-size: 1em;
  text-align: center;
  color: white;
  padding-top: 0.5em;
}

.productCard {
  border-radius: 2vh;
  border: 0;
  background-color: #212121;
  box-shadow: 0 4.5px 4.5px rgba(0,0,0,0.23) ;
  min-height: 50vw;
  padding-bottom: 30px;
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

.productButs {
  border-bottom: 2px solid #86a82f;
  margin: 2vw 1vw;
}

.card-img-top {
  border-radius: 2vh 2vh 0 0;
}

.card-title {
  color: white;
  font-size: 1em;
}

.projectBut {
  font-family: 'Jost', sans-serif;
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
