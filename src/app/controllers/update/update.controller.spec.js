describe('controller UpdateController', () => {
  let vm,
    scope,
    redditService,
    interval;

  beforeEach(angular.mock.module('redditLite'));

  beforeEach(inject(($rootScope, _$interval_, $controller, RedditService) => {

    scope = $rootScope.$new();
    redditService = RedditService;
    interval = _$interval_;

    vm = $controller('SubredditPostController', {
      '$scope': scope,
      '$interval': _$interval_,
      'RedditService': RedditService
    });

  }));


  it('to be defined', () => {
    expect(vm).toBeDefined();
  });

  describe('constructor', () => {

    it('should bind the $interval variable', () => {
      expect(vm.$interval).toBeDefined();
    });

    it('should bind the RedditService', () => {
      expect(vm.RedditService).toBeDefined();
    });

  });

  describe('method makeAPICall', () => {

    it('should be registered', () => {
      expect(vm.makeAPICall).not.toEqual(null);
    });

    it('ensure controller $scope is destroyed, cancel the interval', () => {
      spyOn(vm, 'makeAPICall').and.callThrough();
      spyOn(redditService, 'getPopularSubreddits').and.callThrough();
      spyOn(interval, 'cancel').and.callThrough();

      expect(vm.$interval.cancel).not.toHaveBeenCalled();
      vm.makeAPICall('getPopularSubreddits', null, scope, 'listOfSubreddits');
      scope.$destroy();
      expect(vm.$interval.cancel).toHaveBeenCalled();
    })

  });

});
