
$(document).ready(function () {

    var prizes = [1, 5, 10, 15, 25, 50, 75, 100, 200, 300, 400, 500, 750,
        1000, 5000, 10000, 25000, 50000, 75000, 100000,
        200000, 300000, 400000, 500000, 750000, 1000000];
    var briefcases = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26];

    var lastBriefcase = 0;
    var lastPrize = 0;

    var briefcase_prize = 0;
    var lucky_briefcase = [];
    var is_lucky_done = false;
    var luckyPrice = 0;
    var luckyButton = 0;
    var remaingText = "REMAINING BRIEFCASE";
    var remianingCounter = 0;
    var waitingTimer = 15;
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
    var bankersOfferModal = $("#bankersOfferModal");
    var confirmLuckyYesButton = $("#confirmLuckyYesButton");
    var infChooseRemainingContainer = $(".infChooseRemainingContainer");
    var bankersOfferAmountContainer = $(".bankersOfferAmountContainer");
    var finalStepsButtonContainer = $("#finalStepsButtonContainer");
    finalStepsButtonContainer.hide();
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
        briefcaseBtn.hide();

        // remove briefcase in array
        var indexBriefcase = briefcases.indexOf(briefcase_value);
        briefcases.splice(indexBriefcase, 1);

        if (is_lucky_done == false) {
            lucky_number_container.text(briefcase_value);
            luckyPrice = briefcase_prize;
            luckyButton = briefcase_value;
            console.log("DAOG : " + luckyPrice);
            infContainer.text("PLEASE  CHOOSE (6) BRIEFCASES");
            infChooseRemainingContainer.text("( 6 ) " + remaingText);
            is_lucky_done = true;
        } else {
            var moneyBoard = $("#moneyBoard" + briefcase_prize);
            moneyBoard.addClass("revealedAmount");
            moneyBoard.removeClass("unRevealedAmount");
            if (is_setOne == true) {
                remianingCounter++;
                if (remianingCounter == setOneNum) {
                    infContainer.text("WAITING FOR BANKERS OFFER");

                    var waitingInterval = setInterval(function () {
                        infChooseRemainingContainer.text(waitingTimer + " sec.");
                        waitingTimer--;
                        if (waitingTimer == 0) {
                            waitingTimer = 15;
                            infContainer.text("");
                            infChooseRemainingContainer.text("");
                            clearInterval(waitingInterval);
                            bankersOfferModal.modal("show");
                            bankersOfferAmountContainer.text("$" + getBankerOffer(prizes));
                        }
                    }, 1000);
                    is_setOne = false;
                    remianingCounter = 0;
                }
                infChooseRemainingContainer.text("( " + (setOneNum - remianingCounter) + " ) " + remaingText);
            } else if (is_setTwo == true) {
                remianingCounter++;
                if (remianingCounter == setTwoNum) {
                    infContainer.text("WAITING FOR BANKERS OFFER");

                    var waitingInterval = setInterval(function () {
                        infChooseRemainingContainer.text(waitingTimer + " sec.");
                        waitingTimer--;
                        if (waitingTimer == 0) {
                            waitingTimer = 15;
                            infContainer.text("");
                            infChooseRemainingContainer.text("");
                            clearInterval(waitingInterval);
                            bankersOfferModal.modal("show");
                            bankersOfferAmountContainer.text("$" + getBankerOffer(prizes));
                        }
                    }, 1000);
                    is_setTwo = false;
                    remianingCounter = 0;
                }
                infChooseRemainingContainer.text("( " + (setTwoNum - remianingCounter) + " ) " + remaingText);
            } else if (is_setThree == true) {
                remianingCounter++;
                if (remianingCounter == setThreeNum) {
                    infContainer.text("WAITING FOR BANKERS OFFER");

                    var waitingInterval = setInterval(function () {
                        infChooseRemainingContainer.text(waitingTimer + " sec.");
                        waitingTimer--;
                        if (waitingTimer == 0) {
                            waitingTimer = 15;
                            infContainer.text("");
                            infChooseRemainingContainer.text("");
                            clearInterval(waitingInterval);
                            bankersOfferModal.modal("show");
                            bankersOfferAmountContainer.text("$" + getBankerOffer(prizes));
                        }
                    }, 1000);
                    is_setThree = false;
                    remianingCounter = 0;
                }
                infChooseRemainingContainer.text("( " + (setThreeNum - remianingCounter) + " ) " + remaingText);
            } else if (is_setFour == true) {
                remianingCounter++;
                if (remianingCounter == setFourNum) {
                    infContainer.text("WAITING FOR BANKERS OFFER");

                    var waitingInterval = setInterval(function () {
                        infChooseRemainingContainer.text(waitingTimer + " sec.");
                        waitingTimer--;
                        if (waitingTimer == 0) {
                            waitingTimer = 15;
                            infContainer.text("");
                            infChooseRemainingContainer.text("");
                            clearInterval(waitingInterval);
                            bankersOfferModal.modal("show");
                            bankersOfferAmountContainer.text("$" + getBankerOffer(prizes));
                        }
                    }, 1000);
                    is_setFour = false;
                    remianingCounter = 0;
                }
                infChooseRemainingContainer.text("( " + (setFourNum - remianingCounter) + " ) " + remaingText);
            } else if (is_setFive == true) {
                remianingCounter++;
                if (remianingCounter == setFiveNum) {
                    infContainer.text("WAITING FOR BANKERS OFFER");

                    var waitingInterval = setInterval(function () {
                        infChooseRemainingContainer.text(waitingTimer + " sec.");
                        waitingTimer--;
                        if (waitingTimer == 0) {
                            waitingTimer = 15;
                            infContainer.text("");
                            infChooseRemainingContainer.text("");
                            clearInterval(waitingInterval);
                            bankersOfferModal.modal("show");
                            bankersOfferAmountContainer.text("$" + getBankerOffer(prizes));
                        }
                    }, 1000);
                    is_setFive = false;
                    remianingCounter = 0;
                }
                infChooseRemainingContainer.text("( " + (setFiveNum - remianingCounter) + " ) " + remaingText);
            } else {
                if (prizes.length == 1) {
                    lastBriefcase = briefcases[0];
                    lastPrize = prizes[0];
                    finalStepsButtonContainer.show();
                } else {
                    remianingCounter++;
                    if (remianingCounter == setSixNum) {
                        infContainer.text("WAITING FOR BANKERS OFFER");

                        var waitingInterval = setInterval(function () {
                            infChooseRemainingContainer.text(waitingTimer + " sec.");
                            waitingTimer--;
                            if (waitingTimer == 0) {
                                waitingTimer = 15;
                                infContainer.text("");
                                infChooseRemainingContainer.text("");
                                clearInterval(waitingInterval);
                                bankersOfferModal.modal("show");
                                bankersOfferAmountContainer.text("$" + getBankerOffer(prizes));
                            }
                        }, 1000);
                        remianingCounter = 0;
                    }
                    infChooseRemainingContainer.text("( " + (setSixNum - remianingCounter) + " ) " + remaingText);
                }
            }

        }
    });
    var confirmLuckyNoButton = $("#confirmLuckyNoButton");
    confirmLuckyNoButton.click(function () {
        var number_of_briefcase_to_open = 0;
        if (is_setOne == true) {
            number_of_briefcase_to_open = 6;
        } else if (is_setTwo == true) {
            number_of_briefcase_to_open = 5;
        } else if (is_setThree == true) {
            number_of_briefcase_to_open = 4;
        } else if (is_setFour == true) {
            number_of_briefcase_to_open = 3;
        } else if (is_setFive == true) {
            number_of_briefcase_to_open = 2;
        } else {
            number_of_briefcase_to_open = 1;
        }
        infContainer.text("PLEASE  CHOOSE (" + number_of_briefcase_to_open + ") BRIEFCASES");
        infChooseRemainingContainer.text("( " + number_of_briefcase_to_open + " ) " + remaingText);
        bankersOfferModal.modal("hide");
    });

    var openLastButton = $("#lastOpenButton");
    var swapLastButton = $("#lastSwapButton");

    openLastButton.click(function () {
        var congratsPrice = luckyPrice;
        var congratsBriefcase = luckyButton;
        console.log("Congratulation Prize  : " + congratsPrice);
        console.log("Congratulation Button : " + congratsBriefcase);
    });

    swapLastButton.click(function () {

        var congratsPrice = luckyPrice;
        var tempPrice = congratsPrice;
        luckyPrice = lastPrize;
        lastPrize = tempPrice;

        var congratsBriefcase = luckyButton;
        var tempBriefcase = congratsBriefcase;
        luckyButton = lastBriefcase;
        lastBriefcase = tempBriefcase;
        console.log("LuckyButton : " + luckyButton);
        console.log("Last briefcase : " + lastBriefcase);
        lucky_number_container.text(luckyButton);

        console.log("Congratulation Prize  : " + lastPrize);
        console.log("Congratulation Button : " + luckyButton);

    });


});


function getRemainingBriefcase(briefcases) {

}

function getPrize(prizes) {
    console.log(Math.floor(Math.random()));
    var prize = prizes[Math.floor(Math.random() * prizes.length)];
    return prize;
}

function getBankerOffer(prizes) {
    var lowest_prize = Math.min.apply(Math, prizes);
    var highest_prize = Math.max.apply(Math, prizes);
    var range_prize = (highest_prize - lowest_prize);
    var share = (range_prize / 5);
    var startRangeAmount = lowest_prize + (share * 1);
    var endRangeAmount = lowest_prize + (share * 2);
    var bankersOffer = Math.floor(Math.random() * (endRangeAmount - startRangeAmount + 1)) + startRangeAmount;
    return bankersOffer.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
}
