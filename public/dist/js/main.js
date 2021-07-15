var newsArray = [
  "Son dəqiqə: Yabancı Turist Sayısı Hedefini Yakaladı Turizm Bakanlığı'nda Yüzler Gülüyor...",
  "Firudin soskadi",
  "Sikim icini",
  "Ismayil gotdu",
];
var counter = 0;
var changingElement = document.getElementById("changing_news_content");
var inst = setInterval(changeIt, 2000);
function changeIt() {
  changingElement.innerHTML = newsArray[counter];
  counter++;
  if (counter >= newsArray.length) {
    counter = 0;
  }
}
