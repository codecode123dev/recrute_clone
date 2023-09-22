<template>
    <div id="__next">
        <div class="unauth-layout_unauth-layout__wJDBu">
            <div class="unauth-layout_unauth-layout__container__NI_5n">
                <header-login-view/>
                <v-responsive class="mx-auto">
                    <v-text-field
                    hide-details="auto"
                    label="Email address"
                    placeholder="abc@gmail.com"
                    type="email"
                    ></v-text-field>
                </v-responsive>
                <v-btn type="submit" block class="mt-2 button-reset">Reset Password</v-btn>
                <div class="ant-row ant-row-center css-d5t39c">
                    <div class="ant-col ant-col-24 css-d5t39c">
                        <div class="ant-row ant-row-center css-d5t39c">
                            <a class="my-link_my-link__wIenB undefined" href="#">Login</a>
                        </div>
                    </div>
                    <div class="reset-password-form_reset-password-form__alert__bt_94">
                        Are you having trouble logging in? 
                        <br/>
                        <a href="#">Email us </a>
                    </div>
                </div>






            </div>
            <footer-login-view/>
        </div>
    </div>
</template>

<script>
import FooterLoginView from "../components/LoginComponent/FooterLoginView.vue";
import HeaderLoginView from "../components/LoginComponent/HeaderLoginView.vue";

export default {
  components: {
    FooterLoginView: FooterLoginView,
    HeaderLoginView: HeaderLoginView,
  },
};
</script>
<style scoped>
#__next {
    height: 100vh;
    display: flex;
    flex-direction: column;
}

.unauth-layout_unauth-layout__wJDBu {
    display: flex;
    flex-direction: column;
    height: 100vh;
    overflow: auto;
    background: #f0f2f5 url(../assets/registration/login.svg) no-repeat center 110px;
    background-size: 100%;
}
.unauth-layout_unauth-layout__container__NI_5n {
    max-width: 450px;
    width: 100%;
    margin: auto;
    flex: 1 1;
    padding: 32px 16px 24px;
}
.unauth-layout_unauth-layout__language__mOqym {
    text-align: right;
    padding: 12px 16px;
    display: flex;
    justify-content: space-between;
    width: 100%;
}

.back-button_back-button__jE7v_ {
    font-size: 16px;
    text-align: center;
    width: 30px;
    height: 30px;
    cursor: pointer;
    display: flex;
    align-items: center;
    border-radius: 100rem;
    margin: 10px;
}

.back-button_back-button__inner__Jzhxo {
    display: flex;
    align-items: center;
    justify-content: center;
}

.back-button_back-button__jE7v_ img {
    margin: auto;
    height: 25px;
    width: 25px;
}

:where(.css-d5t39c).ant-space {
    display: inline-flex;
}

:where(.css-d5t39c).ant-space-align-center {
    align-items: center;
}

.select-language_language__zXl_Q {
    padding: 4px;
    border-radius: 4px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    cursor: pointer;
    height: 34px;
    display: flex;
    align-items: center;
}

img {
    vertical-align: middle;
    border-style: none;
}

img {
    max-width: 44%;
}

.select-language_language__zXl_Q img {
    width: 36px;
    margin-right: 5px;
    vertical-align: bottom;
    border: 1px solid #e7eeef;
}


:where(.css-d5t39c).ant-row-center {
    justify-content: center;
}
:where(.css-d5t39c).ant-row {
    display: flex;
    flex-flow: row wrap;
    min-width: 0;
}
:where(.css-d5t39c).ant-col-24 {
    display: block;
    flex: 0 0 100%;
    max-width: 100%;
}
.reset-password-form_reset-password-form__alert__bt_94 {
    font-size: 13px;
    margin-top: 16px;
    text-align: center;
    display: flex;
    flex-direction: row;
    gap: 2px;
}

button.v-btn.v-btn--block.v-btn--elevated.v-theme--light.v-btn--density-default.v-btn--size-default.v-btn--variant-elevated.mt-2.button-reset {
    background: #1aa94c;
    color: #fff;
    text-transform: none;

}
.ant-row.ant-row-center.css-d5t39c {
    margin-top: 0.5rem;
}
@media screen and (min-width: 992px) {
    .unauth-layout_unauth-layout__language__mOqym {
        position: fixed;
        left: 0;
        top: 0;
    }

    .back-button_back-button__jE7v_ {
        font-size: 18px;
        width: 56px;
        height: 56px;
        margin: 0;
        background: rgba(26, 169, 76, 0.1);
    }

    .back-button_back-button__inner__Jzhxo {
        position: inherit;
        padding: 16px;
        width: 100%;
    }
}
</style>
