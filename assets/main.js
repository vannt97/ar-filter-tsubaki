const getPrivacyPolicyCheckBoxElement = () => {
  return document.getElementById("privacy-policy-checkbox");
};
const getLayoutSizeElement = () => {
  return document.getElementById("layout-size");
};
const getScanBtnElement = () => {
  return document.getElementById("scan-btn");
};
const getBackHomeELement = () => {
  return document.getElementById("back-home");
};

const handleEventScanBtn = () => {
  let sceneFirst = document.getElementById("scene-first");
  if (sceneFirst) {
    if (!isCheckedPrivacyPolicy())
      return showMessage(
        "Hãy tick vào điều khoản để được tham gia minigame nhé!"
      );
    sceneFirst.style.display = "none";
    let sceneEnd = document.getElementById("scene-end");
    if (sceneEnd) {
      sceneEnd.style.display = "block";
    }
  }
};

const handleEventBackHomeBtn = () => {
  let sceneEnd = document.getElementById("scene-end");
  if (sceneEnd) {
    sceneEnd.style.display = "none";
    let sceneFirst = document.getElementById("scene-first");
    if (sceneFirst) {
      sceneFirst.style.display = "block";
    }
  }
};

const setUpHandleEventScanBtn = () => {
  const element = getScanBtnElement();
  if (!element) return;
  element.addEventListener("click", handleEventScanBtn);
};

const setUpHandleEventBackHomeBtn = () => {
  const element = getBackHomeELement();
  if (!element) return;
  element.addEventListener("click", handleEventBackHomeBtn);
};

const showSizeLayout = () => {
  const element = getLayoutSizeElement();
  if (!element) return;
  element.innerHTML = `${window.innerWidth} x ${window.innerHeight}`;
};

const isCheckedPrivacyPolicy = () => {
  const element = getPrivacyPolicyCheckBoxElement();
  if (!element) return;
  return element.checked;
};

const showMessage = (val) => {
  Toastify({
    text: val,
    duration: 3000,
    close: false,
    gravity: "top", // `top` or `bottom`
    position: "center", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: "white",
      color: "black",
    },
    // avatar: "/assets/images/warning-icon.svg",
    onClick: function () {}, // Callback after click
  }).showToast();
};

//////////////////////////////////////////////////////////////////////////

showSizeLayout();

setUpHandleEventScanBtn();

setUpHandleEventBackHomeBtn();

// const privacyPolicyCheckBox = getPrivacyPolicyCheckBoxElement();
// if (privacyPolicyCheckBox) {
//   privacyPolicyCheckBox.addEventListener("change", () => {});
// }
