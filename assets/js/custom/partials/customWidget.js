export default class CustomWidget {

    constructor() {}

    addWidget(columnIndex, options) {

        // Добавление виджета
        let title = options.title ? '<div class="customWidget__title">' + options.title + '</div>' : '';
        let description = options.description ? '<div class="customWidget__description">' + options.description + '</div>' : '';
        let background = options.background ? 'style="background: ' + options.background + '"' : '';
        let exchange = options.exchange ? '<div class="customWidget__exchange">' + options.exchange + ' рублей</div>' : '';
        let widgetTemplate = `<div ${background} draggable="true" class="customWidget">${description}${title}${exchange}<button class="btn btn-sm btn-danger js-removeWidget">Удалить виджет</button></div>`;
        let element = document.querySelector('#widgetColumns').querySelectorAll('.defaultColumn')[columnIndex].querySelector('.widgetsContainer').insertAdjacentHTML('afterbegin', widgetTemplate);

        return element;

    }

    removeWidget(selector) {

        // Удаление виджета
        selector.remove();

    }

    getExchange(number) {
        var currencyExchangeRateurl = "http://www.apilayer.net/api/live?access_key=57351d6951208c01a3b1d078923e0e99&format=1";

        $.ajax({
            type: "GET",
            url: currencyExchangeRateurl,
            success: function (data) {
                let currency;
                window.currency = Number(number) * data.quotes.USDRUB;
            },
            error: function (response) {
                console.log('error');
            }
        });

    }

}