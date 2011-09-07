// Support multiple date selectors per page

// .date
//   select.year
//   select.month
//   select.day

(function($) {
  
  $.fn.picky = function(selector) {
    if (this) {
      picky = this;
    } else {
      picky = '.picky';
    }
     
    $(document).ready(function () {
      picky.find('select').each(function(index) {
        $(this).change(function () {
          update_day_select_for($(this).closest(picky));
        });
      });
    });
  };
  
  function get_last_day_value_for(picky) {
    var last_days = [30, 29, 28, 27];
    var i = 0;
    while (i <= 3) {
      last_value_for_day = picky.find(".day").find("option:eq(" + last_days[i] + ")").val();
      if (last_value_for_day != undefined) {
        return last_value_for_day = parseInt(last_value_for_day);
        break; 
      }
      i++;
    }
  }
  
  function update_day_select_for(picky) {  
    var selected_day = picky.find(".day").val();

    // Grab the last value for the day selector
    last_value_for_day = get_last_day_value_for(picky);
    
    // Get the last valid day for selected month
    selected_month = parseInt(picky.find(".month").val());
    if ($.inArray(selected_month, [4, 6, 9, 11]) != -1) {
      last_day_of_month = 30;
    } else if (selected_month == 2) {
      if (new Date(picky.find(".year").val(),1,29).getDate() == 29) {
        last_day_of_month = 29;
      } else {
        last_day_of_month = 28;
      }
    } else {
      last_day_of_month = 31;
    }
    
    // Remove days
    if (last_value_for_day > last_day_of_month) {
      days_to_remove = last_value_for_day - last_day_of_month;
      var i = 0;
      while(i <= days_to_remove) {
        picky.find(".day").find("option:eq(" + (last_value_for_day - i) + ")").remove();
        i++;
      }
    
    // Add days
    } else if (last_day_of_month > last_value_for_day) {
      days_to_add = last_day_of_month - last_value_for_day;
      var i = 1;
      while(i <= days_to_add) {
        picky.find(".day").append("<option value='" + (last_value_for_day + i) + "'>" + (last_value_for_day + i) + "</option>");
        i++;
      }
    }
    
    // If selected day is invalid, move to last valid day
    last_value_for_day = get_last_day_value_for(picky);
    if (selected_day > last_value_for_day) {
      picky.find(".day").find("option:eq(" + (last_value_for_day - 1) + ")").attr("selected", "selected");
    }
  }
  
})(jQuery);