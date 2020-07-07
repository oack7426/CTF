$('body').append($('<p id="hidden">5L2g6Zui562U5qGI5b6I6L+R5pGf77yaY25WdU1qQXlNQT09</p>'));

if ($('#hidden').length > 0) {
    setTimeout(function () {
        $('#hidden').remove();
    }, 10);
}