// app.js
angular.module('sortApp', [])
.controller('mainController', function($scope) {
    $scope.sortType     = 'name'; // set the default sort type
    $scope.sortReverse  = false;  // set the default sort order
    $scope.searchName   = '';     // set the default search/filter term
    $scope.sort_filter = [
        { name: 'Vo Van Do', email: 'dovv@gmail.com', age: 27 },
        { name: 'Thanh Lam', email: 'thanglam@gmail.com', age: 39 },
        { name: 'Chu Thị Hải', email: 'haict@gmail.com', age: 25 },
        { name: 'Hồ Hoài Anh', email: 'hoaianh@gmail.com', age: 36 }
    ];
});