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
        <nuxt-link :to="'/businesses/' + business._id">
          {{ business.title }}
        </nuxt-link>
      </b-col>
    </b-form-row>
    <b-row>
      <b-col
      v-for="industry in industries"
      :key="industry.index"
      >
        <nuxt-link :to="'/businesses/industry/' + industry.value">
          {{ industry.text }}
        </nuxt-link>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
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
      businesses: data
    }
  }
}
</script>
