<!DOCTYPE html>
<!--
To change this license header, choose License Headers in Project Properties.
To change this template file, choose Tools | Templates
and open the template in the editor.
-->
<html>
    <head>
        <meta charset="UTF-8">
        <title></title>

        <link href="css/bootstrap.min.css" rel="stylesheet">
        <link href="css/custom-style.css" rel="stylesheet">
        <link href="fonts/font-awesome-4.4.0/css/font-awesome.min.css" rel="stylesheet" type="text/css">
        <script src="js/jquery.min.js"></script>
        <script src="js/bootstrap.min.js"></script>
        <script src="js/program-script.js"></script>
    </head>
    <body>
        <div class="container">

            <div class="row">
                <!--- amount container starts here --->
                <div class="col-sm-2">
                    <table class="table table-bordered text-center">
                        <tr>
                            <td id="moneyBoard1" value="1" class="unRevealedAmount">1</td>
                        </tr>
                        <tr>
                            <td id="moneyBoard5" value="2" class="unRevealedAmount">5</td>
                        </tr>
                        <tr>
                            <td id="moneyBoard10" value="" class="unRevealedAmount">10</td>
                        </tr>
                        <tr>
                            <td id="moneyBoard15" value="" class="unRevealedAmount">15</td>
                        </tr>
                        <tr>
                            <td id="moneyBoard25" value="" class="unRevealedAmount">25</td>
                        </tr>
                        <tr>
                            <td id="moneyBoard50" value="" class="unRevealedAmount">50</td>
                        </tr>
                        <tr>
                            <td id="moneyBoard75" value="" class="unRevealedAmount">75</td>
                        </tr>
                        <tr>
                            <td id="moneyBoard100" value="" class="unRevealedAmount">100</td>
                        </tr>
                        <tr>
                            <td id="moneyBoard200" value="" class="unRevealedAmount">200</td>
                        </tr>
                        <tr>
                            <td id="moneyBoard300" value="" class="unRevealedAmount">300</td>
                        </tr>
                        <tr>
                            <td id="moneyBoard400" value="" class="unRevealedAmount">400</td>
                        </tr>
                        <tr>
                            <td id="moneyBoard500" value="" class="unRevealedAmount">500</td>
                        </tr>
                        <tr>
                            <td id="moneyBoard750" value="" class="unRevealedAmount">750</td>
                        </tr>
                    </table>
                </div>
                <div class="col-sm-8">
                    <h3>Deal or No Deal</h3>
                    <div class="infContainer text-center"></div>
                    <div class="infChooseRemainingContainer text-center"></div>
                    <hr>
                    <div class="text-center center-block briefcase_container">
                        20
                    </div>
                    <br>
                    <div class="text-center" id="finalStepsButtonContainer">
                        <button class="btn btn-success" id="lastOpenButton">OPEN BRIEFCASE</button>
                        <button class="btn btn-info" id="lastSwapButton">SWAP BRIEFCASE</button>
                    </div>
                    <br>
                    <table class="table text-center">
                        <tr>
                            <td><button value="1" class="btn btn-primary briefcase" id="btn1">0 1</button></td>
                            <td><button value="2" class="btn btn-primary briefcase" id="btn2">0 2</button></td>
                            <td><button value="3" class="btn btn-primary briefcase" id="btn3">0 3</button></td>
                            <td><button value="4" class="btn btn-primary briefcase" id="btn4">0 4</button></td>
                            <td><button value="5" class="btn btn-primary briefcase" id="btn5">0 5</button></td>
                            <td><button value="6" class="btn btn-primary briefcase" id="btn6">0 6</button></td>

                        </tr>
                    </table>
                    <table class="table text-center">
                        <tr>
                            <td><button value="7" class="btn btn-primary briefcase" id="btn7">0 7</button></td>
                            <td><button value="8" class="btn btn-primary briefcase" id="btn8">0 8</button></td>
                            <td><button value="9" class="btn btn-primary briefcase" id="btn9">0 9</button></td>
                            <td><button value="10" class="btn btn-primary briefcase" id="btn10">1 0</button></td>
                            <td><button value="11" class="btn btn-primary briefcase" id="btn11">1 1</button></td>
                            <td><button value="12" class="btn btn-primary briefcase" id="btn12">1 2</button></td>
                            <td><button value="13" class="btn btn-primary briefcase" id="btn13">1 3</button></td>
                        </tr>
                    </table>
                    <table class="table text-center">
                        <tr>
                            <td><button value="14" class="btn btn-primary briefcase" id="btn14">1 4</button></td>
                            <td><button value="15" class="btn btn-primary briefcase" id="btn15">1 5</button></td>
                            <td><button value="16" class="btn btn-primary briefcase" id="btn16">1 6</button></td>
                            <td><button value="17" class="btn btn-primary briefcase" id="btn17">1 7</button></td>
                            <td><button value="18" class="btn btn-primary briefcase" id="btn18">1 8</button></td>
                            <td><button value="19" class="btn btn-primary briefcase" id="btn19">1 9</button></td>
                            <td><button value="20" class="btn btn-primary briefcase" id="btn20">2 0</button></td>
                        </tr>
                    </table>
                    <table class="table text-center">
                        <tr>
                            <td><button value="21" class="btn btn-primary briefcase" id="btn21">2 1</button></td>
                            <td><button value="22" class="btn btn-primary briefcase" id="btn22">2 2</button></td>
                            <td><button value="23" class="btn btn-primary briefcase" id="btn23">2 3</button></td>
                            <td><button value="24" class="btn btn-primary briefcase" id="btn24">2 4</button></td>
                            <td><button value="25" class="btn btn-primary briefcase" id="btn25">2 5</button></td>
                            <td><button value="26" class="btn btn-primary briefcase" id="btn26">2 6</button></td>
                        </tr>
                    </table>
                </div>

                <!--- amount container starts here --->
                <div class="col-sm-2">
                    <table class="table table-bordered text-center">
                        <tr>
                            <td id="moneyBoard1000" value="" class="unRevealedAmount">1, 000</td>
                        </tr>
                        <tr>
                            <td id="moneyBoard5000" value="" class="unRevealedAmount">5, 000</td>
                        </tr>
                        <tr>
                            <td id="moneyBoard10000" value="" class="unRevealedAmount">10, 000</td>
                        </tr>
                        <tr>
                            <td id="moneyBoard25000" value="" class="unRevealedAmount">25, 000</td>
                        </tr>
                        <tr>
                            <td id="moneyBoard50000" class="unRevealedAmount">50, 000</td>
                        </tr>
                        <tr>
                            <td id="moneyBoard75000" class="unRevealedAmount">75, 000</td>
                        </tr>
                        <tr>
                            <td id="moneyBoard100000" class="unRevealedAmount">100, 000</td>
                        </tr>
                        <tr>
                            <td id="moneyBoard200000" class="unRevealedAmount">200, 000</td>
                        </tr>
                        <tr>
                            <td id="moneyBoard300000" class="unRevealedAmount">300, 000</td>
                        </tr>
                        <tr>
                            <td id="moneyBoard400000" class="unRevealedAmount">400, 000</td>
                        </tr>
                        <tr>
                            <td id="moneyBoard500000" class="unRevealedAmount">500, 000</td>
                        </tr>
                        <tr>
                            <td id="moneyBoard750000" class="unRevealedAmount">750, 000</td>
                        </tr>
                        <tr>
                            <td id="moneyBoard1000000" class="unRevealedAmount">1, 000, 000</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>

        <div class="modal fade" id="askLuckNumberModal" role="dialog">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                    </div>
                    <div class="modal-body">
                        CHOOSE YOUR LUCKY BRIEFCASE
                    </div>
                    <div class="modal-footer">
                        <button class="btn btn-primary">OKAY</button>
                        <button class="btn btn-default" data-dismiss="modal">CLOSE</button>
                    </div>
                </div>
            </div>
        </div>


        <!-- Confirm modal -->
        <div class="modal fade" id="confirmBriefcaseNumberModal" role="dialog">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        ARE YOU SURE, YOU WANT THIS BRIEFCASE ?
                    </div>
                    <div class="modal-body">
                        <div class="briefcaseContainerModal text-center"></div>
                    </div>
                    <div class="modal-footer">
                        <button class="btn btn-primary" id="confirmLuckyYesButton">OKAY</button>
                        <button class="btn btn-default" data-dismiss="modal">REPLACE</button>
                    </div>
                </div>
            </div>
        </div>

        <!-- Banker offer modal -->
        <div class="modal fade" id="bankersOfferModal" role="dialog">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        BANKERS OFFER
                    </div>
                    <div class="modal-body">
                        <h2>
                            <div class="bankersOfferAmountContainer text-center"></div>
                        </h2>
                    </div>
                    <div class="modal-footer">
                        <button class="btn btn-primary" id="confirmLuckyYesButton">DEAL</button>
                        <button class="btn btn-default" id="confirmLuckyNoButton">NO DEAL</button>
                    </div>
                </div>
            </div>
        </div>


    </body>
</html>
