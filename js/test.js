addFeaturesAttempt();

// Retry addButtons() until it succeeds
// 説明ポイント(1)
function addFeaturesAttempt(){
  if(!addButtons()) setTimeout(addFeaturesAttempt, 500); // retry after 500 millisecconds
}


// Add Buttons to the sidebar (returns false if the sidebar is not ready yet)
function addButtons(){
  const nav = document.querySelector("nav.app-navigator");
  if(!nav) return false; // the sidebar was not ready yet

  let b;

  b = createSideBarButton("Fortune", "ええええええ");
  nav.appendChild(b);

  return true;
}


function createSideBarButton(labelText, iconText){
  // 1. Clone the setting button in the sidebar
  const original = document.querySelector("a.js-app-settings");
  const b = original.cloneNode(true);

  // 2. Remove "data-title" and "data-action" attributes, to remove original button actions
  // 説明ポイント(2)
  b.removeAttribute("data-title");
  b.removeAttribute("data-action");

  // 3. Change label and icon
  // 説明ポイント(3)
  b.querySelector(".app-nav-link-text").textContent = labelText;
  const icon = b.querySelector("i");
  icon.classList.remove("icon-settings");
  icon.textContent = iconText;

  return b;
}
