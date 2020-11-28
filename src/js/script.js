// Change navbar background color on scroll

// Fadein the text input
(function () {
  const header = document.querySelector("header");

  const sectionOneOptions = {
    rootMargin: "-90% 0px 0px 0px"
  };

  const sectionOne = document.querySelector(".hero");
  const sectionOneTitle = document.querySelector(".hero__title");
  const sectionOneSearchBox = document.querySelector(".hero__input");
  const sectionOneSubText = document.querySelector(".hero__text");

  const sectionOneObserver = new IntersectionObserver(function (
    entries,
    sectionOneObserver
  ) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        header.classList.add("nav-scrolled");
      } else {
        header.classList.remove("nav-scrolled");
        sectionOneTitle.classList.add("title-page-loaded");
        sectionOneSearchBox.classList.add("search_box-page-loaded");
        sectionOneSubText.classList.add("sub_text-page-loaded");
      }
    });
  },
  sectionOneOptions);

  sectionOneObserver.observe(sectionOne);
})();

(function () {
  const sectionTwoOptions = {
    threshold: 1
  };

  const sectionTwo = document.querySelector(".service");
  const sectionTwoTitle = document.querySelector(".service__header");
  const sectionTwoCards = document.querySelectorAll(".service__card");

  const sectionTwoObserver = new IntersectionObserver(function (
    entries,
    sectionTwoObserver
  ) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        return;
      } else {
        entry.target.classList.add("service__card--loaded");
      }
    });
  },
  sectionTwoOptions);

  sectionTwoObserver.observe(sectionTwoTitle);
  sectionTwoCards.forEach(card => sectionTwoObserver.observe(card));
})();

// Section Three Fade In
(function () {
  const sectionThreeOptions = {
    threshold: 1
  };

  const sectionThree = document.querySelector(".features");
  const sectionThreeTitle = document.querySelector(".features__header");
  const sectionThreeFeatureCardImages = document.querySelectorAll(
    ".features__card__img"
  );
  const sectionThreeFeatureCardTitles = document.querySelectorAll(
    ".features__card__desc__header"
  );
  const sectionThreeFeatureCardDescs = document.querySelectorAll(
    ".features__card__desc__text"
  );
  const sectionThreeFeatureCardButtons = document.querySelectorAll(
    ".features__card__desc__button"
  );

  const sectionThreeObserver = new IntersectionObserver(function (
    entries,
    sectionThreeObserver
  ) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        return;
      } else {
        entry.target.classList.add("features__component--loaded");
      }
    });
  },
  sectionThreeOptions);

  sectionThreeObserver.observe(sectionThreeTitle);
  sectionThreeFeatureCardImages.forEach(image => {
    sectionThreeObserver.observe(image);
  });
  sectionThreeFeatureCardTitles.forEach(title => {
    sectionThreeObserver.observe(title);
  });

  sectionThreeFeatureCardDescs.forEach(desc => {
    sectionThreeObserver.observe(desc);
  });

  sectionThreeFeatureCardButtons.forEach(button => {
    sectionThreeObserver.observe(button);
  });
})();

// Section Four Fade In
(function () {
  const sectionFourOptions = {
    threshold: 1
  };

  const sectionFour = document.querySelector(".pricing");
  const sectionFourTitle = document.querySelector(".pricing__header");
  const sectionFourPricingCards = document.querySelectorAll(".pricing__card");

  const sectionFourObserver = new IntersectionObserver(function (
    entries,
    sectionFourObserver
  ) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        return;
      } else {
        entry.target.classList.add("pricing__card--loaded");
      }
    });
  },
  sectionFourOptions);

  sectionFourObserver.observe(sectionFourTitle);
  sectionFourPricingCards.forEach(card => {
    sectionFourObserver.observe(card);
  });
})();
