<template>
  <b-container dir="rtl">
    <headernav :navtitle="'login.'"></headernav>
    <b-form action="" method="post" @submit.prevent="submitForm()" class="formCard">
      <b-form-group
        id="input-group-1"
        label="ایمیل"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          v-model="email"
          type="text"
          required
        ></b-form-input>
      </b-form-group>
      <b-form-group
        id="input-group-2"
        label="کلمه عبور"
        label-for="input-2"
      >
        <b-form-input
          id="input-2"
          v-model="password"
          type="password"
          required
        ></b-form-input>
      </b-form-group>
      <div class="alert alert-danger cancelBut" v-if="login_error">{{ login_error }}</div>
      <b-button type="submit" value="Login" class="submitBut">
        لاگین
        <i class="material-icons md-18 projectIcon">login</i>
      </b-button>
      <b-button to="/" class="cancelBut">
        انصراف
        <i class="material-icons md-18 projectIcon">close</i>
      </b-button>

    </b-form>
  </b-container>
</template>

<script>
export default {
  middleware: 'auth',
  auth: 'guest',
  data () {
    return{
      login_error:null,
      email:null,
      password:null,
      status:false,
    }
  },

  methods: {
    submitForm () {
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

<style>
.pageHeader {
  text-align: center;
  margin: 2vh 0;
}

label {
  float: right;
  margin-right: 2vh;
  color: white;
  font-size: 0.9em;
}

.submitBut {
  border-radius: 3vh;
  font-size: 0.8em;
  background-color: #86a82f;
  height: 6vh;
  font-weight: 500;
  font-kerning: none;
  border: 0;
  margin-top: 10px;
  margin-right: 10px;
  padding: 0.5em 1em;
}

.cancelBut {
  border-radius: 3vh;
  font-size: 0.8em;
  background-color: #212121;
  height: 6vh;
  font-weight: 500;
  font-kerning: none;
  border: 0;
  border: 2px solid #de4143 ;
  margin-top: 10px;
  margin-right: 10px;
  padding: 0.5em 0.7em;
}

.form-control, .custom-select {
  border-radius: 4vh;
  border: 2px solid #86a82f ;
  min-height: 8vh;
  background-color: #212121;
  color: white;
}

.form-control:focus, .custom-select:focus {
  border-radius: 4vh;
  border: 2px solid #86a82f ;
  min-height: 8vh;
  background-color: #86a82f;
  color: #212121;
}

.formCard {
  margin: 2vh 0;
}

</style>
