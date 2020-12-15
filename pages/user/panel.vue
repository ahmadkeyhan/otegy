<template>
  <div>
    <h1>پنل کاربری</h1>
    <hr>

    <div class="card">
      <div class="card-body">
        <h4>{{ this.$auth.user.username }}</h4>
        <div class="mb-5"><strong>Email:</strong> {{ this.$auth.user.email }}</div>
        <nuxt-link to="/user/logout" class="btn btn-danger">خروج از حساب کاربری</nuxt-link>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  middleware: 'auth'
}
</script>
