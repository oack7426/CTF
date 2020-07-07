//********答案不要往這裡找ＱＷＱ **********//

$(function () {
    // qu-1
    $('#qu-1 button').on('click', function () {
        var text = $('#qu-1 input').val();
        (text == "0910110633") ? alert('恭喜你答對啦'): alert('錯誤');
    });

    //qu-2
    $('#qu-2 button').on('click', function () {
        var text = $('#qu-2 input').val();
        (text == "addcn2020") ? alert('恭喜你答對啦'): alert('錯誤');
    });

    //qu-3
    $('#qu-3 button').on('click', function () {
        var text = $('#qu-3 input').val();
        (text == "133") ? alert('恭喜你答對啦'): alert('錯誤');
    });

    //qu-4
    $('#qu-4 button').on('click', function () {
        var text = $('#qu-4 input').val();
        (text == "run2020") ? alert('恭喜你答對啦'): alert('錯誤');
    });

    //qu-5
    $('#qu-5 button').on('click', function () {
        var text = $('#qu-5 input').val();
        (text == "518good") ? alert('恭喜你答對啦'): alert('錯誤');
    });
    //hard-1
    $('#hard-qu1 button').on('click', function () {
        var text = $('#hard-qu1 input').val();
        for (var i = 0; i < text.length; i++) {
            if (text[i] == "義" || text[i] == "Italy") {
                alert('恭喜你答對啦');
                return;
            }
        }
        alert('錯誤');
    });
    //hard-2
    // hard-qu2
    $('#hard-qu2 button').on('click', function () {
        var text = $('#hard-qu2 input').val();
        (text == "panic: send on closed channel") ? alert('恭喜你答對啦'): alert('錯誤');
    });


});