<template>
  <div>
    <h1>اضافه کردن کسب و کار</h1>
    <hr>
    <b-form action="" method="post" @submit.prevent="submitBusiness()">
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
      <b-form-group
        id="input-group-10"
        label="وبسایت مجموعه"
        label-for="input-10"
      >
        <b-form-input
          id="input-10"
          v-model="website"
          type="text"
        ></b-form-input>
      </b-form-group>
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
      <b-button type="submit" variant="primary">ثبت</b-button>
      <b-button to="/user/panel" variant="danger">لغو</b-button>
    </b-form>
  </div>
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
      ],
      status: false
    }
  },

  methods: {
    submitBusiness () {
      this.$axios.post('api/businesses/', {
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
