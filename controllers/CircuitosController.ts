interface ICircuitosControllerScope extends ng.IScope {
    vm: CircuitosController;
}

class CircuitosController implements ng.IController {

       
    public titulo: string;
    public circuitos = Array<ICircuito>();
    public markers = [];

    public circuito1: ICircuito;

    public initMap;

    public static $inject = ["$scope", "circuitosMundial"];

    constructor(private $scope: ICircuitosControllerScope, circuitosMundial: any) {

        console.debug('CircuitosController constructor');

        $scope.vm = this;
        $scope.vm.titulo = "Circuitos"; 
        $scope.vm.circuitos = circuitosMundial;
        $scope.vm.markers = $scope.vm.circuitos.map( (elem)=> {
            return {
                "lat": elem.Location.lat,
                "long": elem.Location.long,
                "localidad": elem.Location.locality
            }
        });      


        $scope.vm.circuito1  =  $scope.vm.circuitos[0];
        



    }
    //constructor
}
  