var motoGP = [
    {
        circuit: 'Losail',
        location: 'Qatar',
        winner: {
            firstName: 'Andrea',
            lastName: 'Davizioso',
            country: 'Italy'
        }
    },
    {
        circuit: 'AutoDromo',
        location: 'Argetine',
        winner: {
            firstName: 'Cal',
            lastName: 'Cruthlow',
            country: 'UK'
        }
    },
    {   
        circuit: 'De Jerez',
        location: 'Spain',
        winner: {
            firstName: 'Valentino',
            lastName: 'Rossi',
            country: 'Italy'
        }
    },
    {
        circuit: 'Mugello',
        location: 'Dovizioso',
        winner: {
            firstName: 'Andrea',
            lastName: 'Davizioso',
            country: 'Italy'
        }
    },
];

var groupedData = {};

motoGP.forEach(function (race) {
    var winner = race.winner;
    var country = winner.country;

    if (!groupedData[country]) {
        groupedData[country] = {
            WinningCircuits: [],
            totalWin: 0
        };
    }

    groupedData[country].WinningCircuits.push({
        name: winner.firstName + ' ' + winner.lastName,
        winLocation: race.circuit + ', ' + race.location
    });

    groupedData[country].totalWin++;
});

console.log(JSON.stringify(groupedData, null, 2));
