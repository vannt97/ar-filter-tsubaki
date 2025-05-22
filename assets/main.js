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

const getSceneFirstElement = () => {
  return document.getElementById("scene-first");
};
const getSceneEndElement = () => {
  return document.getElementById("scene-end");
};

const getBtnShareElement = () => {
  return document.getElementById;
};

const handleShowSceneFirstElement = (val) => {
  const element = getSceneFirstElement();
  if (!element) return;
  element.style.display = val ? "block" : "none";
};
const handleShowSceneEndElement = (val) => {
  const element = getSceneEndElement();
  if (!element) return;
  element.style.display = val ? "block" : "none";
};

function copyToClipboard(coptyText, callback) {
  // Create a "hidden" input
  let copyText = document.createElement("input");
  coptyText.style.position = "absolute";
  coptyText.style.zIndex = "-999";
  // Assign it the value of the specified element
  copyText.setAttribute("value", coptyText);
  document.body.appendChild(copyText);
  copyText.select();
  document.execCommand("copy");
  window.getSelection().removeAllRanges();
  document.body.removeChild(copyText);
  callback();
}

const handleEventScanBtn = () => {
  if (!isCheckedPrivacyPolicy())
    return showMessage(
      "Hãy tick vào điều khoản để được tham gia minigame nhé!"
    );

  handleShowSceneFirstElement(false);
  createMediaRecorder();
};

const handleEventBackHomeBtn = () => {
  // let sceneEnd = document.getElementById("scene-end");
  // if (sceneEnd) {
  //   sceneEnd.style.display = "none";
  //   let sceneFirst = document.getElementById("scene-first");
  //   if (sceneFirst) {
  //     sceneFirst.style.display = "block";
  //   }
  // }
  // handleShowSceneEndElement(false);
  // handleShowSceneFirstElement(true);
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
