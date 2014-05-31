(function($) {
 
    $.fn.smartGrid = function(columns) {
        
        columns.each(function(index, value) {
            $(this).append("<li>" + value + "</li>");
        });
        
        return this;
    };
 
}(jQuery));
