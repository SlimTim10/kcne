kcneApp.controller("SimonSaysCtrl", function($scope) {
	var init = function() {
		$scope.reset();
	};

	$scope.reset = function() {
		$scope.vowel = "";
		$scope.strikes = "";

		$scope.solution = "";
	};

	$scope.selectVowel = function(vowel) {
		$scope.vowel = vowel;
	};

	$scope.selectStrikes = function(strikes) {
		$scope.strikes = strikes;
	};

	$scope.selectColor = function(color) {
		$scope.color = color;
		$scope.solve();
	};

	$scope.solve = function() {
		var getColor = new Object();

		if ($scope.vowel) {
			if ($scope.strikes === 0) {
				getColor["red"] = "blue";
				getColor["blue"] = "red";
				getColor["green"] = "yellow";
				getColor["yellow"] = "green";
			} else if ($scope.strikes === 1) {
				getColor["red"] = "yellow";
				getColor["blue"] = "green";
				getColor["green"] = "blue";
				getColor["yellow"] = "red";
			} else {
				getColor["red"] = "green";
				getColor["blue"] = "red";
				getColor["green"] = "yellow";
				getColor["yellow"] = "blue";
			}
		} else {
			if ($scope.strikes === 0) {
				getColor["red"] = "blue";
				getColor["blue"] = "yellow";
				getColor["green"] = "green";
				getColor["yellow"] = "red";
			} else if ($scope.strikes === 1) {
				getColor["red"] = "red";
				getColor["blue"] = "blue";
				getColor["green"] = "yellow";
				getColor["yellow"] = "green";
			} else {
				getColor["red"] = "yellow";
				getColor["blue"] = "green";
				getColor["green"] = "blue";
				getColor["yellow"] = "red";
			}
		}
		
		$scope.solution = getColor[$scope.color];
	};

	init();
});
