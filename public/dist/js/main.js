const popup = $("#menu-popup");

$("#menu-btn").click(function () {
  popup.toggle(200);
});

var breakingNews = [
  "Yabancı Turist Sayısı Hedefini Yakaladı Turizm Bakanlığı'nda Yüzler Gülüyor...",
  "Rəsmən: 2022-ci ilin bolidi təqdim olunub",
  "L.Həmilton: Çox qorxduq",
  "M.Ferstappen: Mercedes əlçatmazdır",
];
var counter = 0;
var changingElement =
  document.getElementById("breaking-news").firstElementChild;
setInterval(changeIt, 3000);
function changeIt() {
  changingElement.innerHTML = breakingNews[counter];
  counter++;
  if (counter >= breakingNews.length) {
    counter = 0;
  }
}

const toupBtn = $("#toup");

$(document).ready(function () {
  $(window).scroll(function () {
    if ($(window).scrollTop() > 100) {
      toupBtn.fadeIn();
    } else {
      toupBtn.fadeOut();
    }
  });

  toupBtn.click(function () {
    $("html, body").animate({scrollTop: 0}, 700);
    return false;
  });
});
