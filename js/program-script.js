
$(document).ready(function () {

    var prizes = [1, 5, 10, 15, 25, 50, 75, 100, 200, 300, 400, 500, 750,
        1000, 5000, 10000, 25000, 50000, 75000, 100000,
        200000, 300000, 400000, 500000, 750000, 1000000];

    var briefcase_prize = 0;
    var lucky_briefcase = [];
    var is_lucky_done = false;
    var luckyPrice = 0;
    var remaingText = "REMAINING BRIEFCASE";
    var remianingCounter = 0;

// choosing sets
    var setOneNum = 6;
    var is_setOne = true;
    var setTwoNum = 5;
    var is_setTwo = true;
    var setThreeNum = 4;
    var is_setThree = true;
    var setFourNum = 3;
    var is_setFour = true;
    var setFiveNum = 2;
    var is_setFive = true;
    var setSixNum = 1;
    var is_setSix = true;

    //MODALS
    var askLuckNumberModal = $("#askLuckNumberModal");
    //askLuckNumberModal.modal("show");

    var briefcase = $(".briefcase");
    var lucky_number_container = $(".briefcase_container");
    var infContainer = $(".infContainer");
    var briefcaseContainerModal = $(".briefcaseContainerModal");
    var confirmBriefcaseNumberModal = $("#confirmBriefcaseNumberModal");
    var confirmLuckyYesButton = $("#confirmLuckyYesButton");
    var infChooseRemainingContainer = $(".infChooseRemainingContainer");

    lucky_number_container.text("");

    if (is_lucky_done == false) {
        infContainer.text("Choose your lucky briefcase first!");
    }

    var briefcase_value = 0;

    // if briefcase is click
    briefcase.click(function () {
        // get briefcase value
        briefcase_value = this.getAttribute("value");
        // SHOW MODAL CONFIRM YOUR BRIEFCASE NUMBER CHOOSEN
        confirmBriefcaseNumberModal.modal("show");
        briefcaseContainerModal.text(briefcase_value);

    });

    // CONFIRM YES CHOOSEN BRIEFCASE
    confirmLuckyYesButton.click(function () {

        // hide the confirmation modal
        confirmBriefcaseNumberModal.modal("hide");

        // get briefcase prize
        briefcase_prize = getPrize(prizes);
        // remove price in array
        var index = prizes.indexOf(briefcase_prize);
        prizes.splice(index, 1);

        var briefcaseBtn = $("#btn" + briefcase_value);
        if (is_lucky_done == false) {
            lucky_number_container.text(briefcase_value);
            luckyPrice = briefcase_prize;
            console.log("DAOG : " + luckyPrice);
            infContainer.text("PLEASE  CHOOSE (6) BRIEFCASES");
            infChooseRemainingContainer.text("( 6 ) " + remaingText);
            is_lucky_done = true;
            briefcaseBtn.hide();
        } else {
            var moneyBoard = $("#moneyBoard" + briefcase_prize);

            briefcaseBtn.addClass("btn-default");
            briefcaseBtn.removeClass("btn-primary");
            moneyBoard.addClass("revealedAmount");
            moneyBoard.removeClass("unRevealedAmount");

            if (is_setOne == true) {
                remianingCounter++;
                if (remianingCounter == setOneNum) {
                    is_setOne = false;
                }
            }

        }
    });



});

function getPrize(prizes) {
    console.log(Math.floor(Math.random()));
    var prize = prizes[Math.floor(Math.random() * prizes.length)];
    return prize;
}