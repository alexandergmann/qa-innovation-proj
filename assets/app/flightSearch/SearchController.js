/**
 * Created by alexander.mann on 5/22/2015.
 */
app.controller('SearchController', function($scope,$state, $http, searchResultsService) {
    this.flightType = "roundTrip";
    this.departDateObject = null;
    this.returningDateObject = null;
    var self = this;
    $(document).foundation();

    this.ints = [ 1, 2, 3, 4, 5, 6 ];
    this.airportList = {
        StPaulMN: {code: "MSP", name: "Saint Paul, Minnesota (MSP)"},
        PhilPA: {code: "PHL", name: "Philadelphia, Pennsylvania (PHL)"},
        LACA: {code: "LAX", name: "Los Angeles, California (LAX)"}
    };

    this.convertToUTC = function (dateToConvert) {
        var monthUTC = dateToConvert.getUTCMonth();
        var dayUTC = dateToConvert.getUTCDate();
        var yearUTC = dateToConvert.getUTCFullYear();

        return new Date(yearUTC, monthUTC, dayUTC);
    };

    // Define both Date Picker Objects
    var departDP = $('#departDP').fdatepicker({
        format: 'mm-dd-yyyy'
    }).on('changeDate', function(ev) {
        var newDate = new Date(ev.date);
        departDP.update(newDate);
        departDP.hide();
        self.departDateObject = self.convertToUTC(newDate);
    }).data('datepicker');

    var retDP =  $('#retDP').fdatepicker({
        format: 'mm-dd-yyyy'
    }).on('changeDate', function(ev) {
        var newDate = new Date(ev.date);
        retDP.update(newDate);
        retDP.hide();
        self.returningDateObject = self.convertToUTC(newDate);
    }).data('datepicker');

    this.departDatePicker = function() {
        departDP.show();
    };

    this.retDatePicker = function() {
        retDP.show();
    };

    this.isRoundTrip = function() {
        if (self.flightType == "roundTrip") {
            $('.retDP').css('visibility', 'visible');
        } else {
            $('.retDP').css('visibility', 'hidden');
        }
    };

    this.submitSearch = function() {
        if(self.departDateObject == null && self.departAirport == null && self.arriveAirport == null) {
            // TODO add error message
            console.log("Info Required for Searching is missing");
        } else if(self.flightType == "roundTrip" && self.returningDateObject == null) {
            // TODO add error message
            console.log("Returning Date is required");
        }
        // set up queryObject for returning flights
        var queryObject = {
            dateToSearch: self.returningDateObject,
            departingAirport: self.arriveAirport,
            arrivingAirport: self.departAirport
        };

        if(self.flightType == "roundTrip") {
            $http.post('/searchForFlights', queryObject, {headers: {'Content-Type': 'application/json'}})
                .success(function (data) {
                    console.log("Search is successful");
                    if(data == null) {
                        console.log("No results found");
                        $state.go('noResults');
                    } else {
                        console.log("Results found");
                        searchResultsService.returningFlights = data;
                    }
                });
        }
        queryObject = {
            dateToSearch: self.departDateObject,
            departingAirport: self.departAirport,
            arrivingAirport: self.arriveAirport
        };
        $http.post('/searchForFlights', queryObject, {headers: {'Content-Type': 'application/json'}})
            .success(function (data) {
                console.log("Search is successful");
                if(data == null) {
                    console.log("No results found");
                    $state.go('noResults');
                } else {
                    console.log("Results found");
                    searchResultsService.departingFlights = data;
                    searchResultsService.numPassengers = $scope.numPassengers;
                    $state.go('flightSearchResults');
                }
            });
    };
});



