(function(angular, app) {
    "use strict";
    app.controller("BooksIndexController",["books", "$scope", "$route",function(books, $scope, $route) {
        $scope.books = books;
        
        $scope.destroy = function(book){
            if(confirm("Are You Sure?")){
                book.$delete()
                    .then(function(response){
                        $route.reload()
                    }, function(reason){
                    });
            }
        }

        $scope.markAsDamaged = function(book){
            book.$markAsDamaged()
                .then(function(response){
                    $route.reload()
                }, function(reason){
                });
        }
        
    }]);
    
    
    app.controller("BooksNewController",["$scope", "$location", "book", function($scope, $location, book) {
        $scope.book = book
        $scope.submit = function(){
            console.log($scope.book)
            $scope.book.$save()
                .then(function(value) {
                    $location.path("/books")
                }, function(reason) {
                    alert("Error..")
                });
        }
    }]);
    
    app.controller("BooksEditController",["book", "$scope","$location", function(book, $scope, $location) {
        $scope.book = book
        console.log($scope.book)
        $scope.submit = function(){
            $scope.book.$update()
                .then(function(value) {
                    $location.path("/books")
                }, function(reason) {
                    // handle failure
                });
        }
    }]);

})(angular, myApp);
