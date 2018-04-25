/*
* Copyright © Tue Apr 24 2018 Shermal Hashan Silva <hashan.silva@gmail.com>
* All rights reserved. All information contained herein is, and remains
* the property of the developer.
* Dissemination of this information or reproduction of this material
* is strictly forbidden unless prior written permission is obtained
* from the developer.
*/

'use strict';

angular.module('phoneList')
  .component('phoneList', {
    templateUrl: 'phone-list/phone-list.template.html',
    controller: ['Phone', function phoneListController(Phone) {
      var self = this;
      /*this.settings = {
        text:"name"
      };*/
      self.renderTemplate = true;
      self.enableFilter = true;
      self.phones = Phone.query();
    }
    ]
  });