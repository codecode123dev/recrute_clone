<template>
    <div id="__next">
        <div class="unauth-layout_unauth-layout__wJDBu">
            <div class="unauth-layout_unauth-layout__language__mOqym">
                <div class="back-button_back-button__jE7v_">
                    <div class="back-button_back-button__inner__Jzhxo">
                        <i class="fa-solid fa-chevron-left"></i>
                    </div>
                </div>
                <div class="ant-space css-d5t39c ant-space-horizontal ant-space-align-center"
                    style="margin-left: auto; gap: 8px">
                    <div class="ant-space-item">
                        <div class="ant-dropdown-trigger select-language_language__zXl_Q">
                            <img src="../assets/registration/english.png" alt="language" />
                            <i class="fa-solid fa-angle-down"></i>
                        </div>
                    </div>
                </div>
            </div>
            <div class="unauth-layout_unauth-layout__container__NI_5n">
                <header-registration-view/>
                    <slot/>
            </div>
            <footer-registration-view/>
        </div>
    </div>
</template>

<script>
import FooterRegistrationView from "../components/RegistrationComponents/FooterRegistrationView.vue";
import HeaderRegistrationView from "../components/RegistrationComponents/HeaderRegistrationView.vue";

export default {
  components: {
    HeaderRegistrationView: HeaderRegistrationView,
    FooterRegistrationView: FooterRegistrationView,
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
