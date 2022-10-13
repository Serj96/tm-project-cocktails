import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { gerInfoByName } from '../servise/apiData';
import {
  sampleCoctaileCard,
  cocktailsList,
} from '../markup/sampleCoctaileCard';
import { sorryContent } from '../markup/sorryContent';

const form = document.querySelector('.search-form');

form.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();

  const { searchQuery } = e.currentTarget.elements;
  const query = searchQuery.value.trim().toLowerCase();

  if (!query) {
    return Notify.failure('You not input query.');
  }

  cocktailsList.innerHTML = '';

  gerInfoByName(query)
    .then(res => {
      return res.data;
    })
    .then(data => {
      if (!data.drinks) {
        cocktailsList?.insertAdjacentHTML('beforeend', sorryContent());
        return;
      }

      data.drinks.forEach(drink => {
        sampleCoctaileCard(drink);
      });
    });
}
