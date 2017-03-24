 var module = angular.module("playerApp");

 module.component("playerCard", {
     templateUrl: "/app/components/componentViews/playerCard.component.html",
     bindings: {
         name: '<'
     },
     controllerAs: "model",
     controller: function () {
         var model = this;

         model.$onInit = function(){
             //
             console.log(model.name);
         };
     }
 });