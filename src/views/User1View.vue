<template>
    <div>
        <div class="ss-breadcrumb">
            <div class="container">
                <ul class="breadcrumb">
                    <li class="breadcrumb-item">
                        <a href="#">
                            <span>Home</span>
                        </a>
                        <meta itemprop="position" content="1">
                    </li>
                    <li class="breadcrumb-item">
                        <a href="#">Recruiters</a>
                        <meta itemprop="position" content="2">
                    </li>
                    <li class="breadcrumb-item">
                        <a href="#">Tony Nguyen</a>
                        <meta itemprop="position" content="3">
                    </li>
                </ul>
            </div>
        </div>

        <div class="ss">
            <div class="container">
                <div class="recruiter-detail">
                    <div class="recruiter-about">
                        <div class="padding-right-30 recruiter-about__content">
                            <div class="recruiter-item-head">
                                <div class="recruiter-item-avatar">
                                    <a href="#">
                                        <img src="../assets/recruitment/9f754ee5cabf4bd5856c3c240d4b2b87_20221008164508.png"/>
                                    </a>
                                </div>
                                <div class="recruiter-item-detail">
                                    <h1 class="ss-job-header-title__name">
                                        Tony Nguyen
                                    </h1>
                                    <div class="row mb-2">
                                        <div class="col-12">Headhunter | Recruiter</div>
                                        <div class="col-12">
                                            <div class="badge-item">
                                                <div class="badge-item-icon">
                                                    <img src="../assets/recruitment/verified.png"/>
                                                </div>
                                                <span class="badge-item-text">Verified</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="ss-job-benefit-item col-sm-6 col-md-3">
                                            <img src="../assets/recruitment/employee1.svg" class="ss-job__ico" style="margin-bottom: 4px;"/>
                                            <span class="bct-spannes">
                                                <strong>3600</strong>
                                                candidates
                                            </span>
                                        </div>
                                        <div class="ss-job-benefit-item col-sm-6 col-md-3">
                                            <img src="../assets/recruitment/cup.svg" class="ss-job__ico" />
                                            <span class="bct-spannes">
                                                <strong>470</strong>
                                                interviews
                                            </span>
                                        </div>
                                        <div class="ss-job-benefit-item col-sm-6 col-md-3">
                                            <img src="../assets/recruitment/health.svg" class="ss-job__ico" />
                                            <span class="bct-spannes">
                                                <strong>34</strong>
                                                placements
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="recruiter-item-body">
                                <hr class="ss-job-col__left remove-margin"/>
                                <br>
                                <p class="recruiter-item-body__content">
                                    Hi, I joined Recruitery since 10 2019 and currently working as a Recruitment Consultant on Recruitery.

                                    My objective is to help Employers in locating the best candidate by assessing their strengths, skills, proficiency, and personality traits before recommending them to the job.

                                    On the other side, I also assist candidates in their search for suitable employment, as well as in the development of their career path and future, by knowing their goals and abilities.

                                    Feel free to contact me.
                                </p>
                                <div class="row">
                                    <div class="col-sm-12"></div>
                                </div>
                            </div>
                        </div>

                        <div class="recruiter-about__jobchange">
                            <div class=" recruiter-about-contact">
                                <h3 class="recruiter-about-contact-title">
                                    Job Change Assistance:
                                </h3>
                                <p class="recruiter-about-contact-desc">
                                    Send your profile to this experienced headhunter for help in landing a new job or negotiating higher pay
                                </p>
                                <v-btn
                                class="recruiter-about-contact-btn__refer"
                                @click="dialog_contact = true"
                                >
                                Contact Tony Nguyen
                                </v-btn>

                                <v-dialog
                                v-model="dialog_contact"
                                width="800"
                                >
                                <!-- <v-card>
                                    <v-card-text>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    </v-card-text>
                                    <v-card-actions>
                                    <v-btn color="primary" block @click="dialog_contact = false">Close Dialog</v-btn>
                                    </v-card-actions>
                                </v-card> -->
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title ss__get-start-title">Contact Tony Nguyen</h5>
                                            <button @click="dialog_contact = false" class="close" type="button">
                                                <span>×</span>
                                            </button>
                                        </div>
                                        <div class="modal-body submit-cv">
                                            <div>
                                                <form>
                                                    <div class="form-group mb-4">
                                                        <label>
                                                            Resume
                                                            <span class="text-danger ml-2">*</span>
                                                        </label>
                                                        <input class="form-control-file d-none" type="file">
                                                        <div class="submit-cv__form-dragger">
                                                            <img src="../assets/user1/icon-upload.png" alt="image" width="40" height="40"/>
                                                            <span class="submit-cv__form-dragger-text">
                                                                Click or drag file to this area to upload
                                                            </span>
                                                            <span class="submit-cv__form-dragger-desc">
                                                                PDF only (3MB), You can update only 1 CV
                                                            </span>
                                                        </div>
                                                        <v-row>
                                                            <v-col
                                                            cols="12"
                                                            sm="6"
                                                            md="6"
                                                            >
                                                            <v-text-field
                                                                label="First Name"
                                                                placeholder="First Name"
                                                                variant="outlined"
                                                            ></v-text-field>
                                                            </v-col>
                                                            <v-col
                                                            cols="12"
                                                            sm="6"
                                                            md="6"
                                                            >
                                                            <v-text-field
                                                                label="Last Name"
                                                                placeholder="Last Name"
                                                                variant="outlined"
                                                            ></v-text-field>
                                                            </v-col>


                                                        </v-row>
                                                        <v-row>

                                                            <v-col
                                                            cols="12"
                                                            sm="6"
                                                            md="6"
                                                            >
                                                            <v-text-field
                                                                label="Email"
                                                                placeholder="Email"
                                                                variant="outlined"
                                                            ></v-text-field>
                                                            </v-col>

                                                            <v-col
                                                            cols="12"
                                                            sm="6"
                                                            md="6"
                                                            >
                                                            <v-text-field
                                                                label="Phone"
                                                                placeholder="Phone"
                                                                variant="outlined"
                                                            ></v-text-field>
                                                            </v-col>
                                                        </v-row>
                                                        <v-row>

                                                            <v-col
                                                            cols="12"
                                                            sm="6"
                                                            md="6"
                                                            >
                                                            <v-text-field
                                                                label="Desire to work in the area"
                                                                placeholder="Desire to work in the area"
                                                                variant="outlined"
                                                            ></v-text-field>
                                                            </v-col>

                                                            <v-col
                                                            cols="12"
                                                            sm="6"
                                                            md="6"
                                                            >
                                                            <v-text-field
                                                                label="Your job title"
                                                                placeholder="Your job title"
                                                                variant="outlined"
                                                            ></v-text-field>
                                                            </v-col>
                                                        </v-row>
                                                        <v-row>
                                                            <v-col
                                                            cols="12"
                                                            sm="6"
                                                            md="6"
                                                            >
                                                            <v-select
                                                            :items="items_availability"
                                                            density="comfortable"
                                                            label="Availability"
                                                            variant="outlined"
                                                            ></v-select>
                                                            </v-col>

                                                            <v-col
                                                            cols="12"
                                                            sm="6"
                                                            md="6"
                                                            >
                                                            <v-select
                                                            :items="items_type"
                                                            density="comfortable"
                                                            label="Type"
                                                            variant="outlined"
                                                            ></v-select>
                                                            </v-col>
                                                            
                                                        </v-row>
                                                        <v-row class="salary">
                                                            <label>
                                                                Salary expectation (Gross)
                                                                <span class="text-danger ml-2">*</span>
                                                            </label>
                                                        </v-row>
                                                        <v-row class="check-box-negotiable">
                                                            <div class="custom-control custom-checkbox mb-1">
                                                                <v-checkbox label="Negotiable" color="success"></v-checkbox>
                                                            </div>

                                                        </v-row>

                                                        <v-row>
                                                            <div class="col submit-cv__form-salary-input">
                                                                <input class="form-control height-input" >
                                                                <p>$</p>
                                                            </div>
                                                            <div class="col submit-cv__form-salary-input">
                                                                <input class="form-control height-input" >
                                                                <p>$</p>
                                                            </div>
                                                        </v-row>
                                                        <label style="margin-top: 25px">
                                                            Your last Offer letter or Payslip (🛡Secure)
                                                        </label>
                                                        <input class="form-control-file d-none" type="file">
                                                        <div class="submit-cv__form-dragger">
                                                            <img src="../assets/user1/icon-upload.png" alt="image" width="40" height="40"/>
                                                            <span class="submit-cv__form-dragger-text">
                                                                Click or drag file to this area to upload
                                                            </span>
                                                            <span class="submit-cv__form-dragger-desc">
                                                                PDF only (3MB), You can update only 1 CV
                                                            </span>
                                                        </div>
                                                        <v-textarea
                                                        style="margin-top: 25px"
                                                        label="TexIndicate your experience and strengthst"
                                                        variant="outlined"
                                                        ></v-textarea>
                                                        <v-textarea
                                                        label="Other note for headhunter"
                                                        variant="outlined"
                                                        ></v-textarea>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                        <div class="modal-footer">
                                            <button class="btn btn-secondary" @click=" dialog_contact = false">Close</button>
                                            <button class="btn btn-primary">Submit</button>
                                        </div>
                                    </div>
                                </v-dialog>
                               



                                <a href="#" class="recruiter-about-contact-btn__chat">
                                    <img src="../assets/user1/linkedin.png" alt="image"/>
                                    Linkedin
                                </a>
                            </div>
                        </div>
                    </div>
                    <br/>
                    <hr class="ss-job-col__left remove-margin"/>
                    <br/>
                    <div class="recruiter-work">
                        <h2 class="recruiter-work-title">
                            Completed jobs 
                            <span class="recruiter-work-tab-number">(34)</span>
                        </h2>
                        <div class="tab-content">
                            <ul class="recruiter-work-list">
                                <li class="recruiter-work-item">
                                    <div class="recruiter-work-item-date">
                                        07/06/2023 02:16 AM
                                    </div>
                                    <div class="recruiter-work-item-detail">
                                        <img src="../assets/recruitment/health.svg" class="ss-job__ico" />
                                        Placement for 
                                        <b>Performance Marketing Specialist</b>
                                    </div>
                                </li>
                                <li class="recruiter-work-item">
                                    <div class="recruiter-work-item-date">
                                        30/05/2023 06:17 AM
                                    </div>
                                    <div class="recruiter-work-item-detail">
                                        <img src="../assets/recruitment/health.svg" class="ss-job__ico" />
                                        Placement for 
                                        <b>Credit Control Executive</b>
                                    </div>
                                </li>
                                <li class="recruiter-work-item">
                                    <div class="recruiter-work-item-date">
                                        20/05/2023 05:16 AM
                                    </div>
                                    <div class="recruiter-work-item-detail">
                                        <img src="../assets/recruitment/health.svg" class="ss-job__ico" />
                                        Placement for 
                                        <b>Technical Lead</b>
                                    </div>
                                </li>
                                <li class="recruiter-work-item">
                                    <div class="recruiter-work-item-date">
                                        03/04/2023 04:21 AM
                                    </div>
                                    <div class="recruiter-work-item-detail">
                                        <img src="../assets/recruitment/health.svg" class="ss-job__ico" />
                                        Placement for 
                                        <b>Finance Executive (Consolidation) - role 2</b>
                                    </div>
                                </li>
                                <li class="recruiter-work-item">
                                    <div class="recruiter-work-item-date">
                                        13/03/2023 03:20 AM
                                    </div>
                                    <div class="recruiter-work-item-detail">
                                        <img src="../assets/recruitment/health.svg" class="ss-job__ico" />
                                        Placement for 
                                        <b>Endpoint Security Engineer (1-year contractor)</b>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <button class="btn btn-primary" type="button">View More</button>
                    </div>
                    <br/>
                    <div class="recruiter-openning">
                        <h2 class="recruiter-openning-title">
                            Opening jobs
                        </h2>
                        <div class="job-list-wrapper">
                            <div class="row">
                                <div class="job-list-item col-md-6">
                                    <div class="job-list-item-card">
                                        <div class="job-list-item-locker">
                                            <span>This is a Premium Job that is only visible to ones that reach 15 referrals per month</span>
                                        </div>
                                        <div class="job-list-item__recruiter">
                                            <img src="../assets/recruitment/9f754ee5cabf4bd5856c3c240d4b2b87_20221008164508.png"/>
                                        </div>
                                        <div class="job-list-item-detail">
                                            <h3 class="job-list-item-detail-title">
                                                <a href="#">Finance Executive (AP Payments and vendor reconciliation) - role 5</a>
                                            </h3>
                                            <div class="job-list-item-detail-tags">
                                                <span class="tag">Report Writing</span>
                                                <span class="tag">Finance</span>
                                                <span class="tag">Problem Solving</span>
                                                <span class="tag">Communications</span>
                                                <span class="tag">Accounting</span>
                                                <span class="tag">Finance / Accounting</span>
                                            </div>
                                            <div class="job-list-item-detail__flex">
                                                <h3 class="job-list-item-detail__flex-title" style="width: 80px;">
                                                    <small>Location:</small>
                                                </h3>
                                                <h3 class="job-list-item-detail__flex-title">
                                                    <small>Ho Chi Minh</small>
                                                </h3>
                                            </div>
                                            <div class="job-list-item-detail__flex">
                                                <h3 class="job-list-item-detail__flex-title" style="width: 80px;">
                                                    <small>Salary:</small>
                                                </h3>
                                                <h3 class="job-list-item-detail-reward">700 - $1,200</h3>
                                            </div>
                                            <div class="job-list-item-detail__flex">
                                                <div class="job-list-item-detail__flex-title" style="width: 80px;">
                                                    <img class="job-list-item-detail__flex-title-img bg-image-element" alt="image" src="../assets/user1/enterprise.jpg"/>
                                                </div>
                                                <h3 class="job-list-item-detail__flex-title">
                                                    <small>Anonymous</small>
                                                </h3>
                                            </div>
                                        </div>
                                        <a class="tag-urgent" href="#">Urgent</a>
                                        <div class="job-list-item-action">
                                            <a class="job-list-item-viewmore" href="#">View detail</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="job-list-item col-md-6">
                                    <div class="job-list-item-card">
                                        <div class="job-list-item-locker">
                                            <span>This is a Premium Job that is only visible to ones that reach 15 referrals per month</span>
                                        </div>
                                        <div class="job-list-item__recruiter">
                                            <img src="../assets/recruitment/9f754ee5cabf4bd5856c3c240d4b2b87_20221008164508.png"/>
                                        </div>
                                        <div class="job-list-item-detail">
                                            <h3 class="job-list-item-detail-title">
                                                <a href="#">Game Server Developer</a>
                                            </h3>
                                            <div class="job-list-item-detail-tags">
                                                <span class="tag">Server</span>
                                                <span class="tag">Linux</span>
                                                <span class="tag">C++</span>
                                                <span class="tag">Games</span>
                                                <span class="tag">Network Programming</span>
                                                <span class="tag">Developer</span>
                                                <span class="tag">Game</span>
                                            </div>
                                            <div class="job-list-item-detail__flex">
                                                <h3 class="job-list-item-detail__flex-title" style="width: 80px;">
                                                    <small>Location:</small>
                                                </h3>
                                                <h3 class="job-list-item-detail__flex-title">
                                                    <small>Hanoi</small>
                                                </h3>
                                            </div>
                                            <div class="job-list-item-detail__flex">
                                                <h3 class="job-list-item-detail__flex-title" style="width: 80px;">
                                                    <small>Salary:</small>
                                                </h3>
                                                <h3 class="job-list-item-detail-reward">1,800 - $2,500</h3>
                                            </div>
                                            <div class="job-list-item-detail__flex">
                                                <div class="job-list-item-detail__flex-title" style="width: 80px;">
                                                    <img class="job-list-item-detail__flex-title-img bg-image-element" alt="image" src="../assets/user1/e42f676751884e4280e03f446b37eb75_20230704073924.png"/>
                                                </div>
                                                <h3 class="job-list-item-detail__flex-title">
                                                    <small>Golfzon Vietnam</small>
                                                </h3>
                                            </div>
                                        </div>
                                        <a class="tag-urgent" href="#">Urgent</a>
                                        <div class="job-list-item-action">
                                            <a class="job-list-item-viewmore" href="#">View detail</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="job-list-item col-md-6">
                                    <div class="job-list-item-card">
                                        <div class="job-list-item-locker">
                                            <span>This is a Premium Job that is only visible to ones that reach 15 referrals per month</span>
                                        </div>
                                        <div class="job-list-item__recruiter">
                                            <img src="../assets/recruitment/9f754ee5cabf4bd5856c3c240d4b2b87_20221008164508.png"/>
                                        </div>
                                        <div class="job-list-item-detail">
                                            <h3 class="job-list-item-detail-title">
                                                <a href="#">SEO Leader</a>
                                            </h3>
                                            <div class="job-list-item-detail-tags">
                                                <span class="tag">Google Analytics</span>
                                                <span class="tag">Advertising</span>
                                                <span class="tag">SEO</span>
                                                <span class="tag">Leadership Skills</span>
                                                <span class="tag">Teamwork</span>
                                                <span class="tag">Marketing</span>
                                            </div>
                                            <div class="job-list-item-detail__flex">
                                                <h3 class="job-list-item-detail__flex-title" style="width: 80px;">
                                                    <small>Location:</small>
                                                </h3>
                                                <h3 class="job-list-item-detail__flex-title">
                                                    <small>Ho Chi Minh</small>
                                                </h3>
                                            </div>
                                            <div class="job-list-item-detail__flex">
                                                <h3 class="job-list-item-detail__flex-title" style="width: 80px;">
                                                    <small>Salary:</small>
                                                </h3>
                                                <h3 class="job-list-item-detail-reward">1,000 - $2,000</h3>
                                            </div>
                                            <div class="job-list-item-detail__flex">
                                                <div class="job-list-item-detail__flex-title" style="width: 80px;">
                                                    <img class="job-list-item-detail__flex-title-img bg-image-element" alt="image" src="../assets/user1/69e3e29808944e8d818bb1c750642c4a_20230615032622.jpg"/>
                                                </div>
                                                <h3 class="job-list-item-detail__flex-title">
                                                    <small>EDUVATOR</small>
                                                </h3>
                                            </div>
                                        </div>
                                        <a class="tag-urgent" href="#">Urgent</a>
                                        <div class="job-list-item-action">
                                            <a class="job-list-item-viewmore" href="#">View detail</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="job-list-item col-md-6">
                                    <div class="job-list-item-card">
                                        <div class="job-list-item-locker">
                                            <span>This is a Premium Job that is only visible to ones that reach 15 referrals per month</span>
                                        </div>
                                        <div class="job-list-item__recruiter">
                                            <img src="../assets/recruitment/9f754ee5cabf4bd5856c3c240d4b2b87_20221008164508.png"/>
                                        </div>
                                        <div class="job-list-item-detail">
                                            <h3 class="job-list-item-detail-title">
                                                <a href="#">Head of Marketing</a>
                                            </h3>
                                            <div class="job-list-item-detail-tags">
                                                <span class="tag">Budget Planning</span>
                                                <span class="tag">Branding</span>
                                                <span class="tag">Marketing Strategy</span>
                                                <span class="tag">Leadership Skills</span>
                                                <span class="tag">Teamwork</span>
                                                <span class="tag">Advertising</span>
                                                <span class="tag">Manager</span>
                                                <span class="tag">Marketing</span>
                                            </div>
                                            <div class="job-list-item-detail__flex">
                                                <h3 class="job-list-item-detail__flex-title" style="width: 80px;">
                                                    <small>Location:</small>
                                                </h3>
                                                <h3 class="job-list-item-detail__flex-title">
                                                    <small>Ho Chi Minh</small>
                                                </h3>
                                            </div>
                                            <div class="job-list-item-detail__flex">
                                                <h3 class="job-list-item-detail__flex-title" style="width: 80px;">
                                                    <small>Salary:</small>
                                                </h3>
                                                <h3 class="job-list-item-detail-reward">2,900 - $5,400</h3>
                                            </div>
                                            <div class="job-list-item-detail__flex">
                                                <div class="job-list-item-detail__flex-title" style="width: 80px;">
                                                    <img class="job-list-item-detail__flex-title-img bg-image-element" alt="image" src="../assets/user1/69e3e29808944e8d818bb1c750642c4a_20230615032622.jpg"/>
                                                </div>
                                                <h3 class="job-list-item-detail__flex-title">
                                                    <small>EDUVATOR</small>
                                                </h3>
                                            </div>
                                        </div>
                                        <a class="tag-urgent" href="#">Urgent</a>
                                        <div class="job-list-item-action">
                                            <a class="job-list-item-viewmore" href="#">View detail</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="recruiter-joinus">
                            <div class="recruiter-joinus-wrapper">
                                <div class="row">
                                    <div class="recruiter-joinus-item col-sm-12 col-md-6">
                                        <h3 class="recruiter-joinus-item-title">
                                            Are you a Recruiter/Headhunter?
                                        </h3>
                                        <p class="recruiter-joinus-item-intro">
                                            Get access to 2,000+ Headhunting job orders
                                        </p>
                                        <a class="recruiter-joinus-btn">
                                            Join us as A recruiter
                                        </a>
                                    </div>
                                    <div class="recruiter-joinus-item col-sm-12 col-md-6">
                                        <h3 class="recruiter-joinus-item-title">
                                            Are you an Employer?
                                        </h3>
                                        <p class="recruiter-joinus-item-intro">
                                            Thousands of headhunters ready to help you
                                        </p>
                                        <a class="recruiter-joinus-btn" href="#">
                                            Join us as an Employer
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
</template>
<script>
  export default {
    data () {
      return {
        dialog_contact: false,
        items_availability: ['Can get a job now', 'After 1 month', 'After 2 months', 'After 3 months'],
        items_type: ['IT', 'NoneIT']
      }
    },
  }
</script>
<style scoped>
    dl, ol, ul {
        margin-top: 0;
        margin-bottom: 1rem;
    }
    .breadcrumb {
        display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    padding: .75rem 1rem;
    margin-bottom: 1rem;
    list-style: none;
    background-color: #e9ecef;
    border-radius: .25rem;
}
.ss-breadcrumb .breadcrumb {
    background: #fff;
    padding: 15px 0;
    margin-bottom: 0;
}
.breadcrumb-item {
    display: -ms-flexbox;
    display: flex;
}


a {
    color: #007bff;
    text-decoration: none;
    background-color: transparent;
}
a {
    color: #1aa94c;
}
.btn, .carousel, .dropdown-menu li, .nav, .pagination, .panel-title, .panel-title a, .slick-next, .slick-prev, a, button {
    -webkit-transition: all .2s ease-in-out;
    -o-transition: all .2s ease-in-out;
    transition: all .2s ease-in-out;
    cursor: pointer;
}
.ss-breadcrumb .breadcrumb-item>* {
    display: inline-block;
}
.ss-breadcrumb .breadcrumb-item>a {
    margin: 8px 8px;
}
.ss-breadcrumb .breadcrumb-item>* {
    display: inline-block;
}

.breadcrumb-item+.breadcrumb-item {
    padding-left: .5rem;
}
.breadcrumb-item+.breadcrumb-item::before {
    display: inline-block;
    padding-right: .5rem;
    color: #6c757d;
    content: "/";
}
.ss-breadcrumb .breadcrumb-item+.breadcrumb-item::before {
    content: "»";
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    padding-left: 0;
}
.container {
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
}


h1, h2, h3, h4, h5, h6 {
    margin-top: 0;
    margin-bottom: .5rem;
}
.h1, .h2, .h3, .h4, .h5, .h6, h1, h2, h3, h4, h5, h6 {
    margin-bottom: .5rem;
    font-weight: 500;
    line-height: 1.2;
}
.h1, h1 {
    font-size: 2.5rem;
}
h1, h2, h3, h4, h5 {
    font-weight: 800;
}
.ss-section-header {
    color: #333;
    font-size: 2em;
    margin-bottom: 15px;
    display: inline-block;
    vertical-align: top;
}
.row {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px;
}
.col, .col-1, .col-10, .col-11, .col-12, .col-2, .col-3, .col-4, .col-5, .col-6, .col-7, .col-8, .col-9, .col-auto, .col-lg, .col-lg-1, .col-lg-10, .col-lg-11, .col-lg-12, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-lg-auto, .col-md, .col-md-1, .col-md-10, .col-md-11, .col-md-12, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-auto, .col-sm, .col-sm-1, .col-sm-10, .col-sm-11, .col-sm-12, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-auto, .col-xl, .col-xl-1, .col-xl-10, .col-xl-11, .col-xl-12, .col-xl-2, .col-xl-3, .col-xl-4, .col-xl-5, .col-xl-6, .col-xl-7, .col-xl-8, .col-xl-9, .col-xl-auto {
    position: relative;
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
}
.recruiter-about {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    gap: 25px;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
}
.recruiter-about__content {
    width: 100%!important;
}
.recruiter-item-head {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    margin-bottom: 15px;
}
.recruiter-item-avatar {
    width: 100px;
    max-height: 100px;
    height: 100px;
    display: table-cell;
}
.recruiter-item-avatar__img {
    width: 100px;
    height: 100px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}
.recruiter-item-detail {
    margin-bottom: auto;
    display: table-cell;
    padding-left: 20px;
}
.mb-2, .my-2 {
    margin-bottom: .5rem!important;
}
.row {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px;
}
.col-12 {
    -ms-flex: 0 0 100%;
    flex: 0 0 100%;
    max-width: 100%;
}
.badge-item {
    display: -webkit-box!important;
    display: -ms-flexbox!important;
    display: flex!important;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
}
.badge-item-icon {
    display: -webkit-box!important;
    display: -ms-flexbox!important;
    display: flex!important;
    width: 20px;
    height: 20px;
    color: #1aa94c;
}
.badge-item-text {
    line-height: 20px;
    font-weight: 700;
    background-image: -o-linear-gradient(134deg,#ff6f27,#ffc239);
    background-image: linear-gradient(316deg,#ff6f27,#ffc239);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    padding-left: 5px;
    padding-top: 1px;
}
.row {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px;
}
img {
    vertical-align: middle;
    border-style: none;
}
img {
    max-width: 100%;
    /* display: block; */
}
img.ss-job__ico {
    margin-right: 2px;
}
hr {
    box-sizing: content-box;
    height: 0;
    overflow: visible;
}
hr {
    margin-top: 1rem;
    margin-bottom: 1rem;
    border: 0;
    border-top: 1px solid rgba(0,0,0,.1);
}
hr {
    border-top: 2px dashed #e3e3e3;
}
.remove-margin {
    margin-top: 0!important;
    margin-left: 0!important;
    margin-right: 0!important;
    margin-bottom: 0!important;
}
.recruiter-item-body__content {
    white-space: pre-wrap;
}
p {
    margin-top: 0;
    margin-bottom: 1rem;
}
.recruiter-about__jobchange {
    width: 100%!important;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: end;
    -ms-flex-pack: end;
    justify-content: flex-end;
}
.recruiter-about-contact {
    height: -webkit-fit-content;
    height: -moz-fit-content;
    height: fit-content;
    max-width: 100%;
    width: 100%;
    background-color: #fff;
    padding: 15px;
    border: 1px solid #e3e3e3;
    border-radius: 8px;
}
.recruiter-about-contact-title {
    font-size: 1.2em;
    font-weight: 800;
    margin-bottom: 10px;
}
.recruiter-about-contact-btn__refer {
    display: block;
    width: 100%;
    text-align: center;
    font-weight: 700;
    font-size: 13px;
    padding: 10px;
    margin-bottom: 15px;
    border-radius: 4px;
    color: #fff;
    background-color: #1aa94c;
    border-radius: 4px;
    display: inline-block;
    font-weight: 700;
    text-decoration: none;
    color: #fff;
}
.recruiter-about-contact-btn__chat {
    display: block;
    width: 100%;
    text-align: center;
    font-weight: 700;
    font-size: 13px;
    padding: 10px;
    margin-bottom: 15px;
    border-radius: 4px;
    color: #0073b1!important;
    background-color: #fff;
    border: 1px solid #0073b1;
}
.h2, h2 {
    font-size: 2rem;
}
.recruiter-work-tab-number {
    color: #aaa;
    font-size: .8em;
}
.recruiter-work-list {
    height: -webkit-fit-content;
    height: -moz-fit-content;
    height: fit-content;
    list-style: none;
    padding-left: 0;
}
.recruiter-work-item {
    margin-top: 15px;
}
.recruiter-work-item-date {
    color: #999;
}
.recruiter-work-item-detail {
    display: block;
    white-space: nowrap;
    overflow: hidden;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
}
.recruiter-openning {
    margin-top: 30px;
}
.recruiter-openning-title {
    margin-bottom: 30px;
}
.job-list-item {
    margin-bottom: 20px;
}
.job-list-item-card {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    height: 100%;
    border-radius: 4px;
    padding: 20px 16px;
    position: relative;
    border: 1px solid #e3e3e3;
}
.job-list-item-locker {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    border-radius: 4px;
    background-color: rgba(34,34,34,.6);
    z-index: 100;
    display: none;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    padding: 0 25px;
    text-align: center;
    color: #fff;
    font-size: 16px;
    font-weight: 700;
    -webkit-transition: all .3s;
    -o-transition: all .3s;
    transition: all .3s;
}
.job-list-item__recruiter {
    width: 64px;
    height: 64px;
    position: absolute;
}
.job-list-item__recruiter-img {
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: 100%;
}
.job-list-item-detail {
    padding-left: 76px;
    margin-bottom: auto;
}
.job-list-item-detail-title {
    color: #333;
    font-weight: 800;
    font-size: 1.125em;
    line-height: 1.43;
    max-width: calc(100% - 70px);
    display: inline-block;
    margin-bottom: 5px;
}
.job-list-item-detail-title a {
    color: #333;
}
.job-list-item-detail-tags {
    margin-bottom: .2em;
}
.tag {
    background: #f5f6f7;
    border: 1px solid #e3e3e3;
    color: #073d05;
    font-size: 11px;
    font-weight: 500;
    border-radius: .9em;
    padding: 2px 12px;
    white-space: nowrap;
}
.job-list-item-detail-tags .tag {
    display: inline-block;
    margin-bottom: .3em;
}
.job-list-item-detail__flex {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
}
.job-list-item-detail__flex-title {
    margin-bottom: 0!important;
    font-size: 1.175em;
}
.small, small {
    font-size: 80%;
    font-weight: 400;
}
h1, h2, h3, h4, h5 {
    font-weight: 600;
}
.job-list-item-detail-reward {
    font-size: 1.25em;
    color: #333;
    font-weight: 600;
    margin-bottom: 0;
}
.job-list-item-detail__flex-title-img {
    width: 20px;
    height: 20px;
    background-size: contain;
    border-radius: 4px;
    border: 1px solid #eee;
    background-color: #fff;
    background-repeat: no-repeat;
    background-position: center;
}
.job-list-item .tag-urgent {
    position: absolute;
    right: 16px;
    top: 20px;
}
.tag-urgent {
    text-transform: uppercase;
    color: #f5f2f2;
    white-space: nowrap;
    font-size: .625em;
    padding: .3em .9em;
    background: #ff5a5f;
    text-shadow: 1px 1px #f30007;
    border-radius: 14px;
    text-decoration: none;
}
.job-list-item-action {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    padding-left: 76px;
    margin-top: 18px;
}
.job-list-item-viewmore {
    display: inline-block;
    width: 100%;
    text-align: right;
    color: #1aa94c;
    white-space: nowrap;
    font-size: .9em;
    font-weight: 700;
    text-decoration: underline;
}
a:hover {
    text-decoration: underline;
    color: #137d38;
}
.recruiter-joinus-wrapper {
    padding: 32px 30px 32px 32px;
    margin-top: 20px;
    margin-bottom: 50px;
    background-color: #f2f7f2;
    border-radius: 8px;
}
.recruiter-joinus-item {
    margin-top: 15px;
}
.recruiter-joinus-item-title {
    display: block;
}
.recruiter-joinus-item-intro {
    color: #5e6d55;
    font-size: 1em;
    font-weight: 700;
}
.recruiter-joinus-btn {
    display: block;
    width: 100%;
    text-align: center;
    font-weight: 700;
    font-size: 13px;
    padding: 10px;
    margin-bottom: 15px;
    border-radius: 4px;
    display: inline-block;
    width: auto;
    border: 1px solid #1aa94c;
    border-radius: 40px;
    padding-left: 20px;
    padding-right: 20px;
}
.recruiter-about-contact-btn__refer ::v-deep span.v-btn__content {
  color: #fff;
  font-size: 13px;
  font-weight: 600;
  text-transform: none ;
  letter-spacing: 0;
}
.modal-content {
    position: relative;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-direction: column;
    flex-direction: column;
    width: 100%;
    pointer-events: auto;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid rgba(0,0,0,.2);
    border-radius: .3rem;
    outline: 0;
    height: 580px;
}
/* .modal-dialog-scrollable .modal-content {
    max-height: calc(100vh - 1rem);
    overflow: hidden;
} */
.modal-dialog-scrollable .modal-footer, .modal-dialog-scrollable .modal-header {
    -ms-flex-negative: 0;
    flex-shrink: 0;
}
.modal-title {
    margin-bottom: 0;
    line-height: 1.5;
}
.close {
    float: right;
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 1;
    color: #000;
    text-shadow: 0 1px 0 #fff;
    opacity: .5;
}
button.close {
    padding: 0;
    background-color: transparent;
    border: 0;
}
[type=button]:not(:disabled), [type=reset]:not(:disabled), [type=submit]:not(:disabled), button:not(:disabled) {
    cursor: pointer;
}
.modal-header .close {
    padding: 1rem 1rem;
    margin: -1rem -1rem -1rem auto;
}
.modal-dialog-scrollable .modal-body {
    overflow-y: auto;
}
.modal-body {
    position: relative;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
    padding: 1rem;
}
.text-center {
    text-align: center!important;
}
label {
    display: inline-block;
    margin-bottom: .5rem;
}
.text-danger {
    color: #ff5a5f!important;
}
.submit-cv__form-dragger {
    background-color: #e3ffef;
    border: 2px dashed #1aa94c;
    border-radius: 4px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    cursor: pointer;
    padding: 16px 0;
}
.submit-cv__form-dragger-text {
    display: block;
    font-size: 14px;
    font-weight: 700;
    color: #1aa94c;
    padding: 10px 0 5px;
    text-align: center;
}
.submit-cv__form-dragger-desc {
    display: block;
    font-size: 10px;
    font-style: italic;
    color: #1aa94c;
    text-align: center;
}
.mb-2, .my-2 {
    margin-bottom: .5rem!important;
}
.modal-dialog-scrollable .modal-body {
    overflow-y: auto;
}
.modal-content >>> .modal-body.submit-cv {
    overflow-y: auto;
    max-height: 500px;
}
.mb-1, .my-1 {
    margin-bottom: .25rem!important;
}
.custom-control {
    position: relative;
    display: block;
    min-height: 1.5rem;
    padding-left: 1.5rem;
}
.submit-cv__form-salary-input {
    position: relative;
}
.col {
    -ms-flex-preferred-size: 0;
    flex-basis: 0;
    -ms-flex-positive: 1;
    flex-grow: 1;
    min-width: 0;
    max-width: 100%;
}

button, input, optgroup, select, textarea {
    margin: 0;
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
}
button, input {
    overflow: visible;
}
.form-control {
    display: block;
    width: 100%;
    height: calc(1.5em + .75rem + 2px);
    padding: .375rem .75rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: .25rem;
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
}
.submit-cv__form-dragger {
    margin-bottom: 12px;
}
.submit-cv__form-salary input {
    padding-left: 25px;
}
.submit-cv input.height-input {
    height: 35px!important;
    border: 1px solid #aaa;
}
p {
    margin-top: 0;
    margin-bottom: 1rem;
}
.submit-cv__form-salary-input>p {
    position: absolute;
    top: 7px;
    left: 20px;
    opacity: .7;
    pointer-events: none;
}
.custom-control.custom-checkbox.mb-1{
    max-height: 3rem;
    padding-left: 1rem;
}
.salary{
    padding: 12px 12px 0;

}
.check-box-negotiable{
    padding: 0;
}
.v-col-xxl, .v-col-xxl-auto, .v-col-xxl-12, .v-col-xxl-11, .v-col-xxl-10, .v-col-xxl-9, .v-col-xxl-8, .v-col-xxl-7, .v-col-xxl-6, .v-col-xxl-5, .v-col-xxl-4, .v-col-xxl-3, .v-col-xxl-2, .v-col-xxl-1, .v-col-xl, .v-col-xl-auto, .v-col-xl-12, .v-col-xl-11, .v-col-xl-10, .v-col-xl-9, .v-col-xl-8, .v-col-xl-7, .v-col-xl-6, .v-col-xl-5, .v-col-xl-4, .v-col-xl-3, .v-col-xl-2, .v-col-xl-1, .v-col-lg, .v-col-lg-auto, .v-col-lg-12, .v-col-lg-11, .v-col-lg-10, .v-col-lg-9, .v-col-lg-8, .v-col-lg-7, .v-col-lg-6, .v-col-lg-5, .v-col-lg-4, .v-col-lg-3, .v-col-lg-2, .v-col-lg-1, .v-col-md, .v-col-md-auto, .v-col-md-12, .v-col-md-11, .v-col-md-10, .v-col-md-9, .v-col-md-8, .v-col-md-7, .v-col-md-6, .v-col-md-5, .v-col-md-4, .v-col-md-3, .v-col-md-2, .v-col-md-1, .v-col-sm, .v-col-sm-auto, .v-col-sm-12, .v-col-sm-11, .v-col-sm-10, .v-col-sm-9, .v-col-sm-8, .v-col-sm-7, .v-col-sm-6, .v-col-sm-5, .v-col-sm-4, .v-col-sm-3, .v-col-sm-2, .v-col-sm-1, .v-col, .v-col-auto, .v-col-12, .v-col-11, .v-col-10, .v-col-9, .v-col-8, .v-col-7, .v-col-6, .v-col-5, .v-col-4, .v-col-3, .v-col-2, .v-col-1 {
    width: 100%;
    padding: 12px 12px 0;
}
.v-row + .v-row {
    margin-top: 0;
}

.modal-footer {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -ms-flex-align: center;
    align-items: center;
    -ms-flex-pack: end;
    justify-content: flex-end;
    padding: .75rem;
    border-top: 1px solid #dee2e6;
    border-bottom-right-radius: calc(.3rem - 1px);
    border-bottom-left-radius: calc(.3rem - 1px);
}
.modal-dialog-scrollable .modal-footer, .modal-dialog-scrollable .modal-header {
    -ms-flex-negative: 0;
    flex-shrink: 0;
}
.btn-secondary {
    color: #fff;
    background-color: #6c757d;
    border-color: #6c757d;
}
.modal-footer>* {
    margin: .25rem;
}
@media (min-width: 576px){
    .container, .container-sm {
        max-width: 540px;
    }
    .col-sm-12 {
    -ms-flex: 0 0 100%;
    flex: 0 0 100%;
    max-width: 100%;
}
.col-sm-6 {
    -ms-flex: 0 0 50%;
    flex: 0 0 50%;
    max-width: 50%;
}
.col-sm-12 {
    -ms-flex: 0 0 100%;
    flex: 0 0 100%;
    max-width: 100%;
}
.modal-dialog-scrollable .modal-content {
    max-height: calc(100vh - 3.5rem);
}
.modal-dialog {
    margin: 1.75rem auto;
}
}
@media (min-width: 768px){
    .container, .container-md, .container-sm {
        max-width: 720px;
    }
    .col-md-3 {
    -ms-flex: 0 0 25%;
    flex: 0 0 25%;
    max-width: 25%;
}
.col-md-8 {
    -ms-flex: 0 0 66.666667%;
    flex: 0 0 66.666667%;
    max-width: 66.666667%;
}
.col-md-6 {
    -ms-flex: 0 0 50%;
    flex: 0 0 50%;
    max-width: 50%;
}
}
@media (min-width: 992px){
    .container, .container-lg, .container-md, .container-sm {
        max-width: 960px;
    }
    .ss-breadcrumb .breadcrumb {
    padding: 20px 0;
}
.recruiter-about {
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
}
.recruiter-about__content {
    width: 60%!important;
}
.recruiter-about__jobchange {
    width: 40%!important;
}
.recruiter-about-contact {
    max-width: 414px;
}
}

@media (min-width: 1200px){
    .container, .container-lg, .container-md, .container-sm, .container-xl {
        max-width: 1140px;
    }

}

</style>