let MyController = function ($scope) {
  $scope.likeCount = 0;
  $scope.word = 'likes';

  $scope.watClick = function () {
    $scope.likeCount = $scope.likeCount + 1;

    if ($scope.likeCount === 1) {
      $scope.like = 'like';
    } else {
      $scope.like = 'likes';
    }
  };

};

MyController.$inject = ['$scope'];

export default MyController;