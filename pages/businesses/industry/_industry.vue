<template>
  <div>
    <h1 >{{ industry }}</h1>
    <hr>
    <b-row
      v-for="business in businesses"
      :key="business._id"
    >
      <nuxt-link :to="'/businesses/' + business._id">
        {{ business.title }}
      </nuxt-link>
    </b-row>
  </div>
</template>

<script>
export default {
  async asyncData (context) {
    const {data} = await context.$axios.get('/api/businesses/industry/' + context.route.params.industry)
    return {
      businesses: data,
      industry: context.route.params.industry
    }
  }
}
</script>
