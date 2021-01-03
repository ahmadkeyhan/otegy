<template>
  <b-navbar
    sticky
    toggleable="lg"
    type="dark"
    class="header">
    <b-navbar-brand to="/"><i class="material-icons md-24 md-light">home</i></b-navbar-brand>
    <b-navbar-brand id="headerBrand"> {{navtitle}} <b-img height="24px" src="/oIcon.png" class="oIcon"></b-img> </b-navbar-brand>
    <b-navbar-toggle class="toggler" target="nav-collapse">
      <template #default="{ expanded }">
        <i v-if="expanded" class="material-icons md-24 md-light">close</i>
        <i v-else class="material-icons md-24 md-light">menu</i>
      </template>
    </b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav id="headerNav">
          <b-nav-item to="/products">محصولات</b-nav-item>
          <b-nav-item to="/projects">پروژه ها</b-nav-item>
          <b-nav-item to="/about">داستان ما</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  props: {
    navtitle: String
  }
}
</script>

<style>

.header {
  background-color: #212121;
  border-radius: 0 0 5vh 5vh;
  padding: 8px 16px;
  min-height: 9vh;
  margin-bottom: 2vh;
  box-shadow: 0 4.5px 4.5px rgba(0,0,0,0.23) ;
  box-shadow: 0 4.5px 4.5px rgba(0,0,0,0.16) ;
}

#headerBrand {
  font-family: 'Quicksand', sans-serif;
  font-weight: 600;
  font-kerning: auto;
  font-size: 1.1em;
  color: rgba(255,255,255,0.9);
  text-decoration: none;
}
.oIcon {
}

.toggler, .toggler:focus {
  border: 0;
}

b-nav-item {
  margin-left: 1em;
}

</style>
