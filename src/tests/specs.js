describe('Routastic', function(){
  describe('Names Service', function(){
    var $httpBackend, authRequestHandler, Names;
    beforeEach(module('routastic'));
    beforeEach(function(){
      inject(function($injector){
        $httpBackend = $injector.get('$httpBackend');
        authRequestHandler = $httpBackend.when('GET', '/names.json')
          .respond({userId: 'userX'}, {'A-Token': 'xxx'});

        Names = $injector.get('Names');
      });

    });

    describe('get method', function(){
      it('should get some names', function(){
        Names.get(function(){
          expect(Names.list.length).toBe(4);
        });
      });
    });
  });
});
