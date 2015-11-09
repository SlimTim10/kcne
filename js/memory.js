kcneApp.controller("MemoryCtrl", function($scope) {
	var positionWords = {
		1: "first",
		2: "second",
		3: "third",
		4: "fourth"
	};
	
	var init = function() {
		$scope.reset();
	};

	$scope.reset = function() {
		$scope.stages = [];
		for (var i = 0; i < 5; i++) {
			$scope.stages.push({
				display: "",
				label: "",
				position: "",
				solution: "",
				hide: true
			});
		}
		$scope.stages[0]["hide"] = false;
	};

	$scope.selectDisplay = function(stage, display) {
		$scope.stages[stage]["display"] = display;
		$scope.stages[stage]["solution"] = solve(stage, display);
	};

	$scope.selectLabel = function(stage, label) {
		$scope.stages[stage]["label"] = label;
		if ($scope.stages[stage]["position"] !== "" && stage < 4) {
			$scope.stages[stage + 1]["hide"] = false;
		}
	};

	$scope.selectPosition = function(stage, position) {
		$scope.stages[stage]["position"] = position;
		if ($scope.stages[stage]["label"] !== "" && stage < 4) {
			$scope.stages[stage + 1]["hide"] = false;
		}
	};

	createSolutions = function() {
		var solutions = [
			// Stage 1
			{
				1: {
					label: "",
					position: 2
				},
				2: {
					label: "",
					position: 2
				},
				3: {
					label: "",
					position: 3
				},
				4: {
					label: "",
					position: 4
				}
			},
			// Stage 2
			{
				1: {
					label: 4,
					position: ""
				},
				2: {
					label: "",
					position: $scope.stages[0]["position"]
				},
				3: {
					label: "",
					position: 1
				},
				4: {
					label: "",
					position: $scope.stages[0]["position"]
				}
			},
			// Stage 3
			{
				1: {
					label: $scope.stages[1]["label"],
					position: ""
				},
				2: {
					label: $scope.stages[0]["label"],
					position: ""
				},
				3: {
					label: "",
					position: 3
				},
				4: {
					label: 4,
					position: ""
				}
			},
			// Stage 4
			{
				1: {
					label: "",
					position: $scope.stages[0]["position"]
				},
				2: {
					label: "",
					position: 1
				},
				3: {
					label: "",
					position: $scope.stages[1]["position"]
				},
				4: {
					label: "",
					position: $scope.stages[1]["position"]
				}
			},
			// Stage 5
			{
				1: {
					label: $scope.stages[0]["label"],
					position: ""
				},
				2: {
					label: $scope.stages[1]["label"],
					position: ""
				},
				3: {
					label: $scope.stages[3]["label"],
					position: ""
				},
				4: {
					label: $scope.stages[2]["label"],
					position: ""
				}
			}
		];
		return solutions;
	};

	var solve = function(stage, display) {
		var solutions = createSolutions();
		
		var label = solutions[stage][display]["label"];
		var position = solutions[stage][display]["position"];
		var positionWord = positionWords[position];

		var solution = "";
		if (label !== "") {
			$scope.stages[stage]["label"] = label;
			solution = "Press the button labeled \"" + label + "\".";
			if (stage < 4) {
				solution += " What is its position?";
			}
		} else if (position !== "") {
			$scope.stages[stage]["position"] = position;
			solution = "Press the button in the " + positionWord + " position.";
			if (stage < 4) {
				solution += " What is its label?";
			}
		}
		
		return solution;
	};

	init();
});
