<template>
  <div>
    <h1>پنل کاربری</h1>
    <hr>
    <b-card
      :title="this.$auth.user.username"
      :sub-title="this.$auth.user.email"
    >
      <b-card-text>
        از این قسمت میتوانید محصول اضافه یا حذف کنید
      </b-card-text>
      <b-link href="/products/add" class="card-link">اضافه کردن محصول</b-link>
      <b-link href="/products" class="card-link">حذف محصول</b-link>
    </b-card>
    <nuxt-link to="/user/logout" class="btn btn-danger">خروج از حساب کاربری</nuxt-link>
  </div>
</template>

<script>
export default {
  middleware: 'auth'
}
</script>
