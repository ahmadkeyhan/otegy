<template>
  <div>
    <h1>{{ business.title }}</h1>
    <h2>{{ business.industry }}</h2>
    <b-row>
      <b-col>
        <h3>اطلاعات تماس</h3>
        <p>phone: {{ business.phone }}</p>
        <p>instagram: <a :href="'https://www.instagram.com/' + business.instagram">{{ business.instagram }}</a></p>
        <p>website: <a :href="'http://www.' + business.website">{{ business.website }}</a></p>
        <p>address: {{ business.address }}</p>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  async asyncData (context) {
    const { data } = await context.$axios.get('/api/businesses/' + context.route.params.id)
    return {
      business: data
    }
  }
}
</script>
