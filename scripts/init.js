require(['libs/knockout-3.5.1', 'appViewModel'], function(ko, appViewModel) {

    ko.applyBindings(new appViewModel());
});