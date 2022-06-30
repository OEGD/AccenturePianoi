let hbd = "";
var digitsCount = document.getElementById("digits");
var audioc = new Audio(
  "https://static.wixstatic.com/mp3/f397c8_641d8156d5f84d0d88414a359115764a.mp3"
);
var audiod = new Audio(
  "https://static.wixstatic.com/mp3/f397c8_1c08021fed20469aa31e3d7606936cab.mp3"
);
var audioe = new Audio(
  "https://static.wixstatic.com/mp3/f397c8_fc6255aa9548417487e337a13cb1fc44.mp3"
);
var audiof = new Audio(
  "https://static.wixstatic.com/mp3/f397c8_81e3e63b5ffe4c50932d0fa97b4511d8.mp3"
);
var audiog = new Audio(
  "https://static.wixstatic.com/mp3/f397c8_50baccd9d8264e3a86eec0ae1137f824.mp3"
);
var audioa = new Audio(
  "https://static.wixstatic.com/mp3/f397c8_9cbd2a2f56d94a8692ecdb658335f8ea.mp3"
);
var audiob = new Audio(
  "https://static.wixstatic.com/mp3/f397c8_dba57194d45b4a1aacf8429c4e155ee5.mp3"
);

var imgc =
  "https://static.wixstatic.com/media/f397c8_db2ced12d172493f9b3e912829a2ab6e~mv2.png";
var imgd =
  "https://static.wixstatic.com/media/f397c8_174ff9ca39b4420d80a9bd726401ecef~mv2.png";
var imge =
  "https://static.wixstatic.com/media/f397c8_a9d51b7755784a95a469886c89c3372d~mv2.png";
var imgf =
  "https://static.wixstatic.com/media/f397c8_0bb872d8c9f24a53918e0b3398877528~mv2.png";
var imgg =
  "https://static.wixstatic.com/media/f397c8_1956397a4ba84678b5308b5d2951458f~mv2.png";
var imga =
  "https://static.wixstatic.com/media/f397c8_90ebd7674f5f4d70b63d07ddbf5bb73a~mv2.png";
var imgb =
  "https://static.wixstatic.com/media/f397c8_3284d4ed7d5f476db84647fdcdc1a380~mv2.png";

var lastAudio = "";

function pianoPress(key) {
  if (lastAudio != "") {
    window[lastAudio].pause();
    window[lastAudio].currentTime = 0;
  }
  if (
    key == "c" ||
    key == "d" ||
    key == "e" ||
    key == "f" ||
    key == "g" ||
    key == "a" ||
    key == "b"
  ) {
    playSound("audio" + key);
  }
  hbd = hbd + key;

  var elem = document.createElement("img");
  digitsCount.appendChild(elem);

  imgKey = "img" + key;
  elem.src = window[imgKey];

  if (hbd.length == 6) {
    if (hbd == "ddedgf") {
      setTimeout(function () {
        hbd = "";
        digitsCount.innerHTML = "";
      }, 500);
      window.open("https://www.online-escape-games.de/intern-4-asdw12");
    } else {
      openModal();
    }
  }
}
function playSound(key) {
  window[key].play();
  lastAudio = key;
}

var modal = document.getElementById("myModal");

var span = document.getElementsByClassName("close")[0];

function openModal() {
  modal.style.display = "block";
}

var close = document.getElementById("close");
close.onclick = function () {
  modal.style.display = "none";
  hbd = "";
  digitsCount.innerHTML = "";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
    hbd = "";
    digitsCount.innerHTML = "";
  }
};
