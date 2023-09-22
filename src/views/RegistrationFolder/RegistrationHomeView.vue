<template>
  <div class="undefined">
    <div class="ant-row css-d5t39c">
      <div style="padding-left: 8px; padding-right: 8px" class="ant-col ant-col-xs-12 css-d5t39c">
        <router-link :to="{name : 'company'}" class="my-link_my-link__wIenB registration_registration__link__d_J_w" >
          <img src="../../assets/registration/school.png" width="16px" height="16px" />
          Register as a hiring company
        </router-link>
      </div>
      <div style="padding-left: 8px; padding-right: 8px" class="ant-col ant-col-xs-12 css-d5t39c">
        <router-link :to="{name: 'headhunt'}" class="my-link_my-link__wIenB registration_registration__link__d_J_w" >
          <img src="../../assets/registration/user.png" width="16px" height="16px" />
          Register as a headhunter
        </router-link>
      </div>
    </div>
    <div class="ant-row ant-row-center css-d5t39c">
      <div class="registration_registration__text__Tv7WR">
        Already have a Recruitery account?
        <router-link :to="{name: 'login_view'}"  class="my-link_my-link__wIenB undefined" >Login</router-link>
      </div>
    </div>
  </div>
</template>
<style scoped>
:where(.css-d5t39c)[class^="ant-row"],
:where(.css-d5t39c)[class*=" ant-row"] {
  font-family: Mulish, sans-serif !important;
  font-size: 14px;
  box-sizing: border-box;
}

:where(.css-d5t39c).ant-row {
  display: flex;
  flex-flow: row wrap;
  min-width: 0;
}

:where(.css-d5t39c).ant-col-xs-12 {
  display: block;
  flex: 0 0 50%;
  max-width: 50%;
}

:where(.css-d5t39c) a {
  color: #1aa94c;
  text-decoration: none;
  background-color: transparent;
  outline: none;
  cursor: pointer;
  transition: color 0.3s;
  -webkit-text-decoration-skip: objects;
}

[role="button"],
a,
area,
button,
input:not([type="range"]),
label,
select,
summary,
textarea {
  touch-action: manipulation;
}

.registration_registration__link__d_J_w {
  background: #fff;
  display: block;
  border-radius: 10px;
  border: 1px solid #e5e7eb;
  text-align: center;
  padding: 20px 28px;
  text-transform: uppercase;
  font-size: 14px;
}

.registration_registration__link__d_J_w img {
  display: block;
  margin: 0 auto 8px;
  width: 40px;
  height: 40px;
}

:where(.css-d5t39c).ant-row {
  display: flex;
  flex-flow: row wrap;
  min-width: 0;
}

:where(.css-d5t39c).ant-row-center {
  justify-content: center;
}

.registration_registration__text__Tv7WR {
  font-size: 13px;
  margin-top: 16px;
}

.my-link_my-link__wIenB:hover {
  color: #38b560;
}
</style>
