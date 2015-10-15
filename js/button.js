kcneApp.controller("ButtonCtrl", function($scope) {
	var init = function() {
		$scope.reset();
	};

	$scope.reset = function() {
		$scope.color = "";
		$scope.label = "";
		$scope.moreInfo = "";

		$scope.batteries = "";
		$scope.indicatorCAR = "";
		$scope.indicatorFRK = "";
		
		$scope.hold = false;
		$scope.solution = "";
	};

	$scope.selectColor = function(color) {
		$scope.color = color;
	};

	$scope.selectLabel = function(label) {
		$scope.label = label;
	};

	$scope.selectIndicatorCAR = function(selection) {
		$scope.indicatorCAR = selection;
		$scope.solve();
	};

	$scope.selectIndicatorFRK = function(selection) {
		$scope.indicatorFRK = selection;
		$scope.solve();
	};

	$scope.selectBatteries = function(num) {
		$scope.batteries = num;
		$scope.solve();
	};

	$scope.solve = function() {
		$scope.hold = false;
		
		if ($scope.color === "blue" && $scope.label === "Abort") {
			$scope.hold = true;
		} else if ($scope.label === "Detonate" && $scope.batteries === "") {
			$scope.moreInfo = "batteries";
			$scope.solution = "Check the number of batteries!";
		} else if ($scope.label === "Detonate" && $scope.batteries > 1) {
			$scope.solution = "Press and immediately release the button.";
		} else if ($scope.color === "white" && $scope.indicatorCAR === "") {
			$scope.moreInfo = "CAR";
			$scope.solution = "Check for a lit inindicator with label CAR!";
		} else if ($scope.color === "white" && $scope.indicatorCAR === "yes") {
			$scope.hold = true;
		} else if ($scope.batteries === "") {
			$scope.moreInfo = "batteries";
			$scope.solution = "Check the number of batteries!";
		} else if ($scope.indicatorFRK === "") {
			$scope.moreInfo = "FRK";
			$scope.solution = "Check for a lit inindicator with label FRK!";
		} else if ($scope.batteries > 2 && $scope.indicatorFRK === "yes") {
			$scope.solution = "Press and immediately release the button.";
		} else if ($scope.color === "yellow") {
			$scope.hold = true;
		} else if ($scope.color === "red" && $scope.label === "Hold") {
			$scope.solution = "Press and immediately release the button.";
		} else {
			$scope.hold = true;
		}

		if ($scope.hold === true) {
			$scope.solution = "Hold the button and check the color of the strip.";
		}
	};

	init();
});
