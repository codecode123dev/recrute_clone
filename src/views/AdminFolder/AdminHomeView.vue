<template>
  <div id="layout-all" class="layout_layout__elCCi undefined">
    <span
      style="margin-bottom: 16px"
      class="ant-input-group-wrapper ant-input-search ant-input-search-large ant-input-search-with-button ant-input-group-wrapper-lg css-d5t39c"
    >
      <span class="ant-input-wrapper ant-input-group css-d5t39c">
        <span
          class="ant-input-affix-wrapper ant-input-affix-wrapper-lg css-d5t39c"
        >
          <input
            class="ant-input ant-input-lg css-d5t39c"
            placeholder="Keywords"
          />
          <span class="ant-input-suffix">
            <span class="ant-input-clear-icon ant-input-clear-icon-hidden">
              <span class="anticon anticon-close-circle"> </span>
            </span>
          </span>
        </span>
        <span class="ant-input-group-addon">
          <button
            class="ant-btn css-d5t39c ant-btn-primary ant-btn-lg ant-input-search-button"
          >
            <span>
              <i class="fas fa-search"></i>
              <span style="margin-left: 4px">Search</span>
            </span>
          </button>
        </span>
      </span>
    </span>

    <form class="ant-form ant-form-horizontal css-d5t39c">
      <div class="undefined">
        <div
          class="ant-card my-box_my-box__99ml1 undefined undefined css-d5t39c"
        >
          <div class="ant-card-body">
            <div class="ant-row css-d5t39c" style="row-gap: 16px">
              <div class="ant-col ant-col-xs-24 css-d5t39c">
                <div class="ant-row ant-row-middle css-d5t39c">
                  <div class="ant-col ant-col-lg-2 css-d5t39c">Job type</div>
                  <div class="ant-col ant-col-xs-24 ant-col-lg-22 css-d5t39c">
                    <div
                      class="jobs-list-filter_jobs-list-filter__setting__LDIiz"
                    >
                      <!-- <span class="anticon anticon-setting">
                        <i class="fas fa-cog"></i>
                      </span> -->
                      <!-- <v-btn @click="dialog_setting = true"> -->
                        <span class="anticon anticon-setting" @click="dialog_setting = true">
                        <i class="fas fa-cog"></i>
                      </span>
                      <!-- </v-btn> -->
                      <v-dialog v-model="dialog_setting" width="450px">
                        <!-- <v-card>
                          <v-card-text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua.
                          </v-card-text>
                          <v-card-actions>
                            <v-btn
                              color="primary"
                              block
                              @click="dialog_setting = false"
                              >Close Dialog</v-btn
                            >
                          </v-card-actions>
                        </v-card> -->
                        <div class="ant-modal-content">
                            <button class="ant-modal-close">
                                <span class="ant-modal-close-x">
                                    <span class="anticon anticon-close ant-modal-close-icon" @click="dialog_setting= false">
                                        <i class="fas fa-times"></i>
                                    </span>
                                </span>
                            </button>
                            <div class="ant-modal-header">
                                <div class="ant-modal-title">
                                    What jobs might you be interested in?
                                </div>
                            </div>
                            <div class="ant-modal-body">
                                <form class="ant-form ant-form-vertical css-d5t39c">
                                    <label class="ant-label-title">
                                        Job type
                                    </label>

                                    <v-select
                                    label="Select"
                                    :items="['IT', 'Non-IT']"
                                    variant="outlined"
                                    ></v-select>

                                    <label class="ant-label-title">
                                        Category
                                    </label>

                                    <v-select
                                    label="Select"
                                    :items="['Consultants, Advisors, Legal', 'Design', 'Graphic Designer', 'Product Designer', 'UI/UX Designer', 'HR, Administrator, Education']"
                                    variant="outlined"
                                    ></v-select>
                                </form>
                            </div>
                            <div class="ant-modal-footer">
                                <button class="ant-btn css-d5t39c ant-btn-default my-button_my-button__8F4rM 1   undefined" @click="dialog_setting= false">
                                    <span>Skip</span>
                                </button>
                                <button class="ant-btn css-d5t39c ant-btn-primary my-button_my-button__8F4rM 1   undefined">
                                    <span>Submit</span>
                                </button>
                            </div>
                        </div>
                      </v-dialog>
                    </div>
                    <div
                      class="ant-radio-group ant-radio-group-outline my-radio-group_my-radio-group__k9hIb jobs-list-filter_jobs-list-filter__radio-group__3oHAo css-d5t39c"
                    >
                      <div
                        class="ant-space css-d5t39c ant-space-horizontal ant-space-align-center"
                        style="gap: 8px"
                      >
                        <div class="ant-space-item">
                          <label
                            class="ant-radio-button-wrapper ant-radio-button-wrapper-checked css-d5t39c"
                          >
                            <span
                              class="ant-radio-button ant-radio-button-checked"
                            >
                              <input
                                class="ant-radio-button-input"
                                type="radio"
                                value="0"
                                checked
                              />
                              <span class="ant-radio-button-inner"></span>
                            </span>
                            <span>All types</span>
                          </label>
                        </div>
                        <div class="ant-space-item">
                          <label class="ant-radio-button-wrapper css-d5t39c">
                            <span class="ant-radio-button">
                              <input
                                class="ant-radio-button-input"
                                type="radio"
                                value="1"
                              />
                              <span class="ant-radio-button-inner"></span>
                            </span>
                            <span>IT</span>
                          </label>
                        </div>
                        <div class="ant-space-item">
                          <label class="ant-radio-button-wrapper css-d5t39c">
                            <span class="ant-radio-button">
                              <input
                                class="ant-radio-button-input"
                                type="radio"
                                value="2"
                              />
                              <span class="ant-radio-button-inner"></span>
                            </span>
                            <span>Non-IT</span>
                          </label>
                        </div>
                        <div class="ant-space-item">
                          <label class="ant-radio-button-wrapper css-d5t39c">
                            <span class="ant-radio-button">
                              <input
                                class="ant-radio-button-input"
                                type="radio"
                                value="3"
                              />
                              <span class="ant-radio-button-inner"></span>
                            </span>
                            <span>Premium</span>
                          </label>
                        </div>
                        <div class="ant-space-item">
                          <label class="ant-radio-button-wrapper css-d5t39c">
                            <span class="ant-radio-button">
                              <input
                                class="ant-radio-button-input"
                                type="radio"
                                value="3"
                              />
                              <span class="ant-radio-button-inner"></span>
                            </span>
                            <span>High level</span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="ant-col ant-col-xs-24 css-d5t39c">
                <div class="ant-row ant-row-middle css-d5t39c">
                  <div class="ant-col ant-col-lg-2 css-d5t39c">Category</div>
                  <div class="ant-col ant-col-xs-24 ant-col-lg-22 css-d5t39c">
                    <div
                      class="ant-radio-group ant-radio-group-outline my-radio-group_my-radio-group__k9hIb jobs-list-filter_jobs-list-filter__radio-group__3oHAo css-d5t39c"
                    >
                      <div
                        class="ant-row css-d5t39c"
                        style="
                          margin-left: -4px;
                          margin-right: -4px;
                          row-gap: 8px;
                        "
                      >
                        <div class="ant-col css-d5t39c">
                          <label
                            class="ant-radio-button-wrapper ant-radio-button-wrapper-checked css-d5t39c"
                          >
                            <span
                              class="ant-radio-button ant-radio-button-checked"
                            >
                              <input
                                class="ant-radio-button-input"
                                type="radio"
                                value="0"
                                checked
                              />
                              <span class="ant-radio-button-inner"></span>
                            </span>
                            <span>All</span>
                          </label>
                        </div>
                        <div
                          class="ant-col css-d5t39c"
                          style="padding-left: 4px; padding-right: 4px"
                        >
                          <label class="ant-radio-button-wrapper css-d5t39c">
                            <span class="ant-radio-button">
                              <input
                                class="ant-radio-button-input"
                                type="radio"
                                value="1"
                              />
                              <span class="ant-radio-button-inner"></span>
                            </span>
                            <span>IT</span>
                          </label>
                        </div>
                        <div
                          class="ant-col css-d5t39c"
                          style="padding-left: 4px; padding-right: 4px"
                        >
                          <label class="ant-radio-button-wrapper css-d5t39c">
                            <span class="ant-radio-button">
                              <input
                                class="ant-radio-button-input"
                                type="radio"
                                value="2"
                              />
                              <span class="ant-radio-button-inner"></span>
                            </span>
                            <span>Design</span>
                          </label>
                        </div>
                        <div
                          class="ant-col css-d5t39c"
                          style="padding-left: 4px; padding-right: 4px"
                        >
                          <label class="ant-radio-button-wrapper css-d5t39c">
                            <span class="ant-radio-button">
                              <input
                                class="ant-radio-button-input"
                                type="radio"
                                value="3"
                              />
                              <span class="ant-radio-button-inner"></span>
                            </span>
                            <span>Marketing</span>
                          </label>
                        </div>
                        <div
                          class="ant-col css-d5t39c"
                          style="padding-left: 4px; padding-right: 4px"
                        >
                          <label class="ant-radio-button-wrapper css-d5t39c">
                            <span class="ant-radio-button">
                              <input
                                class="ant-radio-button-input"
                                type="radio"
                                value="4"
                              />
                              <span class="ant-radio-button-inner"></span>
                            </span>
                            <span>HR, Administrator, Education</span>
                          </label>
                        </div>
                        <div
                          class="ant-col css-d5t39c"
                          style="padding-left: 4px; padding-right: 4px"
                        >
                          <label class="ant-radio-button-wrapper css-d5t39c">
                            <span class="ant-radio-button">
                              <input
                                class="ant-radio-button-input"
                                type="radio"
                                value="5"
                              />
                              <span class="ant-radio-button-inner"></span>
                            </span>
                            <span>Management</span>
                          </label>
                        </div>
                        <div
                          class="ant-col css-d5t39c"
                          style="padding-left: 4px; padding-right: 4px"
                        >
                          <label class="ant-radio-button-wrapper css-d5t39c">
                            <span class="ant-radio-button">
                              <input
                                class="ant-radio-button-input"
                                type="radio"
                                value="6"
                              />
                              <span class="ant-radio-button-inner"></span>
                            </span>
                            <span>Sales & BD & Account</span>
                          </label>
                        </div>
                        <div
                          class="ant-col css-d5t39c"
                          style="padding-left: 4px; padding-right: 4px"
                        >
                          <label class="ant-radio-button-wrapper css-d5t39c">
                            <span class="ant-radio-button">
                              <input
                                class="ant-radio-button-input"
                                type="radio"
                                value="7"
                              />
                              <span class="ant-radio-button-inner"></span>
                            </span>
                            <span>Product</span>
                          </label>
                        </div>
                        <div
                          class="ant-col css-d5t39c"
                          style="padding-left: 4px; padding-right: 4px"
                        >
                          <div class="other-btn_other-btn__yn4P9">
                            <button
                              type="button"
                              class="ant-btn css-d5t39c ant-btn-default my-button_my-button__8F4rM 1 undefined"
                            >
                              <span class="ant-btn-icon">
                                <i class="fas fa-plus"></i>
                              </span>
                              <span>Other</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="ant-col ant-col-xs-24 css-d5t39c">
                <div class="ant-row ant-row-middle css-d5t39c">
                  <div class="ant-col ant-col-lg-2 css-d5t39c">Company</div>
                  <div class="ant-col ant-col-xs-24 ant-col-lg-22 css-d5t39c">
                    <div
                      class="ant-radio-group ant-radio-group-outline my-radio-group_my-radio-group__k9hIb jobs-list-filter_jobs-list-filter__radio-group__3oHAo css-d5t39c"
                    >
                      <div
                        class="ant-row css-d5t39c"
                        style="
                          margin-left: -4px;
                          margin-right: -4px;
                          row-gap: 8px;
                        "
                      >
                        <div class="ant-col css-d5t39c">
                          <label
                            class="ant-radio-button-wrapper ant-radio-button-wrapper-checked css-d5t39c"
                          >
                            <span
                              class="ant-radio-button ant-radio-button-checked"
                            >
                              <input
                                class="ant-radio-button-input"
                                type="radio"
                                value="0"
                                checked
                              />
                              <span class="ant-radio-button-inner"></span>
                            </span>
                            <span>All</span>
                          </label>
                        </div>
                        <div
                          class="ant-col css-d5t39c"
                          style="padding-left: 4px; padding-right: 4px"
                        >
                          <label class="ant-radio-button-wrapper css-d5t39c">
                            <span class="ant-radio-button">
                              <input
                                class="ant-radio-button-input"
                                type="radio"
                                value="1"
                              />
                              <span class="ant-radio-button-inner"></span>
                            </span>
                            <span>Attlas</span>
                          </label>
                        </div>
                        <div
                          class="ant-col css-d5t39c"
                          style="padding-left: 4px; padding-right: 4px"
                        >
                          <label class="ant-radio-button-wrapper css-d5t39c">
                            <span class="ant-radio-button">
                              <input
                                class="ant-radio-button-input"
                                type="radio"
                                value="2"
                              />
                              <span class="ant-radio-button-inner"></span>
                            </span>
                            <span>ELCA</span>
                          </label>
                        </div>
                        <div
                          class="ant-col css-d5t39c"
                          style="padding-left: 4px; padding-right: 4px"
                        >
                          <label class="ant-radio-button-wrapper css-d5t39c">
                            <span class="ant-radio-button">
                              <input
                                class="ant-radio-button-input"
                                type="radio"
                                value="3"
                              />
                              <span class="ant-radio-button-inner"></span>
                            </span>
                            <span>Sipher</span>
                          </label>
                        </div>
                        <div
                          class="ant-col css-d5t39c"
                          style="padding-left: 4px; padding-right: 4px"
                        >
                          <label class="ant-radio-button-wrapper css-d5t39c">
                            <span class="ant-radio-button">
                              <input
                                class="ant-radio-button-input"
                                type="radio"
                                value="4"
                              />
                              <span class="ant-radio-button-inner"></span>
                            </span>
                            <span>ST Engineering</span>
                          </label>
                        </div>
                        <div
                          class="ant-col css-d5t39c"
                          style="padding-left: 4px; padding-right: 4px"
                        >
                          <label class="ant-radio-button-wrapper css-d5t39c">
                            <span class="ant-radio-button">
                              <input
                                class="ant-radio-button-input"
                                type="radio"
                                value="5"
                              />
                              <span class="ant-radio-button-inner"></span>
                            </span>
                            <span>Travelstop</span>
                          </label>
                        </div>
                        <div
                          class="ant-col css-d5t39c"
                          style="padding-left: 4px; padding-right: 4px"
                        >
                          <label class="ant-radio-button-wrapper css-d5t39c">
                            <span class="ant-radio-button">
                              <input
                                class="ant-radio-button-input"
                                type="radio"
                                value="6"
                              />
                              <span class="ant-radio-button-inner"></span>
                            </span>
                            <span>Sales & BD & Account</span>
                          </label>
                        </div>
                        <div
                          class="ant-col css-d5t39c"
                          style="padding-left: 4px; padding-right: 4px"
                        >
                          <label class="ant-radio-button-wrapper css-d5t39c">
                            <span class="ant-radio-button">
                              <input
                                class="ant-radio-button-input"
                                type="radio"
                                value="7"
                              />
                              <span class="ant-radio-button-inner"></span>
                            </span>
                            <span>Product</span>
                          </label>
                        </div>
                        <div
                          class="ant-col css-d5t39c"
                          style="padding-left: 4px; padding-right: 4px"
                        >
                          <div class="other-btn_other-btn__yn4P9">
                            <button
                              type="button"
                              class="ant-btn css-d5t39c ant-btn-default my-button_my-button__8F4rM 1 undefined"
                            >
                              <span class="ant-btn-icon">
                                <i class="fas fa-plus"></i>
                              </span>
                              <span>Other</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="ant-col ant-col-xs-24 css-d5t39c">
                <div class="ant-row ant-row-middle css-d5t39c">
                  <div class="ant-col ant-col-lg-2 css-d5t39c">Location</div>
                  <div class="ant-col ant-col-xs-24 ant-col-lg-22 css-d5t39c">
                    <div
                      class="ant-radio-group ant-radio-group-outline my-radio-group_my-radio-group__k9hIb jobs-list-filter_jobs-list-filter__radio-group__3oHAo css-d5t39c"
                    >
                      <div
                        class="ant-row css-d5t39c"
                        style="
                          margin-left: -4px;
                          margin-right: -4px;
                          row-gap: 8px;
                        "
                      >
                        <div class="ant-col css-d5t39c">
                          <label
                            class="ant-radio-button-wrapper ant-radio-button-wrapper-checked css-d5t39c"
                          >
                            <span
                              class="ant-radio-button ant-radio-button-checked"
                            >
                              <input
                                class="ant-radio-button-input"
                                type="radio"
                                value="0"
                                checked
                              />
                              <span class="ant-radio-button-inner"></span>
                            </span>
                            <span>All</span>
                          </label>
                        </div>
                        <div
                          class="ant-col css-d5t39c"
                          style="padding-left: 4px; padding-right: 4px"
                        >
                          <label class="ant-radio-button-wrapper css-d5t39c">
                            <span class="ant-radio-button">
                              <input
                                class="ant-radio-button-input"
                                type="radio"
                                value="1"
                              />
                              <span class="ant-radio-button-inner"></span>
                            </span>
                            <span>Ho Chi Minh</span>
                          </label>
                        </div>
                        <div
                          class="ant-col css-d5t39c"
                          style="padding-left: 4px; padding-right: 4px"
                        >
                          <label class="ant-radio-button-wrapper css-d5t39c">
                            <span class="ant-radio-button">
                              <input
                                class="ant-radio-button-input"
                                type="radio"
                                value="2"
                              />
                              <span class="ant-radio-button-inner"></span>
                            </span>
                            <span>Remote</span>
                          </label>
                        </div>
                        <div
                          class="ant-col css-d5t39c"
                          style="padding-left: 4px; padding-right: 4px"
                        >
                          <label class="ant-radio-button-wrapper css-d5t39c">
                            <span class="ant-radio-button">
                              <input
                                class="ant-radio-button-input"
                                type="radio"
                                value="3"
                              />
                              <span class="ant-radio-button-inner"></span>
                            </span>
                            <span>Hanoi</span>
                          </label>
                        </div>
                        <div
                          class="ant-col css-d5t39c"
                          style="padding-left: 4px; padding-right: 4px"
                        >
                          <label class="ant-radio-button-wrapper css-d5t39c">
                            <span class="ant-radio-button">
                              <input
                                class="ant-radio-button-input"
                                type="radio"
                                value="4"
                              />
                              <span class="ant-radio-button-inner"></span>
                            </span>
                            <span>Indonesia</span>
                          </label>
                        </div>
                        <div
                          class="ant-col css-d5t39c"
                          style="padding-left: 4px; padding-right: 4px"
                        >
                          <label class="ant-radio-button-wrapper css-d5t39c">
                            <span class="ant-radio-button">
                              <input
                                class="ant-radio-button-input"
                                type="radio"
                                value="5"
                              />
                              <span class="ant-radio-button-inner"></span>
                            </span>
                            <span>Singapore</span>
                          </label>
                        </div>
                        <div
                          class="ant-col css-d5t39c"
                          style="padding-left: 4px; padding-right: 4px"
                        >
                          <label class="ant-radio-button-wrapper css-d5t39c">
                            <span class="ant-radio-button">
                              <input
                                class="ant-radio-button-input"
                                type="radio"
                                value="6"
                              />
                              <span class="ant-radio-button-inner"></span>
                            </span>
                            <span>Malaysia</span>
                          </label>
                        </div>
                        <div
                          class="ant-col css-d5t39c"
                          style="padding-left: 4px; padding-right: 4px"
                        >
                          <label class="ant-radio-button-wrapper css-d5t39c">
                            <span class="ant-radio-button">
                              <input
                                class="ant-radio-button-input"
                                type="radio"
                                value="7"
                              />
                              <span class="ant-radio-button-inner"></span>
                            </span>
                            <span>Japan</span>
                          </label>
                        </div>
                        <div
                          class="ant-col css-d5t39c"
                          style="padding-left: 4px; padding-right: 4px"
                        >
                          <label class="ant-radio-button-wrapper css-d5t39c">
                            <span class="ant-radio-button">
                              <input
                                class="ant-radio-button-input"
                                type="radio"
                                value="7"
                              />
                              <span class="ant-radio-button-inner"></span>
                            </span>
                            <span>India</span>
                          </label>
                        </div>
                        <div
                          class="ant-col css-d5t39c"
                          style="padding-left: 4px; padding-right: 4px"
                        >
                          <div class="other-btn_other-btn__yn4P9">
                            <button
                              type="button"
                              class="ant-btn css-d5t39c ant-btn-default my-button_my-button__8F4rM 1 undefined"
                            >
                              <span class="ant-btn-icon">
                                <i class="fas fa-plus"></i>
                              </span>
                              <span>Other</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="ant-col ant-col-xs-24 css-d5t39c">
                <div class="ant-row ant-row-middle css-d5t39c">
                  <div class="ant-col ant-col-lg-2 css-d5t39c">Status</div>
                  <div class="ant-col ant-col-xs-24 ant-col-lg-22 css-d5t39c">
                    <div
                      class="ant-radio-group ant-radio-group-outline my-radio-group_my-radio-group__k9hIb jobs-list-filter_jobs-list-filter__radio-group__3oHAo css-d5t39c"
                    >
                      <div
                        class="ant-row css-d5t39c"
                        style="
                          margin-left: -4px;
                          margin-right: -4px;
                          row-gap: 8px;
                        "
                      >
                        <div class="ant-col css-d5t39c">
                          <label
                            class="ant-radio-button-wrapper ant-radio-button-wrapper-checked css-d5t39c"
                          >
                            <span
                              class="ant-radio-button ant-radio-button-checked"
                            >
                              <input
                                class="ant-radio-button-input"
                                type="radio"
                                value="0"
                                checked
                              />
                              <span class="ant-radio-button-inner"></span>
                            </span>
                            <span>All</span>
                          </label>
                        </div>
                        <div
                          class="ant-col css-d5t39c"
                          style="padding-left: 4px; padding-right: 4px"
                        >
                          <label class="ant-radio-button-wrapper css-d5t39c">
                            <span class="ant-radio-button">
                              <input
                                class="ant-radio-button-input"
                                type="radio"
                                value="1"
                              />
                              <span class="ant-radio-button-inner"></span>
                            </span>
                            <span>Active</span>
                          </label>
                        </div>
                        <div
                          class="ant-col css-d5t39c"
                          style="padding-left: 4px; padding-right: 4px"
                        >
                          <label class="ant-radio-button-wrapper css-d5t39c">
                            <span class="ant-radio-button">
                              <input
                                class="ant-radio-button-input"
                                type="radio"
                                value="2"
                              />
                              <span class="ant-radio-button-inner"></span>
                            </span>
                            <span>Pause</span>
                          </label>
                        </div>
                        <div
                          class="ant-col css-d5t39c"
                          style="padding-left: 4px; padding-right: 4px"
                        >
                          <label class="ant-radio-button-wrapper css-d5t39c">
                            <span class="ant-radio-button">
                              <input
                                class="ant-radio-button-input"
                                type="radio"
                                value="3"
                              />
                              <span class="ant-radio-button-inner"></span>
                            </span>
                            <span>Closed</span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="ant-col ant-col-xs-24 css-d5t39c">
                <div class="ant-row ant-row-middle css-d5t39c">
                  <div class="ant-col ant-col-lg-2 css-d5t39c">Sort by</div>
                  <div class="ant-col ant-col-xs-24 ant-col-lg-22 css-d5t39c">
                    <div
                      class="ant-radio-group ant-radio-group-outline my-radio-group_my-radio-group__k9hIb jobs-list-filter_jobs-list-filter__radio-group__3oHAo css-d5t39c"
                    >
                      <div
                        class="ant-row css-d5t39c"
                        style="
                          margin-left: -4px;
                          margin-right: -4px;
                          row-gap: 8px;
                        "
                      >
                        <div class="ant-col css-d5t39c">
                          <label
                            class="ant-radio-button-wrapper ant-radio-button-wrapper-checked css-d5t39c"
                          >
                            <span
                              class="ant-radio-button ant-radio-button-checked"
                            >
                              <input
                                class="ant-radio-button-input"
                                type="radio"
                                value="0"
                                checked
                              />
                              <span class="ant-radio-button-inner"></span>
                            </span>
                            <span>Default</span>
                          </label>
                        </div>
                        <div
                          class="ant-col css-d5t39c"
                          style="padding-left: 4px; padding-right: 4px"
                        >
                          <label class="ant-radio-button-wrapper css-d5t39c">
                            <span class="ant-radio-button">
                              <input
                                class="ant-radio-button-input"
                                type="radio"
                                value="1"
                              />
                              <span class="ant-radio-button-inner"></span>
                            </span>
                            <span>High reward</span>
                          </label>
                        </div>
                        <div
                          class="ant-col css-d5t39c"
                          style="padding-left: 4px; padding-right: 4px"
                        >
                          <label class="ant-radio-button-wrapper css-d5t39c">
                            <span class="ant-radio-button">
                              <input
                                class="ant-radio-button-input"
                                type="radio"
                                value="2"
                              />
                              <span class="ant-radio-button-inner"></span>
                            </span>
                            <span>Low reward</span>
                          </label>
                        </div>
                        <div
                          class="ant-col css-d5t39c"
                          style="padding-left: 4px; padding-right: 4px"
                        >
                          <label class="ant-radio-button-wrapper css-d5t39c">
                            <span class="ant-radio-button">
                              <input
                                class="ant-radio-button-input"
                                type="radio"
                                value="3"
                              />
                              <span class="ant-radio-button-inner"></span>
                            </span>
                            <span>Recruit a lot</span>
                          </label>
                        </div>
                        <div
                          class="ant-col css-d5t39c"
                          style="padding-left: 4px; padding-right: 4px"
                        >
                          <label class="ant-radio-button-wrapper css-d5t39c">
                            <span class="ant-radio-button">
                              <input
                                class="ant-radio-button-input"
                                type="radio"
                                value="3"
                              />
                              <span class="ant-radio-button-inner"></span>
                            </span>
                            <span>Recruit a little</span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="ant-col ant-col-xs-24 css-d5t39c">
                <div class="ant-row ant-row-middle css-d5t39c">
                  <div class="ant-col ant-col-lg-2 css-d5t39c">Advanced:</div>
                  <div class="ant-col ant-col-xs-24 ant-col-lg-22 css-d5t39c">
                    <div class="ant-checkbox-group css-d5t39c">
                      <label class="ant-checkbox-wrapper css-d5t39c">
                        <!-- <span class="ant-checkbox css-d5t39c">
                                                    <input class="ant-checkbox-input" type="checkbox"/>
                                                    <span class="ant-checkbox-inner"></span>
                                                </span> -->
                        <v-checkbox label="Urgent" color="success"></v-checkbox>
                      </label>
                      <label class="ant-checkbox-wrapper css-d5t39c">
                        <!-- <span class="ant-checkbox css-d5t39c">
                                                    <input class="ant-checkbox-input" type="checkbox"/>
                                                    <span class="ant-checkbox-inner"></span>
                                                </span> -->
                        <v-checkbox
                          label="Job Sourcing (Earn per CV Unlock)"
                          color="success"
                        ></v-checkbox>
                      </label>
                      <label class="ant-checkbox-wrapper css-d5t39c">
                        <!-- <span class="ant-checkbox css-d5t39c">
                                                    <input class="ant-checkbox-input" type="checkbox"/>
                                                    <span class="ant-checkbox-inner"></span>
                                                </span> -->
                        <v-checkbox
                          label="Job HeadHunting"
                          color="success"
                        ></v-checkbox>
                      </label>
                      <label class="ant-checkbox-wrapper css-d5t39c">
                        <!-- <span class="ant-checkbox css-d5t39c">
                                                    <input class="ant-checkbox-input" type="checkbox"/>
                                                    <span class="ant-checkbox-inner"></span>
                                                </span> -->
                        <v-checkbox
                          label="Fast reply"
                          color="success"
                        ></v-checkbox>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              class="banner-job-sourcing_banner-job-sourcing__FVR7O banner-job-sourcing_banner-job-sourcing--fixed__SW0NV"
            >
              <p>
                JOB
                <span> SOURCING </span>
                <span>Earn per CV</span>
              </p>
              <img
                src="../../assets/admin_image/job_image/job-sourcing.png"
                alt="image"
              />
            </div>
          </div>
        </div>
      </div>
    </form>

    <div
      class="ant-row css-d5t39c"
      style="
        margin-left: -12px;
        margin-right: -12px;
        margin-top: 24px;
        row-gap: 16px;
      "
    >
      <div
        class="ant-col ant-col-xs-24 ant-col-lg-18 css-d5t39c"
        style="padding-left: 12px; padding-right: 12px"
      >
        <div class="ant-spin-nested-loading css-d5t39c">
          <div class="ant-spin-container">
            <div
              class="ant-row css-d5t39c"
              style="margin-left: -6px; margin-right: -6px; row-gap: 16px"
            >
              <div
                class="ant-col ant-col-xs-24 ant-col-md-12 css-d5t39c"
                style="padding-left: 6px; padding-right: 6px"
              >
                <!-- <a class="my-link_my-link__wIenB jobs-hunter-item_jobs-hunter-item__0y902" href="#"> -->
                <div
                  class="my-link_my-link__wIenB jobs-hunter-item_jobs-hunter-item__0y902"
                  href="#"
                >
                  <div
                    class="jobs-hunter-item_jobs-hunter-item__container__24xQ0 jobs-hunter-item_jobs-hunter-item__container--lock__Kz_lS jobs-hunter-item_jobs-hunter-item__container--premium__ktNdE undefined"
                  >
                    <div
                      class="premium-locker_premium-locker__Dcgir jobs-hunter-item_locker__f2FpL"
                    >
                      <span
                        >This is a Premium Job that is only visible to ones that
                        reach 15 referrals per month</span
                      >
                    </div>
                    <span
                      class="ant-tag ant-tag-has-color urgent-tag_urgent-tag__CJ5hl undefined css-d5t39c"
                      style="background-color: rgb(253, 92, 99)"
                    >
                      Urgent
                    </span>
                    <div
                      class="ant-row css-d5t39c"
                      style="margin-left: -6px; margin-right: -6px"
                    >
                      <div
                        class="ant-col ant-col-4 css-d5t39c"
                        style="padding-left: 6px; padding-right: 6px"
                      >
                        <img
                          src="../../assets/admin_image/job_image/building.png"
                          alt="image"
                        />
                      </div>
                      <div
                        class="ant-col ant-col-20 css-d5t39c"
                        style="padding-left: 6px; padding-right: 6px"
                      >
                        <div
                          class="ant-row ant-row-space-between ant-row-bottom jobs-hunter-item_jobs-hunter-item__box__udR00 css-d5t39c"
                        >
                          <div
                            class="bookmark-job_bookmark-job__ISdrZ jobs-hunter-item_jobs-hunter-item__bookmark__8xZTE"
                          >
                            <i
                              class="far fa-bookmark bookmark-job_bookmark-job__img__mqBQX"
                            ></i>
                          </div>
                          <div class="ant-col css-d5t39c" style="width: 100%">
                            <div
                              class="ant-row css-d5t39c"
                              style="margin-left: -4px; margin-right: -4px"
                            >
                              <div
                                class="ant-col ant-col-xs-24 css-d5t39c"
                                style="
                                  padding-left: 4px;
                                  padding-right: 4px;
                                  margin-bottom: 5px;
                                "
                              >
                                <div
                                  class="jobs-hunter-item_jobs-hunter-item__title__iWYqO"
                                >
                                  <div
                                    class="jobs-hunter-item_jobs-hunter-item__line-text__Sp6RC"
                                  >
                                    <a
                                      class="my-link_my-link__wIenB undefined"
                                      href="#"
                                    >
                                      <h5
                                        class="ant-typography ant-typography-ellipsis ant-typography-ellipsis-multiple-line css-d5t39c"
                                        style="
                                          margin-bottom: 0px;
                                          margin-top: 0px;
                                          -webkit-line-clamp: 2;
                                        "
                                      >
                                        Outsystem Mobile
                                      </h5>
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div
                              class="jobs-hunter-item_jobs-hunter-item__info__XMBJQ"
                              style="margin-bottom: 10px"
                            >
                              <div
                                class="ant-space css-d5t39c ant-space-horizontal ant-space-align-center jobs-hunter-item_jobs-hunter-item__salary__1K77l"
                                style="gap: 0px"
                              >
                                <div class="ant-space-item">
                                  <span
                                    class="jobs-hunter-item_jobs-hunter-item__salary-text__TuG_k"
                                  >
                                    Negotiable
                                  </span>
                                </div>
                                <span class="ant-space-item-split">
                                  <div
                                    class="ant-divider css-d5t39c ant-divider-vertical"
                                    style="border-color: rgba(0, 0, 0, 0.85)"
                                  ></div>
                                </span>
                                <div class="ant-space-item">
                                  <div
                                    class="jobs-hunter-item_jobs-hunter-item__workplace__mqHAq"
                                  >
                                    Ho Chi Minh
                                  </div>
                                </div>
                              </div>

                              <span
                                class="jobs-hunter-item_jobs-hunter-item__info-extra__0xkW1"
                              >
                                Vacancies: 2 | Applicants: 0
                              </span>
                            </div>
                            <div
                              class="jobs-hunter-item-bonus_jobs-hunter-item-bonus__container__xauke"
                            >
                              <div
                                class="jobs-hunter-item-bonus_jobs-hunter-item-bonus__bonus__DqNk_"
                              >
                                Reward USD 1,304
                              </div>
                              <span
                                class="jobs-hunter-item-bonus_jobs-hunter-item-bonus__text--small__rTE2b"
                              >
                                / Candidate
                              </span>
                            </div>
                          </div>
                          <div
                            class="ant-col jobs-hunter-item_jobs-hunter-item__function__h9pJu css-d5t39c"
                            style="width: 100%"
                          >
                            <div
                              class="jobs-hunter-item_jobs-hunter-item__function-tag__ekbR_"
                            >
                              <span
                                class="jobs-hunter-item_jobs-hunter-item__status__2kJge"
                              >
                                <span
                                  class="ant-tag ant-tag-has-color css-d5t39c"
                                  style="
                                    background-color: rgb(26, 169, 76);
                                    color: rgb(255, 255, 255);
                                  "
                                >
                                  Active
                                </span>
                              </span>
                              <div
                                class="premium-tag_premium-tag__9UlVq undefined"
                              >
                                <span class="ant-tag ant-tag-cyan css-d5t39c">
                                  <small>Premium</small>
                                </span>
                              </div>
                              <div
                                class="jobs-hunter-item_jobs-hunter-item__fast-reply__a2WX8"
                              >
                                <div
                                  class="fast-reply-tag_fast-reply-tag__sZXdy undefined"
                                >
                                  <span class="ant-tag ant-tag-cyan css-d5t39c">
                                    <small>Fast reply</small>
                                  </span>
                                </div>
                              </div>
                            </div>

                            <div
                              class="jobs-hunter-item_jobs-hunter-item__refer-btn__7wjau"
                            >
                              <a
                                class="my-link_my-link__wIenB undefined"
                                href="#"
                                style="color: rgb(40, 40, 40)"
                              >
                                Refer and earn
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- </a> -->
              </div>

              <div
                class="ant-col ant-col-xs-24 ant-col-md-12 css-d5t39c"
                style="padding-left: 6px; padding-right: 6px"
              >
                <!-- <a class="my-link_my-link__wIenB jobs-hunter-item_jobs-hunter-item__0y902" href="#"> -->
                <div
                  class="my-link_my-link__wIenB jobs-hunter-item_jobs-hunter-item__0y902"
                  href="#"
                >
                  <div
                    class="jobs-hunter-item_jobs-hunter-item__container__24xQ0 jobs-hunter-item_jobs-hunter-item__container--lock__Kz_lS jobs-hunter-item_jobs-hunter-item__container--premium__ktNdE undefined"
                  >
                    <div
                      class="premium-locker_premium-locker__Dcgir jobs-hunter-item_locker__f2FpL"
                    >
                      <span
                        >This is a Premium Job that is only visible to ones that
                        reach 15 referrals per month</span
                      >
                    </div>
                    <span
                      class="ant-tag ant-tag-has-color urgent-tag_urgent-tag__CJ5hl undefined css-d5t39c"
                      style="background-color: rgb(253, 92, 99)"
                    >
                      Urgent
                    </span>
                    <div
                      class="ant-row css-d5t39c"
                      style="margin-left: -6px; margin-right: -6px"
                    >
                      <div
                        class="ant-col ant-col-4 css-d5t39c"
                        style="padding-left: 6px; padding-right: 6px"
                      >
                        <img
                          src="../../assets/admin_image/job_image/building.png"
                          alt="image"
                        />
                      </div>
                      <div
                        class="ant-col ant-col-20 css-d5t39c"
                        style="padding-left: 6px; padding-right: 6px"
                      >
                        <div
                          class="ant-row ant-row-space-between ant-row-bottom jobs-hunter-item_jobs-hunter-item__box__udR00 css-d5t39c"
                        >
                          <div
                            class="bookmark-job_bookmark-job__ISdrZ jobs-hunter-item_jobs-hunter-item__bookmark__8xZTE"
                          >
                            <i
                              class="far fa-bookmark bookmark-job_bookmark-job__img__mqBQX"
                            ></i>
                          </div>
                          <div class="ant-col css-d5t39c" style="width: 100%">
                            <div
                              class="ant-row css-d5t39c"
                              style="margin-left: -4px; margin-right: -4px"
                            >
                              <div
                                class="ant-col ant-col-xs-24 css-d5t39c"
                                style="
                                  padding-left: 4px;
                                  padding-right: 4px;
                                  margin-bottom: 5px;
                                "
                              >
                                <div
                                  class="jobs-hunter-item_jobs-hunter-item__title__iWYqO"
                                >
                                  <div
                                    class="jobs-hunter-item_jobs-hunter-item__line-text__Sp6RC"
                                  >
                                    <a
                                      class="my-link_my-link__wIenB undefined"
                                      href="#"
                                    >
                                      <h5
                                        class="ant-typography ant-typography-ellipsis ant-typography-ellipsis-multiple-line css-d5t39c"
                                        style="
                                          margin-bottom: 0px;
                                          margin-top: 0px;
                                          -webkit-line-clamp: 2;
                                        "
                                      >
                                        Senior OutSystems Developer
                                      </h5>
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div
                              class="jobs-hunter-item_jobs-hunter-item__info__XMBJQ"
                              style="margin-bottom: 10px"
                            >
                              <div
                                class="ant-space css-d5t39c ant-space-horizontal ant-space-align-center jobs-hunter-item_jobs-hunter-item__salary__1K77l"
                                style="gap: 0px"
                              >
                                <div class="ant-space-item">
                                  <span
                                    class="jobs-hunter-item_jobs-hunter-item__salary-text__TuG_k"
                                  >
                                    USD 2,200 - USD 3,000
                                  </span>
                                </div>
                                <span class="ant-space-item-split">
                                  <div
                                    class="ant-divider css-d5t39c ant-divider-vertical"
                                    style="border-color: rgba(0, 0, 0, 0.85)"
                                  ></div>
                                </span>
                                <div class="ant-space-item">
                                  <div
                                    class="jobs-hunter-item_jobs-hunter-item__workplace__mqHAq"
                                  >
                                    Ho Chi Minh
                                  </div>
                                </div>
                              </div>

                              <span
                                class="jobs-hunter-item_jobs-hunter-item__info-extra__0xkW1"
                              >
                                Vacancies: 3 | Applicants: 0
                              </span>
                            </div>
                            <div
                              class="jobs-hunter-item-bonus_jobs-hunter-item-bonus__container__xauke"
                            >
                              <div
                                class="jobs-hunter-item-bonus_jobs-hunter-item-bonus__bonus__DqNk_"
                              >
                                Reward USD 2,174
                              </div>
                              <span
                                class="jobs-hunter-item-bonus_jobs-hunter-item-bonus__text--small__rTE2b"
                              >
                                / Candidate
                              </span>
                            </div>
                          </div>
                          <div
                            class="ant-col jobs-hunter-item_jobs-hunter-item__function__h9pJu css-d5t39c"
                            style="width: 100%"
                          >
                            <div
                              class="jobs-hunter-item_jobs-hunter-item__function-tag__ekbR_"
                            >
                              <span
                                class="jobs-hunter-item_jobs-hunter-item__status__2kJge"
                              >
                                <span
                                  class="ant-tag ant-tag-has-color css-d5t39c"
                                  style="
                                    background-color: rgb(26, 169, 76);
                                    color: rgb(255, 255, 255);
                                  "
                                >
                                  Active
                                </span>
                              </span>
                              <div
                                class="premium-tag_premium-tag__9UlVq undefined"
                              >
                                <span class="ant-tag ant-tag-cyan css-d5t39c">
                                  <small>Premium</small>
                                </span>
                              </div>
                              <div
                                class="jobs-hunter-item_jobs-hunter-item__fast-reply__a2WX8"
                              >
                                <div
                                  class="fast-reply-tag_fast-reply-tag__sZXdy undefined"
                                >
                                  <span class="ant-tag ant-tag-cyan css-d5t39c">
                                    <small>Fast reply</small>
                                  </span>
                                </div>
                              </div>
                            </div>

                            <div
                              class="jobs-hunter-item_jobs-hunter-item__refer-btn__7wjau"
                            >
                              <a
                                class="my-link_my-link__wIenB undefined"
                                href="#"
                                style="color: rgb(40, 40, 40)"
                              >
                                Refer and earn
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- </a> -->
              </div>

              <div
                class="ant-col ant-col-xs-24 ant-col-md-12 css-d5t39c"
                style="padding-left: 6px; padding-right: 6px"
              >
                <!-- <a class="my-link_my-link__wIenB jobs-hunter-item_jobs-hunter-item__0y902" href="#"> -->
                <div
                  class="my-link_my-link__wIenB jobs-hunter-item_jobs-hunter-item__0y902"
                  href="#"
                >
                  <div
                    class="jobs-hunter-item_jobs-hunter-item__container__24xQ0 jobs-hunter-item_jobs-hunter-item__container--lock__Kz_lS jobs-hunter-item_jobs-hunter-item__container--premium__ktNdE undefined"
                  >
                    <div
                      class="premium-locker_premium-locker__Dcgir jobs-hunter-item_locker__f2FpL"
                    >
                      <span
                        >This is a Premium Job that is only visible to ones that
                        reach 15 referrals per month</span
                      >
                    </div>
                    <span
                      class="ant-tag ant-tag-has-color urgent-tag_urgent-tag__CJ5hl undefined css-d5t39c"
                      style="background-color: rgb(253, 92, 99)"
                    >
                      Urgent
                    </span>
                    <div
                      class="ant-row css-d5t39c"
                      style="margin-left: -6px; margin-right: -6px"
                    >
                      <div
                        class="ant-col ant-col-4 css-d5t39c"
                        style="padding-left: 6px; padding-right: 6px"
                      >
                        <img
                          src="../../assets/admin_image/job_image/building.png"
                          alt="image"
                        />
                      </div>
                      <div
                        class="ant-col ant-col-20 css-d5t39c"
                        style="padding-left: 6px; padding-right: 6px"
                      >
                        <div
                          class="ant-row ant-row-space-between ant-row-bottom jobs-hunter-item_jobs-hunter-item__box__udR00 css-d5t39c"
                        >
                          <div
                            class="bookmark-job_bookmark-job__ISdrZ jobs-hunter-item_jobs-hunter-item__bookmark__8xZTE"
                          >
                            <i
                              class="far fa-bookmark bookmark-job_bookmark-job__img__mqBQX"
                            ></i>
                          </div>
                          <div class="ant-col css-d5t39c" style="width: 100%">
                            <div
                              class="ant-row css-d5t39c"
                              style="margin-left: -4px; margin-right: -4px"
                            >
                              <div
                                class="ant-col ant-col-xs-24 css-d5t39c"
                                style="
                                  padding-left: 4px;
                                  padding-right: 4px;
                                  margin-bottom: 5px;
                                "
                              >
                                <div
                                  class="jobs-hunter-item_jobs-hunter-item__title__iWYqO"
                                >
                                  <div
                                    class="jobs-hunter-item_jobs-hunter-item__line-text__Sp6RC"
                                  >
                                    <a
                                      class="my-link_my-link__wIenB undefined"
                                      href="#"
                                    >
                                      <h5
                                        class="ant-typography ant-typography-ellipsis ant-typography-ellipsis-multiple-line css-d5t39c"
                                        style="
                                          margin-bottom: 0px;
                                          margin-top: 0px;
                                          -webkit-line-clamp: 2;
                                        "
                                      >
                                        Finance Executive (AP Invoice
                                        Processing) - role 4
                                      </h5>
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div
                              class="jobs-hunter-item_jobs-hunter-item__info__XMBJQ"
                              style="margin-bottom: 10px"
                            >
                              <div
                                class="ant-space css-d5t39c ant-space-horizontal ant-space-align-center jobs-hunter-item_jobs-hunter-item__salary__1K77l"
                                style="gap: 0px"
                              >
                                <div class="ant-space-item">
                                  <span
                                    class="jobs-hunter-item_jobs-hunter-item__salary-text__TuG_k"
                                  >
                                    USD 700 - USD 1,200
                                  </span>
                                </div>
                                <span class="ant-space-item-split">
                                  <div
                                    class="ant-divider css-d5t39c ant-divider-vertical"
                                    style="border-color: rgba(0, 0, 0, 0.85)"
                                  ></div>
                                </span>
                                <div class="ant-space-item">
                                  <div
                                    class="jobs-hunter-item_jobs-hunter-item__workplace__mqHAq"
                                  >
                                    Ho Chi Minh
                                  </div>
                                </div>
                              </div>

                              <span
                                class="jobs-hunter-item_jobs-hunter-item__info-extra__0xkW1"
                              >
                                Vacancies: 23 | Applicants: 7
                              </span>
                            </div>
                            <div
                              class="jobs-hunter-item-bonus_jobs-hunter-item-bonus__container__xauke"
                            >
                              <div
                                class="jobs-hunter-item-bonus_jobs-hunter-item-bonus__bonus__DqNk_"
                              >
                                Reward USD 870
                              </div>
                              <span
                                class="jobs-hunter-item-bonus_jobs-hunter-item-bonus__text--small__rTE2b"
                              >
                                / Candidate
                              </span>
                            </div>
                          </div>
                          <div
                            class="ant-col jobs-hunter-item_jobs-hunter-item__function__h9pJu css-d5t39c"
                            style="width: 100%"
                          >
                            <div
                              class="jobs-hunter-item_jobs-hunter-item__function-tag__ekbR_"
                            >
                              <span
                                class="jobs-hunter-item_jobs-hunter-item__status__2kJge"
                              >
                                <span
                                  class="ant-tag ant-tag-has-color css-d5t39c"
                                  style="
                                    background-color: rgb(26, 169, 76);
                                    color: rgb(255, 255, 255);
                                  "
                                >
                                  Active
                                </span>
                              </span>
                              <div
                                class="premium-tag_premium-tag__9UlVq undefined"
                              >
                                <span class="ant-tag ant-tag-cyan css-d5t39c">
                                  <small>Premium</small>
                                </span>
                              </div>
                              <div
                                class="jobs-hunter-item_jobs-hunter-item__fast-reply__a2WX8"
                              >
                                <div
                                  class="fast-reply-tag_fast-reply-tag__sZXdy undefined"
                                >
                                  <span class="ant-tag ant-tag-cyan css-d5t39c">
                                    <small>Fast reply</small>
                                  </span>
                                </div>
                              </div>
                            </div>

                            <div
                              class="jobs-hunter-item_jobs-hunter-item__refer-btn__7wjau"
                            >
                              <a
                                class="my-link_my-link__wIenB undefined"
                                href="#"
                                style="color: rgb(40, 40, 40)"
                              >
                                Refer and earn
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- </a> -->
              </div>

              <div
                class="ant-col ant-col-xs-24 ant-col-md-12 css-d5t39c"
                style="padding-left: 6px; padding-right: 6px"
              >
                <!-- <a class="my-link_my-link__wIenB jobs-hunter-item_jobs-hunter-item__0y902" href="#"> -->
                <div
                  class="my-link_my-link__wIenB jobs-hunter-item_jobs-hunter-item__0y902"
                  href="#"
                >
                  <div
                    class="jobs-hunter-item_jobs-hunter-item__container__24xQ0 jobs-hunter-item_jobs-hunter-item__container--lock__Kz_lS jobs-hunter-item_jobs-hunter-item__container--premium__ktNdE undefined"
                  >
                    <div
                      class="premium-locker_premium-locker__Dcgir jobs-hunter-item_locker__f2FpL"
                    >
                      <span
                        >This is a Premium Job that is only visible to ones that
                        reach 15 referrals per month</span
                      >
                    </div>
                    <span
                      class="ant-tag ant-tag-has-color urgent-tag_urgent-tag__CJ5hl undefined css-d5t39c"
                      style="background-color: rgb(253, 92, 99)"
                    >
                      Urgent
                    </span>
                    <div
                      class="ant-row css-d5t39c"
                      style="margin-left: -6px; margin-right: -6px"
                    >
                      <div
                        class="ant-col ant-col-4 css-d5t39c"
                        style="padding-left: 6px; padding-right: 6px"
                      >
                        <img
                          src="../../assets/admin_image/job_image/building.png"
                          alt="image"
                        />
                      </div>
                      <div
                        class="ant-col ant-col-20 css-d5t39c"
                        style="padding-left: 6px; padding-right: 6px"
                      >
                        <div
                          class="ant-row ant-row-space-between ant-row-bottom jobs-hunter-item_jobs-hunter-item__box__udR00 css-d5t39c"
                        >
                          <div
                            class="bookmark-job_bookmark-job__ISdrZ jobs-hunter-item_jobs-hunter-item__bookmark__8xZTE"
                          >
                            <i
                              class="far fa-bookmark bookmark-job_bookmark-job__img__mqBQX"
                            ></i>
                          </div>
                          <div class="ant-col css-d5t39c" style="width: 100%">
                            <div
                              class="ant-row css-d5t39c"
                              style="margin-left: -4px; margin-right: -4px"
                            >
                              <div
                                class="ant-col ant-col-xs-24 css-d5t39c"
                                style="
                                  padding-left: 4px;
                                  padding-right: 4px;
                                  margin-bottom: 5px;
                                "
                              >
                                <div
                                  class="jobs-hunter-item_jobs-hunter-item__title__iWYqO"
                                >
                                  <div
                                    class="jobs-hunter-item_jobs-hunter-item__line-text__Sp6RC"
                                  >
                                    <a
                                      class="my-link_my-link__wIenB undefined"
                                      href="#"
                                    >
                                      <h5
                                        class="ant-typography ant-typography-ellipsis ant-typography-ellipsis-multiple-line css-d5t39c"
                                        style="
                                          margin-bottom: 0px;
                                          margin-top: 0px;
                                          -webkit-line-clamp: 2;
                                        "
                                      >
                                        Finance Executive (AP Payments and
                                        vendor reconciliation) - role 5
                                      </h5>
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div
                              class="jobs-hunter-item_jobs-hunter-item__info__XMBJQ"
                              style="margin-bottom: 10px"
                            >
                              <div
                                class="ant-space css-d5t39c ant-space-horizontal ant-space-align-center jobs-hunter-item_jobs-hunter-item__salary__1K77l"
                                style="gap: 0px"
                              >
                                <div class="ant-space-item">
                                  <span
                                    class="jobs-hunter-item_jobs-hunter-item__salary-text__TuG_k"
                                  >
                                    USD 700 - USD 1,200
                                  </span>
                                </div>
                                <span class="ant-space-item-split">
                                  <div
                                    class="ant-divider css-d5t39c ant-divider-vertical"
                                    style="border-color: rgba(0, 0, 0, 0.85)"
                                  ></div>
                                </span>
                                <div class="ant-space-item">
                                  <div
                                    class="jobs-hunter-item_jobs-hunter-item__workplace__mqHAq"
                                  >
                                    Ho Chi Minh
                                  </div>
                                </div>
                              </div>

                              <span
                                class="jobs-hunter-item_jobs-hunter-item__info-extra__0xkW1"
                              >
                                Vacancies: 8 | Applicants: 4
                              </span>
                            </div>
                            <div
                              class="jobs-hunter-item-bonus_jobs-hunter-item-bonus__container__xauke"
                            >
                              <div
                                class="jobs-hunter-item-bonus_jobs-hunter-item-bonus__bonus__DqNk_"
                              >
                                Reward USD 870
                              </div>
                              <span
                                class="jobs-hunter-item-bonus_jobs-hunter-item-bonus__text--small__rTE2b"
                              >
                                / Candidate
                              </span>
                            </div>
                          </div>
                          <div
                            class="ant-col jobs-hunter-item_jobs-hunter-item__function__h9pJu css-d5t39c"
                            style="width: 100%"
                          >
                            <div
                              class="jobs-hunter-item_jobs-hunter-item__function-tag__ekbR_"
                            >
                              <span
                                class="jobs-hunter-item_jobs-hunter-item__status__2kJge"
                              >
                                <span
                                  class="ant-tag ant-tag-has-color css-d5t39c"
                                  style="
                                    background-color: rgb(26, 169, 76);
                                    color: rgb(255, 255, 255);
                                  "
                                >
                                  Active
                                </span>
                              </span>
                              <div
                                class="premium-tag_premium-tag__9UlVq undefined"
                              >
                                <span class="ant-tag ant-tag-cyan css-d5t39c">
                                  <small>Premium</small>
                                </span>
                              </div>
                              <div
                                class="jobs-hunter-item_jobs-hunter-item__fast-reply__a2WX8"
                              >
                                <div
                                  class="fast-reply-tag_fast-reply-tag__sZXdy undefined"
                                >
                                  <span class="ant-tag ant-tag-cyan css-d5t39c">
                                    <small>Fast reply</small>
                                  </span>
                                </div>
                              </div>
                            </div>

                            <div
                              class="jobs-hunter-item_jobs-hunter-item__refer-btn__7wjau"
                            >
                              <a
                                class="my-link_my-link__wIenB undefined"
                                href="#"
                                style="color: rgb(40, 40, 40)"
                              >
                                Refer and earn
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- </a> -->
              </div>

              <div
                class="ant-col ant-col-xs-24 ant-col-md-12 css-d5t39c"
                style="padding-left: 6px; padding-right: 6px"
              >
                <!-- <a class="my-link_my-link__wIenB jobs-hunter-item_jobs-hunter-item__0y902" href="#"> -->
                <div
                  class="my-link_my-link__wIenB jobs-hunter-item_jobs-hunter-item__0y902"
                  href="#"
                >
                  <div
                    class="jobs-hunter-item_jobs-hunter-item__container__24xQ0 undefined"
                  >
                    <div
                      class="premium-locker_premium-locker__Dcgir jobs-hunter-item_locker__f2FpL"
                    >
                      <span
                        >This is a Premium Job that is only visible to ones that
                        reach 15 referrals per month</span
                      >
                    </div>
                    <span
                      class="ant-tag ant-tag-has-color urgent-tag_urgent-tag__CJ5hl undefined css-d5t39c"
                      style="background-color: rgb(253, 92, 99)"
                    >
                      Urgent
                    </span>
                    <div
                      class="ant-row css-d5t39c"
                      style="margin-left: -6px; margin-right: -6px"
                    >
                      <div
                        class="ant-col ant-col-4 css-d5t39c"
                        style="padding-left: 6px; padding-right: 6px"
                      >
                        <img
                          src="../../assets/admin_image/job_image/building.png"
                          alt="image"
                        />
                      </div>
                      <div
                        class="ant-col ant-col-20 css-d5t39c"
                        style="padding-left: 6px; padding-right: 6px"
                      >
                        <div
                          class="ant-row ant-row-space-between ant-row-bottom jobs-hunter-item_jobs-hunter-item__box__udR00 css-d5t39c"
                        >
                          <div
                            class="bookmark-job_bookmark-job__ISdrZ jobs-hunter-item_jobs-hunter-item__bookmark__8xZTE"
                          >
                            <i
                              class="far fa-bookmark bookmark-job_bookmark-job__img__mqBQX"
                            ></i>
                          </div>
                          <div class="ant-col css-d5t39c" style="width: 100%">
                            <div
                              class="ant-row css-d5t39c"
                              style="margin-left: -4px; margin-right: -4px"
                            >
                              <div
                                class="ant-col ant-col-xs-24 css-d5t39c"
                                style="
                                  padding-left: 4px;
                                  padding-right: 4px;
                                  margin-bottom: 5px;
                                "
                              >
                                <div
                                  class="jobs-hunter-item_jobs-hunter-item__title__iWYqO"
                                >
                                  <div
                                    class="jobs-hunter-item_jobs-hunter-item__line-text__Sp6RC"
                                  >
                                    <a
                                      class="my-link_my-link__wIenB undefined"
                                      href="#"
                                    >
                                      <h5
                                        class="ant-typography ant-typography-ellipsis ant-typography-ellipsis-multiple-line css-d5t39c"
                                        style="
                                          margin-bottom: 0px;
                                          margin-top: 0px;
                                          -webkit-line-clamp: 2;
                                        "
                                      >
                                        Business Developer Manager
                                      </h5>
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div
                              class="jobs-hunter-item_jobs-hunter-item__info__XMBJQ"
                              style="margin-bottom: 10px"
                            >
                              <div
                                class="ant-space css-d5t39c ant-space-horizontal ant-space-align-center jobs-hunter-item_jobs-hunter-item__salary__1K77l"
                                style="gap: 0px"
                              >
                                <div class="ant-space-item">
                                  <span
                                    class="jobs-hunter-item_jobs-hunter-item__salary-text__TuG_k"
                                  >
                                    Up to USD 1,200
                                  </span>
                                </div>
                                <span class="ant-space-item-split">
                                  <div
                                    class="ant-divider css-d5t39c ant-divider-vertical"
                                    style="border-color: rgba(0, 0, 0, 0.85)"
                                  ></div>
                                </span>
                                <div class="ant-space-item">
                                  <div
                                    class="jobs-hunter-item_jobs-hunter-item__workplace__mqHAq"
                                  >
                                    Ho Chi Minh
                                  </div>
                                </div>
                              </div>

                              <span
                                class="jobs-hunter-item_jobs-hunter-item__info-extra__0xkW1"
                              >
                                Vacancies: 1 | Applicants: 0
                              </span>
                            </div>
                            <div
                              class="jobs-hunter-item-bonus_jobs-hunter-item-bonus__container__xauke"
                            >
                              <div
                                class="jobs-hunter-item-bonus_jobs-hunter-item-bonus__bonus__DqNk_"
                              >
                                Reward USD 696
                              </div>
                              <span
                                class="jobs-hunter-item-bonus_jobs-hunter-item-bonus__text--small__rTE2b"
                              >
                                / Candidate
                              </span>
                            </div>
                          </div>
                          <div
                            class="ant-col jobs-hunter-item_jobs-hunter-item__function__h9pJu css-d5t39c"
                            style="width: 100%"
                          >
                            <div
                              class="jobs-hunter-item_jobs-hunter-item__function-tag__ekbR_"
                            >
                              <span
                                class="jobs-hunter-item_jobs-hunter-item__status__2kJge"
                              >
                                <span
                                  class="ant-tag ant-tag-has-color css-d5t39c"
                                  style="
                                    background-color: rgb(26, 169, 76);
                                    color: rgb(255, 255, 255);
                                  "
                                >
                                  Active
                                </span>
                              </span>
                            </div>

                            <div
                              class="jobs-hunter-item_jobs-hunter-item__refer-btn__7wjau"
                            >
                              <a
                                class="my-link_my-link__wIenB undefined"
                                href="#"
                              >
                                Refer and earn
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- </a> -->
              </div>

              <div
                class="ant-col ant-col-xs-24 ant-col-md-12 css-d5t39c"
                style="padding-left: 6px; padding-right: 6px"
              >
                <!-- <a class="my-link_my-link__wIenB jobs-hunter-item_jobs-hunter-item__0y902" href="#"> -->
                <div
                  class="my-link_my-link__wIenB jobs-hunter-item_jobs-hunter-item__0y902"
                  href="#"
                >
                  <div
                    class="jobs-hunter-item_jobs-hunter-item__container__24xQ0 jobs-hunter-item_jobs-hunter-item__container--lock__Kz_lS jobs-hunter-item_jobs-hunter-item__container--premium__ktNdE undefined"
                  >
                    <div
                      class="premium-locker_premium-locker__Dcgir jobs-hunter-item_locker__f2FpL"
                    >
                      <span
                        >This is a Premium Job that is only visible to ones that
                        reach 15 referrals per month</span
                      >
                    </div>
                    <span
                      class="ant-tag ant-tag-has-color urgent-tag_urgent-tag__CJ5hl undefined css-d5t39c"
                      style="background-color: rgb(253, 92, 99)"
                    >
                      Urgent
                    </span>
                    <div
                      class="ant-row css-d5t39c"
                      style="margin-left: -6px; margin-right: -6px"
                    >
                      <div
                        class="ant-col ant-col-4 css-d5t39c"
                        style="padding-left: 6px; padding-right: 6px"
                      >
                        <img
                          src="../../assets/admin_image/job_image/building.png"
                          alt="image"
                        />
                      </div>
                      <div
                        class="ant-col ant-col-20 css-d5t39c"
                        style="padding-left: 6px; padding-right: 6px"
                      >
                        <div
                          class="ant-row ant-row-space-between ant-row-bottom jobs-hunter-item_jobs-hunter-item__box__udR00 css-d5t39c"
                        >
                          <div
                            class="bookmark-job_bookmark-job__ISdrZ jobs-hunter-item_jobs-hunter-item__bookmark__8xZTE"
                          >
                            <i
                              class="far fa-bookmark bookmark-job_bookmark-job__img__mqBQX"
                            ></i>
                          </div>
                          <div class="ant-col css-d5t39c" style="width: 100%">
                            <div
                              class="ant-row css-d5t39c"
                              style="margin-left: -4px; margin-right: -4px"
                            >
                              <div
                                class="ant-col ant-col-xs-24 css-d5t39c"
                                style="
                                  padding-left: 4px;
                                  padding-right: 4px;
                                  margin-bottom: 5px;
                                "
                              >
                                <div
                                  class="jobs-hunter-item_jobs-hunter-item__title__iWYqO"
                                >
                                  <div
                                    class="jobs-hunter-item_jobs-hunter-item__line-text__Sp6RC"
                                  >
                                    <a
                                      class="my-link_my-link__wIenB undefined"
                                      href="#"
                                    >
                                      <h5
                                        class="ant-typography ant-typography-ellipsis ant-typography-ellipsis-multiple-line css-d5t39c"
                                        style="
                                          margin-bottom: 0px;
                                          margin-top: 0px;
                                          -webkit-line-clamp: 2;
                                        "
                                      >
                                        Quality Assurance Engineer
                                      </h5>
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div
                              class="jobs-hunter-item_jobs-hunter-item__info__XMBJQ"
                              style="margin-bottom: 10px"
                            >
                              <div
                                class="ant-space css-d5t39c ant-space-horizontal ant-space-align-center jobs-hunter-item_jobs-hunter-item__salary__1K77l"
                                style="gap: 0px"
                              >
                                <div class="ant-space-item">
                                  <span
                                    class="jobs-hunter-item_jobs-hunter-item__salary-text__TuG_k"
                                  >
                                    USD 1,700 - USD 2,700
                                  </span>
                                </div>
                                <span class="ant-space-item-split">
                                  <div
                                    class="ant-divider css-d5t39c ant-divider-vertical"
                                    style="border-color: rgba(0, 0, 0, 0.85)"
                                  ></div>
                                </span>
                                <div class="ant-space-item">
                                  <div
                                    class="jobs-hunter-item_jobs-hunter-item__workplace__mqHAq"
                                  >
                                    Ho Chi Minh
                                  </div>
                                </div>
                              </div>

                              <span
                                class="jobs-hunter-item_jobs-hunter-item__info-extra__0xkW1"
                              >
                                Vacancies: 1 | Applicants: 0
                              </span>
                            </div>
                            <div
                              class="jobs-hunter-item-bonus_jobs-hunter-item-bonus__container__xauke"
                            >
                              <div
                                class="jobs-hunter-item-bonus_jobs-hunter-item-bonus__bonus__DqNk_"
                              >
                                Reward USD 1,522
                              </div>
                              <span
                                class="jobs-hunter-item-bonus_jobs-hunter-item-bonus__text--small__rTE2b"
                              >
                                / Candidate
                              </span>
                            </div>
                          </div>
                          <div
                            class="ant-col jobs-hunter-item_jobs-hunter-item__function__h9pJu css-d5t39c"
                            style="width: 100%"
                          >
                            <div
                              class="jobs-hunter-item_jobs-hunter-item__function-tag__ekbR_"
                            >
                              <span
                                class="jobs-hunter-item_jobs-hunter-item__status__2kJge"
                              >
                                <span
                                  class="ant-tag ant-tag-has-color css-d5t39c"
                                  style="
                                    background-color: rgb(26, 169, 76);
                                    color: rgb(255, 255, 255);
                                  "
                                >
                                  Active
                                </span>
                              </span>
                              <div
                                class="premium-tag_premium-tag__9UlVq undefined"
                              >
                                <span class="ant-tag ant-tag-cyan css-d5t39c">
                                  <small>Premium</small>
                                </span>
                              </div>
                            </div>

                            <div
                              class="jobs-hunter-item_jobs-hunter-item__refer-btn__7wjau"
                            >
                              <a
                                class="my-link_my-link__wIenB undefined"
                                href="#"
                                style="color: rgb(40, 40, 40)"
                              >
                                Refer and earn
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- </a> -->
              </div>

              <div
                class="ant-col ant-col-xs-24 ant-col-md-12 css-d5t39c"
                style="padding-left: 6px; padding-right: 6px"
              >
                <!-- <a class="my-link_my-link__wIenB jobs-hunter-item_jobs-hunter-item__0y902" href="#"> -->
                <div
                  class="my-link_my-link__wIenB jobs-hunter-item_jobs-hunter-item__0y902"
                  href="#"
                >
                  <div
                    class="jobs-hunter-item_jobs-hunter-item__container__24xQ0 jobs-hunter-item_jobs-hunter-item__container--lock__Kz_lS jobs-hunter-item_jobs-hunter-item__container--premium__ktNdE undefined"
                  >
                    <div
                      class="premium-locker_premium-locker__Dcgir jobs-hunter-item_locker__f2FpL"
                    >
                      <span
                        >This is a Premium Job that is only visible to ones that
                        reach 15 referrals per month</span
                      >
                    </div>
                    <span
                      class="ant-tag ant-tag-has-color urgent-tag_urgent-tag__CJ5hl undefined css-d5t39c"
                      style="background-color: rgb(253, 92, 99)"
                    >
                      Urgent
                    </span>
                    <div
                      class="ant-row css-d5t39c"
                      style="margin-left: -6px; margin-right: -6px"
                    >
                      <div
                        class="ant-col ant-col-4 css-d5t39c"
                        style="padding-left: 6px; padding-right: 6px"
                      >
                        <img
                          src="../../assets/admin_image/job_image/building.png"
                          alt="image"
                        />
                      </div>
                      <div
                        class="ant-col ant-col-20 css-d5t39c"
                        style="padding-left: 6px; padding-right: 6px"
                      >
                        <div
                          class="ant-row ant-row-space-between ant-row-bottom jobs-hunter-item_jobs-hunter-item__box__udR00 css-d5t39c"
                        >
                          <div
                            class="bookmark-job_bookmark-job__ISdrZ jobs-hunter-item_jobs-hunter-item__bookmark__8xZTE"
                          >
                            <i
                              class="far fa-bookmark bookmark-job_bookmark-job__img__mqBQX"
                            ></i>
                          </div>
                          <div class="ant-col css-d5t39c" style="width: 100%">
                            <div
                              class="ant-row css-d5t39c"
                              style="margin-left: -4px; margin-right: -4px"
                            >
                              <div
                                class="ant-col ant-col-xs-24 css-d5t39c"
                                style="
                                  padding-left: 4px;
                                  padding-right: 4px;
                                  margin-bottom: 5px;
                                "
                              >
                                <div
                                  class="jobs-hunter-item_jobs-hunter-item__title__iWYqO"
                                >
                                  <div
                                    class="jobs-hunter-item_jobs-hunter-item__line-text__Sp6RC"
                                  >
                                    <a
                                      class="my-link_my-link__wIenB undefined"
                                      href="#"
                                    >
                                      <h5
                                        class="ant-typography ant-typography-ellipsis ant-typography-ellipsis-multiple-line css-d5t39c"
                                        style="
                                          margin-bottom: 0px;
                                          margin-top: 0px;
                                          -webkit-line-clamp: 2;
                                        "
                                      >
                                        Frontend Developer (Svelte or React)
                                      </h5>
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div
                              class="jobs-hunter-item_jobs-hunter-item__info__XMBJQ"
                              style="margin-bottom: 10px"
                            >
                              <div
                                class="ant-space css-d5t39c ant-space-horizontal ant-space-align-center jobs-hunter-item_jobs-hunter-item__salary__1K77l"
                                style="gap: 0px"
                              >
                                <div class="ant-space-item">
                                  <span
                                    class="jobs-hunter-item_jobs-hunter-item__salary-text__TuG_k"
                                  >
                                    USD 1,700 - USD 2,700
                                  </span>
                                </div>
                                <span class="ant-space-item-split">
                                  <div
                                    class="ant-divider css-d5t39c ant-divider-vertical"
                                    style="border-color: rgba(0, 0, 0, 0.85)"
                                  ></div>
                                </span>
                                <div class="ant-space-item">
                                  <div
                                    class="jobs-hunter-item_jobs-hunter-item__workplace__mqHAq"
                                  >
                                    Ho Chi Minh
                                  </div>
                                </div>
                              </div>

                              <span
                                class="jobs-hunter-item_jobs-hunter-item__info-extra__0xkW1"
                              >
                                Vacancies: 1 | Applicants: 0
                              </span>
                            </div>
                            <div
                              class="jobs-hunter-item-bonus_jobs-hunter-item-bonus__container__xauke"
                            >
                              <div
                                class="jobs-hunter-item-bonus_jobs-hunter-item-bonus__bonus__DqNk_"
                              >
                                Reward USD 1,522
                              </div>
                              <span
                                class="jobs-hunter-item-bonus_jobs-hunter-item-bonus__text--small__rTE2b"
                              >
                                / Candidate
                              </span>
                            </div>
                          </div>
                          <div
                            class="ant-col jobs-hunter-item_jobs-hunter-item__function__h9pJu css-d5t39c"
                            style="width: 100%"
                          >
                            <div
                              class="jobs-hunter-item_jobs-hunter-item__function-tag__ekbR_"
                            >
                              <span
                                class="jobs-hunter-item_jobs-hunter-item__status__2kJge"
                              >
                                <span
                                  class="ant-tag ant-tag-has-color css-d5t39c"
                                  style="
                                    background-color: rgb(26, 169, 76);
                                    color: rgb(255, 255, 255);
                                  "
                                >
                                  Active
                                </span>
                              </span>
                              <div
                                class="premium-tag_premium-tag__9UlVq undefined"
                              >
                                <span class="ant-tag ant-tag-cyan css-d5t39c">
                                  <small>Premium</small>
                                </span>
                              </div>
                            </div>

                            <div
                              class="jobs-hunter-item_jobs-hunter-item__refer-btn__7wjau"
                            >
                              <a
                                class="my-link_my-link__wIenB undefined"
                                href="#"
                                style="color: rgb(40, 40, 40)"
                              >
                                Refer and earn
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- </a> -->
              </div>
              <div
                class="ant-col ant-col-xs-24 ant-col-md-12 css-d5t39c"
                style="padding-left: 6px; padding-right: 6px"
              >
                <!-- <a class="my-link_my-link__wIenB jobs-hunter-item_jobs-hunter-item__0y902" href="#"> -->
                <div
                  class="my-link_my-link__wIenB jobs-hunter-item_jobs-hunter-item__0y902"
                  href="#"
                >
                  <div
                    class="jobs-hunter-item_jobs-hunter-item__container__24xQ0 jobs-hunter-item_jobs-hunter-item__container--lock__Kz_lS jobs-hunter-item_jobs-hunter-item__container--premium__ktNdE undefined"
                  >
                    <div
                      class="premium-locker_premium-locker__Dcgir jobs-hunter-item_locker__f2FpL"
                    >
                      <span
                        >This is a Premium Job that is only visible to ones that
                        reach 15 referrals per month</span
                      >
                    </div>
                    <span
                      class="ant-tag ant-tag-has-color urgent-tag_urgent-tag__CJ5hl undefined css-d5t39c"
                      style="background-color: rgb(253, 92, 99)"
                    >
                      Urgent
                    </span>
                    <div
                      class="ant-row css-d5t39c"
                      style="margin-left: -6px; margin-right: -6px"
                    >
                      <div
                        class="ant-col ant-col-4 css-d5t39c"
                        style="padding-left: 6px; padding-right: 6px"
                      >
                        <img
                          src="../../assets/admin_image/job_image/building.png"
                          alt="image"
                        />
                      </div>
                      <div
                        class="ant-col ant-col-20 css-d5t39c"
                        style="padding-left: 6px; padding-right: 6px"
                      >
                        <div
                          class="ant-row ant-row-space-between ant-row-bottom jobs-hunter-item_jobs-hunter-item__box__udR00 css-d5t39c"
                        >
                          <div
                            class="bookmark-job_bookmark-job__ISdrZ jobs-hunter-item_jobs-hunter-item__bookmark__8xZTE"
                          >
                            <i
                              class="far fa-bookmark bookmark-job_bookmark-job__img__mqBQX"
                            ></i>
                          </div>
                          <div class="ant-col css-d5t39c" style="width: 100%">
                            <div
                              class="ant-row css-d5t39c"
                              style="margin-left: -4px; margin-right: -4px"
                            >
                              <div
                                class="ant-col ant-col-xs-24 css-d5t39c"
                                style="
                                  padding-left: 4px;
                                  padding-right: 4px;
                                  margin-bottom: 5px;
                                "
                              >
                                <div
                                  class="jobs-hunter-item_jobs-hunter-item__title__iWYqO"
                                >
                                  <div
                                    class="jobs-hunter-item_jobs-hunter-item__line-text__Sp6RC"
                                  >
                                    <a
                                      class="my-link_my-link__wIenB undefined"
                                      href="#"
                                    >
                                      <h5
                                        class="ant-typography ant-typography-ellipsis ant-typography-ellipsis-multiple-line css-d5t39c"
                                        style="
                                          margin-bottom: 0px;
                                          margin-top: 0px;
                                          -webkit-line-clamp: 2;
                                        "
                                      >
                                        Frontend Developer (Svelte or React)
                                      </h5>
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div
                              class="jobs-hunter-item_jobs-hunter-item__info__XMBJQ"
                              style="margin-bottom: 10px"
                            >
                              <div
                                class="ant-space css-d5t39c ant-space-horizontal ant-space-align-center jobs-hunter-item_jobs-hunter-item__salary__1K77l"
                                style="gap: 0px"
                              >
                                <div class="ant-space-item">
                                  <span
                                    class="jobs-hunter-item_jobs-hunter-item__salary-text__TuG_k"
                                  >
                                    USD 1,700 - USD 2,700
                                  </span>
                                </div>
                                <span class="ant-space-item-split">
                                  <div
                                    class="ant-divider css-d5t39c ant-divider-vertical"
                                    style="border-color: rgba(0, 0, 0, 0.85)"
                                  ></div>
                                </span>
                                <div class="ant-space-item">
                                  <div
                                    class="jobs-hunter-item_jobs-hunter-item__workplace__mqHAq"
                                  >
                                    Ho Chi Minh
                                  </div>
                                </div>
                              </div>

                              <span
                                class="jobs-hunter-item_jobs-hunter-item__info-extra__0xkW1"
                              >
                                Vacancies: 1 | Applicants: 0
                              </span>
                            </div>
                            <div
                              class="jobs-hunter-item-bonus_jobs-hunter-item-bonus__container__xauke"
                            >
                              <div
                                class="jobs-hunter-item-bonus_jobs-hunter-item-bonus__bonus__DqNk_"
                              >
                                Reward USD 1,522
                              </div>
                              <span
                                class="jobs-hunter-item-bonus_jobs-hunter-item-bonus__text--small__rTE2b"
                              >
                                / Candidate
                              </span>
                            </div>
                          </div>
                          <div
                            class="ant-col jobs-hunter-item_jobs-hunter-item__function__h9pJu css-d5t39c"
                            style="width: 100%"
                          >
                            <div
                              class="jobs-hunter-item_jobs-hunter-item__function-tag__ekbR_"
                            >
                              <span
                                class="jobs-hunter-item_jobs-hunter-item__status__2kJge"
                              >
                                <span
                                  class="ant-tag ant-tag-has-color css-d5t39c"
                                  style="
                                    background-color: rgb(26, 169, 76);
                                    color: rgb(255, 255, 255);
                                  "
                                >
                                  Active
                                </span>
                              </span>
                              <div
                                class="premium-tag_premium-tag__9UlVq undefined"
                              >
                                <span class="ant-tag ant-tag-cyan css-d5t39c">
                                  <small>Premium</small>
                                </span>
                              </div>
                            </div>

                            <div
                              class="jobs-hunter-item_jobs-hunter-item__refer-btn__7wjau"
                            >
                              <a
                                class="my-link_my-link__wIenB undefined"
                                href="#"
                                style="color: rgb(40, 40, 40)"
                              >
                                Refer and earn
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- </a> -->
              </div>
              <div
                class="ant-col ant-col-xs-24 ant-col-md-12 css-d5t39c"
                style="padding-left: 6px; padding-right: 6px"
              >
                <!-- <a class="my-link_my-link__wIenB jobs-hunter-item_jobs-hunter-item__0y902" href="#"> -->
                <div
                  class="my-link_my-link__wIenB jobs-hunter-item_jobs-hunter-item__0y902"
                  href="#"
                >
                  <div
                    class="jobs-hunter-item_jobs-hunter-item__container__24xQ0 jobs-hunter-item_jobs-hunter-item__container--lock__Kz_lS jobs-hunter-item_jobs-hunter-item__container--premium__ktNdE undefined"
                  >
                    <div
                      class="premium-locker_premium-locker__Dcgir jobs-hunter-item_locker__f2FpL"
                    >
                      <span
                        >This is a Premium Job that is only visible to ones that
                        reach 15 referrals per month</span
                      >
                    </div>
                    <span
                      class="ant-tag ant-tag-has-color urgent-tag_urgent-tag__CJ5hl undefined css-d5t39c"
                      style="background-color: rgb(253, 92, 99)"
                    >
                      Urgent
                    </span>
                    <div
                      class="ant-row css-d5t39c"
                      style="margin-left: -6px; margin-right: -6px"
                    >
                      <div
                        class="ant-col ant-col-4 css-d5t39c"
                        style="padding-left: 6px; padding-right: 6px"
                      >
                        <img
                          src="../../assets/admin_image/job_image/building.png"
                          alt="image"
                        />
                      </div>
                      <div
                        class="ant-col ant-col-20 css-d5t39c"
                        style="padding-left: 6px; padding-right: 6px"
                      >
                        <div
                          class="ant-row ant-row-space-between ant-row-bottom jobs-hunter-item_jobs-hunter-item__box__udR00 css-d5t39c"
                        >
                          <div
                            class="bookmark-job_bookmark-job__ISdrZ jobs-hunter-item_jobs-hunter-item__bookmark__8xZTE"
                          >
                            <i
                              class="far fa-bookmark bookmark-job_bookmark-job__img__mqBQX"
                            ></i>
                          </div>
                          <div class="ant-col css-d5t39c" style="width: 100%">
                            <div
                              class="ant-row css-d5t39c"
                              style="margin-left: -4px; margin-right: -4px"
                            >
                              <div
                                class="ant-col ant-col-xs-24 css-d5t39c"
                                style="
                                  padding-left: 4px;
                                  padding-right: 4px;
                                  margin-bottom: 5px;
                                "
                              >
                                <div
                                  class="jobs-hunter-item_jobs-hunter-item__title__iWYqO"
                                >
                                  <div
                                    class="jobs-hunter-item_jobs-hunter-item__line-text__Sp6RC"
                                  >
                                    <a
                                      class="my-link_my-link__wIenB undefined"
                                      href="#"
                                    >
                                      <h5
                                        class="ant-typography ant-typography-ellipsis ant-typography-ellipsis-multiple-line css-d5t39c"
                                        style="
                                          margin-bottom: 0px;
                                          margin-top: 0px;
                                          -webkit-line-clamp: 2;
                                        "
                                      >
                                        Frontend Developer (Svelte or React)
                                      </h5>
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div
                              class="jobs-hunter-item_jobs-hunter-item__info__XMBJQ"
                              style="margin-bottom: 10px"
                            >
                              <div
                                class="ant-space css-d5t39c ant-space-horizontal ant-space-align-center jobs-hunter-item_jobs-hunter-item__salary__1K77l"
                                style="gap: 0px"
                              >
                                <div class="ant-space-item">
                                  <span
                                    class="jobs-hunter-item_jobs-hunter-item__salary-text__TuG_k"
                                  >
                                    USD 1,700 - USD 2,700
                                  </span>
                                </div>
                                <span class="ant-space-item-split">
                                  <div
                                    class="ant-divider css-d5t39c ant-divider-vertical"
                                    style="border-color: rgba(0, 0, 0, 0.85)"
                                  ></div>
                                </span>
                                <div class="ant-space-item">
                                  <div
                                    class="jobs-hunter-item_jobs-hunter-item__workplace__mqHAq"
                                  >
                                    Ho Chi Minh
                                  </div>
                                </div>
                              </div>

                              <span
                                class="jobs-hunter-item_jobs-hunter-item__info-extra__0xkW1"
                              >
                                Vacancies: 1 | Applicants: 0
                              </span>
                            </div>
                            <div
                              class="jobs-hunter-item-bonus_jobs-hunter-item-bonus__container__xauke"
                            >
                              <div
                                class="jobs-hunter-item-bonus_jobs-hunter-item-bonus__bonus__DqNk_"
                              >
                                Reward USD 1,522
                              </div>
                              <span
                                class="jobs-hunter-item-bonus_jobs-hunter-item-bonus__text--small__rTE2b"
                              >
                                / Candidate
                              </span>
                            </div>
                          </div>
                          <div
                            class="ant-col jobs-hunter-item_jobs-hunter-item__function__h9pJu css-d5t39c"
                            style="width: 100%"
                          >
                            <div
                              class="jobs-hunter-item_jobs-hunter-item__function-tag__ekbR_"
                            >
                              <span
                                class="jobs-hunter-item_jobs-hunter-item__status__2kJge"
                              >
                                <span
                                  class="ant-tag ant-tag-has-color css-d5t39c"
                                  style="
                                    background-color: rgb(26, 169, 76);
                                    color: rgb(255, 255, 255);
                                  "
                                >
                                  Active
                                </span>
                              </span>
                              <div
                                class="premium-tag_premium-tag__9UlVq undefined"
                              >
                                <span class="ant-tag ant-tag-cyan css-d5t39c">
                                  <small>Premium</small>
                                </span>
                              </div>
                            </div>

                            <div
                              class="jobs-hunter-item_jobs-hunter-item__refer-btn__7wjau"
                            >
                              <a
                                class="my-link_my-link__wIenB undefined"
                                href="#"
                                style="color: rgb(40, 40, 40)"
                              >
                                Refer and earn
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- </a> -->
              </div>
              <div
                class="ant-col ant-col-xs-24 ant-col-md-12 css-d5t39c"
                style="padding-left: 6px; padding-right: 6px"
              >
                <!-- <a class="my-link_my-link__wIenB jobs-hunter-item_jobs-hunter-item__0y902" href="#"> -->
                <div
                  class="my-link_my-link__wIenB jobs-hunter-item_jobs-hunter-item__0y902"
                  href="#"
                >
                  <div
                    class="jobs-hunter-item_jobs-hunter-item__container__24xQ0 jobs-hunter-item_jobs-hunter-item__container--lock__Kz_lS jobs-hunter-item_jobs-hunter-item__container--premium__ktNdE undefined"
                  >
                    <div
                      class="premium-locker_premium-locker__Dcgir jobs-hunter-item_locker__f2FpL"
                    >
                      <span
                        >This is a Premium Job that is only visible to ones that
                        reach 15 referrals per month</span
                      >
                    </div>
                    <span
                      class="ant-tag ant-tag-has-color urgent-tag_urgent-tag__CJ5hl undefined css-d5t39c"
                      style="background-color: rgb(253, 92, 99)"
                    >
                      Urgent
                    </span>
                    <div
                      class="ant-row css-d5t39c"
                      style="margin-left: -6px; margin-right: -6px"
                    >
                      <div
                        class="ant-col ant-col-4 css-d5t39c"
                        style="padding-left: 6px; padding-right: 6px"
                      >
                        <img
                          src="../../assets/admin_image/job_image/building.png"
                          alt="image"
                        />
                      </div>
                      <div
                        class="ant-col ant-col-20 css-d5t39c"
                        style="padding-left: 6px; padding-right: 6px"
                      >
                        <div
                          class="ant-row ant-row-space-between ant-row-bottom jobs-hunter-item_jobs-hunter-item__box__udR00 css-d5t39c"
                        >
                          <div
                            class="bookmark-job_bookmark-job__ISdrZ jobs-hunter-item_jobs-hunter-item__bookmark__8xZTE"
                          >
                            <i
                              class="far fa-bookmark bookmark-job_bookmark-job__img__mqBQX"
                            ></i>
                          </div>
                          <div class="ant-col css-d5t39c" style="width: 100%">
                            <div
                              class="ant-row css-d5t39c"
                              style="margin-left: -4px; margin-right: -4px"
                            >
                              <div
                                class="ant-col ant-col-xs-24 css-d5t39c"
                                style="
                                  padding-left: 4px;
                                  padding-right: 4px;
                                  margin-bottom: 5px;
                                "
                              >
                                <div
                                  class="jobs-hunter-item_jobs-hunter-item__title__iWYqO"
                                >
                                  <div
                                    class="jobs-hunter-item_jobs-hunter-item__line-text__Sp6RC"
                                  >
                                    <a
                                      class="my-link_my-link__wIenB undefined"
                                      href="#"
                                    >
                                      <h5
                                        class="ant-typography ant-typography-ellipsis ant-typography-ellipsis-multiple-line css-d5t39c"
                                        style="
                                          margin-bottom: 0px;
                                          margin-top: 0px;
                                          -webkit-line-clamp: 2;
                                        "
                                      >
                                        Frontend Developer (Svelte or React)
                                      </h5>
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div
                              class="jobs-hunter-item_jobs-hunter-item__info__XMBJQ"
                              style="margin-bottom: 10px"
                            >
                              <div
                                class="ant-space css-d5t39c ant-space-horizontal ant-space-align-center jobs-hunter-item_jobs-hunter-item__salary__1K77l"
                                style="gap: 0px"
                              >
                                <div class="ant-space-item">
                                  <span
                                    class="jobs-hunter-item_jobs-hunter-item__salary-text__TuG_k"
                                  >
                                    USD 1,700 - USD 2,700
                                  </span>
                                </div>
                                <span class="ant-space-item-split">
                                  <div
                                    class="ant-divider css-d5t39c ant-divider-vertical"
                                    style="border-color: rgba(0, 0, 0, 0.85)"
                                  ></div>
                                </span>
                                <div class="ant-space-item">
                                  <div
                                    class="jobs-hunter-item_jobs-hunter-item__workplace__mqHAq"
                                  >
                                    Ho Chi Minh
                                  </div>
                                </div>
                              </div>

                              <span
                                class="jobs-hunter-item_jobs-hunter-item__info-extra__0xkW1"
                              >
                                Vacancies: 1 | Applicants: 0
                              </span>
                            </div>
                            <div
                              class="jobs-hunter-item-bonus_jobs-hunter-item-bonus__container__xauke"
                            >
                              <div
                                class="jobs-hunter-item-bonus_jobs-hunter-item-bonus__bonus__DqNk_"
                              >
                                Reward USD 1,522
                              </div>
                              <span
                                class="jobs-hunter-item-bonus_jobs-hunter-item-bonus__text--small__rTE2b"
                              >
                                / Candidate
                              </span>
                            </div>
                          </div>
                          <div
                            class="ant-col jobs-hunter-item_jobs-hunter-item__function__h9pJu css-d5t39c"
                            style="width: 100%"
                          >
                            <div
                              class="jobs-hunter-item_jobs-hunter-item__function-tag__ekbR_"
                            >
                              <span
                                class="jobs-hunter-item_jobs-hunter-item__status__2kJge"
                              >
                                <span
                                  class="ant-tag ant-tag-has-color css-d5t39c"
                                  style="
                                    background-color: rgb(26, 169, 76);
                                    color: rgb(255, 255, 255);
                                  "
                                >
                                  Active
                                </span>
                              </span>
                              <div
                                class="premium-tag_premium-tag__9UlVq undefined"
                              >
                                <span class="ant-tag ant-tag-cyan css-d5t39c">
                                  <small>Premium</small>
                                </span>
                              </div>
                            </div>

                            <div
                              class="jobs-hunter-item_jobs-hunter-item__refer-btn__7wjau"
                            >
                              <a
                                class="my-link_my-link__wIenB undefined"
                                href="#"
                                style="color: rgb(40, 40, 40)"
                              >
                                Refer and earn
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- </a> -->
              </div>
              <div
                class="ant-col ant-col-xs-24 ant-col-md-12 css-d5t39c"
                style="padding-left: 6px; padding-right: 6px"
              >
                <!-- <a class="my-link_my-link__wIenB jobs-hunter-item_jobs-hunter-item__0y902" href="#"> -->
                <div
                  class="my-link_my-link__wIenB jobs-hunter-item_jobs-hunter-item__0y902"
                  href="#"
                >
                  <div
                    class="jobs-hunter-item_jobs-hunter-item__container__24xQ0 jobs-hunter-item_jobs-hunter-item__container--lock__Kz_lS jobs-hunter-item_jobs-hunter-item__container--premium__ktNdE undefined"
                  >
                    <div
                      class="premium-locker_premium-locker__Dcgir jobs-hunter-item_locker__f2FpL"
                    >
                      <span
                        >This is a Premium Job that is only visible to ones that
                        reach 15 referrals per month</span
                      >
                    </div>
                    <span
                      class="ant-tag ant-tag-has-color urgent-tag_urgent-tag__CJ5hl undefined css-d5t39c"
                      style="background-color: rgb(253, 92, 99)"
                    >
                      Urgent
                    </span>
                    <div
                      class="ant-row css-d5t39c"
                      style="margin-left: -6px; margin-right: -6px"
                    >
                      <div
                        class="ant-col ant-col-4 css-d5t39c"
                        style="padding-left: 6px; padding-right: 6px"
                      >
                        <img
                          src="../../assets/admin_image/job_image/building.png"
                          alt="image"
                        />
                      </div>
                      <div
                        class="ant-col ant-col-20 css-d5t39c"
                        style="padding-left: 6px; padding-right: 6px"
                      >
                        <div
                          class="ant-row ant-row-space-between ant-row-bottom jobs-hunter-item_jobs-hunter-item__box__udR00 css-d5t39c"
                        >
                          <div
                            class="bookmark-job_bookmark-job__ISdrZ jobs-hunter-item_jobs-hunter-item__bookmark__8xZTE"
                          >
                            <i
                              class="far fa-bookmark bookmark-job_bookmark-job__img__mqBQX"
                            ></i>
                          </div>
                          <div class="ant-col css-d5t39c" style="width: 100%">
                            <div
                              class="ant-row css-d5t39c"
                              style="margin-left: -4px; margin-right: -4px"
                            >
                              <div
                                class="ant-col ant-col-xs-24 css-d5t39c"
                                style="
                                  padding-left: 4px;
                                  padding-right: 4px;
                                  margin-bottom: 5px;
                                "
                              >
                                <div
                                  class="jobs-hunter-item_jobs-hunter-item__title__iWYqO"
                                >
                                  <div
                                    class="jobs-hunter-item_jobs-hunter-item__line-text__Sp6RC"
                                  >
                                    <a
                                      class="my-link_my-link__wIenB undefined"
                                      href="#"
                                    >
                                      <h5
                                        class="ant-typography ant-typography-ellipsis ant-typography-ellipsis-multiple-line css-d5t39c"
                                        style="
                                          margin-bottom: 0px;
                                          margin-top: 0px;
                                          -webkit-line-clamp: 2;
                                        "
                                      >
                                        Frontend Developer (Svelte or React)
                                      </h5>
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div
                              class="jobs-hunter-item_jobs-hunter-item__info__XMBJQ"
                              style="margin-bottom: 10px"
                            >
                              <div
                                class="ant-space css-d5t39c ant-space-horizontal ant-space-align-center jobs-hunter-item_jobs-hunter-item__salary__1K77l"
                                style="gap: 0px"
                              >
                                <div class="ant-space-item">
                                  <span
                                    class="jobs-hunter-item_jobs-hunter-item__salary-text__TuG_k"
                                  >
                                    USD 1,700 - USD 2,700
                                  </span>
                                </div>
                                <span class="ant-space-item-split">
                                  <div
                                    class="ant-divider css-d5t39c ant-divider-vertical"
                                    style="border-color: rgba(0, 0, 0, 0.85)"
                                  ></div>
                                </span>
                                <div class="ant-space-item">
                                  <div
                                    class="jobs-hunter-item_jobs-hunter-item__workplace__mqHAq"
                                  >
                                    Ho Chi Minh
                                  </div>
                                </div>
                              </div>

                              <span
                                class="jobs-hunter-item_jobs-hunter-item__info-extra__0xkW1"
                              >
                                Vacancies: 1 | Applicants: 0
                              </span>
                            </div>
                            <div
                              class="jobs-hunter-item-bonus_jobs-hunter-item-bonus__container__xauke"
                            >
                              <div
                                class="jobs-hunter-item-bonus_jobs-hunter-item-bonus__bonus__DqNk_"
                              >
                                Reward USD 1,522
                              </div>
                              <span
                                class="jobs-hunter-item-bonus_jobs-hunter-item-bonus__text--small__rTE2b"
                              >
                                / Candidate
                              </span>
                            </div>
                          </div>
                          <div
                            class="ant-col jobs-hunter-item_jobs-hunter-item__function__h9pJu css-d5t39c"
                            style="width: 100%"
                          >
                            <div
                              class="jobs-hunter-item_jobs-hunter-item__function-tag__ekbR_"
                            >
                              <span
                                class="jobs-hunter-item_jobs-hunter-item__status__2kJge"
                              >
                                <span
                                  class="ant-tag ant-tag-has-color css-d5t39c"
                                  style="
                                    background-color: rgb(26, 169, 76);
                                    color: rgb(255, 255, 255);
                                  "
                                >
                                  Active
                                </span>
                              </span>
                              <div
                                class="premium-tag_premium-tag__9UlVq undefined"
                              >
                                <span class="ant-tag ant-tag-cyan css-d5t39c">
                                  <small>Premium</small>
                                </span>
                              </div>
                            </div>

                            <div
                              class="jobs-hunter-item_jobs-hunter-item__refer-btn__7wjau"
                            >
                              <a
                                class="my-link_my-link__wIenB undefined"
                                href="#"
                                style="color: rgb(40, 40, 40)"
                              >
                                Refer and earn
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- </a> -->
              </div>
              <div
                class="ant-col ant-col-xs-24 ant-col-md-12 css-d5t39c"
                style="padding-left: 6px; padding-right: 6px"
              >
                <!-- <a class="my-link_my-link__wIenB jobs-hunter-item_jobs-hunter-item__0y902" href="#"> -->
                <div
                  class="my-link_my-link__wIenB jobs-hunter-item_jobs-hunter-item__0y902"
                  href="#"
                >
                  <div
                    class="jobs-hunter-item_jobs-hunter-item__container__24xQ0 jobs-hunter-item_jobs-hunter-item__container--lock__Kz_lS jobs-hunter-item_jobs-hunter-item__container--premium__ktNdE undefined"
                  >
                    <div
                      class="premium-locker_premium-locker__Dcgir jobs-hunter-item_locker__f2FpL"
                    >
                      <span
                        >This is a Premium Job that is only visible to ones that
                        reach 15 referrals per month</span
                      >
                    </div>
                    <span
                      class="ant-tag ant-tag-has-color urgent-tag_urgent-tag__CJ5hl undefined css-d5t39c"
                      style="background-color: rgb(253, 92, 99)"
                    >
                      Urgent
                    </span>
                    <div
                      class="ant-row css-d5t39c"
                      style="margin-left: -6px; margin-right: -6px"
                    >
                      <div
                        class="ant-col ant-col-4 css-d5t39c"
                        style="padding-left: 6px; padding-right: 6px"
                      >
                        <img
                          src="../../assets/admin_image/job_image/building.png"
                          alt="image"
                        />
                      </div>
                      <div
                        class="ant-col ant-col-20 css-d5t39c"
                        style="padding-left: 6px; padding-right: 6px"
                      >
                        <div
                          class="ant-row ant-row-space-between ant-row-bottom jobs-hunter-item_jobs-hunter-item__box__udR00 css-d5t39c"
                        >
                          <div
                            class="bookmark-job_bookmark-job__ISdrZ jobs-hunter-item_jobs-hunter-item__bookmark__8xZTE"
                          >
                            <i
                              class="far fa-bookmark bookmark-job_bookmark-job__img__mqBQX"
                            ></i>
                          </div>
                          <div class="ant-col css-d5t39c" style="width: 100%">
                            <div
                              class="ant-row css-d5t39c"
                              style="margin-left: -4px; margin-right: -4px"
                            >
                              <div
                                class="ant-col ant-col-xs-24 css-d5t39c"
                                style="
                                  padding-left: 4px;
                                  padding-right: 4px;
                                  margin-bottom: 5px;
                                "
                              >
                                <div
                                  class="jobs-hunter-item_jobs-hunter-item__title__iWYqO"
                                >
                                  <div
                                    class="jobs-hunter-item_jobs-hunter-item__line-text__Sp6RC"
                                  >
                                    <a
                                      class="my-link_my-link__wIenB undefined"
                                      href="#"
                                    >
                                      <h5
                                        class="ant-typography ant-typography-ellipsis ant-typography-ellipsis-multiple-line css-d5t39c"
                                        style="
                                          margin-bottom: 0px;
                                          margin-top: 0px;
                                          -webkit-line-clamp: 2;
                                        "
                                      >
                                        Frontend Developer (Svelte or React)
                                      </h5>
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div
                              class="jobs-hunter-item_jobs-hunter-item__info__XMBJQ"
                              style="margin-bottom: 10px"
                            >
                              <div
                                class="ant-space css-d5t39c ant-space-horizontal ant-space-align-center jobs-hunter-item_jobs-hunter-item__salary__1K77l"
                                style="gap: 0px"
                              >
                                <div class="ant-space-item">
                                  <span
                                    class="jobs-hunter-item_jobs-hunter-item__salary-text__TuG_k"
                                  >
                                    USD 1,700 - USD 2,700
                                  </span>
                                </div>
                                <span class="ant-space-item-split">
                                  <div
                                    class="ant-divider css-d5t39c ant-divider-vertical"
                                    style="border-color: rgba(0, 0, 0, 0.85)"
                                  ></div>
                                </span>
                                <div class="ant-space-item">
                                  <div
                                    class="jobs-hunter-item_jobs-hunter-item__workplace__mqHAq"
                                  >
                                    Ho Chi Minh
                                  </div>
                                </div>
                              </div>

                              <span
                                class="jobs-hunter-item_jobs-hunter-item__info-extra__0xkW1"
                              >
                                Vacancies: 1 | Applicants: 0
                              </span>
                            </div>
                            <div
                              class="jobs-hunter-item-bonus_jobs-hunter-item-bonus__container__xauke"
                            >
                              <div
                                class="jobs-hunter-item-bonus_jobs-hunter-item-bonus__bonus__DqNk_"
                              >
                                Reward USD 1,522
                              </div>
                              <span
                                class="jobs-hunter-item-bonus_jobs-hunter-item-bonus__text--small__rTE2b"
                              >
                                / Candidate
                              </span>
                            </div>
                          </div>
                          <div
                            class="ant-col jobs-hunter-item_jobs-hunter-item__function__h9pJu css-d5t39c"
                            style="width: 100%"
                          >
                            <div
                              class="jobs-hunter-item_jobs-hunter-item__function-tag__ekbR_"
                            >
                              <span
                                class="jobs-hunter-item_jobs-hunter-item__status__2kJge"
                              >
                                <span
                                  class="ant-tag ant-tag-has-color css-d5t39c"
                                  style="
                                    background-color: rgb(26, 169, 76);
                                    color: rgb(255, 255, 255);
                                  "
                                >
                                  Active
                                </span>
                              </span>
                              <div
                                class="premium-tag_premium-tag__9UlVq undefined"
                              >
                                <span class="ant-tag ant-tag-cyan css-d5t39c">
                                  <small>Premium</small>
                                </span>
                              </div>
                            </div>

                            <div
                              class="jobs-hunter-item_jobs-hunter-item__refer-btn__7wjau"
                            >
                              <a
                                class="my-link_my-link__wIenB undefined"
                                href="#"
                                style="color: rgb(40, 40, 40)"
                              >
                                Refer and earn
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- </a> -->
              </div>
              <div
                class="ant-col ant-col-xs-24 ant-col-md-12 css-d5t39c"
                style="padding-left: 6px; padding-right: 6px"
              >
                <!-- <a class="my-link_my-link__wIenB jobs-hunter-item_jobs-hunter-item__0y902" href="#"> -->
                <div
                  class="my-link_my-link__wIenB jobs-hunter-item_jobs-hunter-item__0y902"
                  href="#"
                >
                  <div
                    class="jobs-hunter-item_jobs-hunter-item__container__24xQ0 jobs-hunter-item_jobs-hunter-item__container--lock__Kz_lS jobs-hunter-item_jobs-hunter-item__container--premium__ktNdE undefined"
                  >
                    <div
                      class="premium-locker_premium-locker__Dcgir jobs-hunter-item_locker__f2FpL"
                    >
                      <span
                        >This is a Premium Job that is only visible to ones that
                        reach 15 referrals per month</span
                      >
                    </div>
                    <span
                      class="ant-tag ant-tag-has-color urgent-tag_urgent-tag__CJ5hl undefined css-d5t39c"
                      style="background-color: rgb(253, 92, 99)"
                    >
                      Urgent
                    </span>
                    <div
                      class="ant-row css-d5t39c"
                      style="margin-left: -6px; margin-right: -6px"
                    >
                      <div
                        class="ant-col ant-col-4 css-d5t39c"
                        style="padding-left: 6px; padding-right: 6px"
                      >
                        <img
                          src="../../assets/admin_image/job_image/building.png"
                          alt="image"
                        />
                      </div>
                      <div
                        class="ant-col ant-col-20 css-d5t39c"
                        style="padding-left: 6px; padding-right: 6px"
                      >
                        <div
                          class="ant-row ant-row-space-between ant-row-bottom jobs-hunter-item_jobs-hunter-item__box__udR00 css-d5t39c"
                        >
                          <div
                            class="bookmark-job_bookmark-job__ISdrZ jobs-hunter-item_jobs-hunter-item__bookmark__8xZTE"
                          >
                            <i
                              class="far fa-bookmark bookmark-job_bookmark-job__img__mqBQX"
                            ></i>
                          </div>
                          <div class="ant-col css-d5t39c" style="width: 100%">
                            <div
                              class="ant-row css-d5t39c"
                              style="margin-left: -4px; margin-right: -4px"
                            >
                              <div
                                class="ant-col ant-col-xs-24 css-d5t39c"
                                style="
                                  padding-left: 4px;
                                  padding-right: 4px;
                                  margin-bottom: 5px;
                                "
                              >
                                <div
                                  class="jobs-hunter-item_jobs-hunter-item__title__iWYqO"
                                >
                                  <div
                                    class="jobs-hunter-item_jobs-hunter-item__line-text__Sp6RC"
                                  >
                                    <a
                                      class="my-link_my-link__wIenB undefined"
                                      href="#"
                                    >
                                      <h5
                                        class="ant-typography ant-typography-ellipsis ant-typography-ellipsis-multiple-line css-d5t39c"
                                        style="
                                          margin-bottom: 0px;
                                          margin-top: 0px;
                                          -webkit-line-clamp: 2;
                                        "
                                      >
                                        Frontend Developer (Svelte or React)
                                      </h5>
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div
                              class="jobs-hunter-item_jobs-hunter-item__info__XMBJQ"
                              style="margin-bottom: 10px"
                            >
                              <div
                                class="ant-space css-d5t39c ant-space-horizontal ant-space-align-center jobs-hunter-item_jobs-hunter-item__salary__1K77l"
                                style="gap: 0px"
                              >
                                <div class="ant-space-item">
                                  <span
                                    class="jobs-hunter-item_jobs-hunter-item__salary-text__TuG_k"
                                  >
                                    USD 1,700 - USD 2,700
                                  </span>
                                </div>
                                <span class="ant-space-item-split">
                                  <div
                                    class="ant-divider css-d5t39c ant-divider-vertical"
                                    style="border-color: rgba(0, 0, 0, 0.85)"
                                  ></div>
                                </span>
                                <div class="ant-space-item">
                                  <div
                                    class="jobs-hunter-item_jobs-hunter-item__workplace__mqHAq"
                                  >
                                    Ho Chi Minh
                                  </div>
                                </div>
                              </div>

                              <span
                                class="jobs-hunter-item_jobs-hunter-item__info-extra__0xkW1"
                              >
                                Vacancies: 1 | Applicants: 0
                              </span>
                            </div>
                            <div
                              class="jobs-hunter-item-bonus_jobs-hunter-item-bonus__container__xauke"
                            >
                              <div
                                class="jobs-hunter-item-bonus_jobs-hunter-item-bonus__bonus__DqNk_"
                              >
                                Reward USD 1,522
                              </div>
                              <span
                                class="jobs-hunter-item-bonus_jobs-hunter-item-bonus__text--small__rTE2b"
                              >
                                / Candidate
                              </span>
                            </div>
                          </div>
                          <div
                            class="ant-col jobs-hunter-item_jobs-hunter-item__function__h9pJu css-d5t39c"
                            style="width: 100%"
                          >
                            <div
                              class="jobs-hunter-item_jobs-hunter-item__function-tag__ekbR_"
                            >
                              <span
                                class="jobs-hunter-item_jobs-hunter-item__status__2kJge"
                              >
                                <span
                                  class="ant-tag ant-tag-has-color css-d5t39c"
                                  style="
                                    background-color: rgb(26, 169, 76);
                                    color: rgb(255, 255, 255);
                                  "
                                >
                                  Active
                                </span>
                              </span>
                              <div
                                class="premium-tag_premium-tag__9UlVq undefined"
                              >
                                <span class="ant-tag ant-tag-cyan css-d5t39c">
                                  <small>Premium</small>
                                </span>
                              </div>
                            </div>

                            <div
                              class="jobs-hunter-item_jobs-hunter-item__refer-btn__7wjau"
                            >
                              <a
                                class="my-link_my-link__wIenB undefined"
                                href="#"
                                style="color: rgb(40, 40, 40)"
                              >
                                Refer and earn
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- </a> -->
              </div>

              <div
                class="ant-col ant-col-xs-24 ant-col-md-12 css-d5t39c"
                style="padding-left: 6px; padding-right: 6px"
              >
                <!-- <a class="my-link_my-link__wIenB jobs-hunter-item_jobs-hunter-item__0y902" href="#"> -->
                <div
                  class="my-link_my-link__wIenB jobs-hunter-item_jobs-hunter-item__0y902"
                  href="#"
                >
                  <div
                    class="jobs-hunter-item_jobs-hunter-item__container__24xQ0 jobs-hunter-item_jobs-hunter-item__container--lock__Kz_lS jobs-hunter-item_jobs-hunter-item__container--premium__ktNdE undefined"
                  >
                    <div
                      class="premium-locker_premium-locker__Dcgir jobs-hunter-item_locker__f2FpL"
                    >
                      <span
                        >This is a Premium Job that is only visible to ones that
                        reach 15 referrals per month</span
                      >
                    </div>
                    <span
                      class="ant-tag ant-tag-has-color urgent-tag_urgent-tag__CJ5hl undefined css-d5t39c"
                      style="background-color: rgb(253, 92, 99)"
                    >
                      Urgent
                    </span>
                    <div
                      class="ant-row css-d5t39c"
                      style="margin-left: -6px; margin-right: -6px"
                    >
                      <div
                        class="ant-col ant-col-4 css-d5t39c"
                        style="padding-left: 6px; padding-right: 6px"
                      >
                        <img
                          src="../../assets/admin_image/job_image/building.png"
                          alt="image"
                        />
                      </div>
                      <div
                        class="ant-col ant-col-20 css-d5t39c"
                        style="padding-left: 6px; padding-right: 6px"
                      >
                        <div
                          class="ant-row ant-row-space-between ant-row-bottom jobs-hunter-item_jobs-hunter-item__box__udR00 css-d5t39c"
                        >
                          <div
                            class="bookmark-job_bookmark-job__ISdrZ jobs-hunter-item_jobs-hunter-item__bookmark__8xZTE"
                          >
                            <i
                              class="far fa-bookmark bookmark-job_bookmark-job__img__mqBQX"
                            ></i>
                          </div>
                          <div class="ant-col css-d5t39c" style="width: 100%">
                            <div
                              class="ant-row css-d5t39c"
                              style="margin-left: -4px; margin-right: -4px"
                            >
                              <div
                                class="ant-col ant-col-xs-24 css-d5t39c"
                                style="
                                  padding-left: 4px;
                                  padding-right: 4px;
                                  margin-bottom: 5px;
                                "
                              >
                                <div
                                  class="jobs-hunter-item_jobs-hunter-item__title__iWYqO"
                                >
                                  <div
                                    class="jobs-hunter-item_jobs-hunter-item__line-text__Sp6RC"
                                  >
                                    <a
                                      class="my-link_my-link__wIenB undefined"
                                      href="#"
                                    >
                                      <h5
                                        class="ant-typography ant-typography-ellipsis ant-typography-ellipsis-multiple-line css-d5t39c"
                                        style="
                                          margin-bottom: 0px;
                                          margin-top: 0px;
                                          -webkit-line-clamp: 2;
                                        "
                                      >
                                        Backend Developer (Java, JavaScript,
                                        Typescript)
                                      </h5>
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div
                              class="jobs-hunter-item_jobs-hunter-item__info__XMBJQ"
                              style="margin-bottom: 10px"
                            >
                              <div
                                class="ant-space css-d5t39c ant-space-horizontal ant-space-align-center jobs-hunter-item_jobs-hunter-item__salary__1K77l"
                                style="gap: 0px"
                              >
                                <div class="ant-space-item">
                                  <span
                                    class="jobs-hunter-item_jobs-hunter-item__salary-text__TuG_k"
                                  >
                                    USD 1,700 - USD 2,700
                                  </span>
                                </div>
                                <span class="ant-space-item-split">
                                  <div
                                    class="ant-divider css-d5t39c ant-divider-vertical"
                                    style="border-color: rgba(0, 0, 0, 0.85)"
                                  ></div>
                                </span>
                                <div class="ant-space-item">
                                  <div
                                    class="jobs-hunter-item_jobs-hunter-item__workplace__mqHAq"
                                  >
                                    Ho Chi Minh
                                  </div>
                                </div>
                              </div>

                              <span
                                class="jobs-hunter-item_jobs-hunter-item__info-extra__0xkW1"
                              >
                                Vacancies: 1 | Applicants: 0
                              </span>
                            </div>
                            <div
                              class="jobs-hunter-item-bonus_jobs-hunter-item-bonus__container__xauke"
                            >
                              <div
                                class="jobs-hunter-item-bonus_jobs-hunter-item-bonus__bonus__DqNk_"
                              >
                                Reward USD 1,522
                              </div>
                              <span
                                class="jobs-hunter-item-bonus_jobs-hunter-item-bonus__text--small__rTE2b"
                              >
                                / Candidate
                              </span>
                            </div>
                          </div>
                          <div
                            class="ant-col jobs-hunter-item_jobs-hunter-item__function__h9pJu css-d5t39c"
                            style="width: 100%"
                          >
                            <div
                              class="jobs-hunter-item_jobs-hunter-item__function-tag__ekbR_"
                            >
                              <span
                                class="jobs-hunter-item_jobs-hunter-item__status__2kJge"
                              >
                                <span
                                  class="ant-tag ant-tag-has-color css-d5t39c"
                                  style="
                                    background-color: rgb(26, 169, 76);
                                    color: rgb(255, 255, 255);
                                  "
                                >
                                  Active
                                </span>
                              </span>
                              <div
                                class="premium-tag_premium-tag__9UlVq undefined"
                              >
                                <span class="ant-tag ant-tag-cyan css-d5t39c">
                                  <small>Premium</small>
                                </span>
                              </div>
                            </div>

                            <div
                              class="jobs-hunter-item_jobs-hunter-item__refer-btn__7wjau"
                            >
                              <a
                                class="my-link_my-link__wIenB undefined"
                                href="#"
                                style="color: rgb(40, 40, 40)"
                              >
                                Refer and earn
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- </a> -->
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        class="ant-col ant-col-xs-24 ant-col-lg-6 css-d5t39c"
        style="padding-left: 12px; padding-right: 12px"
      >
        <div class="ant-row css-15rg2km">
          <div class="ant-col ant-col-xs-24 css-15rg2km">
            <div class="ant-carousel css-d5t39c">
              <div
                class="slick-slide slick-active slick-current"
                style="outline: none; width: 312px"
              >
                <div>
                  <div style="width: 100%; display: inline-block">
                    <a
                      class="my-link_my-link__wIenB jobs-hunter-banners_jobs-hunter-banners__banner__hLDcw"
                      href="#"
                    >
                      <img
                        class="jobs-hunter-banners_jobs-hunter-banners__banner-image__RBVmp"
                        src="../../assets/admin_image/job_image/e7138a3ddad643cc911ea46ac5c7248c_20220806132413.jpg"
                        alt="image"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="ant-col ant-col-xs-24 css-15rg2km">
            <div class="ant-carousel css-d5t39c">
              <div
                class="slick-slider jobs-hunter-banners_jobs-hunter-banners__slider__1hNrp slick-initialized"
              >
                <div class="slick-list">
                  <div
                    class="slick-track"
                    style="
                      opacity: 1;
                      transform: translate3d(0px, 0px, 0px);
                      width: 312px;
                    "
                  >
                    <div
                      class="slick-slide slick-active slick-current"
                      style="outline: none; width: 312px"
                    >
                      <div>
                        <div style="width: 100%; display: inline-block">
                          <a
                            href="#"
                            class="my-link_my-link__wIenB jobs-hunter-banners_jobs-hunter-banners__banner__hLDcw"
                          >
                            <img
                              src="../../assets/admin_image/job_image/bdfb88961a314952b17d3465a67daa49_20221008171335.jpg"
                              alt="image"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="ant-col ant-col-xs-24 ant-col-lg-24 css-15rg2km">
            <div
              class="ranking-board-jobs_ranking-board-jobs__oshn7 jobs-hunter-banners_jobs-hunter-banners__ranking__IO9NT"
            >
              <div class="ranking-board-jobs_ranking-board-jobs__title__cbp20">
                <img
                  src="../../assets/admin_image/job_image/congratulation.svg"
                  alt="congratulation"
                />
                <span>Top of headhunter 20/09/2023</span>
              </div>

              <div
                class="ant-table-wrapper ranking-board-jobs_ranking-board-jobs__table__e4PFp css-d5t39c"
              >
                <div class="ant-spin-nested-loading css-d5t39c">
                  <div class="ant-spin-container">
                    <div
                      class="ant-table ant-table-fixed-header ant-table-has-fix-left"
                    >
                      <div class="ant-table-container">
                        <div
                          class="ant-table-body"
                          style="overflow-y: scroll; max-height: 430px"
                        >
                          <table style="table-layout: fixed">
                            <colgroup>
                              <col style="width: 70px" />
                              <col style="width: 72px" />
                            </colgroup>
                            <tbody class="ant-table-tbody">
                              <tr class="ant-table-row ant-table-row-level-0">
                                <td
                                  class="ant-table-cell ant-table-cell-fix-left ant-table-cell-fix-left-last"
                                  style="
                                    text-align: center;
                                    position: sticky;
                                    left: 0px;
                                  "
                                >
                                  <img
                                    src="../../assets/admin_image/job_image/top-1.svg"
                                    alt="image"
                                  />
                                </td>
                                <td
                                  class="ant-table-cell"
                                  style="text-align: center"
                                >
                                  <a
                                    href="#"
                                    class="my-link_my-link__wIenB undefined"
                                  >
                                    <span
                                      style="
                                        width: 40px;
                                        height: 40px;
                                        line-height: 40px;
                                        font-size: 20px;
                                      "
                                      class="ant-avatar ant-avatar-circle ant-avatar-image ant-avatar-icon ranking-board-jobs_ranking-board-jobs__avatar__ALYvV css-d5t39c"
                                    >
                                      <img
                                        src="../../assets/admin_image/job_image/1261c97a7e5149029256ef21a34ab619_20230703073922.jpg"
                                        alt="image"
                                      />
                                    </span>
                                  </a>
                                </td>
                                <td
                                  class="ant-table-cell"
                                  style="text-align: left"
                                >
                                  <a class="my-link_my-link__wIenB undefined">
                                    <div
                                      class="ranking-board-jobs_ranking-board-jobs__record-name__JEcK0"
                                    >
                                      Tieu Vu
                                    </div>
                                    <div
                                      class="ranking-board-jobs_ranking-board-jobs__money__UeQ8X"
                                    >
                                      USD 4,522
                                    </div>
                                  </a>
                                </td>
                              </tr>
                              <tr class="ant-table-row ant-table-row-level-0">
                                <td
                                  class="ant-table-cell ant-table-cell-fix-left ant-table-cell-fix-left-last"
                                  style="
                                    text-align: center;
                                    position: sticky;
                                    left: 0px;
                                  "
                                >
                                  <img
                                    src="../../assets/admin_image/job_image/top-2.svg"
                                    alt="image"
                                  />
                                </td>
                                <td
                                  class="ant-table-cell"
                                  style="text-align: center"
                                >
                                  <a
                                    href="#"
                                    class="my-link_my-link__wIenB undefined"
                                  >
                                    <span
                                      style="
                                        width: 40px;
                                        height: 40px;
                                        line-height: 40px;
                                        font-size: 20px;
                                      "
                                      class="ant-avatar ant-avatar-circle ant-avatar-image ant-avatar-icon ranking-board-jobs_ranking-board-jobs__avatar__ALYvV css-d5t39c"
                                    >
                                      <img
                                        src="../../assets/admin_image/job_image/ava-female.jpeg"
                                        alt="image"
                                      />
                                    </span>
                                  </a>
                                </td>
                                <td
                                  class="ant-table-cell"
                                  style="text-align: left"
                                >
                                  <a class="my-link_my-link__wIenB undefined">
                                    <div
                                      class="ranking-board-jobs_ranking-board-jobs__record-name__JEcK0"
                                    >
                                      Võ Ty
                                    </div>
                                    <div
                                      class="ranking-board-jobs_ranking-board-jobs__money__UeQ8X"
                                    >
                                      USD 3,913
                                    </div>
                                  </a>
                                </td>
                              </tr>
                              <tr class="ant-table-row ant-table-row-level-0">
                                <td
                                  class="ant-table-cell ant-table-cell-fix-left ant-table-cell-fix-left-last"
                                  style="
                                    text-align: center;
                                    position: sticky;
                                    left: 0px;
                                  "
                                >
                                  <img
                                    src="../../assets/admin_image/job_image/top-3.svg"
                                    alt="image"
                                  />
                                </td>
                                <td
                                  class="ant-table-cell"
                                  style="text-align: center"
                                >
                                  <a
                                    href="#"
                                    class="my-link_my-link__wIenB undefined"
                                  >
                                    <span
                                      style="
                                        width: 40px;
                                        height: 40px;
                                        line-height: 40px;
                                        font-size: 20px;
                                      "
                                      class="ant-avatar ant-avatar-circle ant-avatar-image ant-avatar-icon ranking-board-jobs_ranking-board-jobs__avatar__ALYvV css-d5t39c"
                                    >
                                      <img
                                        src="../../assets/admin_image/job_image/1261c97a7e5149029256ef21a34ab619_20230703073922.jpg"
                                        alt="image"
                                      />
                                    </span>
                                  </a>
                                </td>
                                <td
                                  class="ant-table-cell"
                                  style="text-align: left"
                                >
                                  <a class="my-link_my-link__wIenB undefined">
                                    <div
                                      class="ranking-board-jobs_ranking-board-jobs__record-name__JEcK0"
                                    >
                                      Tieu Vu
                                    </div>
                                    <div
                                      class="ranking-board-jobs_ranking-board-jobs__money__UeQ8X"
                                    >
                                      USD 4,522
                                    </div>
                                  </a>
                                </td>
                              </tr>
                              <tr class="ant-table-row ant-table-row-level-0">
                                <td
                                  class="ant-table-cell ant-table-cell-fix-left ant-table-cell-fix-left-last"
                                  style="
                                    text-align: center;
                                    position: sticky;
                                    left: 0px;
                                  "
                                >
                                  <div
                                    class="ranking-board-jobs_ranking-board-jobs__number-job__KejpA"
                                  >
                                    4
                                  </div>
                                </td>
                                <td
                                  class="ant-table-cell"
                                  style="text-align: center"
                                >
                                  <a
                                    href="#"
                                    class="my-link_my-link__wIenB undefined"
                                  >
                                    <span
                                      style="
                                        width: 40px;
                                        height: 40px;
                                        line-height: 40px;
                                        font-size: 20px;
                                      "
                                      class="ant-avatar ant-avatar-circle ant-avatar-image ant-avatar-icon ranking-board-jobs_ranking-board-jobs__avatar__ALYvV css-d5t39c"
                                    >
                                      <img
                                        src="../../assets/admin_image/job_image/1261c97a7e5149029256ef21a34ab619_20230703073922.jpg"
                                        alt="image"
                                      />
                                    </span>
                                  </a>
                                </td>
                                <td
                                  class="ant-table-cell"
                                  style="text-align: left"
                                >
                                  <a class="my-link_my-link__wIenB undefined">
                                    <div
                                      class="ranking-board-jobs_ranking-board-jobs__record-name__JEcK0"
                                    >
                                      Tieu Vu
                                    </div>
                                    <div
                                      class="ranking-board-jobs_ranking-board-jobs__money__UeQ8X"
                                    >
                                      USD 4,522
                                    </div>
                                  </a>
                                </td>
                              </tr>
                              <tr class="ant-table-row ant-table-row-level-0">
                                <td
                                  class="ant-table-cell ant-table-cell-fix-left ant-table-cell-fix-left-last"
                                  style="
                                    text-align: center;
                                    position: sticky;
                                    left: 0px;
                                  "
                                >
                                  <div
                                    class="ranking-board-jobs_ranking-board-jobs__number-job__KejpA"
                                  >
                                    5
                                  </div>
                                </td>
                                <td
                                  class="ant-table-cell"
                                  style="text-align: center"
                                >
                                  <a
                                    href="#"
                                    class="my-link_my-link__wIenB undefined"
                                  >
                                    <span
                                      style="
                                        width: 40px;
                                        height: 40px;
                                        line-height: 40px;
                                        font-size: 20px;
                                      "
                                      class="ant-avatar ant-avatar-circle ant-avatar-image ant-avatar-icon ranking-board-jobs_ranking-board-jobs__avatar__ALYvV css-d5t39c"
                                    >
                                      <img
                                        src="../../assets/admin_image/job_image/1261c97a7e5149029256ef21a34ab619_20230703073922.jpg"
                                        alt="image"
                                      />
                                    </span>
                                  </a>
                                </td>
                                <td
                                  class="ant-table-cell"
                                  style="text-align: left"
                                >
                                  <a class="my-link_my-link__wIenB undefined">
                                    <div
                                      class="ranking-board-jobs_ranking-board-jobs__record-name__JEcK0"
                                    >
                                      Tieu Vu
                                    </div>
                                    <div
                                      class="ranking-board-jobs_ranking-board-jobs__money__UeQ8X"
                                    >
                                      USD 4,522
                                    </div>
                                  </a>
                                </td>
                              </tr>
                              <tr class="ant-table-row ant-table-row-level-0">
                                <td
                                  class="ant-table-cell ant-table-cell-fix-left ant-table-cell-fix-left-last"
                                  style="
                                    text-align: center;
                                    position: sticky;
                                    left: 0px;
                                  "
                                >
                                  <div
                                    class="ranking-board-jobs_ranking-board-jobs__number__IFI9s ranking-board-jobs_ranking-board-jobs__number--your__egvEG"
                                  >
                                    You
                                  </div>
                                </td>
                                <td
                                  class="ant-table-cell"
                                  style="text-align: center"
                                >
                                  <a
                                    href="#"
                                    class="my-link_my-link__wIenB undefined"
                                  >
                                    <span
                                      style="
                                        width: 40px;
                                        height: 40px;
                                        line-height: 40px;
                                        font-size: 20px;
                                      "
                                      class="ant-avatar ant-avatar-circle ant-avatar-image ant-avatar-icon ranking-board-jobs_ranking-board-jobs__avatar__ALYvV css-d5t39c"
                                    >
                                      <img
                                        src="../../assets/admin_image/job_image/1261c97a7e5149029256ef21a34ab619_20230703073922.jpg"
                                        alt="image"
                                      />
                                    </span>
                                  </a>
                                </td>
                                <td
                                  class="ant-table-cell"
                                  style="text-align: left"
                                >
                                  <a class="my-link_my-link__wIenB undefined">
                                    <div
                                      class="ranking-board-jobs_ranking-board-jobs__record-name__JEcK0"
                                    >
                                      Tieu Vu
                                    </div>
                                    <div
                                      class="ranking-board-jobs_ranking-board-jobs__money__UeQ8X"
                                    >
                                      USD 4,522
                                    </div>
                                  </a>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <div
                          class="ant-table-summary ant-table-sticky-holder"
                        ></div>
                      </div>

                      <div class="ant-table-footer">
                        <a class="my-link_my-link__wIenB undefined" href="#">
                          <div
                            class="ranking-board-jobs_ranking-board-jobs__action__Qa1_m"
                          >
                            <button
                              style="width: 60%"
                              class="ant-btn css-d5t39c ant-btn-primary my-button_my-button__8F4rM 1 undefined"
                            >
                              <span>See more</span>
                            </button>
                          </div>
                        </a>
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
  </div>
</template>
<script>
export default {
  data() {
    return {
      dialog_setting: false,
    };
  },
};
</script>
<style scoped>
.layout_layout__elCCi {
  margin-top: calc(64px + 15px);
  margin-bottom: 16px;
  height: -moz-fit-content;
  height: fit-content;
  padding: 0 16px;
}

.ant-input-group-wrapper {
  display: inline-block;
  width: 100%;
  text-align: start;
  vertical-align: top;
}

:where(.css-d5t39c)[class^="ant-input"] [class^="ant-input"],
:where(.css-d5t39c)[class*=" ant-input"] [class^="ant-input"],
:where(.css-d5t39c)[class^="ant-input"] [class*=" ant-input"],
:where(.css-d5t39c)[class*=" ant-input"] [class*=" ant-input"] {
  box-sizing: border-box;
}

.ant-input-group {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  color: rgba(0, 0, 0, 0.88);
  font-size: 14px;
  line-height: 1.5714285714285714;
  list-style: none;
  font-family: Mulish, sans-serif !important;
  position: relative;
  display: table;
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
}

:where(.css-d5t39c).ant-input-affix-wrapper-lg {
  padding: 7px 11px;
  font-size: 16px;
  line-height: 1.5;
  border-radius: 8px;
}

:where(.css-d5t39c)[class^="ant-input"] [class^="ant-input"],
:where(.css-d5t39c)[class*=" ant-input"] [class^="ant-input"],
:where(.css-d5t39c)[class^="ant-input"] [class*=" ant-input"],
:where(.css-d5t39c)[class*=" ant-input"] [class*=" ant-input"] {
  box-sizing: border-box;
}

:where(.css-d5t39c).ant-input-search .ant-input-affix-wrapper {
  border-radius: 0;
}

:where(.css-d5t39c).ant-input-group .ant-input-affix-wrapper:not(:last-child) {
  border-start-end-radius: 0;
  border-end-end-radius: 0;
}

.ant-input-search
  :where(.css-d5t39c).ant-input-group
  .ant-input-affix-wrapper:not(:last-child) {
  border-start-start-radius: 6px;
  border-end-start-radius: 6px;
}

:where(.css-d5t39c).ant-input-affix-wrapper {
  position: relative;
  display: inline-flex;
  width: 100%;
  min-width: 0;
  padding: 4px 11px;
  color: rgba(0, 0, 0, 0.88);
  font-size: 14px;
  line-height: 1.5714285714285714;
  background-color: #ffffff;
  background-image: none;
  border-width: 1px;
  border-style: solid;
  border-color: #d9d9d9;
  border-radius: 6px;
  transition: all 0.2s;
}

:where(.css-d5t39c).ant-input-affix-wrapper-lg {
  padding: 7px 11px;
  font-size: 16px;
  line-height: 1.5;
  border-radius: 8px;
}

:where(.css-d5t39c)[class^="ant-input"] [class^="ant-input"],
:where(.css-d5t39c)[class*=" ant-input"] [class^="ant-input"],
:where(.css-d5t39c)[class^="ant-input"] [class*=" ant-input"],
:where(.css-d5t39c)[class*=" ant-input"] [class*=" ant-input"] {
  box-sizing: border-box;
}

:where(.css-d5t39c).ant-input-search .ant-input-affix-wrapper {
  border-radius: 0;
}

:where(.css-d5t39c).ant-input-group .ant-input-affix-wrapper:not(:last-child) {
  border-start-end-radius: 0;
  border-end-end-radius: 0;
}

.ant-input-search
  :where(.css-d5t39c).ant-input-group
  .ant-input-affix-wrapper:not(:last-child) {
  border-start-start-radius: 6px;
  border-end-start-radius: 6px;
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

:where(.css-d5t39c)[class^="ant-input"] [class^="ant-input"],
:where(.css-d5t39c)[class*=" ant-input"] [class^="ant-input"],
:where(.css-d5t39c)[class^="ant-input"] [class*=" ant-input"],
:where(.css-d5t39c)[class*=" ant-input"] [class*=" ant-input"] {
  box-sizing: border-box;
}

:where(.css-d5t39c).ant-input:placeholder-shown {
  text-overflow: ellipsis;
}

:where(.css-d5t39c).ant-input-group .ant-input {
  width: 100%;
  margin-bottom: 0;
  text-align: inherit;
}

:where(.css-d5t39c).ant-input-search .ant-input-lg {
  line-height: 1.4998;
}

:where(.css-d5t39c).ant-input-affix-wrapper > input.ant-input {
  padding: 0;
  font-size: inherit;
  border: none;
  border-radius: 0;
  outline: none;
}

:where(.css-d5t39c).ant-input-group
  > .ant-input-affix-wrapper:not(:last-child)
  .ant-input {
  border-start-end-radius: 0;
  border-end-end-radius: 0;
}

:where(.css-d5t39c)[class^="ant-input"] [class^="ant-input"],
:where(.css-d5t39c)[class*=" ant-input"] [class^="ant-input"],
:where(.css-d5t39c)[class^="ant-input"] [class*=" ant-input"],
:where(.css-d5t39c)[class*=" ant-input"] [class*=" ant-input"] {
  box-sizing: border-box;
}

:where(.css-d5t39c).ant-input-group .ant-input-group-addon,
:where(.css-d5t39c).ant-input-group .ant-input-group-wrap {
  display: table-cell;
  width: 1px;
  white-space: nowrap;
  vertical-align: middle;
}

:where(.css-d5t39c).ant-input-group .ant-input-group-addon {
  position: relative;
  padding: 0 11px;
  color: rgba(0, 0, 0, 0.88);
  font-weight: normal;
  font-size: 14px;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.02);
  border: 1px solid #d9d9d9;
  border-radius: 6px;
  transition: all 0.3s;
  line-height: 1;
}

:where(.css-d5t39c).ant-input-group-wrapper-lg .ant-input-group-addon {
  border-radius: 8px;
}

:where(.css-d5t39c).ant-input-group .ant-input-group-addon:last-child {
  border-inline-start: 0;
}

:where(.css-d5t39c).ant-input-group > .ant-input:last-child,
:where(.css-d5t39c).ant-input-group .ant-input-group-addon:last-child {
  border-start-start-radius: 0;
  border-end-start-radius: 0;
}

:where(.css-d5t39c).ant-input-search
  > .ant-input-group
  > .ant-input-group-addon:last-child {
  inset-inline-start: -1px;
  padding: 0;
  border: 0;
}

button {
  box-shadow: none !important;
}

button,
select {
  text-transform: none;
}

button,
input {
  overflow: visible;
}

button,
input,
optgroup,
select,
textarea {
  margin: 0;
  color: inherit;
  font-size: inherit;
  font-family: inherit;
  line-height: inherit;
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

:where(.css-d5t39c)[class^="ant-btn"],
:where(.css-d5t39c)[class*=" ant-btn"] {
  font-family: Mulish, sans-serif !important;
  font-size: 14px;
  box-sizing: border-box;
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

:where(.css-d5t39c).ant-btn-primary {
  color: #fff;
  background-color: #1aa94c;
  box-shadow: 0 2px 0 rgba(8, 102, 28, 0.15);
}

[type="reset"],
[type="submit"],
button,
html [type="button"] {
  -webkit-appearance: button;
}

.ant-badge,
.ant-btn,
.ant-col,
.ant-menu,
.ant-radio,
.ant-select,
.ant-space,
.ant-tag,
.ant-typography {
  font-family: Mulish, sans-serif !important;
}

:where(.css-d5t39c)[class^="ant-input"],
:where(.css-d5t39c)[class*=" ant-input"] {
  font-family: Mulish, sans-serif !important;
  font-size: 14px;
  box-sizing: border-box;
}

:where(.css-d5t39c).ant-btn.ant-btn-lg {
  font-size: 16px;
  height: 40px;
  padding: 6.428571428571429px 15px;
  border-radius: 8px;
}

:where(.css-d5t39c)[class^="ant-input"] [class^="ant-input"],
:where(.css-d5t39c)[class*=" ant-input"] [class^="ant-input"],
:where(.css-d5t39c)[class^="ant-input"] [class*=" ant-input"],
:where(.css-d5t39c)[class*=" ant-input"] [class*=" ant-input"] {
  box-sizing: border-box;
}

:where(.css-d5t39c).ant-input-search .ant-input-search-button {
  height: 32px;
}

:where(.css-d5t39c).ant-input-search-large .ant-input-search-button {
  height: 37px;
}

:where(.css-d5t39c).ant-input-search
  > .ant-input-group
  > .ant-input-group-addon:last-child
  .ant-input-search-button {
  padding-top: 0;
  padding-bottom: 0;
  border-start-start-radius: 0;
  border-start-end-radius: 6px;
  border-end-end-radius: 6px;
  border-end-start-radius: 0;
}

span .fa-search {
  font-size: 14px;
}

.ant-form {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  color: rgba(0, 0, 0, 0.88);
  font-size: 14px;
  line-height: 1.5714285714285714;
  list-style: none;
  font-family: Mulish, sans-serif !important;
}

:where(.css-d5t39c).ant-card {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  color: rgba(0, 0, 0, 0.88);
  font-size: 14px;
  line-height: 1.5714285714285714;
  list-style: none;
  font-family: Mulish, sans-serif !important;
  position: relative;
  background: #ffffff;
  border-radius: 8px;
}

.my-box_my-box__99ml1 {
  box-shadow: none !important;
  background: #fff;
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  transition: all 0.2s ease-in;
  border: 1px solid #dee0e3;
}

:where(.css-d5t39c).ant-card:not(.ant-card-bordered) {
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.03),
    0 1px 6px -1px rgba(0, 0, 0, 0.02), 0 2px 4px 0 rgba(0, 0, 0, 0.02);
}

.ant-card-body {
  padding: 12px !important;
}

:where(.css-d5t39c).ant-card .ant-card-body {
  padding: 24px;
  border-radius: 0 0 8px 8px;
}

.my-box_my-box__99ml1 > [class*="ant-card-body"] {
  padding: 15px 20px !important;
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

:where(.css-d5t39c)[class^="ant-row"] [class^="ant-row"],
:where(.css-d5t39c)[class*=" ant-row"] [class^="ant-row"],
:where(.css-d5t39c)[class^="ant-row"] [class*=" ant-row"],
:where(.css-d5t39c)[class*=" ant-row"] [class*=" ant-row"] {
  box-sizing: border-box;
}

:where(.css-d5t39c).ant-row-middle {
  align-items: center;
}

:where(.css-d5t39c).ant-row {
  display: flex;
  flex-flow: row wrap;
  min-width: 0;
}

.jobs-list-filter_jobs-list-filter__setting__LDIiz {
  position: absolute !important;
  right: 0;
  cursor: pointer;
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

.anticon img {
  display: inline-block;
}

.anticon > * {
  line-height: 1;
}

:where(.css-d5t39c).ant-radio-group {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  color: rgba(0, 0, 0, 0.88);
  font-size: 0;
  line-height: 1.5714285714285714;
  list-style: none;
  font-family: Mulish, sans-serif !important;
  display: inline-block;
}

.my-radio-group_my-radio-group__k9hIb {
  display: flex !important;
  gap: 5px !important;
}

:where(.css-d5t39c).ant-radio-button-wrapper {
  position: relative;
  display: inline-block;
  height: 32px;
  margin: 0;
  padding-inline: 15px;
  padding-block: 0;
  color: rgba(0, 0, 0, 0.88);
  font-size: 14px;
  line-height: 30px;
  background: #ffffff;
  border: 1px solid #d9d9d9;
  border-block-start-width: 1.02px;
  border-inline-start-width: 0;
  border-inline-end-width: 1px;
  cursor: pointer;
  transition: color 0.2s, background 0.2s, border-color 0.2s, box-shadow 0.2s;
}

:where(.css-d5t39c).ant-form label {
  font-size: 14px;
}

:where(.css-d5t39c)[class^="ant-radio"] [class^="ant-radio"],
:where(.css-d5t39c)[class*=" ant-radio"] [class^="ant-radio"],
:where(.css-d5t39c)[class^="ant-radio"] [class*=" ant-radio"],
:where(.css-d5t39c)[class*=" ant-radio"] [class*=" ant-radio"] {
  box-sizing: border-box;
}

:where(.css-d5t39c).ant-radio-button-wrapper:first-child {
  border-inline-start: 1px solid #d9d9d9;
  border-start-start-radius: 6px;
  border-end-start-radius: 6px;
}

:where(.css-d5t39c).ant-radio-button-wrapper:last-child {
  border-start-end-radius: 6px;
  border-end-end-radius: 6px;
}

:where(.css-d5t39c).ant-radio-button-wrapper-checked:not(
    .ant-radio-button-wrapper-disabled
  ) {
  z-index: 1;
  color: #1aa94c;
  background: #ffffff;
  border-color: #1aa94c;
}

:where(.css-d5t39c).ant-radio-button-wrapper:first-child:last-child {
  border-radius: 6px;
}

:where(.css-d5t39c).ant-radio-button-wrapper-checked:not(
    .ant-radio-button-wrapper-disabled
  ):first-child {
  border-color: #1aa94c;
}

.jobs-list-filter_jobs-list-filter__radio-group__3oHAo
  .ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled) {
  color: #fff !important;
}

.jobs-list-filter_jobs-list-filter__radio-group__3oHAo
  .ant-radio-button-wrapper-checked:not(
    [class*=" ant-radio-button-wrapper-disabled"]
  ).ant-radio-button-wrapper:first-child {
  background-color: #1aa94c;
}

:where(.css-d5t39c).ant-radio-button-wrapper > .ant-radio-button {
  position: absolute;
  inset-block-start: 0;
  inset-inline-start: 0;
  z-index: -1;
  width: 100%;
  height: 100%;
}

button,
input {
  overflow: visible;
}

button,
input,
optgroup,
select,
textarea {
  margin: 0;
  color: inherit;
  font-size: inherit;
  font-family: inherit;
  line-height: inherit;
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

input[type="checkbox"],
input[type="radio"] {
  box-sizing: border-box;
  padding: 0;
}

:where(.css-d5t39c).ant-form input[type="radio"],
:where(.css-d5t39c).ant-form input[type="checkbox"] {
  line-height: normal;
}

:where(.css-d5t39c)[class^="ant-radio"] [class^="ant-radio"],
:where(.css-d5t39c)[class*=" ant-radio"] [class^="ant-radio"],
:where(.css-d5t39c)[class^="ant-radio"] [class*=" ant-radio"],
:where(.css-d5t39c)[class*=" ant-radio"] [class*=" ant-radio"] {
  box-sizing: border-box;
}

:where(.css-d5t39c).ant-radio-button-wrapper .ant-radio-inner,
:where(.css-d5t39c).ant-radio-button-wrapper input[type="checkbox"],
:where(.css-d5t39c).ant-radio-button-wrapper input[type="radio"] {
  width: 0;
  height: 0;
  opacity: 0;
  pointer-events: none;
}

:where(.css-d5t39c).ant-space {
  display: inline-flex;
}

:where(.css-d5t39c).ant-space-align-center {
  align-items: center;
}

:where(.css-d5t39c).ant-radio-button-wrapper {
  position: relative;
  display: inline-block;
  height: 32px;
  margin: 0;
  padding-inline: 15px;
  padding-block: 0;
  color: rgba(0, 0, 0, 0.88);
  font-size: 14px;
  line-height: 30px;
  background: #ffffff;
  border: 1px solid #d9d9d9;
  border-block-start-width: 1.02px;
  border-inline-start-width: 0;
  border-inline-end-width: 1px;
  cursor: pointer;
  transition: color 0.2s, background 0.2s, border-color 0.2s, box-shadow 0.2s;
}

:where(.css-d5t39c).ant-form label {
  font-size: 14px;
}

:where(.css-d5t39c)[class^="ant-radio"] [class^="ant-radio"],
:where(.css-d5t39c)[class*=" ant-radio"] [class^="ant-radio"],
:where(.css-d5t39c)[class^="ant-radio"] [class*=" ant-radio"],
:where(.css-d5t39c)[class*=" ant-radio"] [class*=" ant-radio"] {
  box-sizing: border-box;
}

:where(.css-d5t39c).ant-radio-button-wrapper:first-child {
  border-inline-start: 1px solid #d9d9d9;
  border-start-start-radius: 6px;
  border-end-start-radius: 6px;
}

:where(.css-d5t39c).ant-radio-button-wrapper:last-child {
  border-start-end-radius: 6px;
  border-end-end-radius: 6px;
}

:where(.css-d5t39c).ant-radio-button-wrapper:first-child:last-child {
  border-radius: 6px;
}

:where(.css-d5t39c)[class^="ant-col"] [class^="ant-col"],
:where(.css-d5t39c)[class*=" ant-col"] [class^="ant-col"],
:where(.css-d5t39c)[class^="ant-col"] [class*=" ant-col"],
:where(.css-d5t39c)[class*=" ant-col"] [class*=" ant-col"] {
  box-sizing: border-box;
}

.my-button_my-button__8F4rM {
  border-radius: 8px !important;
  box-shadow: none !important;
  outline: none !important;
}

:where(.css-d5t39c).ant-btn-default {
  background-color: #ffffff;
  border-color: #d9d9d9;
  box-shadow: 0 2px 0 rgba(0, 0, 0, 0.02);
}

:where(.css-d5t39c).ant-btn:not(.ant-btn-icon-only)
  > .ant-btn-icon.ant-btn-loading-icon,
:where(.css-d5t39c).ant-btn:not(.ant-btn-icon-only)
  > .ant-btn-icon:not(:last-child) {
  margin-inline-end: 8px;
}

:where(.css-d5t39c).ant-btn .ant-btn-icon {
  line-height: 0;
}

.ant-btn-icon .fa-plus {
  font-size: 1rem;
}

:where(.css-d5t39c).ant-radio-button-wrapper:hover {
  position: relative;
  color: #1aa94c;
}

:where(.css-d5t39c).ant-checkbox-group {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  color: rgba(0, 0, 0, 0.88);
  font-size: 14px;
  line-height: 1.5714285714285714;
  list-style: none;
  font-family: Mulish, sans-serif !important;
  display: inline-flex;
  flex-wrap: wrap;
  column-gap: 8px;
}

.ant-checkbox-wrapper >>> .v-input__details {
  display: none;
}

.ant-checkbox-wrapper >>> .v-checkbox .v-selection-control {
  min-height: 40px;
}

.banner-job-sourcing_banner-job-sourcing__FVR7O {
  position: fixed;
  top: 115px;
  right: 0;
  cursor: pointer;
  width: -moz-fit-content;
  width: fit-content;
  height: -moz-fit-content;
  height: fit-content;
  z-index: 100;
  touch-action: none;
}

.banner-job-sourcing_banner-job-sourcing--fixed__SW0NV {
  position: absolute;
  bottom: -32px;
  right: 20%;
  top: unset;
  transition: 0.3s;
}

p {
  margin-top: 0;
  margin-bottom: 1em;
}

.banner-job-sourcing_banner-job-sourcing__FVR7O p {
  color: #fff;
  text-align: center;
  font-size: 0.563rem;
  font-weight: 700;
  pointer-events: none;
  position: absolute;
  top: 25% !important;
  left: 50%;
  transform: translateX(-50%);
}

.banner-job-sourcing_banner-job-sourcing--fixed__SW0NV p {
  font-size: 1rem;
  font-weight: 700;
  bottom: 20px;
  top: 25% !important;
  left: 50%;
}

.banner-job-sourcing_banner-job-sourcing__FVR7O img {
  width: 90px;
  height: auto;
  pointer-events: none;
}

img {
  max-width: 100%;
}

img {
  vertical-align: middle;
  border-style: none;
}

.banner-job-sourcing_banner-job-sourcing--fixed__SW0NV img {
  width: 185px;
}

:where(.css-d5t39c).ant-row {
  display: flex;
  flex-flow: row wrap;
  min-width: 0;
}

:where(.css-d5t39c)[class^="ant-col"],
:where(.css-d5t39c)[class*=" ant-col"] {
  font-family: Mulish, sans-serif !important;
  font-size: 14px;
  box-sizing: border-box;
}

:where(.css-d5t39c).ant-col {
  position: relative;
  max-width: 100%;
  min-height: 1px;
}

:where(.css-d5t39c).ant-col-xs-24 {
  display: block;
  flex: 0 0 100%;
  max-width: 100%;
}

:where(.css-d5t39c).ant-spin-nested-loading {
  position: relative;
}

:where(.css-d5t39c).ant-spin-nested-loading .ant-spin-container {
  position: relative;
  transition: opacity 0.3s;
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

.jobs-hunter-item_jobs-hunter-item__0y902,
.jobs-hunter-item_jobs-hunter-item__0y902:hover {
  color: #000;
}

.jobs-hunter-item_jobs-hunter-item__container__24xQ0 {
  background: #fff;
  position: relative;
  overflow: hidden;
  height: 100%;
  border-radius: 8px;
  padding: 24px 16px 16px;
  transition: all 0.2s ease-in;
  border: 1px solid #dee0e3;
}

.jobs-hunter-item_jobs-hunter-item__container--premium__ktNdE {
  background: linear-gradient(135deg, #faebad, #b9a15d);
}

.premium-locker_premium-locker__Dcgir {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 100%;
  background-color: rgba(34, 34, 34, 0.6);
  z-index: 100;
  display: none;
  justify-content: center;
  align-items: center;
  padding: 0 25px;
  text-align: center;
  color: #fff;
  font-size: 16px;
  font-weight: 700;
  transition: all 0.3s;
}

.jobs-hunter-item_jobs-hunter-item__container__24xQ0:hover {
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

.jobs-hunter-item_jobs-hunter-item__container--lock__Kz_lS:hover
  .jobs-hunter-item_locker__f2FpL {
  display: flex;
}

.urgent-tag_urgent-tag__CJ5hl {
  position: absolute;
  top: 13px;
  left: -24px;
  z-index: 1;
  width: 90px;
  line-height: 14px;
  font-size: 10px;
  text-align: center;
  transform: rotate(-45deg);
}

:where(.css-d5t39c).ant-tag.ant-tag-has-color {
  border-color: transparent;
}

:where(.css-d5t39c).ant-tag.ant-tag-has-color,
:where(.css-d5t39c).ant-tag.ant-tag-has-color a,
:where(.css-d5t39c).ant-tag.ant-tag-has-color a:hover,
:where(.css-d5t39c).ant-tag.ant-tag-has-color .anticon-close,
:where(.css-d5t39c).ant-tag.ant-tag-has-color .anticon-close:hover {
  color: #fff;
}

.jobs-hunter-item_jobs-hunter-item__container__24xQ0 > [class*="ant-row"] {
  height: 100%;
}

:where(.css-d5t39c).ant-col-4 {
  display: block;
  flex: 0 0 16.666666666666664%;
  max-width: 16.666666666666664%;
}

:where(.css-d5t39c).ant-col-20 {
  display: block;
  flex: 0 0 83.33333333333334%;
  max-width: 83.33333333333334%;
}

.bookmark-job_bookmark-job__ISdrZ {
  padding: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.jobs-hunter-item_jobs-hunter-item__bookmark__8xZTE {
  font-size: 18px;
  position: absolute;
  top: -19px;
  right: -2px;
  cursor: pointer;
  color: #000;
}

.bookmark-job_bookmark-job__img__mqBQX {
  font-size: 18px;
  cursor: pointer;
  color: #000;
}

:where(.css-d5t39c).ant-col-xs-24 {
  display: block;
  flex: 0 0 100%;
  max-width: 100%;
}

h5:where(.css-d5t39c).ant-typography,
div:where(.css-d5t39c).ant-typography-h5,
div:where(.css-d5t39c).ant-typography-h5 > textarea,
:where(.css-d5t39c).ant-typography h5 {
  margin-bottom: 0.5em;
  color: rgba(0, 0, 0, 0.88);
  font-weight: 600;
  font-size: 15px;
  line-height: 1.5;
}

.jobs-hunter-item_jobs-hunter-item__info__XMBJQ {
  display: flex;
  flex-direction: column;
}

.jobs-hunter-item_jobs-hunter-item__salary__1K77l {
  align-items: flex-start;
}

.jobs-hunter-item_jobs-hunter-item__info__XMBJQ * {
  font-size: 14px !important;
}

.jobs-hunter-item_jobs-hunter-item__line-text__Sp6RC {
  display: flex;
  flex-direction: row;
  align-items: baseline;
  line-height: 1.2;
  cursor: pointer;
}

h5:where(.css-d5t39c).ant-typography,
div:where(.css-d5t39c).ant-typography-h5,
div:where(.css-d5t39c).ant-typography-h5 > textarea,
:where(.css-d5t39c).ant-typography h5 {
  margin-bottom: 0.5em;
  color: rgba(0, 0, 0, 0.88);
  font-weight: 600;
  font-size: 15px;
  line-height: 1.5;
}

:where(.css-d5t39c).ant-divider-vertical {
  position: relative;
  top: -0.06em;
  display: inline-block;
  height: 0.9em;
  margin: 0 8px;
  vertical-align: middle;
  border-top: 0;
  border-inline-start: 1px solid rgba(5, 5, 5, 0.06);
}

.jobs-hunter-item-bonus_jobs-hunter-item-bonus__container__xauke {
  display: flex;
  flex-direction: row;
  align-items: baseline;
  line-height: 1.2;
}

.jobs-hunter-item-bonus_jobs-hunter-item-bonus__bonus__DqNk_ {
  font-size: 1.25rem;
  font-weight: 700;
}

.jobs-hunter-item_jobs-hunter-item__function__h9pJu {
  justify-content: space-between;
  margin-top: 10px;
}

.jobs-hunter-item_jobs-hunter-item__function-tag__ekbR_,
.jobs-hunter-item_jobs-hunter-item__function__h9pJu {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 5px;
}

.jobs-hunter-item_jobs-hunter-item__function-tag__ekbR_,
.jobs-hunter-item_jobs-hunter-item__function__h9pJu {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 5px;
}

:where(.css-d5t39c)[class^="ant-tag"],
:where(.css-d5t39c)[class*=" ant-tag"] {
  font-family: Mulish, sans-serif !important;
  font-size: 14px;
  box-sizing: border-box;
}

:where(.css-d5t39c).ant-tag {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  color: rgba(0, 0, 0, 0.88);
  font-size: 10px;
  line-height: 20px;
  list-style: none;
  font-family: Mulish, sans-serif !important;
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
  text-align: center;
}

:where(.css-d5t39c).ant-tag,
:where(.css-d5t39c).ant-tag a,
:where(.css-d5t39c).ant-tag a:hover {
  color: rgba(0, 0, 0, 0.88);
}

.ant-tag {
  border-radius: 6px;
}

.ant-badge,
.ant-btn,
.ant-col,
.ant-menu,
.ant-radio,
.ant-select,
.ant-space,
.ant-tag,
.ant-typography {
  font-family: Mulish, sans-serif !important;
}

:where(.css-d5t39c).ant-tag.ant-tag-has-color {
  border-color: transparent;
}

:where(.css-d5t39c).ant-tag.ant-tag-has-color,
:where(.css-d5t39c).ant-tag.ant-tag-has-color a,
:where(.css-d5t39c).ant-tag.ant-tag-has-color a:hover,
:where(.css-d5t39c).ant-tag.ant-tag-has-color .anticon-close,
:where(.css-d5t39c).ant-tag.ant-tag-has-color .anticon-close:hover {
  color: #fff;
}

.jobs-hunter-item_jobs-hunter-item__status__2kJge [class*="ant-tag-has-color"] {
  margin-right: 0;
  font-size: 9.6px;
}

.premium-tag_premium-tag__9UlVq {
  width: -moz-fit-content;
  width: fit-content;
}

.premium-tag_premium-tag__9UlVq [class*="ant-tag"] {
  color: #998a50;
  background: #f6ffed;
  border-color: #998a50;
  margin-right: 0;
}

small {
  font-size: 80%;
}

.jobs-hunter-item_jobs-hunter-item__fast-reply__a2WX8 {
  position: relative;
}

:where(.css-d5t39c).ant-tag-cyan {
  color: #08979c;
  background: #e6fffb;
  border-color: #87e8de;
}

.jobs-hunter-item_jobs-hunter-item__fast-reply__a2WX8 [class*="ant-tag-cyan"] {
  margin-right: 0;
}

.jobs-hunter-item_jobs-hunter-item__refer-btn__7wjau {
  text-decoration: underline;
  font-weight: 700;
}

:where(.css-15rg2km).ant-row {
  display: flex;
  flex-flow: row wrap;
  min-width: 0;
}

:where(.css-d5t39c).ant-carousel {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  color: rgba(0, 0, 0, 0.88);
  font-size: 14px;
  line-height: 1.5714285714285714;
  list-style: none;
  font-family: Mulish, sans-serif !important;
}

:where(.css-d5t39c).ant-carousel .slick-slider {
  position: relative;
  display: block;
  box-sizing: border-box;
  touch-action: pan-y;
  -webkit-touch-callout: none;
  -webkit-tap-highlight-color: transparent;
}

:where(.css-d5t39c).ant-carousel .slick-list {
  position: relative;
  display: block;
  margin: 0;
  padding: 0;
  overflow: hidden;
}

:where(.css-d5t39c).ant-carousel .slick-slider .slick-track,
:where(.css-d5t39c).ant-carousel .slick-slider .slick-list {
  transform: translate3d(0, 0, 0);
  touch-action: pan-y;
}

:where(.css-d5t39c).ant-carousel .slick-slide {
  /* display: none; */
  float: left;
  height: 100%;
  min-height: 1px;
}

:where(.css-d5t39c).ant-carousel .slick-initialized .slick-slide {
  display: block;
}

.jobs-hunter-banners_jobs-hunter-banners__banner__hLDcw {
  border-radius: 0.375rem;
  overflow: hidden;
  display: block;
  width: 100%;
}

.jobs-hunter-banners_jobs-hunter-banners__banner-image__RBVmp {
  width: 100%;
  height: 110px;
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: cover;
}

.ranking-board-jobs_ranking-board-jobs__oshn7 {
  border-radius: 8px;
  border: 1px solid #c3c7f1;
  overflow: hidden;
  background-color: #fff;
}

.ranking-board-jobs_ranking-board-jobs__oshn7 {
  border-radius: 8px;
  border: 1px solid #c3c7f1;
  overflow: hidden;
  background-color: #fff;
}

.ranking-board-jobs_ranking-board-jobs__title__cbp20 img {
  max-width: 43px;
}

.ranking-board-jobs_ranking-board-jobs__title__cbp20 {
  font-size: 20px;
  font-weight: 700;
  color: #0168a6;
  background-color: #dff3ff;
  padding: 8px 25px;
  display: flex;
  align-items: center;
}

:where(.css-d5t39c).ant-table-wrapper {
  clear: both;
  max-width: 100%;
}

:where(.css-d5t39c).ant-spin-nested-loading {
  position: relative;
}

:where(.css-d5t39c).ant-spin-nested-loading .ant-spin-container {
  position: relative;
  transition: opacity 0.3s;
}

:where(.css-d5t39c).ant-table-wrapper .ant-table {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  color: rgba(0, 0, 0, 0.88);
  font-size: 14px;
  line-height: 1.5714285714285714;
  list-style: none;
  font-family: Mulish, sans-serif !important;
  background: #ffffff;
  border-radius: 8px 8px 0 0;
}

:where(.css-d5t39c).ant-table-wrapper table {
  border-radius: 8px 8px 0 0;
  border-collapse: separate;
  border-spacing: 0;
  width: 100%;
  text-align: start;
}

:where(.css-d5t39c).ant-table-wrapper .ant-table-tbody > tr > th,
:where(.css-d5t39c).ant-table-wrapper .ant-table-tbody > tr > td {
  transition: background 0.2s, border-color 0.2s;
  border-bottom: 1px solid #f0f0f0;
}

:where(.css-d5t39c).ant-table-wrapper .ant-table-thead > tr > th,
:where(.css-d5t39c).ant-table-wrapper .ant-table-tbody > tr > th,
:where(.css-d5t39c).ant-table-wrapper .ant-table-tbody > tr > td,
:where(.css-d5t39c).ant-table-wrapper tfoot > tr > th,
:where(.css-d5t39c).ant-table-wrapper tfoot > tr > td {
  position: relative;
  padding: 16px 16px;
  overflow-wrap: break-word;
}

:where(.css-d5t39c).ant-avatar {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  color: #fff;
  font-size: 14px;
  line-height: 30px;
  list-style: none;
  font-family: Mulish, sans-serif !important;
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

.board-jobs_ranking-board-jobs__record-name__JEcK0 {
  font-size: 14px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: rgba(0, 0, 0, 0.6);
}

.ranking-board-jobs_ranking-board-jobs__money__UeQ8X {
  color: #ec6131;
  font-size: 13px;
  font-weight: 700;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
}

.ranking-board-jobs_ranking-board-jobs__number-job__KejpA {
  font-size: 24px;
  font-weight: 400;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: rgba(0, 0, 0, 0.9);
}

.ranking-board-jobs_ranking-board-jobs__number--your__egvEG {
  font-size: 18px;
  color: #1aa94c;
}

:where(.css-d5t39c).ant-table-wrapper .ant-table-footer {
  border-radius: 0 0 8px 8px;
}

:where(.css-d5t39c).ant-table-wrapper .ant-table-footer {
  padding: 16px 16px;
  color: rgba(0, 0, 0, 0.88);
  background: #fafafa;
}

.my-button_my-button__8F4rM {
  border-radius: 8px !important;
  box-shadow: none !important;
  outline: none !important;
}

.ranking-board-jobs_ranking-board-jobs__action__Qa1_m {
  display: flex;
  justify-content: center;
}
:where(.css-d5t39c).ant-input-affix-wrapper:not(
    .ant-input-affix-wrapper-disabled
  ):hover {
  border-color: #1aa94c;
  border-inline-end-width: 1px;
  z-index: 1;
}

.ant-checkbox-wrapper >>> label.v-label.v-label--clickable {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  color: rgba(0, 0, 0, 0.88);
  font-size: 14px;
  line-height: 1.5714285714285714;
  list-style: none;
  font-family: Mulish, sans-serif !important;
  display: inline-flex;
  cursor: pointer;
}
.ant-checkbox-wrapper >>> .v-label {
  opacity: 1;
}
:where(.css-d5t39c).ant-table-wrapper
  .ant-table-tbody
  > tr.ant-table-row:hover
  > th,
:where(.css-d5t39c).ant-table-wrapper
  .ant-table-tbody
  > tr.ant-table-row:hover
  > td,
:where(.css-d5t39c).ant-table-wrapper
  .ant-table-tbody
  > tr
  > th.ant-table-cell-row-hover
  > td.ant-table-cell-row-hover {
  background: #fafafa;
}


.ant-modal-content {
    position: relative;
    background-color: #ffffff;
    background-clip: padding-box;
    border: 0;
    border-radius: 8px;
    box-shadow: 0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 9px 28px 8px rgba(0, 0, 0, 0.05);
    pointer-events: auto;
}

.my-modal_my-modal__ImJnj, .my-modal_my-modal__ImJnj [class=ant-modal-content] {
    border-radius: 8px;
}
.ant-modal-close {
    position: absolute;
    top: 17px;
    inset-inline-end: 17px;
    z-index: 1010;
    padding: 0;
    color: rgba(0, 0, 0, 0.45);
    font-weight: 600;
    line-height: 1;
    text-decoration: none;
    background: transparent;
    border-radius: 4px;
    width: 22px;
    height: 22px;
    border: 0;
    outline: 0;
    cursor: pointer;
    transition: color 0.2s,background-color 0.2s;
}
.ant-modal-close-x {
    display: flex;
    font-size: 16px;
    font-style: normal;
    line-height: 22px;
    justify-content: center;
    text-transform: none;
    text-rendering: auto;
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
.ant-modal-header {
    color: rgba(0, 0, 0, 0.88);
    background: #ffffff;
    border-radius: 8px 8px 0 0;
    margin-bottom: 8px;
}
.my-modal_my-modal__ImJnj [class=ant-modal-header] {
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    padding: 16px 24px;
    border-bottom: 1px solid #f0f0f0;
}
.ant-modal-title {
    margin: 0;
    color: rgba(0, 0, 0, 0.88);
    font-weight: 600;
    font-size: 16px;
    line-height: 1.5;
    word-wrap: break-word;
}
.ant-modal-body {
    font-size: 14px;
    line-height: 1.5714285714285714;
    word-wrap: break-word;
}
:where(.css-d5t39c)[class^="ant-modal"] [class^="ant-modal"], :where(.css-d5t39c)[class*=" ant-modal"] [class^="ant-modal"], :where(.css-d5t39c)[class^="ant-modal"] [class*=" ant-modal"], :where(.css-d5t39c)[class*=" ant-modal"] [class*=" ant-modal"] {
    box-sizing: border-box;
}

.ant-modal-footer {
    text-align: end;
    background: transparent;
    margin-top: 12px;
}
.my-modal_my-modal__ImJnj [class=ant-modal-footer] {
    padding: 16px 24px;
    border-top: 1px solid #f0f0f0;
}
.my-button_my-button__8F4rM {
    border-radius: 8px!important;
    box-shadow: none!important;
    outline: none!important;
}
:where(.css-d5t39c).ant-btn >span {
    display: inline-block;
}
.ant-modal-footer .ant-btn+.ant-btn:not(.ant-dropdown-trigger) {
    margin-bottom: 0;
    margin-inline-start: 8px;
}
.ant-modal-header{
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    padding: 16px 24px;
    border-bottom: 1px solid #f0f0f0;
}
.ant-modal-footer {
    padding: 16px 24px;
    border-top: 1px solid #f0f0f0;
}
.ant-form-vertical .v-input.v-input--horizontal.v-input--center-affix.v-input--density-default.v-locale--is-ltr.v-text-field.v-select.v-select--single{
    margin-top: 8px;

}
@media (min-width: 768px) {
  :where(.css-d5t39c).ant-col-md-12 {
    display: block;
    flex: 0 0 50%;
    max-width: 50%;
  }
}
@media screen and (min-width: 992px) {
  .ant-card-body {
    padding: 24px !important;
  }
  .ant-modal-body{
    padding: 16px 24px!important;
}
.ant-form {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: rgba(0, 0, 0, 0.88);
    font-size: 14px;
    line-height: 1.5714285714285714;
    list-style: none;
    font-family: Mulish,sans-serif!important;
}
  :where(.css-d5t39c).ant-col-lg-2 {
    display: block;
    flex: 0 0 8.333333333333332%;
    max-width: 8.333333333333332%;
  }

  :where(.css-d5t39c).ant-col-lg-22 {
    display: block;
    flex: 0 0 91.66666666666666%;
    max-width: 91.66666666666666%;
  }

  :where(.css-d5t39c).ant-col-lg-18 {
    display: block;
    flex: 0 0 75%;
    max-width: 75%;
  }

  :where(.css-d5t39c).ant-col-lg-6 {
    display: block;
    flex: 0 0 25%;
    max-width: 25%;
  }
}


</style>
