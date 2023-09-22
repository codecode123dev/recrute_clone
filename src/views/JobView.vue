<template>
  <div class="main-job">
    <section class="searcher">
      <div class="container">
        <div class="row">
          <div class="input-group col-12 searcher-input">
            <input
              type="text"
              class="form-control"
              name="search"
              id="txtSearch"
              placeholder="Search job opportunities across Asia..."
              value=""
            />

            <div class="input-group-append searcher-input-btn">
              <a class="btn searcher-input-btn-lookup" href="" id="btnSearch">
                <span href="" class="searcher-input-btn-lookup__txt">
                  <i class="fa-solid fa-magnifying-glass"></i> Search</span
                >
              </a>
            </div>
          </div>

          <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 searcher-suggest">
            <span>Suggest:</span>&nbsp;&nbsp;
            <a
              href="javascript:void(0)"
              onclick="selectKeyword('Reactjs')"
              class="searcher-suggest-item"
              >Reactjs</a
            >
            <a
              href="javascript:void(0)"
              onclick="selectKeyword('Design')"
              class="searcher-suggest-item"
              >Design</a
            >
            <a
              href="javascript:void(0)"
              onclick="selectKeyword('.NET')"
              class="searcher-suggest-item"
              >.NET</a
            >
            <a
              href="javascript:void(0)"
              onclick="selectKeyword('PHP')"
              class="searcher-suggest-item"
              >PHP</a
            >
            <a
              href="javascript:void(0)"
              onclick="selectKeyword('Marketing')"
              class="searcher-suggest-item"
              >Marketing</a
            >
            <a
              href="javascript:void(0)"
              onclick="selectKeyword('Sale')"
              class="searcher-suggest-item"
              >Sale</a
            >

            <a
              href="javascript:void(0)"
              onclick="selectKeyword('Mobile')"
              class="searcher-suggest-item"
              >Mobile</a
            >
          </div>
        </div>

        <div class="row searcher-filter" data-select2-id="11">
          <div
            class="col-lg-3 col-md-3 col-sm-6 col-6 searcher-filter-item searcher-filter-select-multi"
          >
            <select
              class="select2 searcher-filter-select select2-hidden-accessible"
              name="city"
              id="lbLocation"
              data-select2-id="lbLocation"
              tabindex="-1"
              aria-hidden="true"
            >
              <option value="0" data-select2-id="2">All Location</option>
              <option class="dropdown-item" value="1">Ho Chi Minh</option>
              <option class="dropdown-item" value="2">Hanoi</option>
              <option class="dropdown-item" value="1019">Remote</option>
              <option class="dropdown-item" value="1052">India</option>
              <option class="dropdown-item" value="3">Da Nang</option>
              <option class="dropdown-item" value="1010">Singapore</option>
              <option class="dropdown-item" value="1025">Philippines</option>
              <option class="dropdown-item" value="1047">Thua Thien Hue</option>
              <option class="dropdown-item" value="1062">Vietnam</option>
              <option class="dropdown-item" value="1011">Kuala Lumpur</option>
              <option class="dropdown-item" value="1058">South Korea</option>
              <option class="dropdown-item" value="1074">Chennai</option>
              <option class="dropdown-item" value="1075">Bangalore</option>
              <option class="dropdown-item" value="1078">Sri Lanka</option>
              <option class="dropdown-item" value="1020">Binh Duong</option>
              <option class="dropdown-item" value="1048">Indonesia</option>
              <option class="dropdown-item" value="1007">Malaysia</option>
              <option class="dropdown-item" value="1071">Pune</option>
              <option class="dropdown-item" value="1006">Japan</option>
              <option class="dropdown-item" value="1061">
                The United States
              </option>
              <option class="dropdown-item" value="1014">Nha Trang</option>
              <option class="dropdown-item" value="1070">
                United Arab Emirates
              </option>
              <option class="dropdown-item" value="1076">Dubai</option>
              <option class="dropdown-item" value="1081">Da Lat</option>
              <option class="dropdown-item" value="1082">Johor</option>
              <option class="dropdown-item" value="1083">Toronto</option>
            </select>
            <span
              class="select2 select2-container select2-container--default"
              dir="ltr"
              data-select2-id="1"
              style="width: 245px"
            >
              <span class="selection">
                <span
                  class="select2-selection select2-selection--single"
                  role="combobox"
                  aria-haspopup="true"
                  aria-expanded="false"
                  tabindex="0"
                  aria-disabled="false"
                  aria-labelledby="select2-lbLocation-container"
                >
                  <span
                    class="select2-selection__rendered"
                    id="select2-lbLocation-container"
                    role="textbox"
                    aria-readonly="true"
                    title="All Location"
                    >All Location</span
                  >
                  <span class="select2-selection__arrow" role="presentation"
                    ><b role="presentation"></b>
                  </span>
                </span> </span
              ><span class="dropdown-wrapper" aria-hidden="true"> </span>
            </span>
          </div>
          <div
            class="col-lg-3 col-md-3 col-sm-6 col-6 searcher-filter-item searcher-filter-select-multi"
          >
            <select
              id="lbJobType"
              class="select2 searcher-filter-select select2-hidden-accessible"
              name="role"
              data-select2-id="lbJobType"
              tabindex="-1"
              aria-hidden="true"
            >
              <option value="0" selected="" data-select2-id="4">
                All Jobs
              </option>
              <option value="1">IT/Technology</option>
              <option value="2">Non-IT</option></select
            ><span
              class="select2 select2-container select2-container--default"
              dir="ltr"
              data-select2-id="3"
              style="width: 245px"
              ><span class="selection"
                ><span
                  class="select2-selection select2-selection--single"
                  role="combobox"
                  aria-haspopup="true"
                  aria-expanded="false"
                  tabindex="0"
                  aria-disabled="false"
                  aria-labelledby="select2-lbJobType-container"
                  ><span
                    class="select2-selection__rendered"
                    id="select2-lbJobType-container"
                    role="textbox"
                    aria-readonly="true"
                    title="All Jobs"
                    >All Jobs</span
                  ><span class="select2-selection__arrow" role="presentation"
                    ><b role="presentation"></b></span></span></span
              ><span class="dropdown-wrapper" aria-hidden="true"></span
            ></span>
          </div>
          <div
            class="col-lg-3 col-md-3 col-sm-6 col-6 searcher-filter-item"
            data-select2-id="10"
          >
            <select
              id="lbSalaryRange"
              class="select2 searcher-filter-select select2-hidden-accessible"
              name="SalaryRange"
              data-select2-id="lbSalaryRange"
              tabindex="-1"
              aria-hidden="true"
            >
              <option value="" selected="" data-select2-id="6">Salary</option>
              <option
                value="&amp;salaryfrom=0&amp;salaryto=500"
                data-select2-id="17"
              >
                ≤ $500
              </option>
              <option
                value="&amp;salaryfrom=500&amp;salaryto=1000"
                data-select2-id="18"
              >
                $500 - $1000
              </option>
              <option
                value="&amp;salaryfrom=1000&amp;salaryto=1500"
                data-select2-id="19"
              >
                $1000 - $1500
              </option>
              <option
                value="&amp;salaryfrom=1500&amp;salaryto=2000"
                data-select2-id="20"
              >
                $1500 - $2000
              </option>
              <option
                value="&amp;salaryfrom=2000&amp;salaryto=3000"
                data-select2-id="21"
              >
                $2000 - $3000
              </option>
              <option
                value="&amp;salaryfrom=3000&amp;salaryto=0"
                data-select2-id="22"
              >
                ≥ $3000
              </option>
            </select>
            <span
              class="select2 select2-container select2-container--default"
              dir="ltr"
              data-select2-id="1"
              style="width: 245px"
            >
              <span class="selection">
                <span
                  class="select2-selection select2-selection--single"
                  role="combobox"
                  aria-haspopup="true"
                  aria-expanded="false"
                  tabindex="0"
                  aria-disabled="false"
                  aria-labelledby="select2-lbLocation-container"
                >
                  <span
                    class="select2-selection__rendered"
                    id="select2-lbLocation-container"
                    role="textbox"
                    aria-readonly="true"
                    title="Salary"
                    >Salary</span
                  >
                  <span class="select2-selection__arrow" role="presentation"
                    ><b role="presentation"></b>
                  </span>
                </span>
              </span>
              <span class="dropdown-wrapper" aria-hidden="true"> </span>
            </span>
          </div>

          <div class="col-lg-3 col-md-3 col-sm-6 col-6 searcher-filter-item">
            <select
              id="sortBy"
              class="searcher-filter-select select2-hidden-accessible"
              name="sortBy"
              data-select2-id="sortBy"
              tabindex="-1"
              aria-hidden="true"
            >
              <option value="&amp;sort=index&amp;order=desc" disabled="">
                Sorted by:
              </option>
              <option value="" selected="" data-select2-id="8">Default</option>
              <option value="&amp;sort=bonusAmount&amp;order=desc">
                Reward from high to low
              </option>
              <option value="&amp;sort=bonusAmount&amp;order=asc">
                Reward from low to high
              </option>
              <option value="&amp;sort=salaryFrom&amp;order=desc">
                Salary from high to low
              </option>
              <option value="&amp;sort=salaryFrom&amp;order=asc">
                Salary from low to high
              </option></select
            ><span
              class="select2 select2-container select2-container--default"
              dir="ltr"
              data-select2-id="7"
              style="width: 245px"
              ><span class="selection"
                ><span
                  class="select2-selection select2-selection--single"
                  role="combobox"
                  aria-haspopup="true"
                  aria-expanded="false"
                  tabindex="0"
                  aria-disabled="false"
                  aria-labelledby="select2-sortBy-container"
                  ><span
                    class="select2-selection__rendered"
                    id="select2-sortBy-container"
                    role="textbox"
                    aria-readonly="true"
                    title="Default"
                    >Default</span
                  ><span class="select2-selection__arrow" role="presentation"
                    ><b role="presentation"></b></span></span></span
              ><span class="dropdown-wrapper" aria-hidden="true"></span
            ></span>
          </div>
        </div>
      </div>
    </section>
    <!--  -->

    <div class="container2">
      <div class="ss-header">
        <h1 class="ss-title">Referral chances</h1>
      </div>

      <!-- Danh sách công việc -->
      <div class="job-list-wrapper">
        <div class="row">
          <div
            class="job-list-item col-md-6"
            v-for="job in jobsOnCurrentPage"
            :key="job.id"
          >
            <div
              :class="[
                'job-list-item-card',
                { 'job-list-item-card--premium': job.isPremium },
              ]"
            >
              <div class="job-list-item-locker">
                <span
                  >This is a Premium Job that is only visible to ones that reach
                  15 referrals per month</span
                >
              </div>
              <img
                :src="job.logo"
                class="job-list-item-logo"
                :alt="job.title"
                width="64"
                loading="lazy"
              />
              <div class="job-list-item-detail">
                <h2 class="job-list-item-detail-title">
                  <a :href="job.link">{{ job.title }}</a>
                </h2>
                <div class="job-list-item-detail-tags">
                  <span class="tag" v-for="tag in job.tags" :key="tag">{{
                    tag
                  }}</span>
                </div>
                <p class="job-list-item-detail-salary">
                  <span>{{ job.salary }}</span>
                </p>
                <h3 class="job-list-item-detail-reward">
                  Reward {{ job.reward }}/Candidate
                </h3>
              </div>
              <span class="tag-urgent">Urgent</span>
              <div class="job-list-item-action">
                <a
                  class="job-list-item-viewmore"
                  :href="job.link"
                  rel="nofollow"
                  target="_blank"
                  >Refer now</a
                >
              </div>
            </div>
          </div>
        </div>

        <nav class="w-full text-center">
          <ul class="pagination job-list-pagination">
            <li
              v-if="currentPage !== 1"
              :class="{ 'page-item': true, active: currentPage === 1 }"
            >
              <a class="page-link" @click="changePage(1)" href="#">1</a>
            </li>

            <li
              v-for="pageNumber in totalPages"
              :key="pageNumber"
              :class="{ 'page-item': true, active: currentPage === pageNumber }"
            >
              <a class="page-link" @click="changePage(pageNumber)" href="#">{{
                pageNumber
              }}</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      jobs: [
        {
          title: "Outsystem Mobile",
          tags: [
            "OutSystems",
            "React Native",
            "Flutter",
            "Software Development",
          ],
          salary: "Negotiable",
          reward: "$1,304",
          logo: "https://recruitery.co/assets/img/enterprise.jpg",
          link: "https://app.recruitery.co/en/jobs/9446",
          isPremium: true,
        },
        {
          title: "Head of Finance",
          tags: ["SLAs", "SAP", "Coaching", "Management", "Administration"],
          salary: "2,000 - $4,000",
          reward: "$2,261",
          logo: "https://recruitery.co/assets/img/enterprise.jpg",
          link: "https://app.recruitery.co/en/jobs/9500",
          isPremium: false,
        },
        {
          title: "Outsystem Mobile",
          tags: [
            "OutSystems",
            "React Native",
            "Flutter",
            "Software Development",
          ],
          salary: "Negotiable",
          reward: "$1,304",
          logo: "https://recruitery.co/assets/img/enterprise.jpg",
          link: "https://app.recruitery.co/en/jobs/9446",
          isPremium: true,
        },
        {
          title: "Head of Finance",
          tags: ["SLAs", "SAP", "Coaching", "Management", "Administration"],
          salary: "2,000 - $4,000",
          reward: "$2,261",
          logo: "https://recruitery.co/assets/img/enterprise.jpg",
          link: "https://app.recruitery.co/en/jobs/9500",
          isPremium: false,
        },
        {
          title: "Outsystem Mobile",
          tags: [
            "OutSystems",
            "React Native",
            "Flutter",
            "Software Development",
          ],
          salary: "Negotiable",
          reward: "$1,304",
          logo: "https://recruitery.co/assets/img/enterprise.jpg",
          link: "https://app.recruitery.co/en/jobs/9446",
          isPremium: true,
        },
        {
          title: "Head of Finance",
          tags: ["SLAs", "SAP", "Coaching", "Management", "Administration"],
          salary: "2,000 - $4,000",
          reward: "$2,261",
          logo: "https://recruitery.co/assets/img/enterprise.jpg",
          link: "https://app.recruitery.co/en/jobs/9500",
          isPremium: false,
        },
        {
          title: "Outsystem Mobile",
          tags: [
            "OutSystems",
            "React Native",
            "Flutter",
            "Software Development",
          ],
          salary: "Negotiable",
          reward: "$1,304",
          logo: "https://recruitery.co/assets/img/enterprise.jpg",
          link: "https://app.recruitery.co/en/jobs/9446",
          isPremium: true,
        },
        {
          title: "Head of Finance",
          tags: ["SLAs", "SAP", "Coaching", "Management", "Administration"],
          salary: "2,000 - $4,000",
          reward: "$2,261",
          logo: "https://recruitery.co/assets/img/enterprise.jpg",
          link: "https://app.recruitery.co/en/jobs/9500",
          isPremium: false,
        },
        {
          title: "Outsystem Mobile",
          tags: [
            "OutSystems",
            "React Native",
            "Flutter",
            "Software Development",
          ],
          salary: "Negotiable",
          reward: "$1,304",
          logo: "https://recruitery.co/assets/img/enterprise.jpg",
          link: "https://app.recruitery.co/en/jobs/9446",
          isPremium: true,
        },
        {
          title: "Head of Finance",
          tags: ["SLAs", "SAP", "Coaching", "Management", "Administration"],
          salary: "2,000 - $4,000",
          reward: "$2,261",
          logo: "https://recruitery.co/assets/img/enterprise.jpg",
          link: "https://app.recruitery.co/en/jobs/9500",
          isPremium: false,
        },
        {
          title: "Outsystem Mobile",
          tags: [
            "OutSystems",
            "React Native",
            "Flutter",
            "Software Development",
          ],
          salary: "Negotiable",
          reward: "$1,304",
          logo: "https://recruitery.co/assets/img/enterprise.jpg",
          link: "https://app.recruitery.co/en/jobs/9446",
          isPremium: true,
        },
        {
          title: "Head of Finance",
          tags: ["SLAs", "SAP", "Coaching", "Management", "Administration"],
          salary: "2,000 - $4,000",
          reward: "$2,261",
          logo: "https://recruitery.co/assets/img/enterprise.jpg",
          link: "https://app.recruitery.co/en/jobs/9500",
          isPremium: false,
        },
        {
          title: "Outsystem Mobile",
          tags: [
            "OutSystems",
            "React Native",
            "Flutter",
            "Software Development",
          ],
          salary: "Negotiable",
          reward: "$1,304",
          logo: "https://recruitery.co/assets/img/enterprise.jpg",
          link: "https://app.recruitery.co/en/jobs/9446",
          isPremium: true,
        },
        {
          title: "Head of Finance",
          tags: ["SLAs", "SAP", "Coaching", "Management", "Administration"],
          salary: "2,000 - $4,000",
          reward: "$2,261",
          logo: "https://recruitery.co/assets/img/enterprise.jpg",
          link: "https://app.recruitery.co/en/jobs/9500",
          isPremium: false,
        },
        {
          title: "Outsystem Mobile",
          tags: [
            "OutSystems",
            "React Native",
            "Flutter",
            "Software Development",
          ],
          salary: "Negotiable",
          reward: "$1,304",
          logo: "https://recruitery.co/assets/img/enterprise.jpg",
          link: "https://app.recruitery.co/en/jobs/9446",
          isPremium: true,
        },
        {
          title: "Head of Finance",
          tags: ["SLAs", "SAP", "Coaching", "Management", "Administration"],
          salary: "2,000 - $4,000",
          reward: "$2,261",
          logo: "https://recruitery.co/assets/img/enterprise.jpg",
          link: "https://app.recruitery.co/en/jobs/9500",
          isPremium: false,
        },
        {
          title: "Outsystem Mobile",
          tags: [
            "OutSystems",
            "React Native",
            "Flutter",
            "Software Development",
          ],
          salary: "Negotiable",
          reward: "$1,304",
          logo: "https://recruitery.co/assets/img/enterprise.jpg",
          link: "https://app.recruitery.co/en/jobs/9446",
          isPremium: true,
        },
        {
          title: "Head of Finance",
          tags: ["SLAs", "SAP", "Coaching", "Management", "Administration"],
          salary: "2,000 - $4,000",
          reward: "$2,261",
          logo: "https://recruitery.co/assets/img/enterprise.jpg",
          link: "https://app.recruitery.co/en/jobs/9500",
          isPremium: false,
        },
        {
          title: "Outsystem Mobile",
          tags: [
            "OutSystems",
            "React Native",
            "Flutter",
            "Software Development",
          ],
          salary: "Negotiable",
          reward: "$1,304",
          logo: "https://recruitery.co/assets/img/enterprise.jpg",
          link: "https://app.recruitery.co/en/jobs/9446",
          isPremium: true,
        },
        {
          title: "Head of Finance",
          tags: ["SLAs", "SAP", "Coaching", "Management", "Administration"],
          salary: "2,000 - $4,000",
          reward: "$2,261",
          logo: "https://recruitery.co/assets/img/enterprise.jpg",
          link: "https://app.recruitery.co/en/jobs/9500",
          isPremium: false,
        },
        {
          title: "Outsystem Mobile",
          tags: [
            "OutSystems",
            "React Native",
            "Flutter",
            "Software Development",
          ],
          salary: "Negotiable",
          reward: "$1,304",
          logo: "https://recruitery.co/assets/img/enterprise.jpg",
          link: "https://app.recruitery.co/en/jobs/9446",
          isPremium: true,
        },
        {
          title: "Head of Finance",
          tags: ["SLAs", "SAP", "Coaching", "Management", "Administration"],
          salary: "2,000 - $4,000",
          reward: "$2,261",
          logo: "https://recruitery.co/assets/img/enterprise.jpg",
          link: "https://app.recruitery.co/en/jobs/9500",
          isPremium: false,
        },
        {
          title: "Outsystem Mobile",
          tags: [
            "OutSystems",
            "React Native",
            "Flutter",
            "Software Development",
          ],
          salary: "Negotiable",
          reward: "$1,304",
          logo: "https://recruitery.co/assets/img/enterprise.jpg",
          link: "https://app.recruitery.co/en/jobs/9446",
          isPremium: true,
        },
        {
          title: "Head of Finance",
          tags: ["SLAs", "SAP", "Coaching", "Management", "Administration"],
          salary: "2,000 - $4,000",
          reward: "$2,261",
          logo: "https://recruitery.co/assets/img/enterprise.jpg",
          link: "https://app.recruitery.co/en/jobs/9500",
          isPremium: false,
        },
        {
          title: "Outsystem Mobile",
          tags: [
            "OutSystems",
            "React Native",
            "Flutter",
            "Software Development",
          ],
          salary: "Negotiable",
          reward: "$1,304",
          logo: "https://recruitery.co/assets/img/enterprise.jpg",
          link: "https://app.recruitery.co/en/jobs/9446",
          isPremium: true,
        },
        {
          title: "Head of Finance",
          tags: ["SLAs", "SAP", "Coaching", "Management", "Administration"],
          salary: "2,000 - $4,000",
          reward: "$2,261",
          logo: "https://recruitery.co/assets/img/enterprise.jpg",
          link: "https://app.recruitery.co/en/jobs/9500",
          isPremium: false,
        },
        {
          title: "Outsystem Mobile",
          tags: [
            "OutSystems",
            "React Native",
            "Flutter",
            "Software Development",
          ],
          salary: "Negotiable",
          reward: "$1,304",
          logo: "https://recruitery.co/assets/img/enterprise.jpg",
          link: "https://app.recruitery.co/en/jobs/9446",
          isPremium: true,
        },
        {
          title: "Head of Finance",
          tags: ["SLAs", "SAP", "Coaching", "Management", "Administration"],
          salary: "2,000 - $4,000",
          reward: "$2,261",
          logo: "https://recruitery.co/assets/img/enterprise.jpg",
          link: "https://app.recruitery.co/en/jobs/9500",
          isPremium: false,
        },
        {
          title: "Outsystem Mobile",
          tags: [
            "OutSystems",
            "React Native",
            "Flutter",
            "Software Development",
          ],
          salary: "Negotiable",
          reward: "$1,304",
          logo: "https://recruitery.co/assets/img/enterprise.jpg",
          link: "https://app.recruitery.co/en/jobs/9446",
          isPremium: true,
        },
        {
          title: "Head of Finance",
          tags: ["SLAs", "SAP", "Coaching", "Management", "Administration"],
          salary: "2,000 - $4,000",
          reward: "$2,261",
          logo: "https://recruitery.co/assets/img/enterprise.jpg",
          link: "https://app.recruitery.co/en/jobs/9500",
          isPremium: false,
        },

        {
          title: "Outsystem Mobile",
          tags: [
            "OutSystems",
            "React Native",
            "Flutter",
            "Software Development",
          ],
          salary: "Negotiable",
          reward: "$1,304",
          logo: "https://recruitery.co/assets/img/enterprise.jpg",
          link: "https://app.recruitery.co/en/jobs/9446",
          isPremium: true,
        },
        {
          title: "Head of Finance",
          tags: ["SLAs", "SAP", "Coaching", "Management", "Administration"],
          salary: "2,000 - $4,000",
          reward: "$2,261",
          logo: "https://recruitery.co/assets/img/enterprise.jpg",
          link: "https://app.recruitery.co/en/jobs/9500",
          isPremium: false,
        },
      ],
      currentPage: 1,
      jobsPerPage: 10,
    };
  },

  computed: {
    totalPages() {
      return Math.ceil(this.jobs.length / this.jobsPerPage);
    },
    jobsOnCurrentPage() {
      const startIndex = (this.currentPage - 1) * this.jobsPerPage;
      const endIndex = startIndex + this.jobsPerPage;
      return this.jobs.slice(startIndex, endIndex);
    },
  },
  methods: {
    changePage(pageNumber) {
      this.currentPage = pageNumber;
    },
  },
};
</script>

<style scoped>
.main-job {
  width: 100%;
}

.container {
  margin-right: auto;
  margin-left: auto;
}

a {
  text-decoration: none;
}
.searcher {
  background: #e7eeef;
  width: 100%;
  height: 300px;
  padding: 50px 0px;
}

.row {
  display: flex;
  flex-wrap: wrap;
}

.input-group {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  width: 100%;
}

.searcher-input {
  height: 65px;
}

.searcher-input .form-control {
  border: none;
  height: 100%;
  font-weight: 300;
}

.form-control {
  width: 86%;
  height: 60px;
  display: block;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-top-left-radius: 0.25rem;
  border-bottom-left-radius: 0.25rem;
}
.searcher-input:click {
  border-color: rgb(34, 230, 0);
}
/*  */

.searcher-input-btn {
  margin-left: 1px;
  height: 100%;
}

.input-group-append {
  display: flex;
}
.input-group-append .btn {
  position: relative;
  z-index: 2;
}
.searcher-input-btn-lookup {
  color: #fff;
  background-color: #1aa94c;
  border-radius: 4px;
  display: inline-block;
  font-weight: 700;
  border-radius: 0 4px 4px 0;
  padding-right: 1.4em;
  padding-left: 1.4em;
  height: 100%;
}
.fa-solid {
  padding: 5px;
}
.btn {
  width: 150px;
  display: inline-block;
  font-weight: 400;
  text-align: center;
  vertical-align: middle;
  padding: 20px 20px;
  font-size: 1rem;
  line-height: 1.5;
  text-decoration: none;
}

/* tesst */
.searcher-filter {
  margin-top: 15px;
  padding: 0 7.5px;
}

.searcher-filter-item {
  margin-top: 15px;
  padding-right: 7.5px;
  padding-left: 7.5px;
}

.searcher-filter-item select {
  height: 40px;
  padding: 0 10px;
}

option {
  font-weight: normal;
  display: block;
  white-space-collapse: collapse;
  text-wrap: nowrap;
  min-height: 1.2em;
  padding: 0px 2px 1px;
}

.searcher-filter-select {
  width: 100% !important;
  background-color: #fff;
  box-sizing: border-box;
  border-radius: 4px;
}
.select2-hidden-accessible {
  border: 0;
  clip: rect(0 0 0 0);

  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
  white-space: nowrap;
}
.dropdown-item {
  display: block;
  width: 100%;
  padding: 0.25rem 1.5rem;
  clear: both;
  font-weight: 400;
  color: #212529;
  text-align: inherit;
  white-space: nowrap;
  background-color: transparent;
  border: 0;
}
.select2-container {
  box-sizing: border-box;
  display: inline-block;
  margin: 0;
  position: relative;
  vertical-align: middle;
}

.searcher-filter-select-multi .select2-container {
  position: relative;
  overflow: hidden;
  width: 100%;
}

.select2-container {
  box-sizing: border-box;
  display: inline-block;
  margin: 0;
  vertical-align: middle;
}

.select2-container--default .select2-selection--single {
  background-color: #fff;
  border: 1px solid #aaa;
  border-radius: 4px;
}

.select2-container .select2-selection--single {
  box-sizing: border-box;
  cursor: pointer;
  display: block;
  height: 28px;
  user-select: none;
}

.searcher-filter .select2-selection--multiple,
.searcher-filter .select2-selection--single {
  height: 40px;
}
.searcher-filter .select2-container--open .select2-selection--single {
  border-color: #1aa94c;
}

.searcher-filter .select2-selection--single .select2-selection__rendered {
  line-height: 40px;
}
.select2-container .select2-selection--single .select2-selection__rendered {
  display: block;
  padding-left: 8px;
  padding-right: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.select2-container--default
  .select2-selection--single
  .select2-selection__arrow {
  height: 26px;
  position: absolute;
  top: 1px;
  right: 1px;
  width: 20px;
}

.searcher-filter .select2-selection__arrow {
  height: 40px !important;
}
/*  */
.searcher-suggest {
  margin-top: 7px;
  max-height: 22px;
  font-weight: 500;
  font-size: 0.85em;
  color: gray;
}

.searcher-suggest-item {
  text-decoration: underline;
  color: #1aa94c;
  margin-right: 10px;
  line-height: 1.8em;
}
/*  seach-option  */

.select2 {
  display: inline-block;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
  background-color: white;
  margin-bottom: 10px;
}

.select2 option {
  text-align: center;
}
.searcher-filter-select {
  display: block;
  transition: all 0.15s ease-in-out;
  padding: 8px 10px;
}
.select2-hidden-accessible select {
  margin-left: 20px;
}
.select2-container--default.select2-container--open
  .select2-selection--single
  .select2-selection__arrow
  b {
  border-color: transparent transparent #888 transparent;
  border-width: 0 4px 5px 4px;
}
.select2-container--default
  .select2-selection--single
  .select2-selection__arrow
  b {
  border-color: #888 transparent transparent transparent;
  border-style: solid;
  border-width: 5px 4px 0 4px;
  height: 0;
  left: 50%;
  margin-left: -4px;
  margin-top: -2px;
  position: absolute;
  top: 50%;
  width: 0;
}
/*  */

.container2 {
  width: 100%;

  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}
.job-list-wrapper {
  width: 82%;

  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}
.ss-header {
  color: #525050;
  margin-bottom: 30px;
  font-size: 10px;
}

.ss-title {
  margin-top: 30px;
  margin-left: 160px;
}

.job-list-item {
  margin-bottom: 20px;
}

.col-md-6 {
  flex: 0 0 50%;
  max-width: 50%;
  position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
}

.job-list-item-card--premium {
  background: linear-gradient(135deg, #faebad, #b9a15d);
}

.job-list-item-card {
  display: flex;
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

.job-list-item-locker {
  text-align: center;
  color: #fff;
  font-size: 16px;
  font-weight: 700;
}

.job-list-item-logo {
  width: 64px;
  position: absolute;
}

.job-list-item-detail {
  padding-left: 76px;
  margin-bottom: auto;
}
.job-list-item-detail-title {
  font-size: 1.125em;
  line-height: 1.43;
}

.job-list-item-detail-title a {
  color: #333;
}

.job-list-item-detail-tags .tag {
  display: inline-block;
  margin-bottom: 3px;
}

.tag {
  background: #f5f6f7;
  border: 1px solid #e3e3e3;
  font-size: 11px;
  font-weight: 500;
  border-radius: 0.9em;
  padding: 2px 12px;
  margin: 2px;
}

.job-list-item-detail-salary {
  font-size: 12px;
  color: #333;
  margin-bottom: 12px;
}

.job-list-item-detail-reward {
  font-size: 1.25em;
  color: #333;
  font-weight: 600;
  margin-bottom: 0;
}
.small {
  font-weight: 400;
}

.job-list-item .tag-urgent {
  position: absolute;
  right: 16px;
  top: 20px;
}

.tag-urgent {
  text-transform: uppercase;
  color: #f5f2f2;
  font-size: 9px;
  padding: 4px 14.4px;
  background: #ff5a5f;
  text-shadow: 1px 1px #f30007;
  border-radius: 14px;
}

.job-list-item-action {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-left: 76px;
  margin-top: 18px;
}

.tag-premium {
  text-transform: uppercase;
  color: #f5f2f2;
  white-space: nowrap;
  font-size: 10px;
  padding: 5px 14.4px;
  color: #998a50;
  background: #f6ffed;
  border-color: #998a50;
  border-radius: 14px;
}

.job-list-item-card--premium .job-list-item-viewmore {
  color: #282828;
}

.job-list-item-card--premium .job-list-item-viewmore {
  color: #282828;
}
.job-list-item-viewmore {
  display: inline-block;
  width: 100%;
  text-align: right;
  color: #1aa94c;
  white-space: nowrap;
  font-size: 14px;
  font-weight: 700;
  text-decoration: underline;
}
/*  */

.text-center {
  text-align: center;
}

.job-list-pagination {
  margin: 0 auto;
  width: fit-content;
  margin-top: 15px;
}

.pagination {
  display: flex;
  padding-left: 0;
  list-style: none;
  border-radius: 0.25rem;
}

.pagination.job-list-pagination li.page-item {
  flex: 1;
  text-align: center;
}

.pagination.job-list-pagination li.page-item a.page-link {
  text-decoration: none;
  color: #333;
  background-color: #fff;
  border: 1px solid #ccc;
  display: block;
  padding: 9px 14px;
}

.pagination.job-list-pagination li.page-item a.page-link:hover {
  background-color: #f0f0f0;
  color: #1aa94c;
}

.pagination.job-list-pagination li.page-item.active a.page-link {
  color: #fff;
  background-color: #1aa94c;
}
</style>
