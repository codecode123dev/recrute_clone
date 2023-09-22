<template>
    <div class="header_header__RFv6N">
        <div class="ant-row ant-row-no-wrap ant-row-space-between ant-row-middle header_header__container__05cyN css-d5t39c">
            <div class="ant-col header_header__menu__djbJz css-d5t39c">
                <ul class="ant-menu-overflow ant-menu ant-menu-root ant-menu-horizontal ant-menu-light header-menu_header-menu__GGUn1 css-d5t39c">
                    <li class="ant-menu-overflow-item ant-menu-item ant-menu-item-selected" style="opacity: 1; order: 0;">
                        <img src="../../assets/admin_image/logo.svg" class="header-menu_header-menu__logo__lZz7x ant-menu-item-icon" alt="image"/>
                        <span class="ant-menu-title-content">
                            <router-link :to="{name: 'admin-home'}" class="my-link_my-link__wIenB undefined" >
                                Home
                            </router-link>
                        </span>
                    </li>
                    <li class="ant-menu-overflow-item ant-menu-item" style="opacity: 1; order: 1;">
                        <img src="../../assets/admin_image/job_image/referral.png" alt="image"/>
                        <span class="ant-menu-title-content">
                            <a class="my-link_my-link__wIenB undefined" href="#">
                                Referral
                            </a>
                        </span>
                    </li>
                    <li class="ant-menu-overflow-item ant-menu-item" style="opacity: 1; order: 2;">
                        <img src="../../assets/admin_image/job_image/talend.png" alt="image" width="16" height="16"/>

                        <span class="ant-menu-title-content">
                            <router-link :to="{name: 'marketplace-home'}"  class="my-link_my-link__wIenB undefined" >
                                Talent pool
                            </router-link>
                        </span>
                    </li>
                    <li class="ant-menu-overflow-item ant-menu-item" style="opacity: 1; order: 3;">
                        <img src="../../assets/admin_image/job_image/message.png" alt="image" width="16" height="16"/>

                        <span class="ant-menu-title-content">
                            <a class="my-link_my-link__wIenB undefined" href="#">
                                Message
                            </a>
                        </span>
                    </li>
                    <li class="ant-menu-overflow-item ant-menu-item" style="opacity: 1; order: 4;">
                        <img src="../../assets/admin_image/job_image/notefi.png" alt="image" width="16" height="16"/>

                        <span class="ant-menu-title-content">
                            <a class="my-link_my-link__wIenB undefined" href="#">
                                Notification
                            </a>
                        </span>
                    </li>
                </ul>

            </div>

            <div class="ant-col css-d5t39c" style="height: 100%;">
                <div class="ant-space css-d5t39c ant-space-horizontal ant-space-align-center header_header__user___VSza">
                    <div class="ant-space-item">
                        <div class="ant-dropdown-trigger select-language_language__zXl_Q">
                            <!-- <img src="../../"/> -->
                            <img src="../../assets/admin_image/job_image/english.png"/>
                            <i class="fas fa-chevron-down"></i>

                        </div>
                    </div>

                    <div class="ant-space-item">
                        <div class="ant-dropdown-trigger user-dropdown_user-dropdown__box___Q8L_">
                            <div class="undefined">
                                <div class="header-budget_header-budget__container__EIYsz">
                                    <span class="ant-typography header-budget_header-budget__text__RkRDt css-15rg2km">
                                        <strong>
                                            <div class="icon-rupee_icon-rupee__X6qme">
                                                0
                                                <span class="icon-rupee_icon-rupee__coin__z4C3f icon-rupee_icon-rupee__coin-m__cruUI">
                                                    R
                                                </span>
                                            </div>
                                        </strong>
                                    </span>
                                </div>
                            </div>

                            <button class="ant-btn css-d5t39c ant-btn-link ant-btn-lg">
                                <span class="ant-avatar ant-avatar-circle ant-avatar-image css-d5t39c" style="width: 40px; height: 40px; line-height: 40px; font-size: 18px; border: 1px solid rgb(204, 204, 204);">
                                    <img src="../../assets/admin_image/job_image/ava-female.jpeg"/>
                                </span>
                            </button>
                            <i class="fas fa-chevron-down"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.header_header__RFv6N {
    background-color: #fff;
    position: -webkit-sticky;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    height: 64px;
    display: flex;
    flex-direction: row;
    width: 100%;
    border-bottom: 1px solid #dee0e3;
    overflow: hidden;
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
:where(.css-d5t39c).ant-row-no-wrap {
    flex-wrap: nowrap;
}
:where(.css-d5t39c).ant-row-space-between {
    justify-content: space-between;
}
:where(.css-d5t39c).ant-row-middle {
    align-items: center;
}
.header_header__container__05cyN {
    width: 100%;
    padding: 0 5px;
}
.header_header__RFv6N>div {
    margin-right: 0!important;
    padding: 10px 0;
}
.header_header__menu__djbJz {
    display: block;
}



dl, ol, ul {
    margin-top: 0;
    margin-bottom: 1em;
}
:where(.css-d5t39c)[class^="ant-menu"], :where(.css-d5t39c)[class*=" ant-menu"] {
    font-family: Mulish,sans-serif!important;
    font-size: 14px;
    box-sizing: border-box;
}
:where(.css-d5t39c).ant-menu {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: rgba(0, 0, 0, 0.88);
    font-size: 14px;
    line-height: 0;
    list-style: none;
    font-family: Mulish,sans-serif!important;
    margin-bottom: 0;
    padding-inline-start: 0;
    outline: none;
    transition: width 0.3s cubic-bezier(0.2, 0, 0, 1) 0s;
}
:where(.css-d5t39c).ant-menu-horizontal {
    line-height: 46px;
    border: 0;
    border-bottom: 1px solid rgba(5, 5, 5, 0.06);
    box-shadow: none;
}
:where(.css-d5t39c).ant-menu-overflow {
    display: flex;
}
:where(.css-d5t39c).ant-menu-light, :where(.css-d5t39c).ant-menu-light>.ant-menu {
    color: rgba(0, 0, 0, 0.88);
    background: #ffffff;
}
.ant-badge, .ant-btn, .ant-col, .ant-menu, .ant-radio, .ant-select, .ant-space, .ant-tag, .ant-typography {
    font-family: Mulish,sans-serif!important;
}

.header-menu_header-menu__GGUn1 {
    border-color: transparent!important;
    overflow: hidden;
}
.header-menu_header-menu__GGUn1[class*=ant-menu-horizontal] {
    line-height: 42px!important;
}


:where(.css-d5t39c)[class^="ant-menu"] [class^="ant-menu"], :where(.css-d5t39c)[class*=" ant-menu"] [class^="ant-menu"], :where(.css-d5t39c)[class^="ant-menu"] [class*=" ant-menu"], :where(.css-d5t39c)[class*=" ant-menu"] [class*=" ant-menu"] {
    box-sizing: border-box;
}

:where(.css-d5t39c).ant-menu-overflow .ant-menu-item {
    flex: none;
}

:where(.css-d5t39c).ant-menu .ant-menu-item, :where(.css-d5t39c).ant-menu .ant-menu-submenu, :where(.css-d5t39c).ant-menu .ant-menu-submenu-title {
    border-radius: 8px;
}

:where(.css-d5t39c).ant-menu .ant-menu-item, :where(.css-d5t39c).ant-menu .ant-menu-submenu-title {
    position: relative;
    display: block;
    margin: 0;
    white-space: nowrap;
    cursor: pointer;
    transition: border-color 0.3s,background 0.3s,padding 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
}
:where(.css-d5t39c).ant-menu-horizontal .ant-menu-item, :where(.css-d5t39c).ant-menu-horizontal .ant-menu-submenu {
    position: relative;
    display: inline-block;
    vertical-align: bottom;
    padding-inline: 16px;
}
:where(.css-d5t39c).ant-menu-horizontal .ant-menu-item, :where(.css-d5t39c).ant-menu-horizontal .ant-menu-submenu-title {
    transition: border-color 0.3s,background 0.3s;
}
:where(.css-d5t39c).ant-menu-light .ant-menu-item-selected, :where(.css-d5t39c).ant-menu-light>.ant-menu .ant-menu-item-selected {
    color: #1aa94c;
}
:where(.css-d5t39c).ant-menu-light .ant-menu-item-selected, :where(.css-d5t39c).ant-menu-light>.ant-menu .ant-menu-item-selected {
    background-color: #dae8dd;
}
.header-menu_header-menu__GGUn1>[class*=ant-menu-overflow-item] {
    padding: 12px 20px!important;
}
.header-menu_header-menu__GGUn1>[class*=ant-menu-item-active], .header-menu_header-menu__GGUn1>[class*=ant-menu-item-selected] {
    background-color: rgba(26,169,76,.1)!important;
}
:where(.css-d5t39c).ant-menu-light.ant-menu-horizontal >.ant-menu-item, :where(.css-d5t39c).ant-menu-light>.ant-menu.ant-menu-horizontal >.ant-menu-item, :where(.css-d5t39c).ant-menu-light.ant-menu-horizontal >.ant-menu-submenu, :where(.css-d5t39c).ant-menu-light>.ant-menu.ant-menu-horizontal >.ant-menu-submenu {
    top: 1px;
    margin-top: -1px;
    margin-bottom: 0;
    border-radius: 0;
}
:where(.css-d5t39c).ant-menu-light.ant-menu-horizontal >.ant-menu-item-selected, :where(.css-d5t39c).ant-menu-light>.ant-menu.ant-menu-horizontal >.ant-menu-item-selected, :where(.css-d5t39c).ant-menu-light.ant-menu-horizontal >.ant-menu-submenu-selected, :where(.css-d5t39c).ant-menu-light>.ant-menu.ant-menu-horizontal >.ant-menu-submenu-selected {
    color: #1aa94c;
    background-color: transparent;
}
.header-menu_header-menu__GGUn1>[class*=ant-menu-item] {
    display: flex;
    align-items: center;
    text-transform: capitalize;
}


img {
    max-width: 100%;
}
img {
    vertical-align: middle;
    border-style: none;
}
.header-menu_header-menu__logo__lZz7x {
    display: block;
    height: 40px;
    width: 40px;
}
:where(.css-d5t39c)[class^="ant-menu"] [class^="ant-menu"], :where(.css-d5t39c)[class*=" ant-menu"] [class^="ant-menu"], :where(.css-d5t39c)[class^="ant-menu"] [class*=" ant-menu"], :where(.css-d5t39c)[class*=" ant-menu"] [class*=" ant-menu"] {
    box-sizing: border-box;
}
:where(.css-d5t39c).ant-menu .ant-menu-item .ant-menu-item-icon, :where(.css-d5t39c).ant-menu .ant-menu-submenu-title .ant-menu-item-icon, :where(.css-d5t39c).ant-menu .ant-menu-item .anticon, :where(.css-d5t39c).ant-menu .ant-menu-submenu-title .anticon {
    min-width: 14px;
    font-size: 14px;
    transition: font-size 0.2s cubic-bezier(0.215, 0.61, 0.355, 1),margin 0.3s cubic-bezier(0.645, 0.045, 0.355, 1),color 0.3s;
}
:where(.css-d5t39c).ant-menu .ant-menu-item .ant-menu-item-icon, :where(.css-d5t39c).ant-menu .ant-menu-submenu-title .ant-menu-item-icon {
    display: inline-flex;
    align-items: center;
    color: inherit;
    font-style: normal;
    line-height: 0;
    text-align: center;
    text-transform: none;
    vertical-align: -0.125em;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
:where(.css-d5t39c)[class^="ant-menu"] [class^="ant-menu"], :where(.css-d5t39c)[class*=" ant-menu"] [class^="ant-menu"], :where(.css-d5t39c)[class^="ant-menu"] [class*=" ant-menu"], :where(.css-d5t39c)[class*=" ant-menu"] [class*=" ant-menu"] {
    box-sizing: border-box;
}
:where(.css-d5t39c).ant-menu .ant-menu-title-content {
    transition: color 0.3s;
}
:where(.css-d5t39c).ant-menu .ant-menu-item .ant-menu-item-icon +span, :where(.css-d5t39c).ant-menu .ant-menu-submenu-title .ant-menu-item-icon +span, :where(.css-d5t39c).ant-menu .ant-menu-item .anticon +span, :where(.css-d5t39c).ant-menu .ant-menu-submenu-title .anticon +span {
    margin-inline-start: 10px;
    opacity: 1;
    transition: opacity 0.3s cubic-bezier(0.645, 0.045, 0.355, 1),margin 0.3s,color 0.3s;
}

.header-menu_header-menu__GGUn1>[class*=ant-menu-item-active] a, .header-menu_header-menu__GGUn1>[class*=ant-menu-item-selected] a {
    color: #000!important;
}

:where(.css-d5t39c).ant-menu .ant-menu-item, :where(.css-d5t39c).ant-menu .ant-menu-submenu-title {
    position: relative;
    display: block;
    margin: 0;
    white-space: nowrap;
    cursor: pointer;
    transition: border-color 0.3s,background 0.3s,padding 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
}
:where(.css-d5t39c).ant-menu-horizontal .ant-menu-item, :where(.css-d5t39c).ant-menu-horizontal .ant-menu-submenu {
    position: relative;
    display: inline-block;
    vertical-align: bottom;
    padding-inline: 16px;
}
:where(.css-d5t39c).ant-menu-horizontal .ant-menu-item, :where(.css-d5t39c).ant-menu-horizontal .ant-menu-submenu-title {
    transition: border-color 0.3s,background 0.3s;
}
.header-menu_header-menu__GGUn1>[class*=ant-menu-item] {
    display: flex;
    align-items: center;
    text-transform: capitalize;
}
.header-menu_header-menu__GGUn1>[class*=ant-menu-overflow-item] {
    padding: 12px 20px!important;
}
:where(.css-d5t39c).ant-menu-light.ant-menu-horizontal >.ant-menu-item, :where(.css-d5t39c).ant-menu-light>.ant-menu.ant-menu-horizontal >.ant-menu-item, :where(.css-d5t39c).ant-menu-light.ant-menu-horizontal >.ant-menu-submenu, :where(.css-d5t39c).ant-menu-light>.ant-menu.ant-menu-horizontal >.ant-menu-submenu {
    top: 1px;
    margin-top: -1px;
    margin-bottom: 0;
    border-radius: 0;
}
:where(.css-d5t39c).ant-menu .ant-menu-item .ant-menu-item-icon +span, :where(.css-d5t39c).ant-menu .ant-menu-submenu-title .ant-menu-item-icon +span, :where(.css-d5t39c).ant-menu .ant-menu-item .anticon +span, :where(.css-d5t39c).ant-menu .ant-menu-submenu-title .anticon +span {
    margin-inline-start: 10px;
    opacity: 1;
    transition: opacity 0.3s cubic-bezier(0.645, 0.045, 0.355, 1),margin 0.3s,color 0.3s;
}
.header-menu_header-menu__GGUn1>[class*=ant-menu-overflow-item] a {
    color: rgba(0,0,0,.4)!important;
}
.ant-menu-title-content{
    margin-left: 10px;
}
:where(.css-d5t39c)[class^="ant-col"], :where(.css-d5t39c)[class*=" ant-col"] {
    font-family: Mulish,sans-serif!important;
    font-size: 14px;
    box-sizing: border-box;
}

:where(.css-d5t39c).ant-col {
    position: relative;
    max-width: 100%;
    min-height: 1px;
}

.ant-badge, .ant-btn, .ant-col, .ant-menu, .ant-radio, .ant-select, .ant-space, .ant-tag, .ant-typography {
    font-family: Mulish,sans-serif!important;
}

:where(.css-d5t39c).ant-space {
    display: inline-flex;
}

.ant-badge, .ant-btn, .ant-col, .ant-menu, .ant-radio, .ant-select, .ant-space, .ant-tag, .ant-typography {
    font-family: Mulish,sans-serif!important;
}
.header_header__user___VSza {
    gap: 0!important;
    height: 100%;
}
.header_header__user___VSza [class=ant-space-item] {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.select-language_language__zXl_Q {
    padding: 4px;
    border-radius: 4px;
    border: 1px solid rgba(0,0,0,.2);
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
    max-width: 100%;
}

.select-language_language__zXl_Q img {
    width: 26px;
    margin-right: 5px;
    vertical-align: bottom;
    border: 1px solid #e7eeef;
}
:where(.css-d5t39c).ant-avatar >img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
}


:where(.css-d5t39c)[class^="ant-avatar"], :where(.css-d5t39c)[class*=" ant-avatar"] {
    font-family: Mulish,sans-serif!important;
    font-size: 14px;
    box-sizing: border-box;
}
:where(.css-d5t39c).ant-avatar {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: #fff;
    font-size: 14px;
    line-height: 30px;
    list-style: none;
    font-family: Mulish,sans-serif!important;
    position: relative;
    display: inline-block;
    overflow: hidden;
    white-space: nowrap;
    text-align: center;
    vertical-align: middle;
    background: rgba(0, 0, 0, 0.25);
    border: 1px solid transparent;
    width: 32px;
    height: 32px;
    border-radius: 50%;
}

:where(.css-d5t39c).ant-avatar-image {
    background: transparent;
}
:where(.css-d5t39c).ant-btn >span {
    display: inline-block;
}

.header_header__user___VSza [class=ant-space-item] {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.user-dropdown_user-dropdown__box___Q8L_ {
    gap: 5px;
    height: 100%;
    padding-right: 5px;
    cursor: pointer;
}

.user-dropdown_user-dropdown__box___Q8L_ {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding-left: 10px;
}
.user-dropdown_user-dropdown__box___Q8L_[class*=ant-dropdown-trigger] {
    padding: 40px 10px!important;
}
.header-budget_header-budget__container__EIYsz {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    margin-left: auto;
}
.icon-rupee_icon-rupee__coin-m__cruUI {
    margin-left: 2px;
}
.icon-rupee_icon-rupee__coin__z4C3f {
    display: flex;
    width: 18px;
    height: 18px;
    padding: 0;
    border-radius: 100rem;
    background: #f6b300;
    border: 2px solid #e78b03;
    justify-content: center;
    align-items: center;
    color: #ff0;
    font-size: .7em;
    text-shadow: 2px 1px #d47e33;
    pointer-events: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
}
.icon-rupee_icon-rupee__X6qme {
    display: inline-flex;
    flex-direction: row;
    align-items: center;
}

.select-language_language__zXl_Q .fa-chevron-down{
    font-size: .5rem;
}
.user-dropdown_user-dropdown__box___Q8L_ .fa-chevron-down{
    font-size: .5rem;

}
:where(.css-d5t39c).ant-menu-light .ant-menu-item:hover:not(.ant-menu-item-selected):not(.ant-menu-submenu-selected), :where(.css-d5t39c).ant-menu-light>.ant-menu .ant-menu-item:hover:not(.ant-menu-item-selected):not(.ant-menu-submenu-selected), :where(.css-d5t39c).ant-menu-light .ant-menu-submenu-title:hover:not(.ant-menu-item-selected):not(.ant-menu-submenu-selected), :where(.css-d5t39c).ant-menu-light>.ant-menu .ant-menu-submenu-title:hover:not(.ant-menu-item-selected):not(.ant-menu-submenu-selected) {
    color: rgba(0, 0, 0, 0.88);
}
li.ant-menu-overflow-item.ant-menu-item:hover {
    background: #E8F6ED;
}
a.my-link_my-link__wIenB.undefined:hover{
    color: #000000;
}
</style>
