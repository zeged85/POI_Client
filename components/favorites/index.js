/**
 *  <favorites> component
 *
 * @author <favorites> <>
 */

import angular from 'angular';

import favoritesComponent from './favorites.component';

const favorites = angular
  .module('favoritesController', [])
  .component('favorites', favoritesComponent);

export default favorites;
