<template>
  <b-container dir="rtl">
    <headernav :navtitle="'panel.'"></headernav>
    <b-card
      title="پنل محصولات"
      class="mt-3 panelCard">
      <b-button to="/products/add" class="panelBut">
        اضافه کردن محصول
        <i class="material-icons md-18 projectIcon olive">add_circle</i>
      </b-button>
    </b-card>
    <b-card
      title="پنل بازاریابی و ثبت کسب و کارها"
      class="mt-3 panelCard"
    >
      <b-button to="/businesses/add" class="panelBut">
        اضافه کردن کسب و کار
        <i class="material-icons md-18 projectIcon olive">playlist_add</i>
      </b-button>
      <b-button to="/businesses" class="panelBut">
        کسب و کارها
        <i class="material-icons md-18 projectIcon olive">playlist_add_check</i>
      </b-button>
    </b-card>
  </b-container>
</template>

<script>
export default {
  middleware: 'auth'
}
</script>

<style>
.panelCard {
  color: white;
  font-size: 1.1em;
  border-radius: 2vh;
  border: 0;
  background-color: #212121;
  box-shadow: 0 4.5px 4.5px rgba(0,0,0,0.23) ;
  padding-bottom: 30px;
}

.panelBut {
  border-radius: 3vh;
  font-size: 0.8em;
  background-color: #212121;
  height: 6vh;
  font-weight: 500;
  font-kerning: none;
  border: 0;
  border: 2px solid #86a82f ;
  margin-top: 10px;
  margin-right: 10px;
  padding: 0.5em 0.7em;
}

.panelBut:hover, .panelBut:focus {

  background-color: #86a82f;
  height: 6vh;
  font-weight: 500;
  font-kerning: none;
  border: 0;
  border: 2px solid #86a82f ;
  margin-top: 0;
  margin-bottom: -30px;
  padding: 0.5em 0.7em;
}
</style>
