/*
* Copyright © Tue Apr 24 2018 Shermal Hashan Silva <hashan.silva@gmail.com>
* All rights reserved. All information contained herein is, and remains
* the property of the developer.
* Dissemination of this information or reproduction of this material
* is strictly forbidden unless prior written permission is obtained
* from the developer.
*/

'use strict';

angular
  .module('phoneDetail')
  .component('phoneDetail', {
    templateUrl: 'phone-detail/phone-detail.template.html',
    controller: ['$routeParams', 'Phone',
      function phoneDetailController($routeParams, Phone) {
        var self = this;
        self.phone = Phone.get({phoneId:$routeParams.phoneId},function(phone){
          self.setImage(phone.images[0]);
        });

        self.setImage = function setImage(imageUrl) {
          self.mainImageUrl = imageUrl;
        };
      }
    ]
  });