(function(angular, app) {
    "use strict";
    app.config(["$routeProvider", function($routeProvider) {
        $routeProvider
            .when('/books', {
                templateUrl: 'books/index.html',
                resolve: {
                    books: function(Book){
                        return Book.query()
                    }
                },
                controller: "BooksIndexController"
            })
            .when('/new', {
                templateUrl: 'books/new.html',
                resolve: {
                    book: function(Book){
                        return new Book({isbn:"", name:"", damaged: false})
                    }
                },
                controller: "BooksNewController"
            })
            .when('/:id/edit', {
                templateUrl: 'books/new.html',
                resolve: {
                    book: function(Book, $route){
                        return Book.get({id: $route.current.params.id})
                    }
                },
                controller: "BooksEditController"
            })
    }]);
})(angular, myApp);


