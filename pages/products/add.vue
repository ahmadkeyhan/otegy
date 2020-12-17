<template>
  <div>
    <h1>اضافه کردن محصول</h1>
    <hr>
    <b-form action="" method="post" @submit.prevent="submitProduct()">
      <b-form-group
        id="input-group-1"
        label="عنوان"
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
        label="لینک"
        label-for="input-2"
      >
        <b-form-input
          id="input-2"
          v-model="url"
          type="text"
          required
        ></b-form-input>
      </b-form-group>
      <b-form-group
        id="input-group-3"
        label="دسته بندی"
        label-for="input-3"
      >
        <b-form-select
          id="input-3"
          v-model="type"
          :options="types"
          required
        ></b-form-select>
      </b-form-group>
      <b-form-group
        id="input-group-4"
        label="پروژه"
        label-for="input-4"
      >
        <b-form-select
          id="input-4"
          v-model="project"
          :options="projects"
          required
        ></b-form-select>
      </b-form-group>
      <b-form-group
        id="input-group-5"
        label="توضیحات"
        label-for="input-5"
      >
        <b-form-textarea
          id="input-5"
          v-model="body"
          rows="3"
          max-rows="5"
          required
        ></b-form-textarea>
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
      url: null,
      type: null,
      project: null,
      body: null,
      types: [
        { text: 'انتخاب کنید', value: null },
        { text: 'عکس', value: 'photo' },
        { text: 'ویدیو', value: 'video' },
        { text: 'پوستر', value: 'poster' }
      ],
      projects: [
        { text: 'انتخاب کنید', value: null },
        'lee1'
      ],
      status: false
    }
  },

  methods: {
    submitProduct () {
      this.$axios.post('api/products/', {
        title: this.title,
        url: this.url,
        type: this.type,
        project: this.project,
        body: this.body
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
