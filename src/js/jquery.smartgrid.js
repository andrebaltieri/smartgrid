(function ($) {

    $.fn.smartGrid = function (params) {
        var grid = '';
        
        grid += '<table class="table">';
        // Generate table header
        grid += generateHeader(params.columns);
        grid += '</table>';

        $(this).append(grid);
        return this;
    };

}(jQuery));

function generateHeader(columns) {
    var htmlContent = '';
    htmlContent += '<thead>';
    htmlContent += '<tr>';
    $(columns).each(function () {
        htmlContent += '<th>' + this.name + '</th>';
    });
    htmlContent += '</tr>';
    htmlContent += '</thead>';

    return htmlContent;
}
