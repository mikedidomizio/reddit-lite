describe('component comment', function () {
  let element,
      scope,
      $compile,
      controller;

  beforeEach(angular.mock.module('redditLite'));

  beforeEach(inject(($rootScope, _$compile_) => {
    scope = $rootScope.$new();
    $compile = _$compile_;

    let item = {
      data: {
          author: 'mike',
          body: 'test',
          replies: ''
      }
    };

    element = angular.element(`<comment css-class="odd" data="item"></comment>`);
    scope.item = item;
    element = $compile(element)(scope);
    controller = element.controller('comment');
    scope.$apply();
  }));

  it('should be compiled', () => {
    expect(element.html()).not.toEqual(null);
  });

  describe('binding', () => {

    it('author should be binded', () => {
        const result = element[0].querySelectorAll('.author');
        expect(result[0].innerText).toBe('mike');
    });

    it('body should be binded', () => {
        const result = element[0].querySelectorAll('.reply');
        expect(result[0].innerText).toBe('test');
    });

  });

  describe('controller', () => {

    it(`cssClass should be opposite of odd, which is 'even'`, () => {
      expect(controller.cssClass).toBe('even');
    });

  });

});