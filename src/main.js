import {createSiteNavigationTemplate} from './view/main-navigation.js';
import {createFilmCardTemplate} from './view/film-card.js';
import {createUserProfileTemplate} from './view/user-profile.js';
import {createShowMoreButtonTemplate} from './view/show-more-button.js';
import {createFilmsTemplate} from './view/films.js';
import {createFilmsListTemplate} from './view/films-list.js';
import {createSortTemplate} from './view/sort.js';
import {createTopRatedFilmsTemplate} from './view/top-rated.js';
import {createMostCommentedFilmsTemplate} from './view/most-commented.js';
import {createPopupTemplate} from './view/popup.js';

const CARDS_COUNT = 5;
const CARDS_COUNT_EXTRA = 2;
const InsertPosition = {
  BEFOREBEGIN: 'beforebegin',
  AFTERBEGIN: 'afterbegin',
  BEFOREEND: 'beforeend',
  AFTEREND: 'afterend',
};

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

// Nav & Profile

const siteMainElement = document.querySelector('.main');
const siteHeaderElement = document.querySelector('.header');

render(siteMainElement, createSiteNavigationTemplate(), InsertPosition.BEFOREEND);
render(siteHeaderElement, createUserProfileTemplate(), InsertPosition.BEFOREEND);

// Sorting

render(siteMainElement, createSortTemplate(), InsertPosition.BEFOREEND);
render(siteMainElement, createFilmsTemplate(), InsertPosition.BEFOREEND);

const filmsSection = siteMainElement.querySelector('.films');

render(filmsSection, createFilmsListTemplate(), InsertPosition.BEFOREEND);

const filmsListContainer = siteMainElement.querySelector('.films-list__container');

// Film Cards

for (let i = 0; i < CARDS_COUNT; i++) {
  render(filmsListContainer, createFilmCardTemplate(), InsertPosition.BEFOREEND);
}

const filmsListElement = siteMainElement.querySelector('.films-list');
render(filmsListElement, createShowMoreButtonTemplate(), InsertPosition.BEFOREEND);

// Top rated

render(filmsSection, createTopRatedFilmsTemplate(), InsertPosition.BEFOREEND);
const topRatedFilmsListContainer = filmsSection.lastChild.querySelector('.films-list__container');
for (let j = 0; j < CARDS_COUNT_EXTRA; j++) {
  render(topRatedFilmsListContainer, createFilmCardTemplate(), InsertPosition.BEFOREEND);
}

// Most commented

render(filmsSection, createMostCommentedFilmsTemplate(), InsertPosition.BEFOREEND);
const mostCommentedFilmsListContainer = filmsSection.lastChild.querySelector('.films-list__container');
for (let j = 0; j < CARDS_COUNT_EXTRA; j++) {
  render(mostCommentedFilmsListContainer, createFilmCardTemplate(), InsertPosition.BEFOREEND);
}

// Popup

render(siteMainElement, createPopupTemplate(), InsertPosition.AFTEREND);
