/* global angular */
angular.module('jorgenfb.directives', []).directive('jfbFormModel', function() {
	'use strict';

    return {
        restrict: 'A',
        require: 'form',
        compile: function(element, attr) {
            var inputs = element.find('input');
            for (var i = 0; i < inputs.length; i++){
                var input = inputs.eq(i);
                if (input.attr('name')) {
                    input.attr('ng-model', attr.jfbFormModel + '.' + input.attr('name'));
                }
            }
        }
    };
});
