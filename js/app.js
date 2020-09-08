(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope){

    $scope.lunchInput ="";
    $scope.lunchMessage ="";
    $scope.lunchInputBorderColor = "";
    $scope.lunchMessageColor = "black";
    $scope.lunchHintMessage = "";

    $scope.checkLunchItems = function() {

        var result = countLunchItems($scope.lunchInput);
        if(result[0]==0){
            $scope.lunchMessage = "Please enter data first";
            $scope.lunchMessageColor = "red";
            $scope.lunchInputBorderColor = "border:1px solid #ff0000";
        }else if(result[0]<4){
            $scope.lunchMessage = "Enjoy!";
            $scope.lunchMessageColor = "green";
            $scope.lunchInputBorderColor = "border:1px solid #00ff00";
        }else{
            $scope.lunchMessage = "Too much!";
            $scope.lunchMessageColor = "green";
            $scope.lunchInputBorderColor = "border:1px solid #00ff00";
        }

        if(result[1]>0){
            $scope.lunchHintMessage = result[1]+ " empty items excluded*";
        }

    }

    $scope.clearInformColors = function() {

        $scope.lunchMessage = "";
        $scope.lunchHintMessage = "";
        $scope.lunchMessageColor = "black";
        $scope.lunchInputBorderColor ="";
    }
 
}

function countLunchItems(string){

    var counts = [0,0];

    if(string==""){
        return counts;
    }else{
        const words = string.split(',');
        var i = 0;
        for(i=0; i<words.length; i++ ){
            if(words[i].trim()!=""){counts[0]++;}
            else {counts[1]++;}
        } 
    }

    return counts; 
}


})();
