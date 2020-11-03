var viz;
var workbook;
var activeSheet;

function initViz() {
    var containerDiv = document.getElementById("myViz");
    var url = "https://public.tableau.com/views/Superstore_16044431932360/Customers";
    var  options = {
            hideTabs: true,
            hideToolbar : true,
            onFirstInteractive: function () {
                    workbook = viz.getWorkbook();
                    activeSheet = workbook.getActiveSheet()
                }
        };

    viz = new tableau.Viz(containerDiv, url, options);
}