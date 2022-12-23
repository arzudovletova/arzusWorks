var darkIconbg = document.querySelector(".modes_bg");
var circleIcon = document.querySelector(".circle");
var colItems = document.querySelectorAll(".item");
var colNumber = document.querySelectorAll(".number");
var colAccount = document.querySelectorAll(".account");
var overview = document.querySelector(".overviuw_title");
var headTitle = document.querySelector(".header_header");
var overviewTitle = document.querySelectorAll(".overviuw_title");
var overviewNumber = document.querySelectorAll(".overviuw_number");

darkIconbg.addEventListener("click", () => {
  if (
    darkIconbg.classList.contains("icon_bg") &&
    circleIcon.classList.contains("icon_circle")
  ) {
    darkIconbg.classList.remove("icon_bg");
    darkIconbg.classList.add("icon_bg_light");
    circleIcon.classList.remove("icon_circle");
    circleIcon.classList.add("light_mode");
    overview.style.color = "#000";
    headTitle.style.color = "#000";
  } else {
    darkIconbg.classList.remove("icon_bg_light");
    darkIconbg.classList.add("icon_bg");
    circleIcon.classList.remove("light_mode");
    circleIcon.classList.add("icon_circle");
    overview.style.color = "#fff";
    headTitle.style.color = "#fff";
    headTitle.style.color = "#fff";
  }
  if (darkIconbg.classList.contains("icon_bg_light")) {
    document.body.style.backgroundColor = "#fff";
  } else {
    document.body.style.backgroundColor = "#0d0f1eef";
  }

  for (let i = 0; i < colItems.length; i++) {
    console.log(i);
    if (darkIconbg.classList.contains("icon_bg_light")) {
      colItems[i].classList.remove("col_item");
      colItems[i].classList.add("col_item_light");
    } else {
      colItems[i].classList.remove("col_item_light");
      colItems[i].classList.add("col_item");
    }
  }
  for (let n of colNumber) {
    if (darkIconbg.classList.contains("icon_bg_light")) {
      n.classList.remove("col_number");
      n.classList.add("col_number_light");
    } else {
      n.classList.remove("col_number_light");
      n.classList.add("col_number");
    }
  }
  for (let a of colAccount) {
    if (darkIconbg.classList.contains("icon_bg_light")) {
      a.classList.remove("col_account");
      a.classList.add("col_account_light");
    } else {
      a.classList.remove("col_account_light");
      a.classList.add("col_account");
    }
  }
  for (let o of overviewTitle) {
    if (darkIconbg.classList.contains("icon_bg_light")) {
      o.style.color = "#000";
    } else {
      o.style.color = "#fff";
    }
  }

  for (let o of overviewNumber) {
    if (darkIconbg.classList.contains("icon_bg_light")) {
      o.style.color = "#000";
    } else {
      o.style.color = "#fff";
    }
  }
});
