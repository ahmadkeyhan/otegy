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
      <b-link href="/products/add" class="card-link ml-4">اضافه کردن محصول</b-link>
      <b-link href="/products" class="card-link">حذف محصول</b-link>
    </b-card>
    <b-card
      title="پنل بازاریابی و ثبت کسب و کارها"
      class="mt-2"
    >
      <b-card-text>
        از این قسمت میتوانید لیست کسب و کارها، آنالیز ها را مشاهده کنید
      </b-card-text>
      <b-link href="/businesses/add" class="card-link ml-4">اضافه کردن کسب و کار</b-link>
      <b-link href="/businesses" class="card-link">لیست کسب و کارها</b-link>
    </b-card>
    <nuxt-link to="/user/logout" class="btn btn-danger mt-2">خروج از حساب کاربری</nuxt-link>
  </div>
</template>

<script>
export default {
  middleware: 'auth'
}
</script>
