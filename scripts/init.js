require(['libs/knockout-3.5.1', 'sectionOneViewModel', 'sectionTwoViewModel', 'sectionThreeViewModel', 'customBindingHandlers/somebindingHandlers'], function (ko, sectionOneViewModel, sectionTwoViewModel, sectionThreeViewModel) {

    function httpGetAsync(theUrl, callback) {
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.onreadystatechange = function () {
            if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
                callback(xmlHttp.responseText);
        }
        xmlHttp.open("GET", theUrl, true); // true for asynchronous 
        xmlHttp.send(null);
    }

    httpGetAsync("/scripts/templates.html", function (response) {
        let div = document.createElement('div');
        div.innerHTML = response;
        div.style.display = 'none';
        document.body.appendChild(div);

        bindAll();
    })
    function bindAll() {

        ko.applyBindings(new sectionOneViewModel(), document.getElementById("section-one"));

        ko.applyBindings(new sectionTwoViewModel(), document.getElementById("section-two"));

        ko.applyBindings(new sectionThreeViewModel(), document.getElementById("section-three"));
    }
});