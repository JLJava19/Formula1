/*
 *   ATENCION: las vueltas de los servicios están sin tipar (todos los servicios devuelven any)
 *   Se deben crear los interfaces necesarios a partir de la documentacion de ergast
 */

interface IErgastService {

   /**
   * peticion GET a servicio rest de http://ergast.com
   * @see http://ergast.com/api/f1/2017/driverStandings.json
   * @return Promesa con array de IDriverStandings
   */
  getDrivers(): angular.IPromise<IDriverStandings[]>;
  /**
   * peticion GET a servicio rest de http://ergast.com
   * @see http://ergast.com/api/f1/2017/drivers/ + id + /driverStandings.json
   * @return Promesa con IDriver
   */
  getDriverDetails(id: string): angular.IPromise<IDriver>;


  getDriverRaces(id: string): angular.IPromise<any>;

  /**
   * peticion GET a servicio rest de http://ergast.com
   * @see http://ergast.com/mrd/methods/circuits/
   * @return Promesa con array de ICircuito
   */
  getCircuitos(): angular.IPromise<ICircuito[]>;
}

class ErgastService implements IErgastService {

  private http: ng.IHttpService;

  constructor($http) {
    this.http = $http;
  }

  public getDrivers = (): angular.IPromise<IDriverStandings[]> => {
    return this.http.get("http://ergast.com/api/f1/2017/driverStandings.json").then(result => {
      return result.data['MRData'].StandingsTable.StandingsLists[0].DriverStandings;
    });
  }

  public getDriverDetails = (id): angular.IPromise<IDriver> => {
    return this.http
      .get("http://ergast.com/api/f1/2017/drivers/" + id + "/driverStandings.json")
      .then(response => {
        return response.data['MRData'].StandingsTable.StandingsLists[0].DriverStandings[0];
      });
  }

  public getDriverRaces = (id) => {
    return this.http
      .get<any>("http://ergast.com/api/f1/2017/drivers/" + id + "/results.json")
      .then(response => {
        return response.data['MRData'].RaceTable.Races;
      });
  }


  public getCircuitos = (): angular.IPromise<ICircuito[]> => {

    let url = 'http://ergast.com/api/f1/circuits.json';
    console.trace('ErgastService getCircuitos ' + url);

    return this.http.get(url).then(
      (response)=>{
        console.debug("llamada correcta %o ", response);
        const circuitsJson = response.data['MRData'].CircuitTable.Circuits;        
        return circuitsJson;
      }
    );

  }
  //getCircuitos

}
