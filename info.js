$(document).on('click', function(event) {
    if (!$(event.target).closest('.navbar').length) {
    $('.navbar .collapse').collapse('hide');
    }
});