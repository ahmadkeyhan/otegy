<template>
  <div>
    <h1>ورود به حساب کاربری</h1>
    <hr>

    <div class="row">
      <div class="col-md-6">
        <form action="" method="post" @submit.prevent="submitForm()">

          <div class="form-group">
            <label for="">ایمیل</label>
            <input type="text" class="form-control" :class="{ 'is-invalid': errors && errors.email }" v-model="email">
            <div class="invalid-feedback" v-if="errors && errors.email">
              {{ errors.email.msg }}
            </div>
          </div>

          <div class="form-group">
            <label for="">کلمه عبور</label>
            <input type="password" class="form-control" :class="{ 'is-invalid': errors && errors.password }" v-model="password">
            <div class="invalid-feedback" v-if="errors && errors.password">
              {{ errors.password.msg }}
            </div>
          </div>

          <div class="alert alert-danger" v-if="login_error">{{ login_error }}</div>

          <input type="submit" value="ورود به حساب" class="btn btn-primary mr-3">
          <nuxt-link to="/" class="btn btn-secondary mr-3">لغو</nuxt-link>

        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  middleware: 'auth',
  auth: 'guest',
  data(){
    return{
      errors:null,
      login_error:null,
      email:null,
      password:null,
      status:false
    }
  },

  methods:{
    submitForm(){
      this.$auth.loginWith('local', {
        data: {
          email: this.email,
          password: this.password
        }
      })
      .catch( (error) => {
        console.log(error)
        if(error.response.data.message){
          this.login_error = error.response.data.message
        }
      })
    }
  }
}
</script>
