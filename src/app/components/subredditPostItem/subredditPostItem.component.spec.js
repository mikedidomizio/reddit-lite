describe('component subreddit-post-item', function () {
  let element,
    scope,
    $compile;

  beforeEach(angular.mock.module('redditLite'));

  beforeEach(inject(($rootScope, _$compile_) => {
    scope = $rootScope.$new();

    const item = {
      data: {
        author: 'mike',
        created_utc: 1487021470,
        permalink: '/r/gaming/comments/5tvv47/my_favorite_gif_from_breath_of_the_wild',
        thumbnail: '',
        title: 'TIL',
        url: 'https://reddit.com/r/til'
      }
    };

    element = angular.element(`
      <subreddit-post-item url="item.data.url" created-utc="item.data.created_utc" thumbnail="item.data.thumbnail"
                         permalink="item.data.permalink" author="item.data.author" title="item.data.title">
      </subreddit-post-item>
    `);

    $compile = _$compile_;
    element = $compile(element)(scope);
    scope.item = item;
    scope.$digest();
  }));

  it('should be compiled', () => {
    expect(element.html()).not.toEqual(null);
  });

  describe('should bind the binding for', () => {

    function returnTextByElementClass(className) {
      let result = element[0].querySelectorAll(className);
      return angular.element(result).text();
    }

    it('author', () => {
      expect(returnTextByElementClass('.author')).toBe('mike');
    });

    it('created_utc', () => {
      expect(returnTextByElementClass('.created-utc')).toBe('2/13/17 9:31 PM');
    });

    it('permalink', () => {
      let result = element[0].querySelectorAll('.permalink');
      expect(result[0].getAttribute('href')).toBe('#/r/gaming/comments/5tvv47/my_favorite_gif_from_breath_of_the_wild');
    });

    it('thumbnail', () => {
      let result = element[0].querySelectorAll('.thumbnail');
      expect(result[0].getAttribute('src')).toBe('');
    });

    it('title', () => {
      expect(returnTextByElementClass('.title')).toBe('TIL');
    });

    it('url', () => {
      let result = element[0].querySelectorAll('.image-link');
      expect(result[0].getAttribute('href')).toBe('https://reddit.com/r/til');
    });

  });

  describe('thumbnail', () => {

    it(`should not render if 'nsfw' or 'self' or 'default'`, () => {

      let result;

      scope.item.data.thumbnail = 'nsfw';
      element = $compile(element)(scope);
      scope.$digest();

      result = element[0].querySelectorAll('.thumbnail');
      expect(result.length).toBe(0);

      scope.item.data.thumbnail = 'self';
      element = $compile(element)(scope);
      scope.$digest();

      result = element[0].querySelectorAll('.thumbnail');
      expect(result.length).toBe(0);

      scope.item.data.thumbnail = 'default';
      element = $compile(element)(scope);
      scope.$digest();

      result = element[0].querySelectorAll('.thumbnail');
      expect(result.length).toBe(0);

    })

  })

});
