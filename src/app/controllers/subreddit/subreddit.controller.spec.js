describe('controller SubredditController', () => {
  let vm,
    scope,
    redditService;

  beforeEach(angular.mock.module('redditLite'));

  beforeEach(inject(($rootScope, $routeParams, $controller, RedditService) => {
    spyOn(RedditService, 'getSubredditPosts').and.callThrough();

    scope = $rootScope.$new();
    redditService = RedditService;

    $routeParams = {
      'subreddit': 'javascript'
    };

    vm = $controller('SubredditController', {
      '$scope': scope,
      '$routeParams': $routeParams,
      'RedditService': RedditService
    });

  }));


  it('to be defined', () => {
    expect(vm).toBeDefined();
  });

  describe('constructor', () => {

    it(`scope parameter 'subreddit' should be 'javascript'`, () => {
      expect(scope.subreddit).toBe('javascript');
    });

    it('should call the RedditService to get posts from a subreddit', () => {
      expect(redditService.getSubredditPosts).toHaveBeenCalled();
    });

  });

});
