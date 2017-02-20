describe('controller SubredditPostController', () => {
  let vm,
    scope,
    redditService;

  beforeEach(angular.mock.module('redditLite'));

  beforeEach(inject(($rootScope, $routeParams, $controller, RedditService) => {
    spyOn(RedditService, 'getPostComments').and.callThrough();

    scope = $rootScope.$new();
    redditService = RedditService;

    $routeParams = {
      'subreddit': 'javascript',
      'postId': '5u14da'
    };

    vm = $controller('SubredditPostController', {
      '$scope': scope,
      '$routeParams': $routeParams,
      'RedditService': RedditService
    });

  }));


  it('to be defined', () => {
    expect(vm).toBeDefined();
  });

  describe('constructor', () => {

    it('should call the RedditService to get comments for a post', () => {
      expect(redditService.getPostComments).toHaveBeenCalled();
    });

  });

});
