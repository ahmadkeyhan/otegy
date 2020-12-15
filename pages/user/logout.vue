<template>
  <div>
    <h1>خروج از حساب کاربری</h1>
    <hr>

    <p>لطفا کمی صبر کنید...</p>
  </div>
</template>

<script>
export default {
  middleware: 'auth',

  async asyncData(context){
    await context.$auth.logout()
  }
}
</script>
