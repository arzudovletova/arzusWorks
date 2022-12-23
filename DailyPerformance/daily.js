let secItem = document.querySelector(".section__item");
let secVertical = document.querySelector(".section__vertical");
let secOptions = document.querySelector(".section__options");
let secOption = document.querySelectorAll(".section__option");
let cards = document.querySelector(".cards");
let inputTxt = document.querySelector(".inputtxt");
let inputHrs = document.querySelector(".inputhrs");
let btnsubmit = document.querySelector(".button-sub");
let daily = document.querySelector(".daily");
let weekly = document.querySelector(".weekly");
let monthly = document.querySelector(".monthly");
let crd = document.querySelectorAll(".crd");
let pageSubmit = document.querySelector(".page-submit");

secItem.addEventListener("click", () => {
  if (secVertical.classList.contains("clicked")) {
    secVertical.classList.remove("clicked");
    secOptions.classList.remove("sec-clicked");
  } else {
    secVertical.classList.add("clicked");
    setTimeout(() => {
      secOptions.classList.add("sec-clicked");
    }, 400);
  }
});

for (let opt of secOption) {
  opt.addEventListener("click", () => {
    for (let o of secOption) {
      if (o.classList.contains("opt-active")) {
        o.classList.remove("opt-active");
      }
    }
    opt.classList.add("opt-active");
    pageSubmit.classList.add("sub-active");

    if (opt.innerText.indexOf("Dai") !== -1) {
      daily.classList.add("active");
    } else {
      daily.classList.remove("active");
    }
    if (opt.innerText.indexOf("Wee") !== -1) {
      weekly.classList.add("active");
    } else {
      weekly.classList.remove("active");
    }
    if (opt.innerText.indexOf("Mon") !== -1) {
      monthly.classList.add("active");
    } else {
      monthly.classList.remove("active");
    }
  });
}

let reportArray = {
  Daily: [],
  Weekly: [],
  Monthly: [],
};

btnsubmit.addEventListener("click", () => {
  let valueobj = {
    time: {
      text: inputTxt.value,
      hours: inputHrs.value,
      id: Date.now(),
    },
  };

  let valueKeyText = document.querySelector(".opt-active").textContent;

  if (valueKeyText == "Daily") {
    reportArray.Daily.push(valueobj["time"]);
  } else if (valueKeyText == "Weekly") {
    reportArray.Weekly.push(valueobj["time"]);
  } else {
    reportArray.Monthly.push(valueobj["time"]);
  }

  for (let c of crd) {
    if (
      reportArray[valueKeyText].length < 7 &&
      c.parentElement.classList.contains("active")
    ) {
      c.innerHTML += `
      <div id="${valueobj["time"].id}" class="col-lg-4 col-md-5 col-sm-6 parent">
                  <div class="card cards">
                    <div class="card_header">
                    <h6 class="header_title">${valueobj["time"].text}</h6>
                      <div class="dropdown_menu">
                        <div class="dropdown">
                          <div
                            class="dropdown-toggle"
                            type="button"
                            id="dropdownMenuButton"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            <i class="fa-solid fa-ellipsis menu"></i>
                          </div>
                          <div class="dropdown-menu drop-menu"
                            aria-labelledby="dropdownMenuButton">
                            <a class="dropdown-item edit drop-item" href="#">Edit</a>
                            <a class="dropdown-item delete drop-item" href="#">
                            Delete</a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="card_body">
                    <h1 class="body-title">${valueobj["time"].hours}</h1>
                    </div>
                    <div class="card_footer">
                      <p class="footer-txt">last week - 36hrs</p>
                    </div>
                  </div>
                </div>
        `;
    }
  }

  const dropItems = document.querySelectorAll(".drop-item");
  let dropdownMenu = document.querySelectorAll(".dropdown_menu");

  for (let menu of dropdownMenu) {
    menu.addEventListener("click", () => {
      for (let item of dropItems) {
        console.log(item);
        item.addEventListener("click", (e) => {
          if (item.classList.contains("edit")) {
            let parent = e.target.closest(".parent");
            let bodyTitle = parent.querySelector(".body-title").innerHTML;
            let headerTitle = parent.querySelector(".header_title").innerHTML;
            inputHrs.value = bodyTitle;
            inputTxt.value = headerTitle;
          } else {
            console.log("delete");
            let parent = e.target.closest(".parent");
            parent.remove();
          }
        });
      }
    });
  }
});

debugger;
