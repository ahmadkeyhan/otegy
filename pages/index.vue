<template>
  <b-container dir="rtl">
    <headernav :navtitle="'studio.'"></headernav>
    <b-form-row>
      <b-col>
        <b-card
          title=""
          img-src="/banners/obanner1.jpg"
          img-alt=""
          img-top
          no-body
          class="mt-3 bannerCard">
        </b-card>
      </b-col>
    </b-form-row>
    <b-form-row class="bannerButs">
      <b-col cols="3">
        <b-button class="bannerButRed" to="/products/type/video">ویدیوگرافی</b-button>
      </b-col>
      <b-col cols="3">
        <b-button class="bannerButBlue" to="/products/type/poster">پوستر سازی</b-button>
      </b-col>
      <b-col cols="3">
        <b-button class="bannerButOlive" to="/products/type/visual">هویت بصری</b-button>
      </b-col>
      <b-col cols="3">
        <b-button class="bannerButYellow" to="/products/type/photo">عکــاسی</b-button>
      </b-col>
    </b-form-row>
  </b-container>
</template>

<script>
export default {}
</script>

<style scoped>
.card-img-top {
  border-radius: 2vh;
}

.bannerCard {
  border-radius: 2vh;
  border: 0;
  background-color: #212121;
  box-shadow: 0 4.5px 4.5px rgba(0,0,0,0.23) ;
}

.bannerButs {
  margin-top: -10vh;
}

.bannerButYellow {
  border-radius: 3vh;
  font-size: 0.9em;
  background-color: #212121;
  height: 6vh;
  font-weight: 500;
  font-kerning: none;
  border: 1px solid #f5da0f;
  padding: 0.5em 1em;
  z-index: 2;
  float: right;
}

.bannerButOlive {
  border-radius: 3vh;
  font-size: 0.9em;
  background-color: #212121;
  height: 6vh;
  font-weight: 500;
  font-kerning: none;
  border: 1px solid #86a82f;
  padding: 0.5em;
  z-index: 2;
}

.bannerButBlue {
  border-radius: 3vh;
  font-size: 0.9em;
  background-color: #212121;
  height: 6vh;
  font-weight: 500;
  font-kerning: none;
  border: 1px solid #03989e;
  padding: 0.5em;
  z-index: 2;
}

.bannerButRed {
  border-radius: 3vh;
  font-size: 0.9em;
  background-color: #212121;
  height: 6vh;
  font-weight: 500;
  font-kerning: none;
  border: 1px solid #de4143;
  padding: 0.5em;
  z-index: 2;
}

.bannerIcon{
    float: left;
    margin-right: 1em;
}

</style>
