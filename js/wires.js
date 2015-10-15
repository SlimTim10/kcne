kcneApp.controller("WiresCtrl", function($scope) {
	var init = function() {
		$scope.reset();
	};

	$scope.reset = function() {
		$scope.wires = ["", "", "", "", "", ""];
		$scope.serialOddEven = "";
		$scope.solution = "";
	};

	$scope.selectWire = function(n, color) {
		$scope.wires[n] = color;
	};

	$scope.selectSerialOddEven = function(selection) {
		$scope.serialOddEven = selection;
	};

	$scope.solve = function() {
		var red_count = 0, blue_count = 0, yellow_count = 0, white_count = 0, black_count = 0;
		var wires = [];
		for (var i = 0; i < $scope.wires.length; i++) {
			switch ($scope.wires[i]) {
			case "red":
				wires.push($scope.wires[i]);
				red_count++;
				break;
			case "blue":
				wires.push($scope.wires[i]);
				blue_count++;
				break;
			case "yellow":
				wires.push($scope.wires[i]);
				yellow_count++;
				break;
			case "white":
				wires.push($scope.wires[i]);
				white_count++;
				break;
			case "black":
				wires.push($scope.wires[i]);
				black_count++;
				break;
			}
		}
		
		var total = wires.length;
		var lastWire = wires[total - 1];
		var cutWire = "";
		switch (total) {
		case 3:
			if (red_count === 0) {
				cutWire = "second";
			} else if (lastWire == "white") {
				cutWire = "last";
			} else if (blue_count > 1) {
				cutWire = "last blue";
			} else {
				cutWire = "last";
			}
			break;
		case 4:
			if (red_count > 1 && $scope.serialOddEven === "") {
				$scope.solution = "Check the serial number!";
			} else if (red_count > 1 && $scope.serialOddEven === "odd") {
				cutWire = "last red";
			} else if (lastWire === "yellow" && red_count === 0) {
				cutWire = "first";
			} else if (blue_count === 1) {
				cutWire = "first";
			} else if (yellow_count > 1) {
				cutWire = "last";
			} else {
				cutWire = "second";
			}
			break;
		case 5:
			if (lastWire === "black" && $scope.serialOddEven === "") {
				$scope.solution = "Check the serial number!";
			} else if (lastWire === "black" && $scope.serialOddEven === "odd") {
				cutWire = "fourth";
			} else if (red_count === 1 && yellow_count > 1) {
				cutWire = "first";
			} else if (black_count === 0) {
				cutWire = "second";
			} else {
				cutWire = "first";
			}
			break;
		case 6:
			if (yellow_count === 0 && $scope.serialOddEven === "") {
				$scope.solution = "Check the serial number!";
			} else if (yellow_count === 0 && $scope.serialOddEven === "odd") {
				cutWire = "third";
			} else if (yellow_count === 1 && white_count > 1) {
				cutWire = "fourth";
			} else if (red_count === 0) {
				cutWire = "last";
			} else {
				cutWire = "fourth";
			}
			break;
		}

		if (cutWire !== "") {
			$scope.solution = "Cut the " + cutWire + " wire.";
		}
	};

	init();
});
