describe('optIn', function() {

    var scope,
        element,
        compiled,
        html;

    beforeEach(module('optin.html'));
    beforeEach(module("signupApp"));
    beforeEach(inject(function($rootScope, $compile) {

        var html="";
        html += "<opt-in>"
        html += "<div class='brand-logo'></div>";
        html += "</opt-in>";

        scope = $rootScope.$new();
        compiled = $compile(html)
        element = compiled(scope);
        scope.$digest();

    }));
    it('should render the element correctly', function(){
        console.log(element.find('input'));
        expect(element.find('input').length).toBe(4);
    });
});