<template>
  <div>
    <h1>کسب و کارها</h1>
    <hr>
    <b-row
      v-for="business in businesses"
      :key="business._id"
    >
      <nuxt-link :to="'/businesses/' + business._id">
        {{ business.title }}
      </nuxt-link>
    </b-row>
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
  </div>
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
