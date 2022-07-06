require(['libs/knockout-3.5.1', 'sectionOneViewModel', 'sectionTwoViewModel'], function(ko, sectionOneViewModel, sectionTwoViewModel) {

    ko.applyBindings(new sectionOneViewModel(), document.getElementById("section-one"));

    ko.applyBindings(new sectionTwoViewModel(), document.getElementById("section-two"));
});