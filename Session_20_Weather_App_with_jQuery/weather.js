// const jQuery = require("jquery")
const formJS = document.querySelector("form");
// jQuery yazmak yerine '$' şeklinde de yazabiliriz
const formJquery = jQuery("form").eq(0);
const inputJQ = $(".top-banner input").eq(0);
const msgJQ = $(".top-banner span").eq(0);
const listJQ = $(".cities").eq(0);
// console.log(inputJQ, msgJQ, listJQ);

// * jQuery'de iki tane index alma yöntemi var
// ! get(index) ==> toArray(get()) , eq(index)

// ? load VS DOMContentLoaded
// ? DOMContentLoaded ==> Sayfanın render edilmesi ve DOM tree'nin oluşması, (daha hızlı çalışır fakat contentleri beklemek gerekebilir)
// ? window load ==> bütün contentler ayrıca yükleniyor

// ! window.onload = () =>{} // ===> JS
// ! addEventListener // ===> on

$(window).on("load", () => {
  //   console.log("window.load");
});

// $(document).on("DOMContentLoaded", ()=>{
//     console.log("DOMContentLoaded");
// });

$(document).ready(() => {
  //   console.log("DOMContentLoaded");
  localStorage.setItem(
    "apiKey",
    EncryptStringAES("4d8fb5b93d4af21d66a2948710284366")
  );
});

// formJquery.on("submit", (e)=>{
//     e.preventDefault();
//     getWeatherDataFromApi();
// });

formJquery.submit((e) => {
  e.preventDefault();
  getWeatherDataFromApi();
});

const getWeatherDataFromApi = async () => {
  //   console.log("async");
  const apiKey = DecryptStringAES(localStorage.getItem("apiKey"));
  // * .value yerine .val() diyerek değerlere ulaşabiliriz
  const cityName = inputJQ.val();
  //   console.log(cityName);
  const units = "metric";
  const lang = "tr";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=${units}&lang=${lang}`;

  // XMLHttpRequest(xhr) vs. fetch() vs. axios vs. $.ajax

  $.ajax({
    type: "GET",
    url: url,
    dataType: "json",
    success: (response) => {
      // ! main body func.
      //   console.log(response);
      const { main, sys, name, weather } = response;
      //  Icon URL's
      const iconUrlAWS = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${weather[0].icon}.svg`;
      // alternative iconUrl
      const iconUrl = `https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;

      //js=>document.createElement("li")

      // const createdLi2 = $(document.createElement("li"))

      // weather card check !!

      const cityCardList = listJQ.find(".city");
      const cityCardListArray = cityCardList.get();

      //console.log(cityCardList);
      if (cityCardListArray.length > 0) {
        const filteredArray = cityCardListArray.filter(
          (li) => $(li).find("span").text() == name
        );
        if (filteredArray.length > 0) {
          // ! innerText
          msgJQ.text(
            `You already know the weather for ${name}, Please search for another city 😉`
          );
          // ! styling için css komutunu kullanabiliriz
          msgJQ.css({
            display: "block",
          });
          setTimeout(() => {
            msgJQ.css({
              display: "none",
            });
          }, 3000);
          return;
        }
      }

      //   ! Element Create
      // js=>document.createElement("li")
      // const createdLi2 = $(document.createElement("li"))
      const createdLi = $("<li></li>");
      createdLi.addClass("city"); // ? className eklemek için addClass'ı kullanıyoruz
      createdLi.html(`
      <h2 class="city-name" data-name="${name}, ${sys.country}">
          <span>${name}</span>
          <sup>${sys.country}</sup>
      </h2>
      <div class="city-temp">${Math.round(main.temp)}<sup>°C</sup></div>
      <figure>
          <img class="city-icon" src="${iconUrl}">
          <figcaption>${weather[0].description}</figcaption>
      </figure>`);

      // ! append vs. prepend hem JS'de hem de jQuery'de aynı
      listJQ.prepend(createdLi);

      // * Jquery Samples
      //   $(".city img").click((e) => {
      //getAttribute, setAttribute ==> attr
      //   window.location.href = $(e.target).attr("src");
      //     $(e.target).attr("src", iconUrlAWS);
      //   });

      //Animation
      // $(".city").click((e)=>{
      //     $(e.target).animate({left:'250px'});
      // });

      //Jquery chaining slideUp vs. slideDown
      $(".city img").click((e) => {
        $(e.target).slideUp(2000).slideDown(2000);
      });

      //hide() vs show()
      // $(".city img").click((e) => {
      //     $(e.target).hide();
      // });

      //  ? jQuery'de form resetlemek için ise trigger'ı kullanıp event'i çağrıyoruz
      // formJS.reset();
      formJquery.trigger("reset");
    },
    beforeSend: (request) => {
      // ! api isteğini göndermeden önce işlem yapmak için beforeSend'i kullanıyoruz
      //Encryption //header/body //token
      console.log("before ajax send");
    },
    complete: () => {
      // ! tüm işlemler bittikten sonra yapmak istediğimiz işlemler için complete'i kullanıyoruz
      console.log("after ajax send");
    },
    error: (XMLHttpRequest) => {
      // ! Hataları yakalamak için ise error'u kullanıyoruz
      //logging
      //postErrorLog(p1,p2,p3,p4);
      console.log(XMLHttpRequest);
      //   console.log(`${XMLHttpRequest.status} ${XMLHttpRequest.statusText}`);
      //styling
      //   msgJQ.css({ color: "red", "text-decoration": "underline" });
    },
  });
};
