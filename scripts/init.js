require(['libs/knockout-3.5.1', 'sectionOneViewModel', 'sectionTwoViewModel', 'sectionThreeViewModel', 'nativePopViewModel', 'customBindingHandlers/somebindingHandlers'], function (ko, sectionOneViewModel, sectionTwoViewModel, nativePopViewModel, sectionThreeViewModel) {

    function httpGetAsync(theUrl, callback) {
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.onreadystatechange = function () {
            if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
                callback(xmlHttp.responseText);
        }
        xmlHttp.open("GET", theUrl, true); // true for asynchronous 
        xmlHttp.send(null);
    }

    function bindAll() {

        ko.applyBindings(new nativePopViewModel(), document.getElementById("native-pop"));

        ko.applyBindings(new sectionOneViewModel(), document.getElementById("section-one"));

        ko.applyBindings(new sectionTwoViewModel(), document.getElementById("section-two"));

        ko.applyBindings(new sectionThreeViewModel(), document.getElementById("section-three"));
    }

    httpGetAsync("/scripts/templates.html", function (response) {
        let div = document.createElement('div');
        div.innerHTML = response;
        div.style.display = 'none';
        document.body.appendChild(div);

        bindAll();
    });

    function attachPopup(subject, popup) {
        let boundingClientRect = subject.getBoundingClientRect();
        popup.style.top = boundingClientRect.top;
        popup.style.left = boundingClientRect.right;
    }

    let subject = document.getElementById('subject');
    let outer = document.getElementById('outer');
    let popup = document.getElementById('popup');

    attachPopup(subject, popup);

    let doIt;
    const resizeObserver = new ResizeObserver((entries) => {
        clearTimeout(doIt);
        doIt = setTimeout( function(){
            attachPopup(subject, popup)
        }, 100);
    });

    outer.addEventListener('mouseenter', function () {
        popup.style.display = "block";
    })

    outer.addEventListener('mouseleave', function () {
        popup.style.display = "none";
    })
    console.log(subject)
    resizeObserver.observe(subject);
});