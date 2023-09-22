<template>
    <div class="footer-v2">
        <div class="footer-v2__container container">
            <div class="footer-v2__grid">
                <div class="footer-v2__grid-item">
                    <div class="footer-v2__grid-item-title">
                        <div class="footer-v2__logo">
                            <img src="../assets/footer/footer-logo-v2.png" alt="Recruitery">
                        </div>
                    </div>
                    <div class="footer-v2__grid-item-list">
                        <label class="footer-v2__grid-item-content">
                            <router-link :to="{name: 'about-us'}" >About us</router-link>
                        </label>
                        <label class="footer-v2__grid-item-content">
                            <a href="#">Join the team</a>
                        </label>
                        <label class="footer-v2__grid-item-content">
                            <a href="#">Blog</a>
                        </label>
                        <label class="footer-v2__grid-item-content footer-v2__grid-item-content-row">
                            <a class="footer-social-item" href="#">
                                <img src="../assets/footer/facebook.svg" width="30" height="30" alt="Facebook"/>
                            </a>
                            <a class="footer-social-item" href="#">
                                <img src="../assets/footer/linkedin.svg" width="30" height="30" alt="linkedin"/>
                            </a>
                            <a class="footer-social-item" href="#">
                                <label class="footer-social-item__cover">
                                    <img src="../assets/footer/mail-icon-2.png" width="30" height="30" alt="Mail"/>
                                </label>
                            </a>
                        </label>
                    </div>



                </div>
                <div class="footer-v2__grid-item">
                    <label class="footer-v2__grid-item-title" style="margin-top: 10px;">
                        Job opportunities
                    </label>
                    <div class="footer-v2__grid-item-list">
                        <label class="footer-v2__grid-item-content">
                            <a href="#">IT/Technology</a>
                        </label>
                        <label class="footer-v2__grid-item-content">
                            <a href="#">Non-IT</a>
                        </label>
                        <label class="footer-v2__grid-item-content">
                            <a href="#">All Jobs</a>
                        </label>
                        <label class="footer-v2__grid-item-content">
                            <a href="#">Recruitment Resources</a>
                        </label>
                    </div>
                </div>
                <div class="footer-v2__grid-item">
                    <label class="footer-v2__grid-item-title" style="margin-top: 10px;">Employers</label>
                    <div class="footer-v2__grid-item-list">
                        <label class="footer-v2__grid-item-content">
                            <a href="#">
                                Contact us
                            </a>
                        </label>
                        <label class="footer-v2__grid-item-content">
                            <router-link :to="{name: 'company'}">
                                Terms of business
                            </router-link>
                        </label>
                        <label class="footer-v2__grid-item-content">
                            <a href="#">
                                Post a job
                            </a>
                        </label>
                        <label class="footer-v2__grid-item-content">
                            <router-link :to="{name: 'agency'}">
                                Recruitment Agencies
                            </router-link>
                        </label>
                        <label class="footer-v2__grid-item-content">
                            <router-link :to="{name: 'hire'}">
                                Talent Directory
                            </router-link>
                        </label>
                    </div>
                </div>

                <div class="footer-v2__grid-item"> 
                    <label class="footer-v2__grid-item-title" style="margin-top: 10px;">
                        Headhunter
                    </label>
                    <div class="footer-v2__grid-item-list">
                        <label class="footer-v2__grid-item-content">
                            <router-link :to="{name: 'recruiter-home'}" >Recruiter Directory</router-link>
                        </label>
                        <label class="footer-v2__grid-item-content">
                            <a href="#">
                                Signup / Login as Headhunter
                            </a>
                        </label>
                        <label class="footer-v2__grid-item-content">
                            <a href="#">
                                Our headhunter community
                            </a>
                        </label>
                        <label class="footer-v2__grid-item-content">
                            <a href="#">Terms of referral</a>
                        </label>
                        <label class="footer-v2__grid-item-content">
                            <a href="#">Q&A</a>
                        </label>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer-v2__contact">
            <div class="footer-v2__contact-container container">
                <div class="footer-v2__contact-text">
                    Email: 
                    <a href="#">hello@recruitery.co</a>
                </div>

                <div class="footer-v2__contact-text--sub">
                    Copyright © 2018-2023
                    <strong >Recruitery</strong>
                    , 
                    <span class="d-block d-sm-inline">
                        All
                        rights reserved.
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
    article, aside, figcaption, figure, footer, header, hgroup, main, nav, section {
        display: block;
    }
.footer-v2 {
    background-color: #0e5135;
    padding: 5rem 0rem 0rem 0rem;
    -webkit-transition: all .3s;
    -o-transition: all .3s;
    transition: all .3s;
    background-image: url(../assets/footer/company-service-texture.png);
    background-size: 100%;
}



.container {
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
}
.container, .container-fluid, .container-lg, .container-md, .container-sm, .container-xl, .container-xxl {
    width: 100%;
    padding-right: calc(1.5rem * .5);
    padding-left: calc(1.5rem * .5);
    margin-right: auto;
    margin-left: auto;
}
@media (min-width: 576px){
    .container, .container-sm {
        max-width: 540px;
    }

}
@media (min-width: 768px){
    .container, .container-md, .container-sm {
        max-width: 720px;
    }

}
@media (min-width: 992px){
    .container, .container-lg, .container-md, .container-sm {
        max-width: 960px;
    }

}
@media (min-width: 1200px){
    .container, .container-lg, .container-md, .container-sm, .container-xl {
        max-width: 1140px;
    }

}
.footer-v2__container {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    padding-bottom: 1.25rem;
}
.footer-v2__grid {
    display: grid;
    grid-template-columns: repeat(4,1fr);
    -webkit-column-gap: 1.25rem;
    -moz-column-gap: 1.25rem;
    column-gap: 1.25rem;
    row-gap: 1.563rem;
}
.footer-v2__grid-item {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
}
.footer-v2__grid-item-title {
    font-family: Mulish,sans-serif!important;
    font-style: normal;
    font-weight: 700;
    font-size: .875rem;
    text-transform: capitalize;
    color: #fff;
    margin-bottom: .938rem;
}

img {
    vertical-align: middle;
    border-style: none;
}
img {
    max-width: 100%;
    /* display: block; */
}
img, svg {
    vertical-align: middle;
}
.footer-v2__logo img {
    height: 2.5rem;
    width: auto;
}
.footer-v2__grid-item-list {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    gap: .625rem;
    list-style-type: none;
    padding-left: 0rem;
}
label {
    display: inline-block;
    margin-bottom: .5rem;
}
label {
    display: inline-block;
}
.footer-v2__grid-item-content {
    font-family: Mulish,sans-serif!important;
    font-style: normal;
    font-weight: 400;
    font-size: .875rem;
    text-transform: capitalize;
    color: rgba(255,255,255,.8);
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
.btn, .carousel, .dropdown-menu li, .nav, .pagination, .panel-title, .panel-title a, .slick-next, .slick-prev, a, button {
    -webkit-transition: all .2s ease-in-out;
    -o-transition: all .2s ease-in-out;
    transition: all .2s ease-in-out;
    cursor: pointer;
}

a {
    text-decoration: none;
}
.footer-v2__grid-item-content a {
    color: rgba(255,255,255,.8);
    text-decoration: none;
}
.footer-social-item {
    margin-right: 5px;
    height: 30px;
    width: 30px;
}
.footer-social-item {
    margin-right: 5px;
    height: 30px;
    width: 30px;
}
.footer-social-item__cover {
    background-color: #a8a8a8;
    border-radius: 6px;
    height: 30px;
    width: 30px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
}
.footer-social-item__cover img {
    width: 21px;
    height: 21px;
}
.footer-v2__grid-item-content {
    font-family: Mulish,sans-serif!important;
    font-style: normal;
    font-weight: 400;
    font-size: .875rem;
    text-transform: capitalize;
    color: rgba(255,255,255,.8);
}
.footer-v2__grid-item-content-row {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
}
.footer-v2__grid-item {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
}
.footer-v2__contact {
    background-color: #0b3e28;
    padding: 1.563rem .313rem 2.5rem .313rem;
    background-image: url(../assets/footer/company-service-texture.png);
    background-size: 100%;
}

.footer-v2__contact-container {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    gap: .625rem;
}
.footer-v2__contact-text {
    font-family: Mulish,sans-serif!important;
    font-style: normal;
    font-weight: 400;
    font-size: .875rem;
    text-align: center;
    color: rgba(255,255,255,.8);
}
.footer-v2__contact-text a {
    color: rgba(255,255,255,.8);
    text-decoration: none;
}
.footer-v2__contact-text--sub {
    font-family: Mulish,sans-serif!important;
    font-style: normal;
    font-weight: 400;
    font-size: .75rem;
    text-align: center;
    text-transform: capitalize;
    color: rgba(255,255,255,.5);
}
b, strong {
    font-weight: bolder;
}
</style>