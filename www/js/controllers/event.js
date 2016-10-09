/**
 * Created by izel on 22-09-16.
 */
angular.module('starter.controllers').controller('eventCtrl',function($scope,$timeout,$ionicModal,eventsFactory,$cordovaBarcodeScanner,$window,COLORS,ionicDatePicker){

  $scope.data= {
    search:{
      name:''
    },
    event:{}
  };
  $scope.events = eventsFactory.all();

  $scope.remove = function(chat) {
    eventsFactory.remove(chat);
  };

  var ipObj1 = {
    callback: function (val) {  //Mandatory
      var date=new Date(val);
      $scope.data.event.dayEvent=date.getTime();
      $scope.data.event.dayEventString=date.getDate()+'/'+(date.getMonth()+1)+'/'+date.getFullYear();

      console.log($scope.data.event);

    },
    from: new Date(), //Optional
    inputDate: new Date(),      //Optional
    mondayFirst: true,          //Optional
    disableWeekdays: [0],       //Optional
    closeOnSelect: false,       //Optional
    showTodayButton:false,
    templateType: 'popup'       //Optional
  };


  $scope.fn={
    initLetter:function(event){
      event.initialLetter=event.name.charAt(0).toUpperCase();
    },
    randomColor:function(event){
      var ind = Math.floor((Math.random() * COLORS.length));
      event.color=COLORS[ind];
    },
    modal:{
      newEvent:function(){
        $scope.modal.show();
      },
      close:function(){
        $scope.data.event={};
        $scope.modal.hide();
      },
      readQr:function () {
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
      },
      saveEvent:function () {
       /* $timeout(function () {
          $scope.events.unshift($scope.data.event);
          console.log($scope.data.event)
        },200);*/
        $scope.events.push($scope.data.event);

        $scope.fn.modal.close();

      },
      openDatePicker:function(){
        ionicDatePicker.openDatePicker(ipObj1);
      }

    }
  };
  $ionicModal.fromTemplateUrl('AM.modal.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modal = modal;
  });
  $scope.openModal = function() {
    $scope.modal.show();
  };
  $scope.closeModal = function() {
    $scope.modal.hide();
  };
});
