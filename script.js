function convertNumberToWord() {
    var inputNumber = $('#number').val();

    if (inputNumber == '') {
        alert('Iltimos son kiriting! Bo`lmasa ishlamaydi!');
        return false;
    }

    var str = new String(inputNumber.trim());
    var splt = str.split("");
    var rev = splt.reverse();
    var once = ['Zero', ' One', ' Two', ' Three', ' Four', ' Five', ' Six', ' Seven', ' Eight', ' Nine'];
    var twos = ['Ten', ' Eleven', ' Twelve', ' Thirteen', ' Fourteen', ' Fifteen', ' Sixteen', ' Seventeen', ' Eighteen', ' Nineteen'];
    var tens = ['', 'Ten', ' Twenty', ' Thirty', ' Forty', ' Fifty', ' Sixty', ' Seventy', ' Eighty', ' Ninety'];

    numLength = rev.length;
    var word = new Array();
    var j = 0;

    for (i = 0; i < numLength; i++) {
        switch (i) {
            case 0:
                if ((rev[i] == 0) || (rev[i + 1] == 1)) {
                    word[j] = '';
                } else {
                    word[j] = '' + once[rev[i]];
                }
                word[j] = word[j];
                break;

            case 1:
                aboveTens();
                break;

            case 2:
                if (rev[i] == 0) {
                    word[j] = '';
                } else if ((rev[i - 1] == 0) || (rev[i - 2] == 0)) {
                    word[j] = once[rev[i]] + " Hundred ";
                } else {
                    word[j] = once[rev[i]] + " Hundred and";
                }
                break;

            case 3:
                if (rev[i] == 0 || rev[i + 1] == 1) {
                    word[j] = '';
                } else {
                    word[j] = once[rev[i]];
                }

                if ((rev[i + 1] != 0) || (rev[i] > 0)) {
                    word[j] = word[j] + " Thousand";
                }
                break;


            case 4:
                if (rev[i] == 0 || rev[i + 1] == 1) {
                    word[j] = '';
                } else {
                    word[j] = once[rev[i]];
                }

                if ((rev[i + 1] != 0) || (rev[i] > 0)) {
                    word[j] = word[j] + " hundred thousand";
                }
                break;

            case 5:
                aboveTens();
                break;

            case 6:
                if ((rev[i] == 0) || (rev[i + 1] == 1)) {
                    word[j] = '';
                } else {
                    word[j] = once[rev[i]];
                }

                if (rev[i + 1] !== '0' || rev[i] > '0') {
                    word[j] = word[j] + " Million";
                }

                break;

            case 7:
                aboveTens();
                break;

            case 8:
                if ((rev[i] == 0) || (rev[i + 1] == 1)) {
                    word[j] = '';
                } else {
                    word[j] = once[rev[i]];
                }

                if (rev[i + 1] !== '0' || rev[i] > '0') {
                    word[j] = word[j] + " hundred million";
                }
                break;

            case 9:
                aboveTens();
                break;

            case 10:
                if ((rev[i] == 0) || (rev[i + 1] == 1)) {
                    word[j] = '';
                } else {
                    word[j] = once[rev[i]];
                }

                if (rev[i + 1] !== '0' || rev[i] > '0') {
                    word[j] = word[j] + " hundred million";
                }
                break;

            default:
                break;
        }
        j++;
    }

    function aboveTens() {
        if (rev[i] == 0) {
            word[j] = '';
        } else if (rev[i] == 1) {
            word[j] = twos[rev[i - 1]];
        } else {
            word[j] = tens[rev[i]];
        }
    }

    word.reverse();
    var finalOutput = '';

    for (i = 0; i < numLength; i++) {
        finalOutput = finalOutput + word[i];
    }

    $('#age_container').css('display', 'block');

    $('#result').html(finalOutput);
}


function validAmount(evt) {
    if (evt.ctrlKey == 1) {
        return true;
    } else {
        var keynum = null;
        if (window.event) {
            keynum = evt.keyCode;
        } else if (evt.which) {
            keynum = evt.which;
        }
        if (keynum != null) {
            if (keynum == 8 || keynum == 46) {
                return true;
            }
            if (keynum < 48 || keynum > 57) {
                return false;
            }
        }
        return true;
    }
}