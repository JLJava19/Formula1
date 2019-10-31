interface IAverageSpeed{
    units: string;
    speed: string;
}

interface IFastestLap{
    rank: string;
    lap: string;
    Time: ITime;
}

interface ITime{
    millis: string;
    time: string;
}

interface IResults{
    number: string;
    position: string;
    positionText: string;
    points: string;
    Driver: IDriver;
    Constructor: IConstructor;
    grid: string;
    laps: string;
    status: string;
}

interface ILocation{
    lat: string;
    long: string;
    locality: string;
    country: string;
}

interface ICircuit{
    circuitId: string;
    url: string;
    circuitName: string;
    Location: ILocation;
}

interface IRaces{
    season: string;
    round: string;
    url: string;
    raceName: string;
    Circuit: ICircuit;
    date: string;
    time: string;
    Results: IResults;    //[]
    Time: ITime;
    FastestLap: IFastestLap;
    AverageSpeed: IAverageSpeed;
    
}

interface IRaceTable{
    season: string;
    driverId: string;
    Races: IRaces;     // []

}

interface IConstructor{
    constructorId: string;
    url: string;
    name: string;
    nationality: string;

}

interface IDriver{
    driverId: string;
    permanentNumber: string;
    code: string;
    url: string;
    givenName: string;
    familyName: string;
    dateOfBirth: string;
    nationality: string;

}

interface IDriverStandings {
    position: string;
    positionText: string;
    points: string;
    wins: string;
    Driver: IDriver;
    Constructor: IConstructor;    // IConstructor[] ????
}
  