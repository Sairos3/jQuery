var language = ["HTML", "CSS", "JavaScript", "PHP", "Java", "Python",
"C", "C++", "C#", "Perl", "Ruby", "Scala", "COBOL", "Basic",
"Fortran", "Lisp", "TypeScript"] 

$("document").ready(function() {
$("#input").autocomplete({
    source: language
},{})
    $("#date").datepicker({
        showOtherMonths: true,
        selectOtherMonths: true,
        showButtonPanel: true,
        changeMonth: true,
        changeYear: true,
        minDate: new Date(2016, 1, 5),
        maxDate: new Date(2023, 1, 6),
        numberOfMonths: 1, 
        beforeShow: function(input, inst) {
            var div1Offset = $("#div1").offset();
            var inputOffset = $(input).offset();
            var calendarHeight = inst.dpDiv.outerHeight();
            
            if (inputOffset.top + calendarHeight > div1Offset.top + $("#div1").height()) {
                inst.dpDiv.css("top", inputOffset.top - calendarHeight - 20);
            }
        }
    });

    $("#div2").accordion({
        collapsible: true,
        heightStyle: "content",
        animate: 1000,
        event: "mouseover"
    });

    $("#btn1").click(function () { 
        $("#dialog").dialog("open")   
    });

    $("#dialog").dialog({
        title:"Title using property",
        position: { my: "right top", at: "right top", of: window },
        autoOpen: false,
        draggable: true,
        resizable: true,
        closeOnEscape: true,
        modal: true
    })
});
