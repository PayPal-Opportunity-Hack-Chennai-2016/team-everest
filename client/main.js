import angular from 'angular'
import angularMeteor from 'angular-meteor';
import { Items } from '../collection/items';
import template from './main.html';
 

class HugeHandler {
  constructor($scope, $reactive) {
    'ngInject'; // for minify

    $reactive(this).attach($scope); // whenever $scope changes in db, UI is refreshed

    $scope.helpers({
      items() {
        return Items.find({}); // code that polls the db for new items
      }
    });

    $scope.hello = function (event) {
      Items.insert({name: $scope.name})
    }
  }
}

angular.module('zine', [
    angularMeteor
  ])
  .component('sideBarList', {
      template,
      controllerAs: 'sideBarList',
      controller: HugeHandler
    });