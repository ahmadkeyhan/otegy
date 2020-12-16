<template>
  <div>
    <nav class="navbar navbar-expand-md navbar-dark bg-dark">
      <nuxt-link to="/" class="navbar-brand">O.tegy</nuxt-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarsExampleDefault"
        aria-controls="navbarsExampleDefault"
        aria-expanded="false"
        aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarsExampleDefault">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <nuxt-link to="/products" class="nav-link" exact-active-class="active">محصولات</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link to="/services" class="nav-link" exact-active-class="active">خدمات</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link to="/projects" class="nav-link" exact-active-class="active">پروژه ها</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link to="/about" class="nav-link" exact-active-class="active">داستان ما</nuxt-link>
          </li>
        </ul>

        <ul class="navbar-nav" v-if="!$auth.loggedIn">
          <li class="nav-item">
            <nuxt-link to="/user/login" class="nav-link" exact-active-class="active">ورود</nuxt-link>
          </li>
        </ul>

        <ul class="navbar-nav" v-if="$auth.loggedIn">
          <li class="nav-item">
            <nuxt-link to="/user/panel" class="nav-link" exact-active-class="active">پنل کاربری</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link to="/user/logout" class="nav-link" exact-active-class="active">خروج</nuxt-link>
          </li>
        </ul>
      </div>
    </nav>

    <div class="container mt-4">
      <Nuxt />
    </div>
  </div>
</template>

<style>
html {
  font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
