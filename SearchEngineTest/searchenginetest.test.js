"@fixture SearchEngineTest";
"@page http://www.google.com";









"@test"["Accessing Gmail"] = {
    '1.Click input "Search"': function() {
        act.click("#lst-ib");
    },
    '2.Type in input "Search"': function() {
        act.type("#lst-ib", "gmail");
    },
    "3.Press key ENTER": function() {
        act.press("enter");
    },
    "4.Wait 1000 milliseconds": function() {
        act.wait(1e3);
    },
    "5.Assert1": function() {
        eq($(".r").find(" > a:nth(0)").eq(0).is(":visible"), $(".r").find(" > a:nth(0)").eq(0).is(":visible"));
    },
    '6.Click link "Gmail - Google"': function() {
        act.click(":containsExcludeChildren(Gmail Google)");
    },
    "7.Wait 1000 milliseconds": function() {
        act.wait(1e3);
    },
    "8.Assert": function() {
        eq($(".gmail-nav__nav-links-wrap").find(" > a:nth(1)").is(":visible"), $(".gmail-nav__nav-links-wrap").find(" > a:nth(1)").is(":visible"));
        eq($(".gmail-nav__nav-links-wrap").find(" > a:nth(1)").text(), $(".gmail-nav__nav-links-wrap").find(" > a:nth(1)").text());
        eq($(".gmail-nav__nav-links-wrap").find(" > a:nth(0)").is(":visible"), $(".gmail-nav__nav-links-wrap").find(" > a:nth(0)").is(":visible"));
        eq($(".gmail-nav__nav-links-wrap").find(" > a:nth(0)").text(), $(".gmail-nav__nav-links-wrap").find(" > a:nth(0)").text());
    }
};

"@test"["Accessing Youtube"] = {
    '1.Click input "Search"': function() {
        act.click("#lst-ib");
    },
    '2.Type in input "Search"': function() {
        act.type("#lst-ib", "youtube");
    },
    "3.Press key ENTER": function() {
        act.press("enter");
    },
    "4.Wait 1000 milliseconds": function() {
        act.wait(1e3);
    },
    "5.Assert1": function() {
        eq($(".r").find(" > a:nth(0)").eq(0).is(":visible"), $(".r").find(" > a:nth(0)").eq(0).is(":visible"));
    },
    '6.Click link "YouTube"': function() {
        var actionTarget = function() {
            return $(".r").find(" > a:nth(0)").eq(0);
        };
        act.click(actionTarget);
    },
    "7.Wait 1000 milliseconds": function() {
        act.wait(1e3);
    },
    "8.Assert": function() {
        eq($(".yt-simple-endpoint.style-scope.ytd-button-renderer").find(" > paper-button:nth(0)").eq(0).is(":visible"), $(".yt-simple-endpoint.style-scope.ytd-button-renderer").find(" > paper-button:nth(0)").eq(0).is(":visible"));
        eq($(".yt-simple-endpoint.style-scope.ytd-button-renderer").find(" > paper-button:nth(0)").eq(0).text(), $(".yt-simple-endpoint.style-scope.ytd-button-renderer").find(" > paper-button:nth(0)").eq(0).text());
    }
};

"@test"["Loading www.google.com"] = {
    "1.Assert1": function() {
        eq($("#gs_lc0").find(" > input:nth(0)").is(":visible"), $("#gs_lc0").find(" > input:nth(0)").is(":visible"));
        eq($(".jsb").find(" > center:nth(0) > input:nth(0)").is(":visible"), $(".jsb").find(" > center:nth(0) > input:nth(0)").is(":visible"));
        eq($(".jsb").find(" > center:nth(0) > input:nth(0)").val(), $(".jsb").find(" > center:nth(0) > input:nth(0)").val());
    }
};



"@test"["Accessing Google Plus"] = {
    "1.Wait 1000 milliseconds": function() {
        act.wait(1e3);
    },
    "2.Assert1": function() {
        ok($("#gs_lc0").find(" > input:nth(0)").is(":visible"));
        ok($(".jsb").find(" > center:nth(0) > input:nth(0)").is(":visible"));
        ok($(".jsb").find(" > center:nth(0) > input:nth(0)").val());
    },
    '3.Click input "Search"': function() {
        act.click("#lst-ib");
    },
    '4.Type in input "Search"': function() {
        act.type("#lst-ib", "google plus");
    },
    "5.Press key ENTER": function() {
        act.press("enter");
    },
    "6.Wait 1000 milliseconds": function() {
        act.wait(1e3);
    },
    "7.Assert2": function() {
        ok($(".r").find(" > a:nth(0)").eq(0).is(":visible"));
        eq($(".r").find(" > a:nth(0)").eq(0).text(), $(".r").find(" > a:nth(0)").eq(0).text());
    },
    '8.Click link "Google Plus"': function() {
        var actionTarget = function() {
            return $("#rso").find(":containsExcludeChildren(Google Plus)").eq(0);
        };
        act.click(actionTarget);
    },
    "9.Wait 1000 milliseconds": function() {
        act.wait(1e3);
    },
    "10.Assert3": function() {
        ok($(".gb_Qc").find(" > a:nth(0)").eq(1).is(":visible"));
        eq($(".gb_Qc").find(" > a:nth(0)").eq(1).text(), $(".gb_Qc").find(" > a:nth(0)").eq(1).text());
    }
};

