$(document).ready(function() {
    var htmlActive = false, cssActive = false, javascriptActive = false, outputActive = false;
    var html = 0, css = 0, javascript = 0, output = 0;
    var totalActive = 0;
    var outputScript = "";
    var outputHtmlHead = $("iframe").contents().find("head");
    var outputHtmlBody = $("iframe").contents().find("body");

    // Button Setup
    $("#html-button").click(function() {
        $("#html").toggle(function() {
            $("#html-button").toggleClass("buttonStyle");
            htmlActive = !htmlActive;
            if(htmlActive) {
                html = 1;
            }
            else {
                html= 0;
            }
            codeSectionWidth();
            $("#html-title").toggle();

        });
    });        
    $("#css-button").click(function() {
        $("#css").toggle(function() {
            $("#css-button").toggleClass("buttonStyle");
            cssActive = !cssActive;
            if(cssActive) {
                css = 1;
            }
            else {
                css = 0;
            }
            codeSectionWidth();
            outputSectionWidth();
            $("#css-title").toggle();
        });
    });
    $("#javascript-button").click(function() {
        $("#javascript").toggle(function() {
            $("#javascript-button").toggleClass("buttonStyle");
            javascriptActive = !javascriptActive;
            if(javascriptActive) {
                javascript = 1;
            }
            else {
                javascript = 0;
            }
            codeSectionWidth();
            outputSectionWidth();
            $("#javascript-title").toggle();
        });
    });
    $("#output-button").click(function() {
        $("#output-content").toggle(function() {
            $("#output-button").toggleClass("buttonStyle");
            outputActive = !outputActive;
             if(outputActive) {
                output = 1;
            }
            else {
                output = 0;
            }
            codeSectionWidth();
            outputSectionWidth();
            $("#output-title").toggle();
        });
    });    
    
    // Change section width depending on how many open sections there are
    function codeSectionWidth() {
        totalActive = html + css + javascript + output;
        switch(totalActive) {
            case 0:
                break;
            case 1:
                $(".code-content").css("width", "100%");
                $(".code-content").css("margin-left", "-3px");
                break;
            case 2:
                $(".code-content").css("width", "49%");
                $(".code-content").css("margin", "20px auto auto 4px");
                break;
            case 3:
                $(".code-content").css("width", "32%");
                $(".code-content").css("margin", "20px auto auto 8px");
                break;
            case 4:
                $(".code-content").css("width", "25%");
                break;
        }
    }
    function outputSectionWidth() {
        totalActive = html + css + javascript + output;
        switch(totalActive) {
            case 0:
                break;
            case 1:
                $("#output-content").css("width", "100%");
                $("#output-content").css("margin-left", "-3px");
                break;
            case 2:
                $(".code-content").css("width", "49%");
                $(".code-content").css("margin", "20px auto auto 6px");
                $("#output-content").css("margin", "20px auto auto 6px");
                $("#output-content").css("width", "49%");
                break;
            case 3:
                $(".code-content").css("width", "32%");
                $("#output-content").css("width", "32%");
                $(".code-content").css("margin", "20px auto auto 10px");
                $("#output-content").css("margin", "20px auto auto 10px");
                break;
            case 4:
                $(".code-content").css("width", "24%");
                $(".code-content").css("margin-left", "5px");
                $("#output-content").css("margin-left", "5px");
                $("#output-content").css("width", "24%");
                break;
        }
    }

    // Prep iframe for css and javascript
    outputHtmlHead.append("<style type='text/css'></style>");
    outputHtmlHead.append($("<script>" + outputScript + "</script>"));
    
    // HTML content setup and iframe HTML code placement
    $("#html").keyup(function() {
        outputHtmlBody.html($("#html").val());     
    });

    // CSS live coding setup and iframe CSS code placement
    $("#css").keyup(function() {
        $("iframe").contents().find("style").html($("#css").val());
    });
    
    // Javascript live coding setup
    $("#javascript").keyup(function() {
        /* Figure out this function of the program once more knowledge is obtained about to make this 
        work in a secure way. 
        */
    });
});