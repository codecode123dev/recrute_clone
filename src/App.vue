<template>
  <!-- <div class="wrapper"> -->
    <component :is="layout">
      <router-view/>
    </component>
    <!-- <header-view/>
    <router-view/>
    <footer-view/> -->
    <!-- <registration-view/> -->
  <!-- </div> -->
</template>
<script>
import {useRoute} from 'vue-router'
import { computed } from 'vue'
import { PUBLIC_LAYOUT } from "@/constants"
import HeaderView from './components/HeaderView.vue';
import FooterView from './components/FooterView.vue';
import RegistrationView from './views/RegistrationView.vue'
export default {
  components: {
    HeaderView: HeaderView,
    FooterView: FooterView,
    RegistrationView: RegistrationView
  },
  setup() {
    const route = useRoute();
    return{
      layout: computed(() => (route.meta.layout || PUBLIC_LAYOUT) + "-layout")
    }
  }
}

</script>
<style>


#app {
  font-family: Muli,"Helvetica Neue",sans-serif!important;
}


body {
    margin: 0;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #212529;
    text-align: left;
    background-color: #fff;
}
body, html {
    min-height: 100%;
    font-size: 15px;
    line-height: 1.43;
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
.d-flex {
    display: -ms-flexbox!important;
    display: flex!important;
}
.flex-column {
    -ms-flex-direction: column!important;
    flex-direction: column!important;
}
.h-100 {
    height: 100%!important;
}
.w-100 {
    width: 100%!important;
}
.ml-auto, .mx-auto {
    margin-left: auto!important;
}
.mr-auto, .mx-auto {
    margin-right: auto!important;
}






</style>
