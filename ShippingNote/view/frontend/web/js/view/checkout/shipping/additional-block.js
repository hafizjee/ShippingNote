define([
    'jquery',
    'ko',
    'uiComponent',
    'Magento_Checkout/js/model/quote'
], function ($, ko, Component, quote) {
    'use strict';
    return Component.extend({
        defaults: {
            template: 'Devcrew_ShippingNote/checkout/shipping/additional-block'
        },
        initObservable: function () {
          this.showUspsShippingInfo = ko.computed(function() {
              var method = quote.shippingMethod();

              if(method && method['carrier_code'] !== undefined) {
                  if(method['carrier_code'] === 'usps') {
                      return true;
                  }
              }
              return false;

          }, this);
            return this;
        },
    });
});
