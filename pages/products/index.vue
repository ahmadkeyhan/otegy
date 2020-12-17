<template>
  <div>
    <h1>محصولات</h1>
    <hr>

    <b-row>
      <b-col v-for="type in types" :key="type.index">
        <nuxt-link :to="'/products/type/' + type.value">
          {{ type.text }}
        </nuxt-link>
      </b-col>
    </b-row>

  </div>
</template>

<script>
export default {
  data () {
    return {
      types: [
        { text: 'عکس', value: 'photo' },
        { text: 'ویدیو', value: 'video' },
        { text: 'پوستر', value: 'poster' }
      ]
    }
  }
}
</script>
