
define(['libs/knockout-3.5.1'], function(ko) {

    const sectionOneViewModel = function() {

        this.firstName = ko.observable('Bert');

        this.firstNameCaps = ko.pureComputed(function() {

            return this.firstName().toUpperCase();

        }, this);

        this.isEditingName = ko.observable();
    };

    return sectionOneViewModel;
});