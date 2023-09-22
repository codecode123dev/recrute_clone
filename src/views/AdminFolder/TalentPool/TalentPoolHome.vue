<template>
    <div class="layout_layout__elCCi   layout_layout--header__WKmAL    talent-pool-layout_talent-pool-layout__la2QP">
        <div class="ant-row css-d5t39c" style="margin-left: -8px; margin-right: -8px; row-gap: 0px;">
            <div class="ant-col talent-pool-layout_talent-pool-layout__filter__dTLCV ant-col-xs-24 ant-col-md-24 ant-col-lg-6 css-d5t39c" style="padding-left: 8px; padding-right: 8px;">
                <h5 class="ant-typography ant-typography-secondary talent-pool-filter-list_talent-pool-list-filter__title__ajd7U css-d5t39c">
                    Filter
                </h5>
                <div class="undefined">
                    <div class="ant-card my-box_my-box__99ml1   undefined talent-pool-filter-list_talent-pool-list-filter__search-box--overflow__fkcF_ undefined css-d5t39c">
                        <div class="ant-card-body">
                            <form class="ant-form ant-form-vertical css-d5t39c">
                                <div class="ant-col talent-pool-filter-list_talent-pool-list-filter__form-input-group__Cc9pJ  css-d5t39c">
                                    <div class="ant-row marketplace-list-filter-body_marketplace-list-filter-body__YEGI7 css-d5t39c">
                                        <div class="ant-col ant-col-24 css-d5t39c">
                                            <div class="ant-form-item css-d5t39c">
                                                <div class="ant-row ant-form-item-row css-d5t39c">
                                                    <div class="ant-col ant-form-item-label css-d5t39c" >
                                                        <label>Must include these keywords</label>
                                                    </div>
                                                    <v-select
                                                    label="Select"
                                                    :items="['ReactJS', 'Tester', 'Java', 'PHP', 'Android', '.NET']"
                                                    variant="outlined"
                                                    ></v-select>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="ant-col ant-col-24 css-d5t39c">
                                            <div class="ant-form-item css-d5t39c">
                                                <div class="ant-row ant-form-item-row css-d5t39c">
                                                    <div class="ant-col ant-form-item-label css-d5t39c" >
                                                        <label>May include these keywords</label>
                                                    </div>
                                                    <v-select
                                                    label="Select"
                                                    :items="['ReactJS', 'Tester', 'Java', 'PHP', 'Android', '.NET']"
                                                    variant="outlined"
                                                    ></v-select>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="ant-col ant-col-24 css-d5t39c">
                                            <div class="ant-form-item css-d5t39c">
                                                <div class="ant-row ant-form-item-row css-d5t39c">
                                                    <div class="ant-col ant-form-item-label css-d5t39c" >
                                                        <label>Location</label>
                                                    </div>
                                                    <v-select
                                                    label="Select"
                                                    :items="['Ho Chi Minh', 'Remote', 'Hanoi', 'Indonesia', 'Japan']"
                                                    variant="outlined"
                                                    ></v-select>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="ant-col ant-col-24 css-d5t39c">
                                            <div class="ant-form-item css-d5t39c">
                                                <div class="ant-row ant-form-item-row css-d5t39c">
                                                    <div class="ant-col ant-form-item-label css-d5t39c" >
                                                        <label>Type</label>

                                                    </div>
                                                    <v-radio-group inline>
                                                    <v-radio label="All Types" value="1" color="success"></v-radio>
                                                    <v-radio label="IT" value="2" color="success"></v-radio>
                                                    <v-radio label="Non-IT" value="3" color="success"></v-radio>
                                                    </v-radio-group>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="ant-col ant-col-24 css-d5t39c">
                                            <div class="ant-form-item css-d5t39c">
                                                <div class="ant-row ant-form-item-row css-d5t39c">
                                                    <div class="ant-col ant-form-item-label css-d5t39c" >
                                                        <label>Birth year</label>

                                                    </div>
                                                    <div class="ant-col ant-form-item-control css-d5t39c">
                                                        <div class="ant-form-item-control-input">
                                                            <div class="ant-form-item-control-input-content">
                                                                <div class="ant-picker css-d5t39c my-date-picker_my-date-picker__G9OaH my-date-picker_my-date-picker--mini__pvUwq undefined">
                                                                    <div class="ant-picker-input">
                                                                        <input id="fromBirthday" placeholder="From"/>
                                                                        <span class="ant-picker-suffix">
                                                                            <span class="anticon anticon-calendar">
                                                                                <img src="../../../assets/admin_image/talent_pool_image/date.png" width="16" height="16" alt="image"/>
                                                                            </span>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="ant-form-item-control-input">
                                                            <div class="ant-form-item-control-input-content">
                                                                <div class="ant-picker css-d5t39c my-date-picker_my-date-picker__G9OaH my-date-picker_my-date-picker--mini__pvUwq undefined">
                                                                    <div class="ant-picker-input">
                                                                        <input id="fromBirthday" placeholder="To"/>
                                                                        <span class="ant-picker-suffix">
                                                                            <span class="anticon anticon-calendar">
                                                                                <img src="../../../assets/admin_image/talent_pool_image/date.png" width="16" height="16" alt="image"/>
                                                                            </span>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        

                                    </div>
                                </div>
                                

                                <div class="ant-row ant-row-end talent-pool-filter-list_talent-pool-list-filter__group-btn__rW4n_ talent-pool-filter-list_talent-pool-list-filter__group-btn--overflow__9Hp6m undefined css-d5t39c">
                                    <div class="ant-col css-d5t39c">
                                        <button class="ant-btn css-d5t39c ant-btn-dashed my-button_my-button__8F4rM 1   undefined">
                                            <span>Clear</span>
                                        </button>
                                    </div>

                                    <div class="ant-col css-d5t39c" style="padding-left: 8px; padding-right: 8px;">
                                        <div class="ant-form-item css-d5t39c">
                                            <div class="ant-row ant-form-item-row css-d5t39c">
                                                <div class="ant-col ant-form-item-control css-d5t39c">
                                                    <div class="ant-form-item-control-input">
                                                        <div class="ant-form-item-control-input-content">
                                                            <button class="ant-btn css-d5t39c ant-btn-primary my-button_my-button__8F4rM 1   undefined">
                                                                <span class="ant-btn-icon">
                                                                    <i class="fas fa-search"></i>
                                                                </span>
                                                                <span style="margin-left: 4px;">
                                                                    Search
                                                                </span>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>


            <div class="ant-col ant-col-xs-24 ant-col-lg-18 css-d5t39c" style="padding-left: 8px; padding-right: 8px;">
                <div class="marketplace-sort-candidate_marketplace-sort-candidate__B5oqB">
                    <div class="marketplace-sort-candidate_marketplace-sort-candidate__B5oqB">
                        <div class="ant-row ant-row-middle css-d5t39c">
                            <div class="ant-space css-d5t39c ant-space-horizontal ant-space-align-center" style="gap: 8px;">
                                <div class="ant-space-item">
                                    <img src="../../../assets/Talent/sort_item.png" alt="image" width="16"/>
                                </div>
                                <div class="ant-space-item">
                                    <span>Sort by </span>
                                </div>
                                <div class="ant-space-item">
                                    <div class="ant-select my-select_my-select__PT7rI my-select_my-select--mini__SXaDU undefined css-d5t39c ant-select-single ant-select-show-arrow" style="min-width: 230px;">
                                        <v-select
                                        label="Lastest created date"
                                        :items="['Name from A-Z', 'Name from Z-A', 'Price high to low', 'Price low to high', 'Nearest active date']"
                                        variant="outlined"
                                        ></v-select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div class="ant-spin-nested-loading css-d5t39c">
                    <div class="ant-spin-container">
                        <div class="ant-row css-d5t39c " style="margin-left: -8px; margin-right: -8px; row-gap: 16px;">
                            <div class="ant-col ant-col-xs-24 ant-col-sm-24 ant-col-md-24 ant-col-lg-24 ant-col-xl-24 ant-col-xxl-24 css-d5t39c" style="padding-left: 8px; padding-right: 8px;">
                                <span class="ant-upload-wrapper candidate-dragger-upload-3_candidate-dragger-upload-3__Xh4Sn css-15rg2km">
                                    <div class="ant-upload ant-upload-drag css-15rg2km">
                                        <span class="ant-upload ant-upload-btn">
                                            <input type="file" style="display: none;"/>
                                            <div class="ant-upload-drag-container">
                                                <div class="ant-space css-15rg2km ant-space-vertical ant-space-align-center candidate-dragger-upload-3_candidate-dragger-upload-3__card--upload__4CAKO talent-pool-list_talent-pool-list__upload__hSWv1">
                                                    <div class="ant-space-item">
                                                        <img src="../../../assets/Talent/upload.png" width="32" height="32" alt="image"/>
                                                    </div>
                                                    <div class="ant-space-item">
                                                        <div class="ant-typography css-15rg2km">
                                                            <span class="ant-typography candidate-dragger-upload-3_candidate-dragger-upload-3__title__gJS9r css-15rg2km">
                                                                Click to this area to upload
                                                            </span>
                                                            <div class="ant-typography css-15rg2km">
                                                                <span class="ant-typography candidate-dragger-upload-3_candidate-dragger-upload-3__desc__UYuEl css-15rg2km">
                                                                    PDF only (3MB) , You can update more than 1 CV
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </span>
                                    </div>
                                </span>
                            </div>

                            <div class="ant-col ant-col-xs-24 ant-col-md-24 ant-col-lg-24 ant-col-xxl-24 css-d5t39c" style="padding-left: 8px; padding-right: 8px;">
                                <div class="undefined">
                                    <div class="ant-card my-box_my-box__99ml1 undefined talent-pool-list-card_talent-pool-list-card__4fc5Z css-d5t39c">
                                        <div class="ant-card-body">
                                            <div id="candidate-marketplace-97272">
                                                <div class="talent-pool-list-card_talent-pool-list-card__header__j1txj">
                                                    <div class="talent-pool-list-card_talent-pool-list-card__name__E_7Pf">
                                                        <div class="talent-pool-list-card_talent-pool-list-card__name-text__zbhBZ">
                                                            <div class="talent-pool-list-card_talent-pool-list-card__avatar__MyviA">
                                                                <span class="ant-avatar ant-avatar-circle ant-avatar-icon css-d5t39c" style="width: 44px; height: 44px; line-height: 35px; font-size: 22px;">
                                                                    <span class="anticon anticon-user" >
                                                                        <i class="far fa-user"></i>
                                                                    </span>
                                                                </span>
                                                            </div>

                                                            <div class="ant-row talent-pool-list-card_talent-pool-list-card__text__xg7j2 css-d5t39c">
                                                                <div class="ant-col talent-pool-list-card_talent-pool-list-card__candidate__7bPpf css-d5t39c">
                                                                    <h5 class="ant-typography css-d5t39c" style="margin: 0px 7px 0px 0px;">
                                                                        Trung Đoàn Quốc
                                                                    </h5>
                                                                    <span class="ant-tag candidate-status-tag_candidate-status-tag__AT_mv undefined undefined css-d5t39c">
                                                                        Open
                                                                    </span>
                                                                </div>
                                                                <div class="ant-col css-d5t39c">
                                                                    <div class="line-three-dots_line-three-dots__hfeQm undefined undefined">
                                                                        Java dev ST
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div class="talent-pool-list-card_talent-pool-list-card__marketplace__1J5Jx">
                                                        <div class="ant-typography ant-typography-secondary ant-typography-ellipsis ant-typography-single-line ant-typography-ellipsis-single-line talent-pool-list-card_talent-pool-list-card__marketplace-price__oDggT css-d5t39c">
                                                            <div class="ant-space css-d5t39c ant-space-horizontal ant-space-align-center" style="gap: 6px;">
                                                                <div class="ant-space-item">
                                                                    Price:
                                                                </div>
                                                                <div class="ant-space-item">
                                                                    <div class="ant-typography ant-typography-ellipsis ant-typography-single-line ant-typography-ellipsis-single-line undefined css-d5t39c">
                                                                        <strong>
                                                                            <div class="icon-rupee_icon-rupee__X6qme">
                                                                                9
                                                                                <span class="icon-rupee_icon-rupee__coin__z4C3f icon-rupee_icon-rupee__coin-m__cruUI">
                                                                                    R
                                                                                </span>
                                                                            </div>
                                                                        </strong>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="ant-row css-d5t39c" style="row-gap: 6px;">
                                                    <div class="ant-col ant-col-xs-24 css-d5t39c">
                                                        <div class="ant-row info-detail-sentence-v2_info-detail-sentence-v2__wWX6C talent-pool-list-card_talent-pool-list-card__title-info__ElzZt css-d5t39c" style="margin-left: -4.5px; margin-right: -4.5px; row-gap: 0px;">
                                                            <div class="ant-col ant-col-6 css-d5t39c" style="padding-left: 4.5px; padding-right: 4.5px;">
                                                                <span class="ant-typography ant-typography-secondary css-d5t39c">
                                                                    Category :
                                                                </span>
                                                            </div>
                                                            <div class="ant-col ant-col-18 css-d5t39c" style="padding-left: 4.5px; padding-right: 4.5px;">
                                                                <div class="line-three-dots_line-three-dots__hfeQm undefined undefined">
                                                                    IT, Java Developers
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="ant-row css-d5t39c" style="row-gap: 6px;">
                                                    <div class="ant-col ant-col-xs-24 css-d5t39c">
                                                        <div class="ant-row info-detail-sentence-v2_info-detail-sentence-v2__wWX6C talent-pool-list-card_talent-pool-list-card__title-info__ElzZt css-d5t39c" style="margin-left: -4.5px; margin-right: -4.5px; row-gap: 0px;">
                                                            <div class="ant-col ant-col-6 css-d5t39c" style="padding-left: 4.5px; padding-right: 4.5px;">
                                                                <span class="ant-typography ant-typography-secondary css-d5t39c">
                                                                    Location :
                                                                </span>
                                                            </div>
                                                            <div class="ant-col ant-col-18 css-d5t39c" style="padding-left: 4.5px; padding-right: 4.5px;">
                                                                <div class="line-three-dots_line-three-dots__hfeQm undefined undefined">
                                                                    Remote, Ho Chi Minh
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="ant-row css-d5t39c" style="row-gap: 6px;">
                                                    <div class="ant-col ant-col-xs-24 css-d5t39c">
                                                        <div class="ant-row info-detail-sentence-v2_info-detail-sentence-v2__wWX6C talent-pool-list-card_talent-pool-list-card__title-info__ElzZt css-d5t39c" style="margin-left: -4.5px; margin-right: -4.5px; row-gap: 0px;">
                                                            <div class="ant-col ant-col-6 css-d5t39c" style="padding-left: 4.5px; padding-right: 4.5px;">
                                                                <span class="ant-typography ant-typography-secondary css-d5t39c">
                                                                    Salary :
                                                                </span>
                                                            </div>
                                                            <div class="ant-col ant-col-18 css-d5t39c" style="padding-left: 4.5px; padding-right: 4.5px;">
                                                                <div class="line-three-dots_line-three-dots__hfeQm undefined undefined">
                                                                    USD 1,200
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="ant-row css-d5t39c" style="row-gap: 6px;">
                                                    <div class="ant-col ant-col-xs-24 css-d5t39c">
                                                        <div class="ant-row info-detail-sentence-v2_info-detail-sentence-v2__wWX6C talent-pool-list-card_talent-pool-list-card__title-info__ElzZt css-d5t39c" style="margin-left: -4.5px; margin-right: -4.5px; row-gap: 0px;">
                                                            <div class="ant-col ant-col-6 css-d5t39c" style="padding-left: 4.5px; padding-right: 4.5px;">
                                                                <span class="ant-typography ant-typography-secondary css-d5t39c">
                                                                    Summary :
                                                                </span>
                                                            </div>
                                                            <div class="ant-col ant-col-18 css-d5t39c" style="padding-left: 4.5px; padding-right: 4.5px;">
                                                                <div class="line-three-dots_line-three-dots__hfeQm undefined undefined">
                                                                    Ứng viên có hơn 3 năm kinh nghiệm, tiếng Anh thành thạo
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="ant-row css-d5t39c" style="row-gap: 6px;">
                                                    <div class="ant-col ant-col-xs-24 css-d5t39c">
                                                        <div class="ant-row info-detail-sentence-v2_info-detail-sentence-v2__wWX6C talent-pool-list-card_talent-pool-list-card__title-info__ElzZt css-d5t39c" style="margin-left: -4.5px; margin-right: -4.5px; row-gap: 0px;">
                                                            <div class="ant-col ant-col-6 css-d5t39c" style="padding-left: 4.5px; padding-right: 4.5px;">
                                                                <span class="ant-typography ant-typography-secondary css-d5t39c">
                                                                    Type :
                                                                </span>
                                                            </div>
                                                            <div class="ant-col ant-col-18 css-d5t39c" style="padding-left: 4.5px; padding-right: 4.5px;">
                                                                <div class="line-three-dots_line-three-dots__hfeQm undefined undefined">
                                                                    <span class="ant-tag ant-tag-has-color css-d5t39c" style="background-color: rgb(156, 163, 175);">
                                                                        IT
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="talent-pool-list-card_talent-pool-list-card__bottom__Tiegq">
                                                <div class="talent-pool-list-card_talent-pool-list-card__date-info__8IM_r">
                                                    Last active: Sep 22, 2023 09:08
                                                    <div class="talent-pool-list-card_talent-pool-list-card__open__NoBrw">
                                                        <span class="ant-typography ant-typography-success css-d5t39c">
                                                            <img src="../../../assets/Talent/bag.png" width="16" height="16"/>
                                                            Open to new opportunities
                                                        </span>
                                                    </div>
                                                </div>
                                                <button class="ant-btn css-d5t39c ant-btn-primary ant-btn-background-ghost my-button_my-button__8F4rM 1 my-button_my-button--bg-white__0YadP  talent-pool-list-card_talent-pool-list-card__button__XD7OQ">
                                                    <span class="ant-btn-icon">
                                                        <span class="anticon anticon-user">
                                                            <i class="far fa-user"></i>
                                                        </span>
                                                    </span>
                                                    <span>View Profile</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="ant-col ant-col-xs-24 ant-col-md-24 ant-col-lg-24 ant-col-xxl-24 css-d5t39c" style="padding-left: 8px; padding-right: 8px;">
                                <div class="undefined">
                                    <div class="ant-card my-box_my-box__99ml1 undefined talent-pool-list-card_talent-pool-list-card__4fc5Z css-d5t39c">
                                        <div class="ant-card-body">
                                            <div id="candidate-marketplace-97272">
                                                <div class="talent-pool-list-card_talent-pool-list-card__header__j1txj">
                                                    <div class="talent-pool-list-card_talent-pool-list-card__name__E_7Pf">
                                                        <div class="talent-pool-list-card_talent-pool-list-card__name-text__zbhBZ">
                                                            <div class="talent-pool-list-card_talent-pool-list-card__avatar__MyviA">
                                                                <span class="ant-avatar ant-avatar-circle ant-avatar-icon css-d5t39c" style="width: 44px; height: 44px; line-height: 35px; font-size: 22px;">
                                                                    <span class="anticon anticon-user" >
                                                                        <i class="far fa-user"></i>
                                                                    </span>
                                                                </span>
                                                            </div>

                                                            <div class="ant-row talent-pool-list-card_talent-pool-list-card__text__xg7j2 css-d5t39c">
                                                                <div class="ant-col talent-pool-list-card_talent-pool-list-card__candidate__7bPpf css-d5t39c">
                                                                    <h5 class="ant-typography css-d5t39c" style="margin: 0px 7px 0px 0px;">
                                                                        Trung Đoàn Quốc
                                                                    </h5>
                                                                    <span class="ant-tag candidate-status-tag_candidate-status-tag__AT_mv undefined undefined css-d5t39c">
                                                                        Open
                                                                    </span>
                                                                </div>
                                                                <div class="ant-col css-d5t39c">
                                                                    <div class="line-three-dots_line-three-dots__hfeQm undefined undefined">
                                                                        Java dev ST
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div class="talent-pool-list-card_talent-pool-list-card__marketplace__1J5Jx">
                                                        <div class="ant-typography ant-typography-secondary ant-typography-ellipsis ant-typography-single-line ant-typography-ellipsis-single-line talent-pool-list-card_talent-pool-list-card__marketplace-price__oDggT css-d5t39c">
                                                            <div class="ant-space css-d5t39c ant-space-horizontal ant-space-align-center" style="gap: 6px;">
                                                                <div class="ant-space-item">
                                                                    Price:
                                                                </div>
                                                                <div class="ant-space-item">
                                                                    <div class="ant-typography ant-typography-ellipsis ant-typography-single-line ant-typography-ellipsis-single-line undefined css-d5t39c">
                                                                        <strong>
                                                                            <div class="icon-rupee_icon-rupee__X6qme">
                                                                                9
                                                                                <span class="icon-rupee_icon-rupee__coin__z4C3f icon-rupee_icon-rupee__coin-m__cruUI">
                                                                                    R
                                                                                </span>
                                                                            </div>
                                                                        </strong>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="ant-row css-d5t39c" style="row-gap: 6px;">
                                                    <div class="ant-col ant-col-xs-24 css-d5t39c">
                                                        <div class="ant-row info-detail-sentence-v2_info-detail-sentence-v2__wWX6C talent-pool-list-card_talent-pool-list-card__title-info__ElzZt css-d5t39c" style="margin-left: -4.5px; margin-right: -4.5px; row-gap: 0px;">
                                                            <div class="ant-col ant-col-6 css-d5t39c" style="padding-left: 4.5px; padding-right: 4.5px;">
                                                                <span class="ant-typography ant-typography-secondary css-d5t39c">
                                                                    Category :
                                                                </span>
                                                            </div>
                                                            <div class="ant-col ant-col-18 css-d5t39c" style="padding-left: 4.5px; padding-right: 4.5px;">
                                                                <div class="line-three-dots_line-three-dots__hfeQm undefined undefined">
                                                                    IT, Java Developers
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="ant-row css-d5t39c" style="row-gap: 6px;">
                                                    <div class="ant-col ant-col-xs-24 css-d5t39c">
                                                        <div class="ant-row info-detail-sentence-v2_info-detail-sentence-v2__wWX6C talent-pool-list-card_talent-pool-list-card__title-info__ElzZt css-d5t39c" style="margin-left: -4.5px; margin-right: -4.5px; row-gap: 0px;">
                                                            <div class="ant-col ant-col-6 css-d5t39c" style="padding-left: 4.5px; padding-right: 4.5px;">
                                                                <span class="ant-typography ant-typography-secondary css-d5t39c">
                                                                    Location :
                                                                </span>
                                                            </div>
                                                            <div class="ant-col ant-col-18 css-d5t39c" style="padding-left: 4.5px; padding-right: 4.5px;">
                                                                <div class="line-three-dots_line-three-dots__hfeQm undefined undefined">
                                                                    Remote, Ho Chi Minh
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="ant-row css-d5t39c" style="row-gap: 6px;">
                                                    <div class="ant-col ant-col-xs-24 css-d5t39c">
                                                        <div class="ant-row info-detail-sentence-v2_info-detail-sentence-v2__wWX6C talent-pool-list-card_talent-pool-list-card__title-info__ElzZt css-d5t39c" style="margin-left: -4.5px; margin-right: -4.5px; row-gap: 0px;">
                                                            <div class="ant-col ant-col-6 css-d5t39c" style="padding-left: 4.5px; padding-right: 4.5px;">
                                                                <span class="ant-typography ant-typography-secondary css-d5t39c">
                                                                    Salary :
                                                                </span>
                                                            </div>
                                                            <div class="ant-col ant-col-18 css-d5t39c" style="padding-left: 4.5px; padding-right: 4.5px;">
                                                                <div class="line-three-dots_line-three-dots__hfeQm undefined undefined">
                                                                    USD 1,200
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="ant-row css-d5t39c" style="row-gap: 6px;">
                                                    <div class="ant-col ant-col-xs-24 css-d5t39c">
                                                        <div class="ant-row info-detail-sentence-v2_info-detail-sentence-v2__wWX6C talent-pool-list-card_talent-pool-list-card__title-info__ElzZt css-d5t39c" style="margin-left: -4.5px; margin-right: -4.5px; row-gap: 0px;">
                                                            <div class="ant-col ant-col-6 css-d5t39c" style="padding-left: 4.5px; padding-right: 4.5px;">
                                                                <span class="ant-typography ant-typography-secondary css-d5t39c">
                                                                    Summary :
                                                                </span>
                                                            </div>
                                                            <div class="ant-col ant-col-18 css-d5t39c" style="padding-left: 4.5px; padding-right: 4.5px;">
                                                                <div class="line-three-dots_line-three-dots__hfeQm undefined undefined">
                                                                    Ứng viên có hơn 3 năm kinh nghiệm, tiếng Anh thành thạo
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="ant-row css-d5t39c" style="row-gap: 6px;">
                                                    <div class="ant-col ant-col-xs-24 css-d5t39c">
                                                        <div class="ant-row info-detail-sentence-v2_info-detail-sentence-v2__wWX6C talent-pool-list-card_talent-pool-list-card__title-info__ElzZt css-d5t39c" style="margin-left: -4.5px; margin-right: -4.5px; row-gap: 0px;">
                                                            <div class="ant-col ant-col-6 css-d5t39c" style="padding-left: 4.5px; padding-right: 4.5px;">
                                                                <span class="ant-typography ant-typography-secondary css-d5t39c">
                                                                    Type :
                                                                </span>
                                                            </div>
                                                            <div class="ant-col ant-col-18 css-d5t39c" style="padding-left: 4.5px; padding-right: 4.5px;">
                                                                <div class="line-three-dots_line-three-dots__hfeQm undefined undefined">
                                                                    <span class="ant-tag ant-tag-has-color css-d5t39c" style="background-color: rgb(156, 163, 175);">
                                                                        IT
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="talent-pool-list-card_talent-pool-list-card__bottom__Tiegq">
                                                <div class="talent-pool-list-card_talent-pool-list-card__date-info__8IM_r">
                                                    Last active: Sep 22, 2023 09:08
                                                    <div class="talent-pool-list-card_talent-pool-list-card__open__NoBrw">
                                                        <span class="ant-typography ant-typography-success css-d5t39c">
                                                            <img src="../../../assets/Talent/bag.png" width="16" height="16"/>
                                                            Open to new opportunities
                                                        </span>
                                                    </div>
                                                </div>
                                                <button class="ant-btn css-d5t39c ant-btn-primary ant-btn-background-ghost my-button_my-button__8F4rM 1 my-button_my-button--bg-white__0YadP  talent-pool-list-card_talent-pool-list-card__button__XD7OQ">
                                                    <span class="ant-btn-icon">
                                                        <span class="anticon anticon-user">
                                                            <i class="far fa-user"></i>
                                                        </span>
                                                    </span>
                                                    <span>View Profile</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="ant-col ant-col-xs-24 ant-col-md-24 ant-col-lg-24 ant-col-xxl-24 css-d5t39c" style="padding-left: 8px; padding-right: 8px;">
                                <div class="undefined">
                                    <div class="ant-card my-box_my-box__99ml1 undefined talent-pool-list-card_talent-pool-list-card__4fc5Z css-d5t39c">
                                        <div class="ant-card-body">
                                            <div id="candidate-marketplace-97272">
                                                <div class="talent-pool-list-card_talent-pool-list-card__header__j1txj">
                                                    <div class="talent-pool-list-card_talent-pool-list-card__name__E_7Pf">
                                                        <div class="talent-pool-list-card_talent-pool-list-card__name-text__zbhBZ">
                                                            <div class="talent-pool-list-card_talent-pool-list-card__avatar__MyviA">
                                                                <span class="ant-avatar ant-avatar-circle ant-avatar-icon css-d5t39c" style="width: 44px; height: 44px; line-height: 35px; font-size: 22px;">
                                                                    <span class="anticon anticon-user" >
                                                                        <i class="far fa-user"></i>
                                                                    </span>
                                                                </span>
                                                            </div>

                                                            <div class="ant-row talent-pool-list-card_talent-pool-list-card__text__xg7j2 css-d5t39c">
                                                                <div class="ant-col talent-pool-list-card_talent-pool-list-card__candidate__7bPpf css-d5t39c">
                                                                    <h5 class="ant-typography css-d5t39c" style="margin: 0px 7px 0px 0px;">
                                                                        Trung Đoàn Quốc
                                                                    </h5>
                                                                    <span class="ant-tag candidate-status-tag_candidate-status-tag__AT_mv undefined undefined css-d5t39c">
                                                                        Open
                                                                    </span>
                                                                </div>
                                                                <div class="ant-col css-d5t39c">
                                                                    <div class="line-three-dots_line-three-dots__hfeQm undefined undefined">
                                                                        Java dev ST
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div class="talent-pool-list-card_talent-pool-list-card__marketplace__1J5Jx">
                                                        <div class="ant-typography ant-typography-secondary ant-typography-ellipsis ant-typography-single-line ant-typography-ellipsis-single-line talent-pool-list-card_talent-pool-list-card__marketplace-price__oDggT css-d5t39c">
                                                            <div class="ant-space css-d5t39c ant-space-horizontal ant-space-align-center" style="gap: 6px;">
                                                                <div class="ant-space-item">
                                                                    Price:
                                                                </div>
                                                                <div class="ant-space-item">
                                                                    <div class="ant-typography ant-typography-ellipsis ant-typography-single-line ant-typography-ellipsis-single-line undefined css-d5t39c">
                                                                        <strong>
                                                                            <div class="icon-rupee_icon-rupee__X6qme">
                                                                                9
                                                                                <span class="icon-rupee_icon-rupee__coin__z4C3f icon-rupee_icon-rupee__coin-m__cruUI">
                                                                                    R
                                                                                </span>
                                                                            </div>
                                                                        </strong>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="ant-row css-d5t39c" style="row-gap: 6px;">
                                                    <div class="ant-col ant-col-xs-24 css-d5t39c">
                                                        <div class="ant-row info-detail-sentence-v2_info-detail-sentence-v2__wWX6C talent-pool-list-card_talent-pool-list-card__title-info__ElzZt css-d5t39c" style="margin-left: -4.5px; margin-right: -4.5px; row-gap: 0px;">
                                                            <div class="ant-col ant-col-6 css-d5t39c" style="padding-left: 4.5px; padding-right: 4.5px;">
                                                                <span class="ant-typography ant-typography-secondary css-d5t39c">
                                                                    Category :
                                                                </span>
                                                            </div>
                                                            <div class="ant-col ant-col-18 css-d5t39c" style="padding-left: 4.5px; padding-right: 4.5px;">
                                                                <div class="line-three-dots_line-three-dots__hfeQm undefined undefined">
                                                                    IT, Java Developers
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="ant-row css-d5t39c" style="row-gap: 6px;">
                                                    <div class="ant-col ant-col-xs-24 css-d5t39c">
                                                        <div class="ant-row info-detail-sentence-v2_info-detail-sentence-v2__wWX6C talent-pool-list-card_talent-pool-list-card__title-info__ElzZt css-d5t39c" style="margin-left: -4.5px; margin-right: -4.5px; row-gap: 0px;">
                                                            <div class="ant-col ant-col-6 css-d5t39c" style="padding-left: 4.5px; padding-right: 4.5px;">
                                                                <span class="ant-typography ant-typography-secondary css-d5t39c">
                                                                    Location :
                                                                </span>
                                                            </div>
                                                            <div class="ant-col ant-col-18 css-d5t39c" style="padding-left: 4.5px; padding-right: 4.5px;">
                                                                <div class="line-three-dots_line-three-dots__hfeQm undefined undefined">
                                                                    Remote, Ho Chi Minh
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="ant-row css-d5t39c" style="row-gap: 6px;">
                                                    <div class="ant-col ant-col-xs-24 css-d5t39c">
                                                        <div class="ant-row info-detail-sentence-v2_info-detail-sentence-v2__wWX6C talent-pool-list-card_talent-pool-list-card__title-info__ElzZt css-d5t39c" style="margin-left: -4.5px; margin-right: -4.5px; row-gap: 0px;">
                                                            <div class="ant-col ant-col-6 css-d5t39c" style="padding-left: 4.5px; padding-right: 4.5px;">
                                                                <span class="ant-typography ant-typography-secondary css-d5t39c">
                                                                    Salary :
                                                                </span>
                                                            </div>
                                                            <div class="ant-col ant-col-18 css-d5t39c" style="padding-left: 4.5px; padding-right: 4.5px;">
                                                                <div class="line-three-dots_line-three-dots__hfeQm undefined undefined">
                                                                    USD 1,200
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="ant-row css-d5t39c" style="row-gap: 6px;">
                                                    <div class="ant-col ant-col-xs-24 css-d5t39c">
                                                        <div class="ant-row info-detail-sentence-v2_info-detail-sentence-v2__wWX6C talent-pool-list-card_talent-pool-list-card__title-info__ElzZt css-d5t39c" style="margin-left: -4.5px; margin-right: -4.5px; row-gap: 0px;">
                                                            <div class="ant-col ant-col-6 css-d5t39c" style="padding-left: 4.5px; padding-right: 4.5px;">
                                                                <span class="ant-typography ant-typography-secondary css-d5t39c">
                                                                    Summary :
                                                                </span>
                                                            </div>
                                                            <div class="ant-col ant-col-18 css-d5t39c" style="padding-left: 4.5px; padding-right: 4.5px;">
                                                                <div class="line-three-dots_line-three-dots__hfeQm undefined undefined">
                                                                    Ứng viên có hơn 3 năm kinh nghiệm, tiếng Anh thành thạo
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="ant-row css-d5t39c" style="row-gap: 6px;">
                                                    <div class="ant-col ant-col-xs-24 css-d5t39c">
                                                        <div class="ant-row info-detail-sentence-v2_info-detail-sentence-v2__wWX6C talent-pool-list-card_talent-pool-list-card__title-info__ElzZt css-d5t39c" style="margin-left: -4.5px; margin-right: -4.5px; row-gap: 0px;">
                                                            <div class="ant-col ant-col-6 css-d5t39c" style="padding-left: 4.5px; padding-right: 4.5px;">
                                                                <span class="ant-typography ant-typography-secondary css-d5t39c">
                                                                    Type :
                                                                </span>
                                                            </div>
                                                            <div class="ant-col ant-col-18 css-d5t39c" style="padding-left: 4.5px; padding-right: 4.5px;">
                                                                <div class="line-three-dots_line-three-dots__hfeQm undefined undefined">
                                                                    <span class="ant-tag ant-tag-has-color css-d5t39c" style="background-color: rgb(156, 163, 175);">
                                                                        IT
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="talent-pool-list-card_talent-pool-list-card__bottom__Tiegq">
                                                <div class="talent-pool-list-card_talent-pool-list-card__date-info__8IM_r">
                                                    Last active: Sep 22, 2023 09:08
                                                    <div class="talent-pool-list-card_talent-pool-list-card__open__NoBrw">
                                                        <span class="ant-typography ant-typography-success css-d5t39c">
                                                            <img src="../../../assets/Talent/bag.png" width="16" height="16"/>
                                                            Open to new opportunities
                                                        </span>
                                                    </div>
                                                </div>
                                                <button class="ant-btn css-d5t39c ant-btn-primary ant-btn-background-ghost my-button_my-button__8F4rM 1 my-button_my-button--bg-white__0YadP  talent-pool-list-card_talent-pool-list-card__button__XD7OQ">
                                                    <span class="ant-btn-icon">
                                                        <span class="anticon anticon-user">
                                                            <i class="far fa-user"></i>
                                                        </span>
                                                    </span>
                                                    <span>View Profile</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="ant-col ant-col-xs-24 ant-col-md-24 ant-col-lg-24 ant-col-xxl-24 css-d5t39c" style="padding-left: 8px; padding-right: 8px;">
                                <div class="undefined">
                                    <div class="ant-card my-box_my-box__99ml1 undefined talent-pool-list-card_talent-pool-list-card__4fc5Z css-d5t39c">
                                        <div class="ant-card-body">
                                            <div id="candidate-marketplace-97272">
                                                <div class="talent-pool-list-card_talent-pool-list-card__header__j1txj">
                                                    <div class="talent-pool-list-card_talent-pool-list-card__name__E_7Pf">
                                                        <div class="talent-pool-list-card_talent-pool-list-card__name-text__zbhBZ">
                                                            <div class="talent-pool-list-card_talent-pool-list-card__avatar__MyviA">
                                                                <span class="ant-avatar ant-avatar-circle ant-avatar-icon css-d5t39c" style="width: 44px; height: 44px; line-height: 35px; font-size: 22px;">
                                                                    <span class="anticon anticon-user" >
                                                                        <i class="far fa-user"></i>
                                                                    </span>
                                                                </span>
                                                            </div>

                                                            <div class="ant-row talent-pool-list-card_talent-pool-list-card__text__xg7j2 css-d5t39c">
                                                                <div class="ant-col talent-pool-list-card_talent-pool-list-card__candidate__7bPpf css-d5t39c">
                                                                    <h5 class="ant-typography css-d5t39c" style="margin: 0px 7px 0px 0px;">
                                                                        Trung Đoàn Quốc
                                                                    </h5>
                                                                    <span class="ant-tag candidate-status-tag_candidate-status-tag__AT_mv undefined undefined css-d5t39c">
                                                                        Open
                                                                    </span>
                                                                </div>
                                                                <div class="ant-col css-d5t39c">
                                                                    <div class="line-three-dots_line-three-dots__hfeQm undefined undefined">
                                                                        Java dev ST
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div class="talent-pool-list-card_talent-pool-list-card__marketplace__1J5Jx">
                                                        <div class="ant-typography ant-typography-secondary ant-typography-ellipsis ant-typography-single-line ant-typography-ellipsis-single-line talent-pool-list-card_talent-pool-list-card__marketplace-price__oDggT css-d5t39c">
                                                            <div class="ant-space css-d5t39c ant-space-horizontal ant-space-align-center" style="gap: 6px;">
                                                                <div class="ant-space-item">
                                                                    Price:
                                                                </div>
                                                                <div class="ant-space-item">
                                                                    <div class="ant-typography ant-typography-ellipsis ant-typography-single-line ant-typography-ellipsis-single-line undefined css-d5t39c">
                                                                        <strong>
                                                                            <div class="icon-rupee_icon-rupee__X6qme">
                                                                                9
                                                                                <span class="icon-rupee_icon-rupee__coin__z4C3f icon-rupee_icon-rupee__coin-m__cruUI">
                                                                                    R
                                                                                </span>
                                                                            </div>
                                                                        </strong>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="ant-row css-d5t39c" style="row-gap: 6px;">
                                                    <div class="ant-col ant-col-xs-24 css-d5t39c">
                                                        <div class="ant-row info-detail-sentence-v2_info-detail-sentence-v2__wWX6C talent-pool-list-card_talent-pool-list-card__title-info__ElzZt css-d5t39c" style="margin-left: -4.5px; margin-right: -4.5px; row-gap: 0px;">
                                                            <div class="ant-col ant-col-6 css-d5t39c" style="padding-left: 4.5px; padding-right: 4.5px;">
                                                                <span class="ant-typography ant-typography-secondary css-d5t39c">
                                                                    Category :
                                                                </span>
                                                            </div>
                                                            <div class="ant-col ant-col-18 css-d5t39c" style="padding-left: 4.5px; padding-right: 4.5px;">
                                                                <div class="line-three-dots_line-three-dots__hfeQm undefined undefined">
                                                                    IT, Java Developers
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="ant-row css-d5t39c" style="row-gap: 6px;">
                                                    <div class="ant-col ant-col-xs-24 css-d5t39c">
                                                        <div class="ant-row info-detail-sentence-v2_info-detail-sentence-v2__wWX6C talent-pool-list-card_talent-pool-list-card__title-info__ElzZt css-d5t39c" style="margin-left: -4.5px; margin-right: -4.5px; row-gap: 0px;">
                                                            <div class="ant-col ant-col-6 css-d5t39c" style="padding-left: 4.5px; padding-right: 4.5px;">
                                                                <span class="ant-typography ant-typography-secondary css-d5t39c">
                                                                    Location :
                                                                </span>
                                                            </div>
                                                            <div class="ant-col ant-col-18 css-d5t39c" style="padding-left: 4.5px; padding-right: 4.5px;">
                                                                <div class="line-three-dots_line-three-dots__hfeQm undefined undefined">
                                                                    Remote, Ho Chi Minh
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="ant-row css-d5t39c" style="row-gap: 6px;">
                                                    <div class="ant-col ant-col-xs-24 css-d5t39c">
                                                        <div class="ant-row info-detail-sentence-v2_info-detail-sentence-v2__wWX6C talent-pool-list-card_talent-pool-list-card__title-info__ElzZt css-d5t39c" style="margin-left: -4.5px; margin-right: -4.5px; row-gap: 0px;">
                                                            <div class="ant-col ant-col-6 css-d5t39c" style="padding-left: 4.5px; padding-right: 4.5px;">
                                                                <span class="ant-typography ant-typography-secondary css-d5t39c">
                                                                    Salary :
                                                                </span>
                                                            </div>
                                                            <div class="ant-col ant-col-18 css-d5t39c" style="padding-left: 4.5px; padding-right: 4.5px;">
                                                                <div class="line-three-dots_line-three-dots__hfeQm undefined undefined">
                                                                    USD 1,200
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="ant-row css-d5t39c" style="row-gap: 6px;">
                                                    <div class="ant-col ant-col-xs-24 css-d5t39c">
                                                        <div class="ant-row info-detail-sentence-v2_info-detail-sentence-v2__wWX6C talent-pool-list-card_talent-pool-list-card__title-info__ElzZt css-d5t39c" style="margin-left: -4.5px; margin-right: -4.5px; row-gap: 0px;">
                                                            <div class="ant-col ant-col-6 css-d5t39c" style="padding-left: 4.5px; padding-right: 4.5px;">
                                                                <span class="ant-typography ant-typography-secondary css-d5t39c">
                                                                    Summary :
                                                                </span>
                                                            </div>
                                                            <div class="ant-col ant-col-18 css-d5t39c" style="padding-left: 4.5px; padding-right: 4.5px;">
                                                                <div class="line-three-dots_line-three-dots__hfeQm undefined undefined">
                                                                    Ứng viên có hơn 3 năm kinh nghiệm, tiếng Anh thành thạo
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="ant-row css-d5t39c" style="row-gap: 6px;">
                                                    <div class="ant-col ant-col-xs-24 css-d5t39c">
                                                        <div class="ant-row info-detail-sentence-v2_info-detail-sentence-v2__wWX6C talent-pool-list-card_talent-pool-list-card__title-info__ElzZt css-d5t39c" style="margin-left: -4.5px; margin-right: -4.5px; row-gap: 0px;">
                                                            <div class="ant-col ant-col-6 css-d5t39c" style="padding-left: 4.5px; padding-right: 4.5px;">
                                                                <span class="ant-typography ant-typography-secondary css-d5t39c">
                                                                    Type :
                                                                </span>
                                                            </div>
                                                            <div class="ant-col ant-col-18 css-d5t39c" style="padding-left: 4.5px; padding-right: 4.5px;">
                                                                <div class="line-three-dots_line-three-dots__hfeQm undefined undefined">
                                                                    <span class="ant-tag ant-tag-has-color css-d5t39c" style="background-color: rgb(156, 163, 175);">
                                                                        IT
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="talent-pool-list-card_talent-pool-list-card__bottom__Tiegq">
                                                <div class="talent-pool-list-card_talent-pool-list-card__date-info__8IM_r">
                                                    Last active: Sep 22, 2023 09:08
                                                    <div class="talent-pool-list-card_talent-pool-list-card__open__NoBrw">
                                                        <span class="ant-typography ant-typography-success css-d5t39c">
                                                            <img src="../../../assets/Talent/bag.png" width="16" height="16"/>
                                                            Open to new opportunities
                                                        </span>
                                                    </div>
                                                </div>
                                                <button class="ant-btn css-d5t39c ant-btn-primary ant-btn-background-ghost my-button_my-button__8F4rM 1 my-button_my-button--bg-white__0YadP  talent-pool-list-card_talent-pool-list-card__button__XD7OQ">
                                                    <span class="ant-btn-icon">
                                                        <span class="anticon anticon-user">
                                                            <i class="far fa-user"></i>
                                                        </span>
                                                    </span>
                                                    <span>View Profile</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div class="ant-row ant-row-center css-d5t39c" style="margin: 32px 0px 0px;"></div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.layout_layout__elCCi {
    margin-top: calc(64px + 15px);
    margin-bottom: 16px;
    height: -moz-fit-content;
    height: fit-content;
    padding: 0 16px;
}

.layout_layout--header__WKmAL {
    margin-top: 15px;
}
.talent-pool-layout_talent-pool-layout__la2QP {
    margin-top: 150px;
}
:where(.css-d5t39c).ant-row {
    display: flex;
    flex-flow: row wrap;
    min-width: 0;
}

:where(.css-d5t39c).ant-col-xs-24 {
    display: block;
    flex: 0 0 100%;
    max-width: 100%;
}
:where(.css-d5t39c).ant-col {
    position: relative;
    max-width: 100%;
    min-height: 1px;
}


.talent-pool-layout_talent-pool-layout__filter__dTLCV {
    position: -webkit-sticky;
    position: sticky;
    /* top: 90px; */
    height: calc(100vh - 64px - 75px);
}

.talent-pool-filter-list_talent-pool-list-filter__title__ajd7U {
    line-height: 32px!important;
    margin-bottom: 15px!important;
    margin-top: 0!important;
}

h5:where(.css-d5t39c).ant-typography, div:where(.css-d5t39c).ant-typography-h5, div:where(.css-d5t39c).ant-typography-h5>textarea, :where(.css-d5t39c).ant-typography h5 {
    margin-bottom: 0.5em;
    color: rgba(0, 0, 0, 0.88);
    font-weight: 600;
    font-size: 16px;
    line-height: 1.5;
}
:where(.css-d5t39c).ant-typography.ant-typography-secondary {
    color: rgba(0, 0, 0, 0.45);
}


:where(.css-d5t39c).ant-card {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: rgba(0, 0, 0, 0.88);
    font-size: 14px;
    line-height: 1.5714285714285714;
    list-style: none;
    font-family: Mulish,sans-serif!important;
    position: relative;
    background: #ffffff;
    border-radius: 8px;
}

.my-box_my-box__99ml1 {
    box-shadow: none!important;
    background: #fff;
    position: relative;
    overflow: hidden;
    border-radius: 8px;
    transition: all .2s ease-in;
    border: 1px solid #dee0e3;
}
:where(.css-d5t39c).ant-card:not(.ant-card-bordered) {
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.03), 0 1px 6px -1px rgba(0, 0, 0, 0.02), 0 2px 4px 0 rgba(0, 0, 0, 0.02);
}

:where(.css-d5t39c).ant-card .ant-card-body {
    padding: 24px;
    border-radius: 0 0 8px 8px;
}

.my-box_my-box__99ml1>[class*=ant-card-body] {
    padding: 15px 20px!important;
}
.talent-pool-filter-list_talent-pool-list-filter__search-box--overflow__fkcF_ [class=ant-card-body] {
    padding: 15px 0 15px 20px!important;
}
:where(.css-d5t39c).ant-form {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: rgba(0, 0, 0, 0.88);
    font-size: 14px;
    line-height: 1.5714285714285714;
    list-style: none;
    font-family: Mulish,sans-serif!important;
}
.talent-pool-filter-list_talent-pool-list-filter__search-box--overflow__fkcF_ .talent-pool-filter-list_talent-pool-list-filter__form-input-group__Cc9pJ {
    padding-right: 20px!important;
}
:where(.css-d5t39c).ant-form {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: rgba(0, 0, 0, 0.88);
    font-size: 14px;
    line-height: 1.5714285714285714;
    list-style: none;
    font-family: Mulish,sans-serif!important;
}
:where(.css-d5t39c).ant-card {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: rgba(0, 0, 0, 0.88);
    font-size: 14px;
    line-height: 1.5714285714285714;
    list-style: none;
    font-family: Mulish,sans-serif!important;
    position: relative;
    background: #ffffff;
    border-radius: 8px;
}
:where(.css-d5t39c).ant-form {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: rgba(0, 0, 0, 0.88);
    font-size: 14px;
    line-height: 1.5714285714285714;
    list-style: none;
    font-family: Mulish,sans-serif!important;
}
:where(.css-d5t39c).ant-col {
    position: relative;
    max-width: 100%;
    min-height: 1px;
}
.talent-pool-filter-list_talent-pool-list-filter__form-input-group__Cc9pJ {
    padding: 0!important;
    max-height: calc(100vh - 64px - 230px);
    overflow-y: auto;
    overflow-x: hidden;
}
.ant-col .ant-form-item-label {
    padding-bottom: 16px !important;
}
:where(.css-d5t39c).ant-col-24 {
    display: block;
    flex: 0 0 100%;
    max-width: 100%;
}
:where(.css-d5t39c).ant-form-item {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: rgba(0, 0, 0, 0.88);
    font-size: 14px;
    line-height: 1.5714285714285714;
    list-style: none;
    font-family: Mulish,sans-serif!important;
    margin-bottom: 24px;
    vertical-align: top;
}
.marketplace-list-filter-body_marketplace-list-filter-body__YEGI7 [class*="ant-row ant-form-item"] {
    margin-bottom: 12px;
}
:where(.css-d5t39c).ant-form-vertical .ant-form-item-row {
    flex-direction: column;
}
.ant-form-item-row >>> .v-input__details{
    display: none;
}
.ant-form-item-row >>> .v-label{
    font-size: .8rem;
}

:where(.css-d5t39c).ant-row-end {
    justify-content: flex-end;
}
.talent-pool-filter-list_talent-pool-list-filter__group-btn__rW4n_ {
    margin-top: 15px;
}
.talent-pool-filter-list_talent-pool-list-filter__group-btn--overflow__9Hp6m {
    padding-right: 20px!important;
}
[type=reset], [type=submit], button, html [type=button] {
    -webkit-appearance: button;
}

.my-button_my-button__8F4rM {
    border-radius: 8px!important;
    box-shadow: none!important;
    outline: none!important;
}



button, select {
    text-transform: none;
}
button, input, optgroup, select, textarea {
    margin: 0;
    color: inherit;
    font-size: inherit;
    font-family: inherit;
    line-height: inherit;
}

:where(.css-d5t39c).ant-btn {
    outline: none;
    position: relative;
    display: inline-block;
    font-weight: 400;
    white-space: nowrap;
    text-align: center;
    background-image: none;
    background-color: transparent;
    border: 1px solid transparent;
    cursor: pointer;
    transition: all 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
    user-select: none;
    touch-action: manipulation;
    line-height: 1.5714285714285714;
    color: rgba(0, 0, 0, 0.88);
}
:where(.css-d5t39c).ant-btn {
    font-size: 14px;
    height: 32px;
    padding: 4px 15px;
    border-radius: 6px;
}

.ant-badge, .ant-btn, .ant-col, .ant-menu, .ant-radio, .ant-select, .ant-space, .ant-tag, .ant-typography {
    font-family: Mulish,sans-serif!important;
}
:where(.css-d5t39c).ant-btn >span {
    display: inline-block;
}

:where(.css-d5t39c).ant-btn {
    font-size: 14px;
    height: 32px;
    padding: 4px 15px;
    border-radius: 6px;
}

:where(.css-d5t39c).ant-btn-dashed {
    background-color: #ffffff;
    border-color: #d9d9d9;
    box-shadow: 0 2px 0 rgba(0, 0, 0, 0.02);
    border-style: dashed;
}

:where(.css-d5t39c).ant-btn-primary {
    color: #fff;
    background-color: #1aa94c;
    box-shadow: 0 2px 0 rgba(8, 102, 28, 0.15);
}
:where(.css-d5t39c).ant-btn:not(.ant-btn-icon-only)>.ant-btn-icon.ant-btn-loading-icon, :where(.css-d5t39c).ant-btn:not(.ant-btn-icon-only)>.ant-btn-icon:not(:last-child) {
    margin-inline-end: 8px;
}
:where(.css-d5t39c).ant-form-item .ant-form-item-control-input {
    position: relative;
    display: flex;
    align-items: center;
    min-height: 32px;
}
:where(.css-d5t39c).ant-picker {
    box-sizing: border-box;
    margin: 0;
    padding: 4px 11px 4px;
    color: rgba(0, 0, 0, 0.88);
    font-size: 14px;
    line-height: 1;
    list-style: none;
    font-family: Mulish,sans-serif!important;
    position: relative;
    display: inline-flex;
    align-items: center;
    background: #ffffff;
    border: 1px solid #d9d9d9;
    border-radius: 6px;
    transition: border 0.2s,box-shadow 0.2s;
}

.my-date-picker_my-date-picker__G9OaH {
    border-radius: 50px!important;
    border: 1px solid #c8cbcd;
    height: 42px;
    width: 100%;
}
.my-date-picker_my-date-picker--mini__pvUwq {
    height: 32px;
    border-radius: 8px!important;
}
:where(.css-d5t39c).ant-picker .ant-picker-input {
    position: relative;
    display: inline-flex;
    align-items: center;
    width: 100%;
}


:where(.css-d5t39c).ant-picker .ant-picker-input >input {
    position: relative;
    display: inline-block;
    width: 100%;
    min-width: 1px;
    padding: 0;
    color: rgba(0, 0, 0, 0.88);
    font-size: 14px;
    line-height: 1.5714285714285714;
    background-color: #ffffff;
    background-image: none;
    border-width: 1px;
    border-style: solid;
    border-color: #d9d9d9;
    border-radius: 0;
    transition: all 0.2s;
    flex: auto;
    height: auto;
    background: transparent;
    border: 0;
}

:where(.css-d5t39c).ant-picker .ant-picker-suffix {
    display: flex;
    flex: none;
    align-self: center;
    margin-inline-start: 4px;
    color: rgba(0, 0, 0, 0.25);
    line-height: 1;
    pointer-events: none;
}
:where(.css-d5t39c).ant-picker .ant-picker-input >input:placeholder-shown {
    text-overflow: ellipsis;
}
:where(.css-d5t39c).ant-picker .ant-picker-suffix {
    display: flex;
    flex: none;
    align-self: center;
    margin-inline-start: 4px;
    color: rgba(0, 0, 0, 0.25);
    line-height: 1;
    pointer-events: none;
}


.anticon {
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
:where(.css-d5t39c).ant-picker .ant-picker-suffix >* {
    vertical-align: top;
}

:where(.css-d5t39c).ant-picker .ant-picker-input >input:focus, :where(.css-d5t39c).ant-picker .ant-picker-input >input-focused {
    border-color: #1aa94c;
    box-shadow: 0 0 0 2px rgba(8, 102, 28, 0.15);
    border-inline-end-width: 1px;
    outline: 0;
}
:where(.css-d5t39c).ant-picker .ant-picker-input >input:focus {
    box-shadow: none;
}
:where(.css-d5t39c).ant-picker:hover, :where(.css-d5t39c).ant-picker-focused {
    border-color: #1aa94c;
    border-inline-end-width: 1px;
}
.ant-col.ant-form-item-control.css-d5t39c {
    display: flex;
    gap: 10px;
}
:where(.css-d5t39c).ant-col-xs-24 {
    display: block;
    flex: 0 0 100%;
    max-width: 100%;
}
.marketplace-sort-candidate_marketplace-sort-candidate__B5oqB {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    justify-content: space-between;
    margin-bottom: 15px!important;
}
.marketplace-sort-candidate_marketplace-sort-candidate__B5oqB {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    justify-content: space-between;
    margin-bottom: 15px!important;
}

:where(.css-d5t39c).ant-space-align-center {
    align-items: center;
}
:where(.css-d5t39c).ant-space {
    display: inline-flex;
}
:where(.css-d5t39c).ant-select-single {
    font-size: 14px;
}
:where(.css-d5t39c).ant-select {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: rgba(0, 0, 0, 0.88);
    font-size: 14px;
    line-height: 1.5714285714285714;
    list-style: none;
    font-family: Mulish,sans-serif!important;
    position: relative;
    display: inline-block;
    cursor: pointer;
}
.ant-space-item >>> .v-input__details{
    display: none;
}
.marketplace-sort-candidate_marketplace-sort-candidate__B5oqB {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    justify-content: end;
    margin-bottom: 15px!important;
}
:where(.css-d5t39c).ant-row-middle {
    align-items: center;
}

:where(.css-d5t39c).ant-space-align-center {
    align-items: center;
}
:where(.css-d5t39c).ant-space {
    display: inline-flex;
}

.ant-select >>> .v-field--center-affix .v-label.v-field-label{
    top: 24%;
}
.ant-select >>> .v-input__control{
    height: 26px;
}
.ant-select >>> i.mdi-menu-down.mdi.v-icon.notranslate.v-theme--light.v-icon--size-default.v-select__menu-icon{
    bottom: 25%;
}
:where(.css-d5t39c).ant-spin-nested-loading {
    position: relative;
}
:where(.css-d5t39c).ant-spin-nested-loading .ant-spin-container {
    position: relative;
    transition: opacity 0.3s;
}
:where(.css-15rg2km).ant-upload-wrapper {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: rgba(0, 0, 0, 0.88);
    font-size: 14px;
    line-height: 1.5714285714285714;
    list-style: none;
    font-family: -apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,'Noto Sans',sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol','Noto Color Emoji';
}
.candidate-dragger-upload-3_candidate-dragger-upload-3__Xh4Sn>[class*="ant-upload ant-upload-drag"] {
    border: 1px dashed #1aa94c!important;
    background: #e3ffef!important;
}
:where(.css-15rg2km).ant-upload-wrapper .ant-upload {
    outline: 0;
}
:where(.css-15rg2km).ant-upload-wrapper .ant-upload-drag {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    background: rgba(0, 0, 0, 0.02);
    border: 1px dashed #d9d9d9;
    border-radius: 8px;
    cursor: pointer;
    transition: border-color 0.3s;
}
:where(.css-15rg2km).ant-upload-wrapper .ant-upload-drag .ant-upload-btn {
    display: table;
    width: 100%;
    height: 100%;
    outline: none;
}
.candidate-dragger-upload-3_candidate-dragger-upload-3__Xh4Sn>[class*="ant-upload ant-upload-drag"] [class*=ant-upload] {
    padding: 0;
}
:where(.css-15rg2km).ant-upload-wrapper .ant-upload-drag .ant-upload-drag-container {
    display: table-cell;
    vertical-align: middle;
}
:where(.css-15rg2km).ant-space-vertical {
    flex-direction: column;
}
:where(.css-15rg2km).ant-space {
    display: inline-flex;
}
:where(.css-15rg2km).ant-space-align-center {
    align-items: center;
}
.talent-pool-list_talent-pool-list__upload__hSWv1 {
    min-height: 200px!important;
}
.candidate-dragger-upload-3_candidate-dragger-upload-3__card--upload__4CAKO {
    border-radius: 4px;
    cursor: pointer;
    width: 100%;
    height: 100%;
    min-height: 278px;
    text-align: center;
    justify-content: center;
}
.candidate-dragger-upload-3_candidate-dragger-upload-3__card--upload__4CAKO {
    border-radius: 4px;
    cursor: pointer;
    width: 100%;
    height: 100%;
    min-height: 278px;
    text-align: center;
    justify-content: center;
}
.ant-typography {
    margin-top: 0;
}
:where(.css-15rg2km).ant-typography {
    color: rgba(0, 0, 0, 0.88);
    word-break: break-word;
    line-height: 1.5714285714285714;
}
div:where(.css-15rg2km).ant-typography, :where(.css-15rg2km).ant-typography p {
    margin-bottom: 1em;
}
.candidate-dragger-upload-3_candidate-dragger-upload-3__title__gJS9r {
    display: block;
    font-size: 14px;
    font-weight: 700;
    color: #1aa94c;
    margin-bottom: 9px;
}
.ant-typography {
    margin-top: 0;
}
:where(.css-15rg2km).ant-typography {
    color: rgba(0, 0, 0, 0.88);
    word-break: break-word;
    line-height: 1.5714285714285714;
}
.candidate-dragger-upload-3_candidate-dragger-upload-3__desc__UYuEl {
    display: block;
    font-size: 10px;
    font-style: italic;
    color: #1aa94c;
    white-space: pre;
}

:where(.css-d5t39c).ant-card {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: rgba(0, 0, 0, 0.88);
    font-size: 14px;
    line-height: 1.5714285714285714;
    list-style: none;
    font-family: Mulish,sans-serif!important;
    position: relative;
    background: #ffffff;
    border-radius: 8px;
}
.my-box_my-box__99ml1 {
    box-shadow: none!important;
    background: #fff;
    position: relative;
    overflow: hidden;
    border-radius: 8px;
    transition: all .2s ease-in;
    border: 1px solid #dee0e3;
}

.talent-pool-list-card_talent-pool-list-card__4fc5Z {
    height: 100%;
}
:where(.css-d5t39c).ant-card:not(.ant-card-bordered) {
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.03), 0 1px 6px -1px rgba(0, 0, 0, 0.02), 0 2px 4px 0 rgba(0, 0, 0, 0.02);
}



:where(.css-d5t39c).ant-card .ant-card-body {
    padding: 24px;
    border-radius: 0 0 8px 8px;
}

.my-box_my-box__99ml1>[class*=ant-card-body] {
    padding: 15px 20px!important;
}
.talent-pool-list-card_talent-pool-list-card__4fc5Z [class=ant-card-body] {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

:where(.css-d5t39c).ant-card {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: rgba(0, 0, 0, 0.88);
    font-size: 14px;
    line-height: 1.5714285714285714;
    list-style: none;
    font-family: Mulish,sans-serif!important;
    position: relative;
    background: #ffffff;
    border-radius: 8px;
}
.talent-pool-list-card_talent-pool-list-card__header__j1txj {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 10px;
}
.talent-pool-list-card_talent-pool-list-card__name__E_7Pf {
    margin-bottom: 10px;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
    width: 100%;
}
.talent-pool-list-card_talent-pool-list-card__name-text__zbhBZ {
    display: flex;
    flex-direction: row;
}
.talent-pool-list-card_talent-pool-list-card__avatar__MyviA {
    min-width: 80px;
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
:where(.css-d5t39c).ant-avatar.ant-avatar-icon >.anticon {
    margin: 0;
}
.anticon {
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
.anticon >* {
    line-height: 1;
}
.anticon img {
    display: inline-block;
}
.talent-pool-list-card_talent-pool-list-card__text__xg7j2 {
    display: flex;
    flex-direction: column;
}
:where(.css-d5t39c).ant-row {
    display: flex;
    flex-flow: row wrap;
    min-width: 0;
}
h5:where(.css-d5t39c).ant-typography, div:where(.css-d5t39c).ant-typography-h5, div:where(.css-d5t39c).ant-typography-h5>textarea, :where(.css-d5t39c).ant-typography h5 {
    margin-bottom: 0.5em;
    color: rgba(0, 0, 0, 0.88);
    font-weight: 600;
    font-size: 16px;
    line-height: 1.5;
}
.candidate-status-tag_candidate-status-tag__AT_mv {
    border-color: #a9fcd5;
    border-radius: 4px;
    background-color: #a9fcd5;
    color: #116d42;
    font-size: 10px;
    font-weight: 700;
    height: -moz-fit-content!important;
    height: fit-content!important;
    width: -moz-fit-content!important;
    width: fit-content!important;
}
.talent-pool-list-card_talent-pool-list-card__candidate__7bPpf {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
}
:where(.css-d5t39c).ant-tag, :where(.css-d5t39c).ant-tag a, :where(.css-d5t39c).ant-tag a:hover {
    color: rgba(0, 0, 0, 0.88);
}
:where(.css-d5t39c).ant-tag {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: rgba(0, 0, 0, 0.88);
    font-size: 12px;
    line-height: 20px;
    list-style: none;
    font-family: Mulish,sans-serif!important;
    display: inline-block;
    height: auto;
    margin-inline-end: 8px;
    padding-inline: 7px;
    white-space: nowrap;
    background: rgba(0, 0, 0, 0.02);
    border: 1px solid #d9d9d9;
    border-radius: 4px;
    opacity: 1;
    transition: all 0.2s;
    text-align: start;
}
.line-three-dots_line-three-dots__hfeQm {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
}
.candidate-status-tag_candidate-status-tag__AT_mv {
    border-color: #a9fcd5;
    border-radius: 4px;
    background-color: #a9fcd5;
    color: #116d42;
    font-size: 10px;
    font-weight: 700;
    height: -moz-fit-content!important;
    height: fit-content!important;
    width: -moz-fit-content!important;
    width: fit-content!important;
}
.talent-pool-list-card_talent-pool-list-card__marketplace__1J5Jx {
    text-align: right;
}

.talent-pool-list-card_talent-pool-list-card__marketplace-price__oDggT {
    display: flex!important;
    flex-direction: column!important;
    align-items: center;
    justify-content: flex-end;
}
div:where(.css-d5t39c).ant-typography, :where(.css-d5t39c).ant-typography p {
    margin-bottom: 1em;
}


:where(.css-d5t39c).ant-typography.ant-typography-secondary {
    color: rgba(0, 0, 0, 0.45);
}
.talent-pool-list-card_talent-pool-list-card__4fc5Z [class*=ant-typography] {
    margin-bottom: 2px;
}


.ant-typography {
    margin-top: 0;
}
:where(.css-d5t39c).ant-space {
    display: inline-flex;
}
:where(.css-d5t39c).ant-space-align-center {
    align-items: center;
}
.talent-pool-list-card_talent-pool-list-card__marketplace__1J5Jx {
    text-align: right;
}
:where(.css-d5t39c)[class^="ant-typography"], :where(.css-d5t39c)[class*=" ant-typography"] {
    font-family: Mulish,sans-serif!important;
    font-size: 14px;
    box-sizing: border-box;
}
:where(.css-d5t39c).ant-typography {
    color: rgba(0, 0, 0, 0.88);
    word-break: break-word;
    line-height: 1.5714285714285714;
}
:where(.css-d5t39c).ant-typography-single-line {
    white-space: nowrap;
}
:where(.css-d5t39c).ant-typography.ant-typography-secondary {
    color: rgba(0, 0, 0, 0.45);
}

.talent-pool-list-card_talent-pool-list-card__4fc5Z [class*=ant-typography] {
    margin-bottom: 2px;
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
.icon-rupee_icon-rupee__coin-m__cruUI {
    margin-left: 2px;
}
:where(.css-d5t39c).ant-row {
    display: flex;
    flex-flow: row wrap;
    min-width: 0;
}
.info-detail-sentence-v2_info-detail-sentence-v2__wWX6C {
    font-size: 12px;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
}
.talent-pool-list-card_talent-pool-list-card__title-info__ElzZt [class*="ant-col ant-col-6"] {
    min-width: 80px;
    flex: unset;
}
.ant-typography {
    margin-top: 0;
}
.talent-pool-list-card_talent-pool-list-card__title-info__ElzZt [class*="ant-col ant-col-18"] {
    flex: unset;
}
.line-three-dots_line-three-dots__hfeQm {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
}
.icon-rupee_icon-rupee__X6qme {
    display: inline-flex;
    flex-direction: row;
    align-items: center;
}
:where(.css-d5t39c).ant-col {
    position: relative;
    max-width: 100%;
    min-height: 1px;
}
:where(.css-d5t39c).ant-col-18 {
    display: block;
    flex: 0 0 75%;
    max-width: 75%;
}
:where(.css-d5t39c).ant-tag.ant-tag-has-color {
    border-color: transparent;
}
:where(.css-d5t39c).ant-tag.ant-tag-has-color, :where(.css-d5t39c).ant-tag.ant-tag-has-color a, :where(.css-d5t39c).ant-tag.ant-tag-has-color a:hover, :where(.css-d5t39c).ant-tag.ant-tag-has-color .anticon-close, :where(.css-d5t39c).ant-tag.ant-tag-has-color .anticon-close:hover {
    color: #fff;
}
.talent-pool-list-card_talent-pool-list-card__bottom__Tiegq {
    flex-wrap: nowrap;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-top: 15px;
}
.talent-pool-list-card_talent-pool-list-card__date-info__8IM_r {
    white-space: pre-wrap;
    font-size: 80%;
}
.talent-pool-list-card_talent-pool-list-card__date-info__8IM_r {
    white-space: pre-wrap;
    font-size: 80%;
}
.talent-pool-list-card_talent-pool-list-card__open__NoBrw * {
    font-size: 12px;
}

:where(.css-d5t39c).ant-typography.ant-typography-success {
    color: #52c41a;
}
.talent-pool-list-card_talent-pool-list-card__4fc5Z [class*=ant-typography] {
    margin-bottom: 2px;
}

:where(.css-d5t39c).ant-btn {
    font-size: 14px;
    height: 32px;
    padding: 4px 15px;
    border-radius: 6px;
}
:where(.css-d5t39c).ant-btn-primary {
    color: #fff;
    background-color: #1aa94c;
    box-shadow: 0 2px 0 rgba(8, 102, 28, 0.15);
}

.my-button_my-button__8F4rM {
    border-radius: 8px!important;
    box-shadow: none!important;
    outline: none!important;
}
.my-button_my-button--bg-white__0YadP {
    background-color: #fff!important;
}
:where(.css-d5t39c).ant-btn-primary.ant-btn-background-ghost {
    color: #1aa94c;
    background-color: transparent;
    border-color: #1aa94c;
    box-shadow: none;
}
:where(.css-d5t39c).ant-btn:not(.ant-btn-icon-only)>.ant-btn-icon.ant-btn-loading-icon, :where(.css-d5t39c).ant-btn:not(.ant-btn-icon-only)>.ant-btn-icon:not(:last-child) {
    margin-inline-end: 8px;
}
:where(.css-d5t39c).ant-btn .ant-btn-icon {
    line-height: 0;
}
.ant-form-item >>> .v-input__control {
    height: 40px;
}
.ant-form-item >>> .v-field-label{
    top: 35%;
}
.ant-form-item >>> i.mdi-menu-down.mdi.v-icon.notranslate.v-theme--light.v-icon--size-default.v-select__menu-icon{
    bottom: 8px;
}

@media (min-width: 768px){
    :where(.css-d5t39c).ant-col-md-24 {
        display: block;
        flex: 0 0 100%;
        max-width: 100%;
    }

}
@media (min-width: 992px){
    :where(.css-d5t39c).ant-col-lg-6 {
        display: block;
        flex: 0 0 25%;
        max-width: 25%;
    }
    :where(.css-d5t39c).ant-col-lg-18 {
    display: block;
    flex: 0 0 75%;
    max-width: 75%;
}
:where(.css-d5t39c).ant-col-lg-24 {
    display: block;
    flex: 0 0 100%;
    max-width: 100%;
}

}
</style>
