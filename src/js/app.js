// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  "use strict";

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll(".needs-validation");

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener(
      "submit",
      function (event) {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
})();

// ANIMATION
const animationFunc = ({ parentBlock, block, animationName }) => {
  const callback = (entries, block, animationName) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        block.classList.add(animationName);
        return; // if we added the class, exit the function
      }

      // We're not intersecting, so remove the class!
      //   block.classList.remove(animationName);
    });
  };

  const observer = new IntersectionObserver((entries) => callback(entries, block, animationName), {
    root: null,
    rootMargin: "0%",
    threshold: 0.4,
  });

  observer.observe(parentBlock);
};

// animationFunc({
//   parentBlock: document.querySelector(".videoLeftLine"),
//   block: document.querySelector("#videoLeftLine"),
//   animationName: "lineHeightAnimation",
// });

// animationFunc({
//   parentBlock: document.querySelector(".videoTopLine"),
//   block: document.querySelector("#videoTopLine"),
//   animationName: "lineHalfWidthAnimation",
// });

// const block = document.querySelector(".profits-section");
// console.log("block", block);

// // ON SCROLL POSTIONS
let currentY = 0;
const screenSize = window.innerHeight / 2;

const heightFunc = (section, line) => {
  const procent = ((currentY + screenSize - section.offsetTop) * 100) / section.scrollHeight;
  line.style.height = `${procent > 100 ? 100 : procent < 0 ? 0 : procent}%`;

};

const halfWidthFunc = (section, line) => {
  const procent = ((currentY + screenSize - section.offsetTop) * 100) / section.scrollHeight;
  line.style.width = `${procent > 0 ? 50 : 0}%`;
  line.style.transition = ".5s";
};

const widthFunc = (section, line) => {
  const procent = ((currentY + screenSize - section.offsetTop) * 100) / section.scrollHeight;
  line.style.width = `${procent > 0 ? 100 : 0}%`;
  line.style.transition = "1s";
};

document.addEventListener("scroll", (e) => {
  currentY = document.documentElement.scrollTop || document.body.scrollTop;
  heightFunc(document.querySelector(".video-section"), document.querySelector("#videoLeftLine"));
  halfWidthFunc(document.querySelector(".video-section"), document.querySelector("#videoTopLine"));
  widthFunc(document.querySelector(".profits-section"), document.querySelector("#profitTopLine"));
  heightFunc(document.querySelector(".profits-section"), document.querySelector("#profitRightLine"));
  heightFunc(document.querySelector(".benefits-section"), document.querySelector("#benefitsRightLine"));
});
