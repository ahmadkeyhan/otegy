<template>
  <b-container dir="rtl">
    <headernav navtitle="businesses."></headernav>
    <b-form-row>
      <b-col
        cols="6"
        md="3"
        v-for="business in businesses"
        :key="business._id"
      >
          <b-card
            :title="business.title"
            img-top
            class="mt-3 businessCard">
            <b-button :href="'https://www.instagram.com/' + business.instagram" class="businessBut">
              <img src="https://img.icons8.com/fluent-systems-filled/18/86a82f/instagram-new.png"/>
            </b-button>
            <b-button :href="'https://www.instagram.com/' + business.instagram" class="businessBut">
               بیشتر
              <i class="material-icons md-18">more_horiz</i>
            </b-button>
          </b-card>
      </b-col>
    </b-form-row>
  </b-container>
</template>

<script>
export default {
  middleware: 'auth',
  data () {
    return {
      industries: [
        { text: 'کافه و رستوران', value: 'cafe&restaurant' },
        { text: 'آموزشگاه', value: 'academy' },
        { text: 'خرده فروشی', value: 'retail' }
      ]
    }
  },
  async asyncData (context) {
    const { data } = await context.$axios.get('/api/businesses')
    return {
      businesses : data
    }
  }
}
</script>

<style>
.businessCard {
  border-radius: 2vh;
  border: 0;
  background-color: #212121;
  box-shadow: 0 4.5px 4.5px rgba(0,0,0,0.23) ;
}


.businessBut {
  border-radius: 3vh;
  font-size: 0.9em;
  background-color: #212121;
  height: 6vh;
  font-weight: 500;
  font-kerning: none;
  border: 0;
  border: 2px solid #86a82f ;
  padding: 0.4em 1em;
}

.card-title {
  color: white;
  font-size: 1em;
}
</style>
