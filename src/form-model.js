/* global angular */
angular.module('jorgenfb.directives', []).directive('formModel', function() {
	'use strict';

    return {
        restrict: 'A',
        require: 'form',
        compile: function(element, attr) {
            var inputs = element.find('input[name]');
            for (var i = 0; i < inputs.length; i++){
                var input = inputs.eq(i);
                input.attr('ng-model', attr.formModel + '.' + input.attr('name'));
            }
        }
    };
});