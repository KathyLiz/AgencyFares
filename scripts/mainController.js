var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
  $scope.firstName= "John";
  $scope.lastName= "Doe";

  $scope.moneyFormats= [{currencySimbol:"USD", currencyPosition:"after",showCents:true, decimalSeparator:"dot", enabled:true}, {currencySimbol:"USD", currencyPosition:"after",showCents:true, decimalSeparator:"comma",  enabled:false}];

  $scope.callGetRow = function(line) {
    alert(line);
};

$scope.callAddNew = function() {
    //$('#example').DataTable().row.add(["2.0","Item 2", "Generic Desc", "2", 200]).draw();
    $scope.moneyFormats.push({currencySimbol:"EUR", currencyPosition:"after",showCents:true, decimalSeparator:"dot", enabled:false});
}; 

$scope.deleteFare = function(index){
 console.log(index);
 $scope.moneyFormats.splice(index, 1);
}
});