kcneApp.controller("ButtonCtrl", function($scope) {
	var init = function() {
		$scope.reset();
	};

	$scope.reset = function() {
		$scope.buttonColor = "";
		$scope.buttonLabel = "";
	};

	$scope.selectColor = function(color) {
		$scope.buttonColor = color;
	};

	$scope.selectLabel = function(label) {
		$scope.buttonLabel = label;
	};

	init();
});
