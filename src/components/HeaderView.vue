<template>
  <div>
    <a href="/career-transition" target="_blank" class="launcher-v2">
      <span class="launcher-v2__money">+$15,000</span>
      Are you looking for your next job? Let our headhunters help you
      <span class="launcher-v2__action">Go ></span>
    </a>
    <section class="header">
      <div class="container">
        <div class="header-wrapper">
          <a class="header-logo" href="/">
            <img
              height="40"
              class="header-logo-img d-lg-none"
              src="../assets/home_image/logo.svg"
              alt="Recruitery"
            />
            <img
              height="40"
              class="header-logo-img d-none d-lg-block"
              src="../assets/home_image/logo-text.png"
              alt="Recruitery"
            />
          </a>
          <div class="header-lang">
            <div class="header-lang__box">
              <form
                id="selectLanguage"
                class="form-horizontal nav-link text-dark"
              >
                <input
                  type="hidden"
                  name="culture"
                  id="culture"
                  value="en-US"
                />
                <div class="dropdown">
                  <a class="dropdown-toggle" href="#/">
                    <img
                      src="../assets/home_image/en.svg"
                      alt="en-US"
                      style="border: 1px solid #e7eeef"
                      width="33"
                      height="25"
                    />
                  </a>
                  <!-- <div
                    class="dropdown-menu dropdown-menu-right show"
                    style="will-change: transform; position: absolute; transform: translate3d(-109px, 20px, 0px); top: 0px; left: 0px;"
                  >
                    <a class="dropdown-item" href="#/">English</a>
                    <a class="dropdown-item" href="#/">Tiếng Việt</a>
                    <a class="dropdown-item" href="#/">Bahasa Indonesia</a>
                  </div> -->
                </div>
              </form>
            </div>
            <router-link :to="{name: 'registration_view'}"  class="header-wrapper-login">
              <i class="fas fa-user"></i>
              Signup
            </router-link>
          </div>
          <div class="row header-menu">
            <div class="container">
              <ul class="header-menu-list">
                <li class="header-menu-item header-menu-item__job">
                  <router-link :to="{name: 'job-home'}">
                    <strong>Jobs</strong>
                  </router-link>
                </li>
                <!-- <li class="header-menu-item dropdown">
                  <a href="#">
                    <strong>Blog</strong>
                  </a>
                  <div class="header-menu-item__dropdown dropdown-menu py-4">
                    <a href="#" class="dropdown-item">NEWS</a>
                    <a class="dropdown-item" href="#">Recruitment Handbook</a>
                    <a class="dropdown-item" href="#">Job Search Handbook</a>
                  </div>
                </li> -->
                <v-menu open-on-hover>
                  <template v-slot:activator="{ props }">
                    <li  class="header-menu-item dropdown" v-bind="props"> 
                      <router-link :to="{name: 'blog-view'}" >
                        <strong>Blog</strong>
                      </router-link>
                    </li>
                  </template>

                  <v-list class="header-menu-item__dropdown_dropdown ">
                    <!-- <div  v-for="(item, index) in items_blog" :key="index" >
                      <a href="#" class="dropdown-item">{{ item.title }}</a>
                    </div> -->
                    <div>
                      <router-link :to="{name: 'blog-new'}" class="dropdown-item">NEWS</router-link>
                      <router-link :to="{name: 'blog-recruitment'}"  class="dropdown-item">Recruitment Handbook</router-link>
                      <router-link :to="{name: 'blog-search-handbook'}"  class="dropdown-item" href="#">Job Search Handbook</router-link>
                    </div>
                  </v-list>
                </v-menu>

                <v-menu open-on-hover>
                  <template v-slot:activator="{ props }">
                    <li class="header-menu-item header-menu-item__headhunter dropdown" v-bind="props">
                      <a class="Employer" href="#">
                        <img class="employer-img" src="../assets/home_image/building.svg" alt="Icon Employers" width="22" height="22">
                        <span>Employers</span>
                      </a>
                    </li>
                  </template>

                  <v-list>
                    <div class="header-menu-item__dropdown header-menu-item__dropdown--large py-4">
                      <router-link :to="{name: 'employee-recruting'}" class="dropdown-item mb-3" >
                      <div class="d-flex">
                        <div class="header-menu-item__headhunter__icon mr-3">
                          <img src="../assets/home_image/headhunter_icon.png" alt="headhunter-icon" width="35" height="35">
                        </div>
                        <div>
                          <p class="header-menu-item__headhunter__title mb-1">Start Recruiting</p>
                          <span class="header-menu-item__headhunter__sub-text">Find & Hire top talents, anywhere in the world</span>
                        </div>
                      </div>
                    </router-link>
                    <router-link :to="{name: 'payroll'}" class="dropdown-item">
                      <div class="d-flex">
                        <div class="header-menu-item__headhunter__icon mr-3">
                          <img src="../assets/home_image/payroll_icon.png" alt="payroll-icon" width="35" height="35">
                        </div>
                        <div>
                          <p class="header-menu-item__headhunter__title mb-1">Run Global Payroll</p>
                          <span class="header-menu-item__headhunter__sub-text">Stay compliant and manage payroll of your remote team</span>
                        </div>
                      </div>
                    </router-link>
                    </div>
                  </v-list>
                </v-menu>


              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
  export default {
    data: () => ({
      
    }),
  }
</script>
<style scoped>
.launcher-v2 {
  width: 100%;
  display: block;
  text-align: center;
  background-color: purple;
  color: #fff;
  padding: 8px;
  font-weight: 300;
  text-decoration: none;
}

a {
  color: #007bff;
  text-decoration: none;
  background-color: transparent;
}

a {
  color: #0d6efd;
  text-decoration: underline;
}
a {
  color: #1aa94c;
}
.btn,
.carousel,
.dropdown-menu li,
.nav,
.pagination,
.panel-title,
.panel-title a,
.slick-next,
.slick-prev,
a,
button {
  -webkit-transition: all 0.2s ease-in-out;
  -o-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
}
a {
  text-decoration: none;
}
.launcher-v2__money {
  font-weight: 700;
  color: #00fc5b;
}
.launcher-v2__action {
  display: inline-block;
  padding: 0 10px;
  border: 1px solid;
  border-radius: 8px;
  margin-left: 5px;
}
a:hover {
  text-decoration: underline;
  color: #137d38;
}

.header {
  background-color: #fff;
  width: 100%;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1050;
}
.header-wrapper {
  height: 98px;
  display: -ms-flexbox;
  display: -webkit-box;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  padding-top: 0;
  z-index: 100;
}
.header-logo {
  height: 40px;
}

img {
  vertical-align: middle;
  border-style: none;
}
img {
  max-width: 100%;
  /* display: block; */
}
img,
svg {
  vertical-align: middle;
}
.d-none {
  display: none !important;
}
.header-lang {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
}
.header-lang__box {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -ms-flex-wrap: nowrap;
    flex-wrap: nowrap;
}
.nav-link {
    display: block;
    padding: .5rem 1rem;
}
.text-dark {
    color: #343a40!important;
}
.text-dark {
    color: #343a40!important;
}
.nav-link {
    display: block;
    padding: .5rem 1rem;
}


.nav-link:focus, .nav-link:hover {
    text-decoration: none;
}

.nav-link {
    display: block;
    text-decoration: none;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out;
}
button, input {
    overflow: visible;
}
button, input, optgroup, select, textarea {
    margin: 0;
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
}
.dropdown-toggle {
    white-space: nowrap;
}
.header-lang__box img {
    width: 33px;
}

.btn, .carousel, .dropdown-menu li, .nav, .pagination, .panel-title, .panel-title a, .slick-next, .slick-prev, a, button {
    -webkit-transition: all .2s ease-in-out;
    -o-transition: all .2s ease-in-out;
    transition: all .2s ease-in-out;
    cursor: pointer;
}
.text-dark {
    --bs-text-opacity: 1;
    color: rgba(33,37,41,1)!important;
}

.dropdown, .dropdown-center, .dropend, .dropstart, .dropup, .dropup-center {
    position: relative;
}
.dropdown-toggle {
    white-space: nowrap;
}
.header-lang__box img {
    width: 33px;
}
.dropdown-menu {
    position: absolute;
    top: 100%;
    left: 0;
    z-index: 1000;
    /* display: none; */
    float: left;
    min-width: 10rem;
    padding: .5rem 0;
    margin: .125rem 0 0;
    font-size: 1rem;
    color: #212529;
    text-align: left;
    list-style: none;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid rgba(0, 0, 0, 0.175);
    border-radius: .25rem;
}
.dropdown-menu-right {
    right: 0;
    left: auto;
}
.dropdown-item {
    display: block;
    width: 100%;
    padding: 0.25rem 1rem;
    clear: both;
    font-weight: 400;
    color: #212529;
    text-align: inherit;
    text-decoration: none;
    white-space: nowrap;
    background-color: transparent;
    border: 0;
}
.header-wrapper-login {
    color: #fff;
    background-color: #1aa94c;
    border-radius: 4px;
    display: inline-block;
    font-weight: 700;
    height: 40px;
    line-height: 40px;
    text-align: center;
    border-radius: 4px;
    padding: 0 15px;
    margin-bottom: 0;
    min-width: 140px;
    margin: 10px 0 10px 10px;
}
.header-wrapper-login .fas {
    font-size: .8em;
}
.header-menu {
    width: 100vw;
    border-top: 1px solid #e3e3e3;
    border-bottom: 1px solid #e3e3e3;
}
.row {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px;
}
.header-menu-list {
    list-style-type: none;
    margin: 0;
    padding: 0;
    width: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
}
.header-menu a {
    color: #333;
}
.header-menu-item>a, .header-menu-item>select {
    text-align: center;
    display: inline-block;
    padding: 6px;
    background-color: transparent;
    width: 100%;
}
.header-menu-item {
    position: relative;
    float: left;
    border-right: 1px solid #e3e3e3;
    -webkit-box-flex: 1;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    height: 36px;
}
.header-menu-item__dropdown {
    background-color: #fff;
    max-height: 100vh;
    overflow-y: scroll;
    border-radius: 0;
}
.py-4 {
    padding-top: 1.5rem!important;
    padding-bottom: 1.5rem!important;
}
.header-menu-item__dropdown a {
    -webkit-transition: .25s ease-out;
    -o-transition: .25s ease-out;
    transition: .25s ease-out;
}
.header-menu-item:last-of-type {
    border-right: none;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
}
.header-menu-item .employer-img {
    margin-right: 3px;
}
.header-menu-item__dropdown--large {
    width: 360px;
}
.mb-3 {
    margin-bottom: 1rem!important;
}
.d-flex {
    display: flex!important;
}
.mr-3, .mx-3 {
    margin-right: 1rem!important;
}
.header-menu-item__headhunter__icon {
    background-color: #1aa94c;
    padding: 7px;
    border-radius: 5px;
    height: -webkit-fit-content;
    height: -moz-fit-content;
    height: fit-content;
    width: -webkit-fit-content;
    width: -moz-fit-content;
    width: fit-content;
    margin-top: 5px;
}
.header-menu-item__headhunter__icon img {
    height: 35px;
    width: 35px;
    min-width: 35px;
}
.mb-1 {
    margin-bottom: .25rem!important;
}
.header-menu-item__headhunter__title {
    font-size: 18px;
    font-weight: 700;
    color: #1aa94c;
}
.dropdown-toggle::after {
    display: inline-block;
    margin-left: .255em;
    vertical-align: .255em;
    content: "";
    border-top: .3em solid;
    border-right: .3em solid transparent;
    border-bottom: 0;
    border-left: .3em solid transparent;
}
.header-lang__box {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -ms-flex-wrap: nowrap;
    flex-wrap: nowrap;
}
.dropdown-item:focus, .dropdown-item:hover {
    color: #16181b;
    text-decoration: none;
    background-color: #f8f9fa;
}
.dropdown-item:focus, .dropdown-item:hover {
  color: #1e2125;
  background-color: #e9ecef;
}
.header-menu-item__dropdown_dropdown{
  padding: 1rem 1rem;
}
.header-menu-item__dropdown_dropdown a:hover {
    color: #179342;
}
.header {
    background-color: #fff;
    width: 100%;
    position: sticky;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1050;
}





@media only screen and (min-width: 768px) {
  .header {
    border-bottom: 1px solid #e3e3e3;
  }
  .header-wrapper {
    height: 60px;
    -webkit-box-pack: end;
    -ms-flex-pack: end;
    justify-content: flex-end;
  }
  .header-logo {
    margin-right: auto;
  }
  .header-lang {
    -webkit-box-ordinal-group: 3;
    -ms-flex-order: 2;
    order: 2;
  }
  .header-wrapper-login {
    -webkit-box-ordinal-group: 4;
    -ms-flex-order: 3;
    order: 3;
}
.header-menu-item__dropdown {
    top: 60px;
}
.header {
    border-bottom: 1px solid #e3e3e3;
}
}

@media (min-width: 576px) {
  .container,
  .container-sm {
    max-width: 540px;
  }
  .header-menu {
    border-top: 0;
}
.header-menu-list {
    border-top: 1px solid #e3e3e3;
}
.header-menu-item__job {
    width: 33.3%;
}
.header-menu-item {
    width: 33.3%;
}
.header-menu-item__headhunter__icon {
    background-color: #1aa94c;
    padding: 7px;
    border-radius: 5px;
}
.header-menu-item__headhunter__icon img {
    height: 35px;
    width: 35px;
}
.header-menu-item__headhunter__title {
    font-size: 18px;
    font-weight: 700;
    color: #1aa94c;
}
}


@media (min-width: 768px) {
  .container,
  .container-md,
  .container-sm {
    max-width: 720px;
  }
  .header-menu {
    border-top: none;
    border-bottom: none;
    width: auto;
}
.header-menu-list {
    border-top: none;
}
.header-menu-item {
    height: 60px;
    width: auto;
}
.header-menu-item:first-of-type {
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
}
.header-menu-item>a, .header-menu-item>select {
    padding: 20px;
}
.header-menu-item__headhunter__icon {
    background-color: #1aa94c;
    padding: 7px;
    border-radius: 5px;
}
.header-menu-item__headhunter__icon img {
    height: 35px;
    width: 35px;
}
.header-menu-item__headhunter__title {
    font-size: 18px;
    font-weight: 700;
    color: #1aa94c;
}
.header-menu-item.show>a, .header-menu-item:hover>a {
    background: #1aa94c;
    color: #fff;
}
.header-menu-item__headhunter__sub-text {
    font-size: 15px;
    color: #a8a8a8;
    white-space: pre-wrap;
}
}


@media (min-width: 992px) {
  .container,
  .container-lg,
  .container-md,
  .container-sm {
    max-width: 960px;
  }
  .d-lg-none {
    display: none !important;
  }
  .d-lg-block {
    display: block !important;
  }
}
@media only screen and (min-width: 989px){
  .header-menu {
      width: 45%;
  }

}

@media (min-width: 1200px) {
  .container,
  .container-lg,
  .container-md,
  .container-sm,
  .container-xl {
    max-width: 1140px;
  }
}

.container,
.container-fluid,
.container-lg,
.container-md,
.container-sm,
.container-xl,
.container-xxl {
  width: 100%;
  padding-right: calc(1.5rem * 0.5);
  padding-left: calc(1.5rem * 0.5);
  margin-right: auto;
  margin-left: auto;
}

.container {
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}
</style>
