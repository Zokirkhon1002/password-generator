// html dan oladigan id nomlarimizni o'zbek tilida yozib olamiz
// va Xan qo'shimchasini qo'shib qo'yamiz,
// adashib ketmaslik uchun
let natijaXan = document.getElementById("result"),
  uzunlikXan = document.getElementById("length"),
  kattaHarfXan = document.getElementById("uppercase"),
  kichikHarfXan = document.getElementById("lowercase"),
  raqamXan = document.getElementById("numbers"),
  simbolXan = document.getElementById("symbols"),
  generatorXan = document.getElementById("generate"),
  nusxaOlishXan = document.getElementById("clipboard");
// shu yergacha

// chechbox ni ustiga bosganda shu ovoz berish uchun 
// funksiya ochib qo'ydik, va uni htmlda onclick hodisasida chaqirib qo'ydik
function SoundClick() {
    document.getElementById("sound").play();
}

// funksiyalarni bir obyekt ko'rinishga keltirib oldik,
// foydalanish qulay bo'lishi uchun
const randomFunksiya = {
  kichHarf: kichikHarfRandom,
  katHarf: kattaHarfRandom,
  raqam: raqamRandom,
  simbol: simbolRandom,
};

// nusxa Olish ni bajarib olamiz
nusxaOlishXan.addEventListener("click", () => {
  document.getElementById("sound").play();
  const yozuvMaydon = document.createElement("textarea");
  const kalitsoz = natijaXan.innerText;
  document.getElementById("sound").play();

  if (!kalitsoz) {
    return;
  }

  yozuvMaydon.value = kalitsoz;
  document.body.appendChild(yozuvMaydon);
  yozuvMaydon.select();
  document.execCommand("copy");
  yozuvMaydon.remove();
  alert(
    `Kalitso'zidan nusxa olindi, boshqa joylarda bundan foydalanishingiz mumkin:)`
  );
});

// kalit so'zini shu yerda generatsiya qiladi
generatorXan.addEventListener("click", () => {
  document.getElementById("sound").play();
  const length = +uzunlikXan.value,
    hasLower = kichikHarfXan.checked,
    hasUpper = kattaHarfXan.checked,
    hasNumber = raqamXan.checked,
    hasSymbol = simbolXan.checked;

  natijaXan.innerText = KalitsozGeneratsiyaQil(hasLower, hasUpper, hasNumber, hasSymbol, length
  );
});


// mana shu funksiyani ichida barchasini yig'ib 
// shu yerda natijani chiqaramiz, 
function KalitsozGeneratsiyaQil(kichHarf, katHarf, raqam, simbol, length) {
  document.getElementById("sound").play();
  let generatsiyaQilinganKalitSoz = "",
    turlariniHisobi = kichHarf + katHarf + raqam + simbol,
    turlariniMassivi = [{ kichHarf },{ katHarf },{ raqam },{ simbol },]
    .filter((item) => Object.values(item)[0]);

  if (turlariniHisobi === 0) {
    return "";
  }

  for (let i = 0; i < length; i += turlariniHisobi) {
    turlariniMassivi.forEach((turi) => {
      const funksiyaNomi = Object.keys(turi)[0];
      generatsiyaQilinganKalitSoz += randomFunksiya[funksiyaNomi]();
    });
  }
  const oxirgiNatija = generatsiyaQilinganKalitSoz.slice(0, length);
  return oxirgiNatija;
}

// obyektga yig'ib olgan funksiyalarimizni shu yerda yozamiz
function kichikHarfRandom() {
  document.getElementById("sound").play();
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
function kattaHarfRandom() {
  document.getElementById("sound").play();
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
function raqamRandom() {
  document.getElementById("sound").play();
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
function simbolRandom() {
  document.getElementById("sound").play();
  const symbols = "!@#$%^&*(){}[]=<>/,.";
  return symbols[Math.floor(Math.random() * symbols.length)];
}
