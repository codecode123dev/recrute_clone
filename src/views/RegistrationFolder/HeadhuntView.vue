<template>
    <v-sheet  class="mx-auto">
        <v-form @submit.prevent>
            <v-text-field label="First name"></v-text-field>
            <v-text-field label="Last name"></v-text-field>
            <v-text-field label="Email"></v-text-field>
            <v-text-field
            v-model="password"
            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
            :type="show1 ? 'text' : 'password'"
            name="input-10-1"
            label="Password"
            @click:append="show1 = !show1"
          ></v-text-field>
            <v-text-field label="Phone"></v-text-field>
            <v-checkbox
                v-model="checkbox"
                label="Do you agree?"
                required
            ></v-checkbox>
            <v-btn type="submit" block class="mt-2 button-signUp">Sign up</v-btn>
        </v-form>
        <div class="ant-row ant-row-center css-d5t39c">
            <div class="register-type_registerType__text__nXxzI">
                Already have a Recruitery account? 
                <router-link :to="{name: 'login_view'}" class="my-link_my-link__wIenB undefined" >Login</router-link>
            </div>
        </div>
    </v-sheet>
</template>
<script>
  export default {
    data: () => ({
      firstName: '',
      show1: false,
        password: '',
        rules: {
          required: value => !!value || 'Required.',
        },
    }),
  }
</script>
<style>
.v-sheet.v-theme--light.mx-auto {
    background-color: transparent;
}
.v-field__field {
    background: #fff ;
}

:where(.css-d5t39c)[class^="ant-row"], :where(.css-d5t39c)[class*=" ant-row"] {
    font-family: Mulish,sans-serif!important;
    font-size: 14px;
    box-sizing: border-box;
}
:where(.css-d5t39c).ant-row {
    display: flex;
    flex-flow: row wrap;
    min-width: 0;
}
:where(.css-d5t39c).ant-row-center {
    justify-content: center;
}
.register-type_registerType__text__nXxzI {
    font-size: 13px;
    margin-top: 16px;
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
[role=button], a, area, button, input:not([type=range]), label, select, summary, textarea {
    touch-action: manipulation;
}
button.v-btn.v-btn--block.v-btn--elevated.v-theme--light.v-btn--density-default.v-btn--size-default.v-btn--variant-elevated.button-signUp {
    background: #1aa94c;
    color: #fff;    
    text-transform: none;

}
</style>