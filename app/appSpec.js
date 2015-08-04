describe('optIn', function() {

    var scope,
        element,
        compiled,
        html;

    beforeEach(module("signupApp"));
    beforeEach(module('optin.html'));
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

    xit('should render the element correctly', function(){
        console.log(element.find('input'));
        expect(element.find('input').length).toBe(4);
    });

    xit('should include brand-logo', function() {
        expect(element.find('.brand-logo').length).toBe(1);
    });

    it('should submit valid form', function() {
        scope.submit();
        expect(scope.optinForm.$valid).toBe(false);

        scope.optinForm.lname.$setViewValue("Dotson");
        scope.optinForm.fname.$setViewValue("Stuart");
        scope.optinForm.email.$setViewValue("email@email.com");

        scope.submit();
        expect(scope.optinForm.$valid).toBe(true);

        expect(scope.submitted).toBe(true);

    });


    xit('should include transcluded element first', function() {
        console.log(element.first());
        /*expect(element.first)*/
    })
});