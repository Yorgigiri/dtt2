import MicroModal from 'micromodal';
import CustomWidget from './partials/customWidget';

// Initial config for setting up modals
MicroModal.init({
    openTrigger: 'data-micromodal-trigger',
    disableScroll: false,
    awaitCloseAnimation: true
});

let newWidget = new CustomWidget;

$('#exchangeRate').on('keyup', function () {
    let aaa = $(this).val();

    newWidget.getExchange(aaa);
});

$('.js-addWidget').on('click', function () {
    /**
     * Кнопка добавления виджета
     */
    let parameters = {};
    let parentForm = $(this).parents('#addWidgetForm');
    let columnNumber = parentForm.find('#columnNumber').val();
    let titleValue = parentForm.find('#titleValue').val();
    let backgroundValue = parentForm.find('#colorValue').val();
    let descriptionValue = parentForm.find('#descriptionValue').val();
    if(window.currency){
        let exchangeRate = window.currency.toFixed();
        parameters.exchange = exchangeRate;
        window.currency = null;
    }
    
    parameters.title = titleValue;
    parameters.background = backgroundValue;
    parameters.description = descriptionValue;
    parameters.column = columnNumber;
    

    newWidget.addWidget(columnNumber, parameters);

    $('.defaultForm__close').trigger('click');

});

$(document).on('click', '.js-removeWidget', function () {
    /**
     * Кнопка удаления виджета
     */
    newWidget.removeWidget($(this).parent());
});


$(function () {

    $(".widgetsContainer").sortable({
        connectWith: ".widgetsContainer",
    });

    $("#sortable1, #sortable2, #sortable3").disableSelection();

});