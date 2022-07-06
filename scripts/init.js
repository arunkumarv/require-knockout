require(['libs/knockout-3.5.1', 'sectionOneViewModel', 'sectionTwoViewModel', 'sectionThreeViewModel', 'customBindingHandlers/somebindingHandlers'], function(ko, sectionOneViewModel, sectionTwoViewModel, sectionThreeViewModel) {

    ko.applyBindings(new sectionOneViewModel(), document.getElementById("section-one"));

    ko.applyBindings(new sectionTwoViewModel(), document.getElementById("section-two"));

    ko.applyBindings(new sectionThreeViewModel(), document.getElementById("section-three"));
});