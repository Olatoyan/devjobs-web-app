"use strict";

// DOM Elements
const bodyElement = document.querySelector("body");
const mainSectionElement = document.getElementById("main__section");
const displaySectionElement = document.getElementById("display-section");
const topSectionElement = document.getElementById("top-section");
const loadMoreButton = document.getElementById("load-more");
const companySearchInput = document.getElementById("company-search");
const locationSearchInput = document.getElementById("location-search");
const searchButton = document.getElementById("search-button");
const smallSearchButton = document.querySelector(".small-search");
const errorMsgElement = document.querySelector(".error-msg");
const checkbox = document.getElementById("checkbox");
const checkFullTime = document.querySelector(".check-box");
const fullTImeText = document.querySelector(".check-text");
const check = document.getElementById("check");
const themeBoxElement = document.querySelector(".theme-box");
const inputSectionElement = document.querySelector(".input-section");
const popUp = document.querySelector(".pop-up");
const filterIconElement = document.querySelector(".filter");
const overlayElement = document.querySelector(".overlay");
const smallBoxElement = document.querySelector(".boxx");

// Display Popup and Close Popup Functions
const displayPopup = function () {
  popUp.classList.remove("mid:opacity-0");
  popUp.classList.remove("mid:invisible");
  overlayElement.classList.remove("hidden");
};

const closePopup = function () {
  popUp.classList.add("mid:opacity-0");
  popUp.classList.add("mid:invisible");
  overlayElement.classList.add("hidden");
};

// Change Theme Function
const changeTheme = function (e) {
  // Theme-related DOM Elements
  const jobBoxes = document.querySelectorAll(".job-box");
  const jobTitles = document.querySelectorAll(".job-title");
  const whiteBg = document.querySelectorAll(".white-bg");
  const darkText = document.querySelectorAll(".dark-blue");
  const greyText = document.querySelectorAll(".grey-text");

  if (check.checked) {
    // Apply dark theme
    bodyElement.classList.add("bg-midnight");
    jobBoxes.forEach((jobBox) => jobBox.classList.add("bg-very-dark-blue"));
    jobBoxes.forEach((jobBox) => jobBox.classList.remove("bg-white"));
    jobTitles.forEach((jobTitle) => jobTitle.classList.add("text-white"));
    inputSectionElement.classList.add("bg-very-dark-blue");
    inputSectionElement.classList.remove("bg-white");
    smallBoxElement.classList.add("mid:bg-very-dark-blue");
    smallBoxElement.classList.remove("mid:bg-white");
    companySearchInput.classList.add("bg-very-dark-blue");
    companySearchInput.classList.add("placeholder:text-white");
    companySearchInput.classList.add("text-white");
    locationSearchInput.classList.add("bg-very-dark-blue");
    locationSearchInput.classList.add("placeholder:text-white");
    locationSearchInput.classList.add("text-white");
    checkFullTime.classList.add("bg-white");
    fullTImeText.classList.add("text-white");
    whiteBg.forEach((bg) => bg.classList.add("bg-very-dark-blue"));
    whiteBg.forEach((bg) => bg.classList.remove("bg-white"));
    darkText.forEach((bg) => bg.classList.add("text-white"));
    greyText.forEach((bg) => bg.classList.add("text-grey"));
    filterIconElement.classList.add("fill-white");
    filterIconElement.classList.remove("fill-dark-grey");
  } else {
    // Apply light theme
    bodyElement.classList.remove("bg-midnight");
    jobBoxes.forEach((jobBox) => jobBox.classList.remove("bg-very-dark-blue"));
    jobBoxes.forEach((jobBox) => jobBox.classList.add("bg-white"));
    jobTitles.forEach((jobTitle) => jobTitle.classList.remove("text-white"));
    inputSectionElement.classList.remove("bg-very-dark-blue");
    inputSectionElement.classList.add("bg-white");
    smallBoxElement.classList.add("mid:bg-white");
    smallBoxElement.classList.remove("mid:bg-very-dark-blue");
    companySearchInput.classList.remove("bg-very-dark-blue");
    companySearchInput.classList.remove("placeholder:text-white");
    companySearchInput.classList.remove("text-white");
    locationSearchInput.classList.remove("bg-very-dark-blue");
    locationSearchInput.classList.remove("placeholder:text-white");
    locationSearchInput.classList.remove("text-white");
    checkFullTime.classList.remove("bg-white");
    fullTImeText.classList.remove("text-white");
    whiteBg.forEach((bg) => bg.classList.remove("bg-very-dark-blue"));
    whiteBg.forEach((bg) => bg.classList.add("bg-white"));
    darkText.forEach((bg) => bg.classList.remove("text-white"));
    greyText.forEach((bg) => bg.classList.remove("text-grey"));

    filterIconElement.classList.remove("fill-white");
    filterIconElement.classList.add("fill-dark-grey");
  }
};

// Generate Job HTML
const generateJobHtml = function (data) {
  const html = `
      <div class="bg-white rounded-0.6rem flex flex-col items-start gap-6 p-6 job-box transition-all duration-300">
      <div class="w-20 h-20  rounded-3xl -mt-16 flex items-center justify-center" 
      style="background-color: ${data.logoBackground}">
        <img
        src="${data.logo}"
        alt="${data.company}"
        class=""   
        />
      </div>
        <div class="flex items-center gap-4">
          <p class="text-dark-grey text-1.6rem leading-norm">${data.postedAt}</p>
          <div class="h-2 w-2 bg-dark-grey rounded-full"></div>
          <p class="text-dark-grey text-1.6rem leading-norm">${data.contract}</p>
        </div>
        <h2
          class="text-very-dark-blue text-2rem font-700 leading-norm hover:text-dark-grey cursor-pointer transition-all duration-300 job-title"
        >
          ${data.position}
        </h2>
        <p class="text-dark-grey text-1.6rem leading-norm">${data.company}</p>
        <p class="text-violet text-1.4rem font-700 leading-norm mt-12">
          ${data.location}
        </p>
      </div>
  `;

  mainSectionElement.insertAdjacentHTML("beforeend", html);
};

const generateMoreInfoHtml = function (data) {
  const displayRequirements = data.requirements.items
    .map((item) => {
      return `<li class=" items-start gap-12 text-violet text-1.6rem leading-2.6rem pl-12">
      <span class="text-dark-grey text-1.6rem leading-2.6rem grey-text">${item}</span>
      </li>`;
    })
    .join("");
  const displayRole = data.role.items
    .map((item) => {
      return `<li class="text-violet font-700 text-1.6rem leading-2.6rem pl-12">
      <span class="text-dark-grey font-400 grey-text"
        >${item}</span
      >
    </li>`;
    })
    .join("");

  const html = `
    <section class="pb-32">
      <section class="pb-16">
        <section
          class="flex items-center bg-white max-w-73 mx-auto -mt-16 rounded-0.6rem white-bg transition-all duration-300 mid:flex-col mid:gap-10"
        >
          <div
            class="h-56 w-56 flex items-center justify-center shrink-0 mid:h-24 mid:w-24 mid:-mt-12 mid:rounded-3xl"
            style="background-color: ${data.logoBackground}"
          >
            <img src="${data.logo}" alt="${data.company}" class="w-32 mid:w-20" />
          </div>
          <div class="flex items-center justify-between w-full px-16 mid:flex-col mid:gap-11 mid:pb-12">
            <div class="flex flex-col">
              <h3
                class="text-2.4rem font-700 leading-norm text-very-dark-blue dark-blue transition-all duration-300"
              >
              ${data.company}
              </h3>
              <p class="text-dark-grey text-1.6rem leading-norm">
              ${data.company}.com
              </p>
            </div>
            <a
              href="${data.website}"
              class="text-violet text-1.6rem font-700 leading-norm bg-violet bg-opacity-10 rounded-0.5rem py-6 px-8 transition-all duration-300 hover:bg-opacity-40"
              >Company Site</a
            >
          </div>
        </section>
      </section>

      <section class="max-w-73 mx-auto p-20 bg-white rounded-0.6rem white-bg transition-all duration-300 mid:px-9 sma:px-8">
        <div class="flex items-center justify-between pb-20 mid:flex-col mid:items-stretch mid:gap-20">
          <div class="flex flex-col">
            <div class="flex items-center gap-4">
              <p class="text-dark-grey text-1.6rem leading-norm">
              ${data.postedAt}
              </p>
              <div class="h-2 w-2 bg-dark-grey rounded-full"></div>
              <p class="text-dark-grey text-1.6rem leading-norm">
              ${data.contract}
              </p>
            </div>
            <h2
              class="text-very-dark-blue text-2.8rem font-700 leading-norm dark-blue transition-all duration-300 mid:text-2rem"
            >
            ${data.position}
            </h2>
            <p class="text-violet text-1.4rem font-700 leading-norm">
            ${data.location}
            </p>
          </div>
          <a
            href="${data.apply}"
            class="text-white text-1.6rem font-700 leading-norm py-6 px-11 bg-violet rounded-0.6rem transition-all duration-300 hover:bg-light-violet text-center"
            >Apply Now</a
          >
        </div>
        <div class="pb-16">
          <p class="text-dark-grey text-1.6rem leading-2.6rem grey-text transition-all duration-300">
            ${data.description}
          </p>
        </div>
        <div class="flex flex-col gap-11 pb-20">
          <h4 class="text-very-dark-blue text-2rem font-700 leading-norm dark-blue transition-all duration-300">
            Requirements
          </h4>
          <p class="text-dark-grey text-1.6rem leading-2.6rem grey-text transition-all duration-300">
           ${data.requirements.content}
          </p>
          <ul class="list-disc flex flex-col gap-2">
          ${displayRequirements}
          </ul>
        </div>
        <div class="flex flex-col gap-11">
          <h4 class="text-very-dark-blue text-2rem font-700 leading-norm dark-blue transition-all duration-300">
            What You Will Do
          </h4>
          <p class="text-dark-grey text-1.6rem leading-2.6rem grey-text transition-all duration-300">
            ${data.role.content}
          </p>
          <ol class="list-decimal flex flex-col gap-2">
            ${displayRole}
          </ol>
        </div>
      </section>
    </section>
    <section class="bg-white p-10 white-bg transition-all duration-300">
      <div class="max-w-73 mx-auto">
        <div class="flex items-center justify-between smid:items-stretch">
          <div class="flex flex-col smid:hidden">
            <h2
              class="text-very-dark-blue text-2rem font-700 leading-norm dark-blue transition-all duration-300"
            >
            ${data.position}
            </h2>
            <p class="text-dark-grey text-1.6rem leading-norm">
              ${data.company} Digital Inc.
            </p>
          </div>
          <a
            href="${data.apply}"
            class="text-white text-1.6rem font-700 leading-norm py-6 px-11 bg-violet rounded-0.6rem transition-all duration-300 hover:bg-light-violet text-center smid:w-full"
            >Apply Now</a
          >
        </div>
      </div>
    </section>
  `;

  displaySectionElement.innerHTML = html;
};

let data = [];

// Fetch jobs from data.json
const fetchJobs = async function () {
  const res = await fetch("data.json");
  data = await res.json();

  loadInitialItems();
};

let startIndex = 0;
const initialItemsToShow = 9;
const additionalItemsToShow = 3;

// Load Initial Items
const loadInitialItems = function () {
  mainSectionElement.innerHTML = "";

  for (let i = 0; i < startIndex + initialItemsToShow; i++) {
    if (i >= data.length) {
      loadMoreButton.style.display = "none";
      break;
    }

    const item = data[i];
    generateJobHtml(item);
  }
  startIndex += additionalItemsToShow;

  if (startIndex >= 9) {
    loadMoreButton.style.opacity = "0";
    loadMoreButton.style.visibility = "hidden";
  }

  attachJobTitleClickHandlers();
  changeTheme();
};

// Attach Click Handlers to Job Titles
const attachJobTitleClickHandlers = function () {
  const jobTitles = document.querySelectorAll(".job-title");

  jobTitles.forEach((jobTitle) => {
    jobTitle.addEventListener("click", function (event) {
      const clickedJobTitle = event.target.textContent.trim();
      const matchingJob = data.find((job) =>
        job.position.includes(clickedJobTitle)
      );
      displaySectionElement.classList.remove("hidden");
      topSectionElement.classList.add("hidden");
      generateMoreInfoHtml(matchingJob);
      changeTheme();
    });
  });
};

// Search Results Function
const getSearchResult = function (e) {
  e.preventDefault();
  const name = companySearchInput.value.trim().toLowerCase();
  const location = locationSearchInput.value.trim().toLowerCase();
  const isChecked = checkbox.checked;

  let filteredData = data;

  if (isChecked) {
    filteredData = filteredData.filter((info) =>
      info.contract.toLowerCase().includes("full")
    );
  }

  if (name !== "") {
    filteredData = filteredData.filter(
      (info) =>
        info.company.toLowerCase().includes(name) ||
        info.position.toLowerCase().includes(name)
    );
  }

  if (location !== "") {
    filteredData = filteredData.filter((info) =>
      info.location.toLowerCase().includes(location)
    );
  }

  if (name === "" && location === "" && !isChecked) {
    // If both search fields are empty, display all data
    mainSectionElement.innerHTML = "";
    for (let i = 0; i < initialItemsToShow; i++) {
      const item = filteredData[i];
      generateJobHtml(item);
    }

    // Remove the "hidden" class when there is data
    topSectionElement.classList.remove("hidden");
    errorMsgElement.classList.add("hidden");
    loadMoreButton.classList.remove("opacity-0");
    loadMoreButton.classList.remove("invisible");
    return;
  }
  companySearchInput.value = "";
  locationSearchInput.value = "";
  closePopup();
  displayFilteredResults(filteredData);
  attachJobTitleClickHandlers();
  changeTheme();
};

// Display filtered Results
const displayFilteredResults = function (filteredResults) {
  mainSectionElement.innerHTML = "";
  if (filteredResults.length === 0) {
    errorMsgElement.classList.remove("hidden");
    topSectionElement.classList.add("hidden");
  } else {
    errorMsgElement.classList.add("hidden");
    topSectionElement.classList.remove("hidden");
  }

  if (filteredResults.length < 9) {
    loadMoreButton.classList.add("opacity-0");
    loadMoreButton.classList.add("invisible");
  }

  filteredResults.forEach((data) => generateJobHtml(data));
};

fetchJobs();

// Attach Event Listeners
searchButton.addEventListener("click", getSearchResult);
smallSearchButton.addEventListener("click", getSearchResult);
overlayElement.addEventListener("click", closePopup);
filterIconElement.addEventListener("click", displayPopup);
themeBoxElement.addEventListener("click", changeTheme);
loadMoreButton.addEventListener("click", loadInitialItems);
