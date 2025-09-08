/*
 * Copyright (c) Dominick Baier, Brock Allen.  All rights reserved.
 * see license
 */

window.identityServer = (function () {
    "use strict";

    var identityServer = {
        getModel: function () {
            var modelJson = document.getElementById("modelJson");
            var encodedJson = '';
            if (typeof (modelJson.textContent) !== undefined) {
                encodedJson = modelJson.textContent;
            } else {
                encodedJson = modelJson.innerHTML;
            }
            var json = Encoder.htmlDecode(encodedJson);
            var model = JSON.parse(json);
            return model;
        }
    };

    return identityServer;
})();

(function () {
    "use strict";

    var urlParam = function (name) {
        var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
        if (results == null) {
            return null;
        }
        else {
            return results[1] || 0;
        }
    };

    (function () {
        var app = angular.module("app", []);

        app.controller("LayoutCtrl", function ($scope, Model) {
            $scope.model = Model;
            if ($scope.model.showProviders && $scope.model.showProviders === true) {
                $scope.$watch(
                    function (scope) {
                        return scope.model.selectedProvider.name;
                    },
                    function (newValue, oldValue) {
                        $scope.model.fullLoginUrl = $scope.model.loginUrl + "&provider=" + newValue;
                    }
                );
            }
        });

        app.directive("antiForgeryToken", function () {
            return {
                restrict: 'E',
                replace: true,
                scope: {
                    token: "="
                },
                template: "<input type='hidden' name='{{token.name}}' value='{{token.value}}'>"
            };
        });

        app.directive("focusIf", function ($timeout) {
            return {
                restrict: 'A',
                scope: {
                    focusIf: '='
                },
                link: function (scope, elem, attrs) {
                    if (scope.focusIf) {
                        $timeout(function () {
                            elem.focus();
                        }, 100);
                    }
                }
            };
        });
    })();

    (function () {
        var model = identityServer.getModel();
        angular.module("app").constant("Model", model);
        if (model.autoRedirect && model.redirectUrl) {
            if (model.autoRedirectDelay < 0) {
                model.autoRedirectDelay = 0;
            }
            window.setTimeout(function () {
                window.location = model.redirectUrl;
            }, model.autoRedirectDelay * 1000);
        }

        if (model.providers) {
            var numberOfProviders = model.providers.length;
            model.showProviders = numberOfProviders > 1;
            model.selectedProvider = model.providers[0]; 
            var providerName = urlParam("provider"); 
            if (!providerName) {
                providerName = model.defaultMembershipProviderName;
            }
            
            for (var i = 0; i < numberOfProviders; i++) {
                if (model.providers[i].name === providerName) {
                    model.selectedProvider = model.providers[i];
                    break;
                }
            } 
              
            model.fullLoginUrl = model.loginUrl + "&provider=" + model.selectedProvider.name;
        }
    })();

})();
