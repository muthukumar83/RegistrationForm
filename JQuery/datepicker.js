$(function() {
    dpmode='';
    var startDate='0';
    var endDate='0';

   

    $( "#from" ).datepicker({
        minDate: 0,
        dateFormat:"yy-mm-dd",
        changeMonth: true,
        numberOfMonths: 1,
        beforeShow:function(input, calendar){
            menuLocked=true;
            dpmode='depart';
        },
        beforeShowDay: function(date) {
            var date1 = $.datepicker.parseDate("yy-mm-dd", $("#from").val());
            var date2 = $.datepicker.parseDate("yy-mm-dd", $("#to").val());
            return [true, date1 && date2 && ((date.getTime() == date1.getTime()) || (date2 && date >= date1 && date <= date2)) ? "dp-highlight" : ""];

        },
        onClose: function( selectedDate ) {
            $( "#to" ).datepicker( "option", "minDate", selectedDate );
            $('#to').datepicker('show');
            startDate = selectedDate;
        }
    });
    $( "#to" ).datepicker({
        dateFormat:"yy-mm-dd",
        minDate:0,
        setDate: new Date(),
        changeMonth: true,
        numberOfMonths: 1,
        beforeShow:function(){
            dpmode='return'; 
        },
        beforeShowDay: function(date) {
            var date1 = $.datepicker.parseDate("yy-mm-dd", $("#from").val());
            var date2 = $.datepicker.parseDate("yy-mm-dd", $("#to").val());
            return [true, date1 && date2 && ((date.getTime() == date1.getTime()) || (date2 && date >= date1 && date <= date2)) ? "dp-highlight" : ""];
        },
        onClose: function( selectedDate ) {
            $( "#from" ).datepicker( "option", "maxDate", selectedDate );
            endDate = selectedDate;
        }
    });

    $('#ui-datepicker-div').delegate('.ui-datepicker-calendar td', 'mouseover', function() {
        if ($(this).data('year')==undefined)return;
        if (dpmode=='depart' && endDate=='0')return;
        if (dpmode=='return' && startDate=='0')return;
        
        var currentDate = $(this).data('year')+'-'+($(this).data('month')+1)+'-'+$('a',this).html();
        currentDate = $.datepicker.parseDate("yy-mm-dd",currentDate).getTime();
        if (dpmode=='depart') {
            var StartDate = currentDate;
            var EndDate = $.datepicker.parseDate("yy-mm-dd",endDate).getTime(); 
        }else{
            var StartDate = $.datepicker.parseDate("yy-mm-dd",startDate).getTime();
            var EndDate = currentDate; 
        };
        $('#ui-datepicker-div td').each(function(index, el) {
            if ($(this).data('year')==undefined)return;
            var currentDate = $(this).data('year')+'-'+($(this).data('month')+1)+'-'+$('a',this).html();

currentDate=$.datepicker.parseDate("yy-mm-dd",currentDate).getTime();
if (currentDate >= StartDate && currentDate <= EndDate) {
$(this).addClass('dp-highlight')
}else{
$(this).removeClass('dp-highlight')
};
});
});
});