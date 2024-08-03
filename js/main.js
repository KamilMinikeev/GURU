window.addEventListener("DOMContentLoaded", function () {
  //Sliders

  let swiper = new Swiper(".section-top__slider", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    // loop: true,
    slidesPerView: 4,
    spaceBetween: 20,
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
        loop: false,
      },
      780: {
        slidesPerView: 2,
        spaceBetween: 20,
      },

      1105: {
        slidesPerView: 3,
        spaceBetween: 20,
      },

      1310: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
    },
  });

  //languages

  const selectedLang = document.querySelector(".selected-lang");
  const selectedFlag = document.querySelector("#selected-flag");
  const dropdown = document.querySelector(".language-dropdown");
  const dropdownItems = document.querySelectorAll(".language-dropdown li");
  const closeDropdown = document.querySelector(".close-dropdown");
  const sectionTitle = document.getElementById("section-title");

  const translations = {
    ru: "Рестораны Москвы",
    en: "Restaurants in Moscow",
    es: "Restaurantes en Moscú",
  };

  selectedLang.addEventListener("click", function () {
    toggleDropdown();
  });

  selectedLang.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      toggleDropdown();
    }
  });

  dropdownItems.forEach((item) => {
    if (item !== closeDropdown) {
      // Исключаем крестик из обработки
      item.addEventListener("click", function () {
        changeLanguage(item);
      });

      item.addEventListener("keydown", function (e) {
        if (e.key === "Enter") {
          changeLanguage(item);
        }
      });
    }
  });

  closeDropdown.addEventListener("click", function () {
    dropdown.style.display = "none";
  });

  closeDropdown.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      dropdown.style.display = "none";
    }
  });

  document.addEventListener("click", function (event) {
    if (
      !selectedLang.contains(event.target) &&
      !dropdown.contains(event.target)
    ) {
      dropdown.style.display = "none";
    }
  });

  function toggleDropdown() {
    dropdown.style.display =
      dropdown.style.display === "block" ? "none" : "block";
  }

  function changeLanguage(item) {
    const langCode = item.getAttribute("data-lang");
    const flagSrc = item.querySelector("img").src;

    selectedFlag.src = flagSrc;
    sectionTitle.textContent = translations[langCode];
    dropdown.style.display = "none";
  }
});
