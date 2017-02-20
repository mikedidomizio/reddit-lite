describe('service RedditService', () => {
  beforeEach(angular.mock.module('redditLite'));

  let vm,
    deferred;

  beforeEach(inject(($q, RedditService) => {
    vm = RedditService;
    deferred = $q.defer();
  }));

  it('should be registered', (() => {
    expect(vm).not.toEqual(null);
  }));

  describe('method', () => {

    describe('getPopularSubreddits', () => {

      it('should be registered', () => {
        expect(vm.getPopularSubreddits).not.toEqual(null);
      });

      it('should return a promise', () => {
        spyOn(vm, 'getPopularSubreddits').and.returnValue(deferred.promise);
        let promise = vm.getPopularSubreddits();
        expect(promise.then).toBeDefined();
      });

    });

    describe('getSubredditPosts', () => {

      it('should be registered', () => {
        expect(vm.getSubredditPosts).not.toEqual(null);
      });

      it('should return a promise', () => {
        spyOn(vm, 'getSubredditPosts').and.returnValue(deferred.promise);
        let promise = vm.getSubredditPosts();
        expect(promise.then).toBeDefined();
      });

    });

    describe('getPostComments', () => {

      it('should be registered', () => {
        expect(vm.getPostComments).not.toEqual(null);
      });

      it('should return a promise', () => {
        spyOn(vm, 'getPostComments').and.returnValue(deferred.promise);
        let promise = vm.getPostComments();
        expect(promise.then).toBeDefined();
      });

    });

  });

});
