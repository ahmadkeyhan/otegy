<template>
  <b-container dir="rtl">
    <headernav :navtitle="'marketing form.'"></headernav>
    <b-row>
      <b-col cols="2"></b-col>
      <b-col class="formHeader" cols="8">
        <h2>فرم مارکتینگ</h2>
      </b-col>
      <b-col cols="2"></b-col>
    </b-row>
    <b-form action="" method="post" @submit.prevent="submitBusiness()" class="formCard">
      <b-form-row>
        <b-col>
          <b-form-group
            id="input-group-1"
            label="عنوان مجموعه"
            label-for="input-1"
          >
            <b-form-input
              id="input-1"
              v-model="title"
              type="text"
              required
            ></b-form-input>
          </b-form-group>
        </b-col>
        <b-col>
          <b-form-group
            id="input-group-2"
            label="سمت مصاحبه شونده"
            label-for="input-2"
          >
            <b-form-select
              id="input-2"
              v-model="role"
              :options="roles"
              required
            ></b-form-select>
          </b-form-group>
        </b-col>
      </b-form-row>
      <b-form-row>
        <b-col cols="7">
          <b-form-group
            id="input-group-3"
            label="نام کامل مصاحبه شونده"
            label-for="input-3"
          >
            <b-form-input
              id="input-3"
              v-model="fullname"
              type="text"
              required
            ></b-form-input>
          </b-form-group>
        </b-col>
        <b-col  cols="5">
          <b-form-group
            id="input-group-4"
            label="شماره تماس"
            label-for="input-4"
          >
            <b-form-input
              id="input-4"
              v-model="phone"
              type="number"
              required
            ></b-form-input>
          </b-form-group>
        </b-col>
      </b-form-row>
      <b-form-group
        id="input-group-5"
        label="نوع مجموعه"
        label-for="input-5"
      >
        <b-form-select
          id="input-5"
          v-model="industry"
          :options="industries"
          required
        ></b-form-select>
      </b-form-group>
      <b-form-group
        id="input-group-6"
        label="آدرس پستی مجموعه"
        label-for="input-6"
      >
        <b-form-textarea
          id="input-6"
          v-model="address"
          rows="3"
          max-rows="5"
          required
        ></b-form-textarea>
      </b-form-group>
      <b-form-group
        id="input-group-7"
        label="مزیت رقابتی"
        label-for="input-7"
      >
        <b-form-textarea
          id="input-7"
          v-model="advantage"
          rows="2"
          max-rows="5"
          required
        ></b-form-textarea>
      </b-form-group>
      <b-form-group
        id="input-group-8"
        label="بازار هدف"
        label-for="input-8"
      >
        <b-form-input
          id="input-8"
          v-model="target"
          type="text"
          required
        ></b-form-input>
      </b-form-group>
      <b-form-row>
        <b-col cols="5">
          <b-form-group
            id="input-group-9"
            label="اینستاگرام مجموعه"
            label-for="input-9"
          >
            <b-form-input
              id="input-9"
              v-model="instagram"
              type="text"
              required
            ></b-form-input>
          </b-form-group>
        </b-col>
        <b-col cols="7">
          <b-form-group
            id="input-group-10"
            label="وبسایت مجموعه (اختیاری)"
            label-for="input-10"
          >
            <b-form-input
              id="input-10"
              v-model="website"
              type="text"
            ></b-form-input>
          </b-form-group>
        </b-col>
      </b-form-row>
      <b-form-group
        id="input-group-11"
        label="پرفروش ترین محصول"
        label-for="input-11"
      >
        <b-form-input
          id="input-11"
          v-model="bestseller"
          type="text"
          required
        ></b-form-input>
      </b-form-group>
      <div class="alert alert-danger" v-if="error">{{ error }}</div>
      <b-button type="submit" class="submitBut">
        ثبت
        <i class="material-icons md-18 projectIcon">done</i>
      </b-button>
      <b-button to="/user/panel" class="cancelBut">
        لغو
        <i class="material-icons md-18 projectIcon">close</i>
      </b-button>
    </b-form>
  </b-container>
</template>

<script>
export default {
  middleware: 'auth',
  data () {
    return {
      error: null,
      title: null,
      role: null,
      fullname: null,
      phone: null,
      industry: null,
      address: null,
      advantage: null,
      target: null,
      instagram: null,
      website: null,
      bestseller: null,
      roles: [
        { text: 'انتخاب کنید', value: null },
        { text: 'مدیر عامل', value: 'ceo' },
        { text: 'مالک', value: 'owner' },
        { text: 'کارمند', value: 'employee' }
      ],
      industries: [
        { text: 'انتخاب کنید', value: null },
        { text: 'کافه و رستوران', value: 'cafe&restaurant' },
        { text: 'آموزشگاه', value: 'academy' },
        { text: 'خرده فروشی', value: 'retail' }
      ]
    }
  },

  methods: {
    submitBusiness () {
      this.$axios.post('/api/businesses', {
        title: this.title,
        role: this.role,
        fullname: this.fullname,
        phone: this.phone,
        industry: this.industry,
        address: this.address,
        advantage: this.advantage,
        target: this.target,
        instagram: this.instagram,
        website: this.website,
        bestseller: this.bestseller
      })
      .then((response) => {
        console.log(response)

        if(response.data._id){
          this.$router.push({ name:'businesses', params:{ created:'yes' } })
        }
      })
        .catch((error) => {
          console.log(error)
          if (error.response.data.message) {
            this.error = error.response.data.message
          }
        })
    }
  }
}
</script>

<style>
h2 {
  font-size: 1.3em;
  font-weight: 500;
  color: #212121;
}

.formHeader {
  border-radius: 4vh;
  height: 8vh;
  text-align: center;
  background-color: #86a82f;
  font-weight: 500;
  font-kerning: none;
  border: 0;
  margin-top: 2vh;
  padding-top: 1vh;
}

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
