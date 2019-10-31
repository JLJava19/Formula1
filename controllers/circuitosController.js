var CircuitosController = (function () {
    function CircuitosController($scope, circuitosMundial) {
        this.$scope = $scope;
        this.circuitos = Array();
        this.markers = [];
        console.debug('CircuitosController constructor');
        $scope.vm = this;
        $scope.vm.titulo = "Circuitos";
        $scope.vm.circuitos = circuitosMundial;
        $scope.vm.markers = $scope.vm.circuitos.map(function (elem) {
            return {
                "lat": elem.Location.lat,
                "long": elem.Location.long,
                "localidad": elem.Location.locality
            };
        });
        $scope.vm.circuito1 = $scope.vm.circuitos[0];
    }
    CircuitosController.$inject = ["$scope", "circuitosMundial"];
    return CircuitosController;
}());
//# sourceMappingURL=CircuitosController.js.map