import './js/modalCoctails';
import './js/modalComponents';
import './servise/apiData';

import './js/header';

import './index';

import './js/getRandomCoctails';

import './js/searchByInput';
import './js/searchByLetter';


import './servise/config/firebaseConfig';
import './servise/firebase';

import './js/coctails';

import './js/favCoctails';
import './js/favIngridients';
import {getSearch} from './js/searchByLetter'
const ulList = document.querySelector('.hero__list');

ulList.addEventListener('click', getSearch);
