
define(['libs/knockout-3.5.1', 'customBindingHandlers/hasFocus'], function(ko) {

    const appViewModel = function appViewModel() {

        this.firstName = ko.observable('Bert');

        this.firstNameCaps = ko.pureComputed(function() {

            return this.firstName().toUpperCase();

        }, this);

        this.isEditingName = ko.observable();
    };

    return appViewModel;
});