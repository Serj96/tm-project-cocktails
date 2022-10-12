import { cocktailsList } from '../markup/sampleCoctaileCard';
import { sampleSerchByLetter } from '../markup/sampleSerchByLetter';
import { checkedBtns } from '../servise/firebase';
import { getInfoByLetter } from '../servise/apiData';

import Notiflix from 'notiflix';

let arrayLetters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '0',
];
const ulList = document.querySelector('.hero__list');
function markupList(arrayLetters) {
  const markup = arrayLetters.map(
    ([arrayLetters]) =>
      `<li class="hero__item"> <button class="hero__btn">${arrayLetters}</button></li>`
  );
  ulList.innerHTML = markup.join('');
}
const input = document.querySelector('.datalist__input');
input.onfocus = function () {
  letters.style.display = 'block';
};

const svg = document.querySelector('.datalist__svg');
let currentFocus = -1;

for (let option of letters.options) {
  option.onclick = function () {
    input.value = option.value;
    letters.style.display = 'none';
    if ((letters.style.display = 'none')) {
      input.style.backgroundColor = '#FD5103';
      input.style.color = '#FCFCFC';
      svg.style.fill = '#FCFCFC';
    }
  };
}

input.oninput = function () {
  currentFocus = -1;
  const text = input.value.toUpperCase();
  for (let option of letters.options) {
    if (option.value.toUpperCase().indexOf(text) > -1) {
      option.style.display = 'block';
    } else {
      option.style.display = 'none';
    }
  }
};

function fetch() {
  if (window.screen.width >= 768) {
    markupList(arrayLetters);
  }
}
fetch();

/*function sorryContent(item){
    const markup = item.map(()=> `<h2 class="sorry__title">Sorry, we didn't find any cocktail for you</h2><picture class="">
            <source srcset="./img/pictures/mobile/empty_page_280x308.png 1x, ./img/pictures/mobile/empty_page_560x617@2x.png 2x"
                media="(max-width: 767.99px)" />
            <source srcset="./img/pictures/tablet/empty_page_345x381.png 1x, ./img/pictures/tablet/empty_page_690x762@2x.png 2x"
                media="(max-width: 1279.99px)" />
            <source
                srcset="./img/pictures/desktop/empty_page_345x380.png 1x, ./img/pictures/desktop/empty_page_690x760@2x.png 2x" />
            <img  src="./img/pictures/mobile/empty_page_280x308.png alt="no cocktail">
        </picture>`)
}*/
