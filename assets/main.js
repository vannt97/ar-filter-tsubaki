const layoutSize = document.getElementById("layout-size");
if (layoutSize) {
  layoutSize.innerHTML = `${window.innerWidth} x ${window.innerHeight}`;
}

let scanBtn = document.getElementById("scan-btn");
if (scanBtn) {
  scanBtn.addEventListener("click", function () {
    let sceneFirst = document.getElementById("scene-first");
    if (sceneFirst) {
      sceneFirst.style.display = "none";
      let sceneEnd = document.getElementById("scene-end");
      if (sceneEnd) {
        sceneEnd.style.display = "block";
      }
    }
  });
}

const backHomeBtn = document.getElementById("back-home");
if (backHomeBtn) {
  backHomeBtn.addEventListener("click", function () {
    let sceneEnd = document.getElementById("scene-end");
    if (sceneEnd) {
      sceneEnd.style.display = "none";
      let sceneFirst = document.getElementById("scene-first");
      if (sceneFirst) {
        sceneFirst.style.display = "block";
      }
    }
  });
}
