/**
 * Created by alexander.mann on 6/24/2015.
 */
app.controller('ConfirmationScreenController', function($scope,$state, $http, searchResultsService, userService) {
    var self = this;

    this.selectedDepartFlight = searchResultsService.selectedDepartingFlight;
    this.selectedReturnFlight = searchResultsService.selectedReturningFlight;
    this.numPassengers = searchResultsService.numPassengers;

    var returningTotalPrice = 0;
    if(self.selectedReturnFlight == null) {
        returningTotalPrice = self.selectedReturnFlight.price * self.numPassengers;
    }
    this.totalPrice = (self.selectedDepartFlight.price * self.numPassengers) + returningTotalPrice;



});