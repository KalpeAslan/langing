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

// ON SCROLL ANIMATION
let currentY = 0;
const screenSize = window.innerHeight / 2;

const heightFunc = (section, line) => {
  const procent = ((currentY + screenSize - section.offsetTop) * 100) / section.offsetHeight;
  line.style.height = `${procent > 100 ? 100 : procent < 0 ? 0 : procent}%`;
};

const halfWidthFunc = (section, line) => {
  const procent = ((currentY + screenSize - section.offsetTop) * 100) / section.offsetHeight;
  line.style.width = `${procent > -5 ? 50 : 0}%`;
  line.style.transition = ".5s";
};

const widthFunc = (section, line) => {
  const procent = ((currentY + screenSize - section.offsetTop) * 100) / section.offsetHeight;
  line.style.width = `${procent > 0 ? 100 : 0}%`;
  line.style.transition = ".5s";
};

const roadMapHalfWidthFunc = (section, line) => {
  const procent = ((currentY + screenSize - section.offsetTop) * 100) / section.offsetHeight;
  line.style.width = `${procent > 10 ? 50 : 0}%`;
  line.style.transition = ".5s";
};

const roadMapHeightFunc = (section, line) => {
  const procent = ((currentY + screenSize - section.offsetTop) * 100) / section.offsetHeight;
  line.style.height = `calc(${procent > 100 ? 100 : procent < 0 ? 0 : procent}% - 120px)`;
};

const buyHalfHeightFunc = (section, line) => {
  const procent = ((currentY + screenSize - section.offsetTop) * 100) / section.offsetHeight;
  line.style.height = `calc(${procent > 100 ? 100 : procent < 0 ? 0 : procent}% * 1.45)`;
};

const linesOnScrollFunc = () => {
  currentY = document.documentElement.scrollTop || document.body.scrollTop;
  //   BUY BLOCK
  buyHalfHeightFunc(document.querySelector(".buy-section"), document.querySelector("#buyCenterLine"));
  //   VIDEO BLOCK
  heightFunc(document.querySelector(".video-section"), document.querySelector("#videoLeftLine"));
  halfWidthFunc(document.querySelector(".video-section"), document.querySelector("#videoTopLine"));
  //   PROFITS BLOCK
  widthFunc(document.querySelector(".profits-section"), document.querySelector("#profitTopLine"));
  heightFunc(document.querySelector(".profits-section"), document.querySelector("#profitRightLine"));
  //   BENEFITS BLOCK
  heightFunc(document.querySelector(".benefits-section"), document.querySelector("#benefitsRightLine"));
  //   ROADMAP BLOCK
  roadMapHalfWidthFunc(document.querySelector(".roadmap-section"), document.querySelector("#roadmapTopLine"));
  roadMapHeightFunc(document.querySelector(".roadmap-section"), document.querySelector("#roadmapCenterLine"));
};

linesOnScrollFunc();

document.addEventListener("scroll", (e) => {
  linesOnScrollFunc();
});

// ON RESIZE ANIMATION
const getRoadMapLeftItemLineWidth = (text, section, line) => {
  const textWidth = text.clientWidth;
  const sectionWidth = section.clientWidth;
  if (sectionWidth < 1100) {
    line.style.left = `${textWidth + 8}px`;
    line.style.width = `calc(${sectionWidth - textWidth}px)`;
  } else {
    const sectionHalfWidth = section.clientWidth / 2;
    line.style.left = `${textWidth + 8}px`;
    line.style.width = `${sectionHalfWidth - textWidth - 4}px`;
  }
};

const getRoadMapRightItemLineWidth = (text, section, line) => {
  const textWidth = text.clientWidth;
  const sectionWidth = section.clientWidth;
  if (sectionWidth < 1100) {
    line.style.left = `${textWidth + 8}px`;
    line.style.width = `calc(${sectionWidth - textWidth}px)`;
  } else {
    const sectionHalfWidth = section.clientWidth / 2;
    line.style.right = `${textWidth + 8}px`;
    line.style.width = `${sectionHalfWidth - textWidth - 10}px`;
  }
};

const roadMapLineWidthFunc = () => {
  getRoadMapLeftItemLineWidth(
    document.querySelector("#quoterFirst"),
    document.querySelector(".roadmap-section"),
    document.querySelector("#quoterFirstLine")
  );
  getRoadMapRightItemLineWidth(
    document.querySelector("#quoterSecond"),
    document.querySelector(".roadmap-section"),
    document.querySelector("#quoterSecondLine")
  );
  getRoadMapLeftItemLineWidth(
    document.querySelector("#quoterThird"),
    document.querySelector(".roadmap-section"),
    document.querySelector("#quoterThirdLine")
  );
  getRoadMapRightItemLineWidth(
    document.querySelector("#quoterFour"),
    document.querySelector(".roadmap-section"),
    document.querySelector("#quoterFourLine")
  );
};

roadMapLineWidthFunc();

window.addEventListener(
  "resize",
  (e) => {
    roadMapLineWidthFunc();
  },
  true
);

// VIDEO HANDLERS
const vid = document.getElementById("myVideo");
const mobileVid = document.getElementById("myVideoMobile");
const enableBtn = document.getElementById("enableVideoAudio");
const disableBtn = document.getElementById("disableVideoAudio");

const enableMute = () => {
  vid.muted = true;
  mobileVid.muted = true;
  enableBtn.style.display = "flex";
  disableBtn.style.display = "none";
};

const disableMute = () => {
  const screenWidth = window.innerWidth;
  if (screenWidth > 576) {
    vid.muted = false;
  } else {
    mobileVid.muted = false;
  }
  disableBtn.style.display = "flex";
  enableBtn.style.display = "none";
};

window.addEventListener(
  "resize",
  (e) => {
    enableMute();
  },
  true
);

disableBtn.addEventListener("click", enableMute, false);
enableBtn.addEventListener("click", disableMute, false);
