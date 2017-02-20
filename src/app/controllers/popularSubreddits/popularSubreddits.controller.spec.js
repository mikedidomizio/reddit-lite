describe('controller PopularSubredditsController', () => {
  let vm,
    scope,
    redditService;

  beforeEach(angular.mock.module('redditLite'));

  beforeEach(inject(($rootScope, $controller, RedditService) => {
    spyOn(RedditService, 'getPopularSubreddits').and.callThrough();

    scope = $rootScope.$new();
    redditService = RedditService;

    vm = $controller('PopularSubredditsController', {
      '$scope': scope,
      'RedditService': RedditService
    });

  }));

  describe('constructor', () => {

    it('to be defined', () => {
      expect(vm).toBeDefined();
    });

    it('should call the RedditService to get popular subreddits', () => {
      expect(redditService.getPopularSubreddits).toHaveBeenCalled();
    });

  });

});
