define(['libs/knockout-3.5.1'], function(ko){

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