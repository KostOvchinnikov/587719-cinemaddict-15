import {createSiteNavigationTemplate} from './view/main-navigation.js';
import {createFilmCardTemplate} from './view/film-card.js';
import {createUserProfileTemplate} from './view/user-profile.js';
import {createShowMoreButtonTemplate} from './view/show-more-button.js';
import {createFilmsTemplate} from './view/films.js';
import {createFilmsListTemplate} from './view/films-list.js';
import {createSortTemplate} from './view/sort.js';
import {createPopupTemplate} from './view/popup.js';

const CARDS_COUNT = 5;

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const siteMainElement = document.querySelector('.main');
const siteHeaderElement = document.querySelector('.header');

render(siteMainElement, createSiteNavigationTemplate(), 'beforeend');
render(siteHeaderElement, createUserProfileTemplate(), 'beforeend');


render(siteMainElement, createSortTemplate(), 'beforeend');
render(siteMainElement, createFilmsTemplate(), 'beforeend');

const filmsSection = siteMainElement.querySelector('.films');

render(filmsSection, createFilmsListTemplate(), 'beforeend');

const filmsListContainer = siteMainElement.querySelector('.films-list__container');

for (let i = 0; i < CARDS_COUNT; i++) {
  render(filmsListContainer, createFilmCardTemplate(), 'beforeend');
}

const filmsListElement = siteMainElement.querySelector('.films-list');
render(filmsListElement, createShowMoreButtonTemplate(), 'beforeend');
