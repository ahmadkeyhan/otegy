<template>
  <b-container dir="rtl">
    <headernav :navtitle="'projects.'"></headernav>
    <b-form-row>
      <b-col  v-for="project in projects" :key="project.index" cols="6" md="3">
        <b-button :to="'/projects/' + project" class="projectBut">
          {{ project }}
          <i class="material-icons md-18 projectIcon olive">store</i>
        </b-button>
      </b-col>
    </b-form-row>
  </b-container>
</template>

<script>
export default {
  data () {
    return {
      projects: [
        'lee1',
        'yarad',
        'nika',
        'crepe',
        'mars',
        'vag',
        'italy',
        'burgerkhan',
        'Hafez Safaee',
        'Mehdi Ketabi',
        'coffeeia',
        'merikh',
        'irCryptoClub'
      ]
    }
  }
}
</script>

<style scoped>
.projectBut {
  font-family: Quicksand;
  border-radius: 3vh;
  font-size: 0.9em;
  background-color: #212121;
  height: 6vh;
  width: 100%;
  border: 0;
  box-shadow: 0 4.5px 4.5px rgba(0,0,0,0.23) ;
  margin-top: 1em;
  padding: 10px;
}

.projectBut:hover, .projectBut:focus {

  font-size: 1.1em;
  font-weight: 600;
  color: #86a82f;
  box-shadow: 0 9px 4.5px rgba(0,0,0,0.23);
}

.projectIcon {
  float: left;
}
</style>
