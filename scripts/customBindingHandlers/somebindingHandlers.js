define(['libs/knockout-3.5.1'], function(ko){

    /*  These handlers can be defined in different files. Only thing is declare it in init.js */

    ko.bindingHandlers.ojComponent = {

        init: function(element, valueAccessor){

            let value = valueAccessor();

            element.innerHTML = `<h3>${value.component}</h3>`;
        }
    }

    ko.bindingHandlers.hasFocus = {

        init: function(element, valueAccessor) {

            element.addEventListener("focus", function() {

                var value = valueAccessor();

                value(true);
            });
          
            element.addEventListener("blur", function() {

                var value = valueAccessor();

                value(false);
            });
        },
        update: function(element, valueAccessor) {

            var value = valueAccessor();

            if (ko.unwrap(value)){

                element.focus();

            } else {
                
                element.blur();
            }
        }
    };
});