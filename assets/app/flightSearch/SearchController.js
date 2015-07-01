/**
 * Created by alexander.mann on 5/22/2015.
 */
app.controller('SearchController', function($scope,$state, $http, searchResultsService, userService) {
    this.flightType = "roundTrip";
    searchResultsService.roundTrip = true;
    this.departDateObject = null;
    this.returningDateObject = null;
    var self = this;
    $(document).foundation();

    this.ints = [ 1, 2, 3, 4, 5, 6 ];
    this.airportList = {
        StPaulMN: {code: "MSP", name: "Saint Paul, Minnesota (MSP)"},
        PhilPA: {code: "PHL", name: "Philadelphia, Pensylvania (PHL)"},
        LACA: {code: "LAX", name: "Los Angles, California (LAX)"}
    };

    this.convertToUTC = function (dateToConvert) {
        var monthUTC = dateToConvert.getUTCMonth();
        var dayUTC = dateToConvert.getUTCDate();
        var yearUTC = dateToConvert.getUTCFullYear();

        return new Date(yearUTC, monthUTC, dayUTC);
    };

    // Define both Date Picker Objects
    var returnDP = $('#returnDP').fdatepicker({
        format: 'mm-dd-yyyy'
    }).on('changeDate', function(ev) {
        var newReturnDate = new Date(ev.date);
        returnDP.update(newReturnDate);
        returnDP.hide();
        self.returningDateObject = self.convertToUTC(newReturnDate);
    }).data('datepicker');

    var departDP =  $('#departDP').fdatepicker({
        format: 'mm-dd-yyyy'
    }).on('changeDate', function(ev) {
        var newDepartDate = new Date(ev.date);
        departDP.update(newDepartDate);
        departDP.hide();
        self.departDateObject = self.convertToUTC(newDepartDate);
    }).data('datepicker');

    this.retDatePicker = function() {
        returnDP.show();
    };

    this.departDatePicker = function() {
        departDP.show();
    };

    this.isRoundTrip = function() {
        if (self.flightType == "roundTrip") {
            $('.returnDP').css('visibility', 'visible');
            searchResultsService.roundTrip = true;
        } else {
            $('.returnDP').css('visibility', 'hidden');
            searchResultsService.roundTrip = false;
        }
    };

    this.submitSearch = function() {
        if(self.departDateObject == null && self.departAirportSelection == "" && self.arriveAirportSelection == "") {
            // TODO add error message
            console.log("Info Required for Searching is missing");
        } else if(self.flightType == "roundTrip" && self.returningDateObject == null) {
            // TODO add error message
            console.log("Returning Date is required");
        }
        // set up queryObject for returning flights
        var queryObject = {
            dateToSearch: self.returningDateObject,
            departingAirport: self.arriveAirportSelection,
            arrivingAirport: self.departAirportSelection
        };

        var queryObject2 = {
            dateToSearch: self.departDateObject,
            departingAirport: self.departAirportSelection,
            arrivingAirport: self.arriveAirportSelection
        };

        $http.post('/searchForFlights', queryObject, {headers: {'Content-Type': 'application/json'}})
                .success(function (data) {
                    if(data.length == 0) {
                    } else {
                        searchResultsService.returningFlights = data;
                    }
                });

        $http.post('/searchForFlights', queryObject2, {headers: {'Content-Type': 'application/json'}})
            .success(function (data) {
                if(data.length == 0) {
                    $state.go('noResults', {userId: userService.user._id});
                } else {
                    searchResultsService.departingFlights = data;
                    searchResultsService.numPassengers = $scope.numPassengers;
                    $state.go('flightSearchResults', {userId: userService.user._id});
                }
            });
    };
});



