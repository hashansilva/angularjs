/*
* Copyright © Tue Apr 24 2018 Shermal Hashan Silva <hashan.silva@gmail.com>
* All rights reserved. All information contained herein is, and remains
* the property of the developer.
* Dissemination of this information or reproduction of this material
* is strictly forbidden unless prior written permission is obtained
* from the developer.
*/

angular
    .module('phonecatApp')
    .config(['$locationProvider', '$routeProvider',
        function config($locationProvider, $routeProvider) {
            $locationProvider.hashPrefix('');
            $routeProvider
                .when('/phones', {
                    template: '<phone-list></phone-list>'
                })
                .when('/phones/:phoneId', {
                    template: '<phone-detail></phone-detail>'
                })
                .otherwise('/phones');
        }
    ]);