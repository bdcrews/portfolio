"use strict";

$(document).ready(function () {

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
        $("#works").velocity("scroll", { duration: 1000, offset: -60 });
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
        $("#top").velocity("scroll", { duration: 1000, offset: -60 });
    });
    $(".aboutLink").click(function () {
        $("#about").velocity("scroll", { duration: 1000, offset: -60 });
    });
    $(".worksLink").click(function () {
        $("#works").velocity("scroll", { duration: 1000, offset: -60 });
    });
    $(".contactLink").click(function () {
        $("form").velocity("scroll", { duration: 1000, offset: -60 });
    });


    $(".contactLink").click(function () {
        $("form").velocity("scroll", { duration: 1000, offset: -60 });
    });

    function updateNavBar(){
        if($(window).width()<768) {
            $(".menu_link").attr("data-toggle", "collapse");
            $(".menu_link").attr("data-target", "#navbar-collapse-1");
            $("#about").removeClass("style5").addClass("style1");
        }
        else {
            $(".menu_link").attr("data-toggle", "");
            $(".menu_link").attr("data-target", "");
            $("#about").removeClass("style1").addClass("style5");
        }
    };
    updateNavBar();

    $(window).resize(function() {
        updateNavBar();
    });


});