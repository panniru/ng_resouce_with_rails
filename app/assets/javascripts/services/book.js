(function(angular, app) {
    "use strict";
    app.service("Book",["$resource", function($resource) {
        return $resource('/books/:id.json', {id:'@id'},
                         {
                             "markAsDamaged":{url: "/books/:id/mark_as_damaged.json", method: "PUT"},
                             "update": { method: "PUT"}
                         }
                        );
    }]);
})(angular, myApp);
