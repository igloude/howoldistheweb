moment.relativeTimeThreshold('d', 20000); // 20,000 days? That ought to do it.

var date = moment("1990-12-20").toNow(true); // "xxxx days"
    date = date.split(" ")[0]; // remove " days"

$(document).ready(function() {
    $('#days').animate({
        Counter: date
    }, {
        duration: 1500,
        step: function(now) {
            var step = Math.ceil(now);
            var stepLength = step.toString().length;

            // add 0's to step #'s up to 4 digits
            if (stepLength == 1) step = "000" + step;
            else if (stepLength == 2) step = "00" + step;
            else if (stepLength == 3) step = "0" + step;

            $('#days').text(step);
        }
    });
});
