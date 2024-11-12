$("document").ready(function() {
$("#input").autocomplete({
    source: ["HTML", "CSS", "JavaScript", "PHP", "Java", "Python",
    "C", "C++", "C#", "Perl", "Ruby", "Scala", "COBOL", "Basic",
    "Fortran", "Lisp", "TypeScript"] 
},{
    delay:500,
    minLenght: 1,
    autoFocus: true
})
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

    $("#btn2").click(function () { 
        console.log("GET button clicked");
        var modal = $("#dialog2").dialog("option", "height");
        alert("Box Is " + modal + "px big");
    });

    $("#btn3").click(function () { 
        console.log("SET button clicked");
        $("#dialog2").dialog("option", "height", 300);
        alert("Box Is " + modal + "px big");
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
    $("#dialog2").dialog({
        draggable: true,
        position: { my: "right", at: "right", of: window },
        resizable: true,
        closeOnEscape: true,
        modal: false,
        autoOpen: true,
        height: 250,
        width: 250
    });
    $(".box").draggable({
        //axis: "x",
        cursor: "grabbing",
        opacity: "0.5",
        //containment: "parent",
        //grid: [300, 300]
        snap: true,
        snapTolerance: 100
    })
    $(".sort").sortable({
        opacity: 0.5,
        cursor: "grabbing",
        containment: "parent",
        delay: 300,
        distance: 50
    })
    $("#cat1").resizable({
        //animate: true,
        //containment: "parent",
        maxHeight: 400,
        maxWidth: 400,
        minHeight: 150,
        minWidth: 150,
        //ghost: true
        aspectRatio: true //16/9
    }
    )
});
