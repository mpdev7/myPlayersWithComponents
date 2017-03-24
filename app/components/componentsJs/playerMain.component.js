var module = angular.module("playerApp");

module.component("playerMain", {
    templateUrl: "/app/components/componentViews/playerMain.component.html",
        $routeConfig: [
        { path: "/List", component: "playerList", name: "List", useAsDefault: true},    
        { path: "/**", redirectTo: ["List"]}
    ],
    controllerAs: "model",
    controller: function () {
        var model = this;
    }
});