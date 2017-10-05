"use strict";

$(document).ready(function () {
    $('[data-toggle="tooltip"]').tooltip(); 

    function showHide(hide, show, showImage) {
        hide.forEach(function (el) {
            el.toggle();
            el.addClass("animated fadeIn");
        });
        $(".description").toggle();
        $(".contract").toggle();
        show.addClass("animated fadeIn");
        show.toggleClass("box shortBox");
        show.toggleClass("col-lg-4 col-lg-12");
        showImage.toggle();
        showImage.addClass("animated fadeIn bottomSpacer");
        $("#portfolio").velocity("scroll", { duration: 1000 });
    };

    //portfolio
    $("#babyReady").on("click", function () {
        showHide([$("#maintenanceLogger"), $("#findSimilar")], $("#babyReady"), $("#babyReadyImage"));
    });
    $("#maintenanceLogger").on("click", function () {
        showHide([$("#findSimilar"), $("#babyReady")], $("#maintenanceLogger"), $("#maintenanceLoggerImage"));
    });
    $("#findSimilar").on("click", function () {
        showHide([$("#maintenanceLogger"), $("#babyReady")], $("#findSimilar"), $("#findSimilarImage"));
    });
    $("#babyReadyClose").on("click", function () {
        showHide([$("#maintenanceLogger"), $("#findSimilar")], $("#babyReady"), $("#babyReadyImage"));
    });
    $("#maintenanceLoggerClose").on("click", function () {
        showHide([$("#findSimilar"), $("#babyReady")], $("#maintenanceLogger"), $("#maintenanceLoggerImage"));
    });
    $("#findSimilarClose").on("click", function () {
        showHide([$("#maintenanceLogger"), $("#babyReady")], $("#findSimilar"), $("#findSimilarImage"));
    });
    $("#noteKeeperClose").on("click", function () {
        showHide([$("#maintenanceLogger"), $("#babyReady"), $("#findSimilar")], $("#noteKeeperImage"));
    });


    //Setting Scrolls
    $(".navbar-brand").click(function () {
        $("#top").velocity("scroll", { duration: 1000 });
    });
    $(".aboutLink").click(function () {
        $("#about").velocity("scroll", { duration: 1000 });
    });
    $(".portfolioLink").click(function () {
        $("#portfolio").velocity("scroll", { duration: 1000 });
    });
    $(".contactLink").click(function () {
        $("#contact").velocity("scroll", { duration: 1000 });
    });


    // enable submit button
    function updateForm(){
        var empty = false;
        $('form input').each(function() {
            if ($(this).val() == '') {
                empty = true;
            }
        });
        
        if (empty) {
            $("#submit").attr("data-toggle", "tooltip");
            $("#submit").attr("title", "Form empty.");
            $('#submit').attr('disabled', 'disabled'); // updated according to http://stackoverflow.com/questions/7637790/how-to-remove-disabled-attribute-with-jquery-ie
        } else {
            $("#submit").removeAttr("data-toggle");
            $("#submit").removeAttr("title");
            $('#submit').removeAttr('disabled'); // updated according to http://stackoverflow.com/questions/7637790/how-to-remove-disabled-attribute-with-jquery-ie
        }
    }
    updateForm();
    $('form input').keyup(function() {
        updateForm();
    });

    function updateNavBar(){
        if($(window).width()<768) {
            $(".menu_link").attr("data-toggle", "collapse");
            $(".menu_link").attr("data-target", "#navbar-collapse-1");
            $("#about").removeClass("style5").addClass("style1");
            $("#navbarID").removeClass("navbar-inverse").addClass("navbar-default");
        }
        else {
            $(".menu_link").attr("data-toggle", "");
            $(".menu_link").attr("data-target", "");
            $("#about").removeClass("style1").addClass("style5");
            $("#navbarID").removeClass("navbar-default").addClass("navbar-inverse");
        }
    };
    updateNavBar();

    $(window).resize(function() {
        updateNavBar();
    });


});