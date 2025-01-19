import {
  featuresData,
  logosData,
  guideCardsData,
  reviewsData,
  faqData,
} from "./utils/utils.js";

const featuresCardsContainerEl = document.querySelector(".features-cards-cont");
const logosSection = document.querySelector(".logos-section");
const guideCardsCont = document.querySelector(".guide-cards-cont");
const reviewCardsCont = document.querySelector(".review-cards-cont");
const faqCardsCont = document.querySelector(".faq-cards-cont");

// function to load features cards
function loadFeaturesCards() {
  featuresCardsContainerEl.innerHTML = featuresData
    .map((item) => {
      const { id, name, icon, description } = item;

      return `
          <article class="features-single-card">
              <div>
                <img
                  src="${icon}"
                  alt="${name} not found"
                />
              </div>
  
              <p>${description}</p>
          </article>
      `;
    })
    .join("");
}

// function to load logos
function loadLogos() {
  logosSection.innerHTML = logosData.map((item) => {
    const { name, icon } = item;
    return `
            <div>
                <img src="${icon}" alt="${name} not found" />
            </div>
        `;
  });
}

// function to load guide cards
function loadGuideCards() {
  guideCardsCont.innerHTML = guideCardsData
    .map((item) => {
      const { id, title, text, desktopImage, mobileImage, alt } = item;

      return `
         <article class="guide-single-card">
            <div class="guide-image-cont">
              <picture>
                <source
                  media="(max-width:768px)"
                  srcset="${mobileImage}"
                />
                <source
                  media="(min-width:769px)"
                  srcset="${desktopImage}"
                />
                <img src="${desktopImage}" alt="${alt} not found" />
              </picture>
            </div>

            <div class="guide-info-cont">
              <p class="number">0${id}</p>
              <h2 class="guide-title">${title}</h2>
              <p class="guide-text">${text}</p>

              <button class="apply-btn">
                Apply Now
                <span>
                  <img src="./assets/icons/right-arrow.svg" alt="button image not found" />
                </span>
              </button>
            </div>
          </article>
    `;
    })
    .join("");
}

// function to load review cards
function loadReviewCards() {
  reviewCardsCont.innerHTML = reviewsData
    .map((item) => {
      const { name, review } = item;

      return `
        <article class="review-single-card">
            <div class="stars">
              <div class="star">
                <img src="./assets/icons/star.svg" alt="star not found" />
              </div>
              <div class="star">
                <img src="./assets/icons/star.svg" alt="star not found" />
              </div>
              <div class="star">
                <img src="./assets/icons/star.svg" alt="star not found" />
              </div>
              <div class="star">
                <img src="./assets/icons/star.svg" alt="star not found" />
              </div>
              <div class="star">
                <img src="./assets/icons/star.svg" alt="star not found" />
              </div>
            </div>
            <p class="review-text">
              ${review}
            </p>
            <p class="author">${name}</p>
          </article>
    `;
    })
    .join("");
}

// function to load faqCards
function loadFaqCards() {
  faqCardsCont.innerHTML = faqData
    .map((item) => {
      const { question, status } = item;

      return `
        <article class="faq-single-card">
            <!-- question -->
            <div class="faq-question-card">
              <p>${question}</p>

              <span>
                <img src="${
                  status
                    ? "./assets/icons/tick.svg"
                    : "./assets/icons/cross.svg"
                }" alt="${status ? "tick not found" : "cross not found"}" />
              </span>
            </div>
        </article>
        `;
    })
    .join("");
}

const init = () => {
  loadFeaturesCards();
  loadLogos();
  loadGuideCards();
  loadReviewCards();
  loadFaqCards();
};

// run init function when DOM loads
window.addEventListener("DOMContentLoaded", init);
