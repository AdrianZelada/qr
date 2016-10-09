/**
 * Created by izel on 22-09-16.
 */
angular.module('starter.controllers').controller('readQrCtrl',function($scope,$window,$cordovaBarcodeScanner){

  $scope.data={
    status:'ok',
    recicle:false
  };

  $scope.scanBarcode = function() {
    console.log("scaner");
    if(!$window.cordova)
      return false;
    $cordovaBarcodeScanner.scan().then(function(imageData) {
      alert(imageData.text);
      console.log("Barcode Format -> " + imageData.format);
      console.log("Cancelled -> " + imageData.cancelled);
    }, function(error) {
      console.log("An error happened -> " + error);
    });
  };


});
