var module = angular.module("playerApp");

module.component("playerList", {
    templateUrl: "app/components/componentViews/playerList.component.html",
    controllerAs: "model",
    controller: function () {
        var model = this;

        model.names = [{
                value: 'Matteo'
            },
            {
                value: 'Sandro'
            },
            {
                value: 'Paolo'
            },
            {
                value: 'Sandro'
            },
            {
                value: 'Moira'
            },
            {
                value: 'Andrea'
            },
            {
                value: 'Andrea'
            },
            {
                value: 'Michele'
            },
        ];
    }
});