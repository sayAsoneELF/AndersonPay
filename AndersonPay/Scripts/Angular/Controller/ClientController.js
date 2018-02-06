﻿(function () {
    'use strict';

    angular
        .module('App')
        .controller('ClientController', ClientController);

    ClientController.$inject = ['$window', 'ClientService', 'CurrencyService', 'TaxTypeService'];

    function ClientController($window, ClientService, CurrencyService, TaxTypeService) {
        var vm = this;

        vm.Client;

        vm.Clients;

        vm.GoToUpdatePage = GoToUpdatePage;

        vm.Initialise = Initialise;

        vm.Delete = Delete;

        vm.ClientId;

        vm.ReadForCurrencyCode = ReadForCurrencyCode;

        vm.Currencies;

        function GoToUpdatePage(clientId) {
            $window.location.href = '../Client/Update/' + clientId;
        }

        function Initialise(name) {
            Read();
        }

        function Read() {
            ClientService.Read()
                .then(function (response) {
                    vm.Clients = response.data;
                })
                .catch(function (data, status) {
                    new PNotify({
                        title: status,
                        text: data,
                        type: 'error',
                        hide: true,
                        addclass: "stack-bottomright"
                    });

                });
        }

        function Delete(client) {
            ClientService.Delete(client)
                .then(function (response) {
                    Read();
                })
                .catch(function (data, status) {
                });
        }

        function ReadForCurrencyCode() {
            CurrencyService.Read()
                .then(function (response) {
                    vm.Currencies = response.data;
                    var currency = $filter('filter')(vm.Currencies, { CurrencyCodeId: vm.CurrencyCodeId })[0];
                    if (currency)
                        vm.Currency = currency;
                })
                .catch(function (data, status) {
                    new PNotify({
                        title: status,
                        text: data,
                        type: 'error',
                        hide: true,
                        addclass: "stack-bottomright"
                    });

                });
        }

    }
})();