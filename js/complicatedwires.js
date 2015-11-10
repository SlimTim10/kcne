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
		$scope.serialNumberEven = "";
		$scope.parallelPort = "";
		$scope.batteries = "";
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

	$scope.selectSerialNumberEven = function(b) {
		$scope.serialNumberEven = b;
	};

	$scope.selectParallelPort = function(b) {
		$scope.parallelPort = b;
	};

	$scope.selectBatteries = function(n) {
		$scope.batteries = n;
	};

	$scope.solve = function() {
		for (var i = 0; i < $scope.combinations.length; i++) {
			$scope.combinations[i]["solution"] = cutOrNot($scope.combinations[i]);
		}
	};

	var cutOrNot = function(combination) {
		var red = combination["wire"]["red"];
		var blue = combination["wire"]["blue"];
		var white = combination["wire"]["white"];
		var star = combination["star"];
		var LED = combination["LED"];
		var cut = false;

		// No wire
		if (!red && !blue && !white) {
			return "";
		}

		if ($scope.serialNumberEven === "") {
			return "Check the serial number!";
		}
		if ($scope.parallelPort === "") {
			return "Check for a parallel port!";
		}
		if ($scope.batteries === "") {
			return "Check the number of batteries!";
		}

		if (
			(!red &&
			 !blue &&
			 !star &&
			 !LED) ||
				
			(red &&
			 !blue &&
			 star &&
			 !LED) ||
				
			(!red &&
			 !blue &&
			 star &&
			 !LED) ||
				
			(red &&
			 !blue &&
			 !star &&
			 !LED &&
			 $scope.serialNumberEven) ||

			(!red &&
			 blue &&
			 !star &&
			 !LED &&
			 $scope.serialNumberEven) ||

			(red &&
			 blue &&
			 !star &&
			 !LED &&
			 $scope.serialNumberEven) ||

			(!red &&
			 blue &&
			 !star &&
			 LED &&
			 $scope.parallelPort) ||

			(red &&
			 blue &&
			 star &&
			 !LED &&
			 $scope.parallelPort) ||

			(!red &&
			 blue &&
			 star &&
			 LED &&
			 $scope.parallelPort) ||

			(red &&
			 !blue &&
			 LED &&
			 $scope.batteries >= 2) ||

			(!red &&
			 !blue &&
			 star &&
			 LED &&
			 $scope.batteries >= 2)
		) {
			cut = true;
		}

		if (cut) {
			return "Cut!";
		} else {
			return "Do not cut.";
		}
	};

	init();
});
