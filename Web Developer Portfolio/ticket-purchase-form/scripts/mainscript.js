soccerdates = ["march31", "april1", "april8", "april14", "april18", "april21","april29"];
    function processForm(soccertickets) {

    // Form validation
    var name = soccertickets.yourname.value;
    var letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    // Check first letter of name
    if (letters.indexOf(name.charAt(0)) == -1) {
        alert("Name must begin with a letter");
        return false;
    }

    // Check other letters of name
    for (i = 1; i < name.length; i++) {
        if (letters.indexOf(name.charAt(i)) == -1) {
        alert("Name contains an invalid character");
        return false;
        }
    }

    // Ticket processing
    let msg = "";
    let totalcost = 0, ticketcount = 0;
    
    for(dateSelection = 0; dateSelection < soccerdates.length; dateSelection++) {
        // Check if date is selected. If it is, continue with getting ticket
        // amount and price for date. Otherwise set quantity for that date to be 0
        var checkitem = eval("soccertickets." + soccerdates[dateSelection] + "check");
        var qtyitem = eval("soccertickets." + soccerdates[dateSelection] + "qty");
        var qtyitemval = qtyitem.value;
        let finalmsg;
        
        if (!checkitem.checked) {
        qtyitemval = 0;
        }
        else {
        ticketcount++;
        // Add comma to separate ticket orders for multiple dates
        if (ticketcount > 1) {
            msg += ", ";
        }
        if (qtyitemval > 0) {
            // Get ticket price for this date
            var priceitem = eval("soccertickets." + soccerdates[dateSelection] + "price");
            var priceitemval = priceitem.value;
            var itemcost = parseInt(qtyitemval) * parseFloat(priceitemval);
            totalcost += itemcost;

            msg += qtyitemval + " ticket(s) for " + soccerdates[dateSelection] + " at a price of $" + priceitemval + " per ticket";
            msg += " for a total of $" + itemcost.toFixed(2);
        }
        else {
            msg += "0 tickets for " + soccerdates[dateSelection] + " costing $0.00";
        }
        }
    }
    
    if (ticketcount == 0) {
        finalmsg = "You did not order any tickets, so you owe $0.00. Thank you.";
    }
    else {
        finalmsg = "You ordered " + msg + ". The grand total amount owed " + " is $" + totalcost.toFixed(2) + ". Thank you!";
    }

    document.getElementById('output').innerHTML = finalmsg;
    return false;
    }