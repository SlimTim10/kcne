kcneApp.controller("WireSequencesCtrl", function($scope) {
	var numPanels = 4;
	
	var init = function() {
		$scope.reset();
	};

	$scope.reset = function() {
		$scope.sequences = [];
		for (var i = 0; i < 12; i++) {
			$scope.sequences.push({
				color: "",
				letter: "",
				solution: "",
				hide: true
			});
		}
		$scope.panel = 1;
		showPanel();
	};

	var hideAll = function() {
		for (var i = 0; i < 12; i++) {
			$scope.sequences[i]["hide"] = true;
		}
	};

	var showPanel = function() {
		hideAll();
		var start = ($scope.panel - 1) * 3;
		var end = start + 3;
		for (var i = start; i < end; i++) {
			$scope.sequences[i]["hide"] = false;
		}
	};

	$scope.nextPanel = function() {
		$scope.panel++;
		if ($scope.panel > numPanels) $scope.panel = 1;
		showPanel();
	};

	$scope.prevPanel = function() {
		$scope.panel--;
		if ($scope.panel < 1) $scope.panel = numPanels;
		showPanel();
	}

	$scope.selectColor = function(n, color) {
		$scope.sequences[n]["color"] = color;
		solve(n);
	};

	$scope.selectLetter = function(n, letter) {
		$scope.sequences[n]["letter"] = letter;
		solve(n);
	};

	var nthColor = function(n, color) {
		var count = 0;
		for (var i = 0; i < n; i++) {
			if ($scope.sequences[i]["color"] === color) {
				count++;
			}
		}
		return count + 1;
	};

	var solve = function(n) {
		var color = $scope.sequences[n]["color"];
		var letter = $scope.sequences[n]["letter"];
		var cut = false;

		if (color === "" || letter === "") {
			return;
		}

		if (color === "red") {
			var occurrence = nthColor(n, "red");
			if (occurrence === 1) {
				if (letter === "C") cut = true;
			} else if (occurrence === 2) {
				if (letter === "B") cut = true;
			} else if (occurrence === 3) {
				if (letter === "A") cut = true;
			} else if (occurrence === 4) {
				if (letter === "A" || letter === "C") cut = true;
			} else if (occurrence === 5) {
				if (letter === "B") cut = true;
			} else if (occurrence === 6) {
				if (letter === "A" || letter === "C") cut = true;
			} else if (occurrence === 7) {
				if (letter === "A" || letter === "B" || letter === "C") cut = true;
			} else if (occurrence === 8) {
				if (letter === "A" || letter === "B") cut = true;
			} else if (occurrence === 9) {
				if (letter === "B") cut = true;
			}
		} else if (color === "blue") {
			var occurrence = nthColor(n, "blue");
			if (occurrence === 1) {
				if (letter === "B") cut = true;
			} else if (occurrence === 2) {
				if (letter === "A" || letter === "C") cut = true;
			} else if (occurrence === 3) {
				if (letter === "B") cut = true;
			} else if (occurrence === 4) {
				if (letter === "A") cut = true;
			} else if (occurrence === 5) {
				if (letter === "B") cut = true;
			} else if (occurrence === 6) {
				if (letter === "B" || letter === "C") cut = true;
			} else if (occurrence === 7) {
				if (letter === "C") cut = true;
			} else if (occurrence === 8) {
				if (letter === "A" || letter === "C") cut = true;
			} else if (occurrence === 9) {
				if (letter === "A") cut = true;
			}
		} else if (color === "black") {
			var occurrence = nthColor(n, "black");
			if (occurrence === 1) {
				if (letter === "A" || letter === "B" || letter === "C") cut = true;
			} else if (occurrence === 2) {
				if (letter === "A" || letter === "C") cut = true;
			} else if (occurrence === 3) {
				if (letter === "B") cut = true;
			} else if (occurrence === 4) {
				if (letter === "A" || letter === "C") cut = true;
			} else if (occurrence === 5) {
				if (letter === "B") cut = true;
			} else if (occurrence === 6) {
				if (letter === "B" || letter === "C") cut = true;
			} else if (occurrence === 7) {
				if (letter === "A" || letter === "B") cut = true;
			} else if (occurrence === 8) {
				if (letter === "C") cut = true;
			} else if (occurrence === 9) {
				if (letter === "C") cut = true;
			}
		}

		if (cut) {
			$scope.sequences[n]["solution"] = "Cut!";
		} else {
			$scope.sequences[n]["solution"] = "Do not cut.";
		}
	};

	init();
});
