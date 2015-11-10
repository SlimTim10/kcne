kcneApp.controller("ComplicatedWiresCtrl", function($scope) {
	var init = function() {
		$scope.reset();
	};

	$scope.reset = function() {
		$scope.combinations = [];
		for (var i = 0; i < 6; i++) {
			$scope.combinations.push({
				LED: false,
				wire: {
					red: false,
					blue: false,
					white: false
				},
				star: false,
				solution: ""
			});
		}
	};

	$scope.toggleLED = function(n) {
		$scope.combinations[n]["LED"] = !$scope.combinations[n]["LED"];
	};

	$scope.toggleWire = function(n, color) {
		$scope.combinations[n]["wire"][color] = !$scope.combinations[n]["wire"][color];
	};

	$scope.toggleStar = function(n) {
		$scope.combinations[n]["star"] = !$scope.combinations[n]["star"];
	};

	$scope.solve = function() {
		;
	};

	init();
});
