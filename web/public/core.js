var myapp = angular.module("myapp", []);

myapp.controller("thingController", function thingController($scope, $http) {
    $scope.formData = {};

    // when landing on the page, get all things and show them
    $http.get('/api/thing')
      .then(function(response) {
        var data = response.data;
        $scope.things = data;
        console.log(data);
      });

    // when submitting the add form, send the text to the node API
    $scope.createThing = function() {
      $http.post('/api/thing', $scope.formData)
        .then(function(response) {
          var data = response.data;
            $scope.formData = {}; // clear the form so our user is ready to enter another
            $scope.things = data;
            console.log(data);
        });
    };
});
