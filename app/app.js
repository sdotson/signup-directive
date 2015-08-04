angular.module('signupApp', [])
  .directive('optIn', function () {
    SignupController.$inject = ['$scope'];
    
    return {
      restrict: 'E',
      transclude: true,
      templateUrl: 'optin.html',
      controller: SignupController
    };

    function SignupController($scope) {
      $scope.submit = function() {
        $scope.submitted = true;
      };
    }

  });
