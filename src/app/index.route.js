export function routerConfig($routeProvider) {
  'ngInject';

  $routeProvider
    .when('/', {
      templateUrl: 'app/controllers/popularSubreddits/popularSubreddits.html',
      controller: 'PopularSubredditsController',
      controllerAs: 'PopularSubredditsController'
    })
    .when('/r/:subreddit/', {
      templateUrl: 'app/controllers/subreddit/subreddit.html',
      controller: 'SubredditController',
      controllerAs: 'SubredditController'
    })
    .when('/r/:subreddit/comments/:postId/:title', {
      templateUrl: 'app/controllers/subredditPost/subredditPost.html',
      controller: 'SubredditPostController',
      controllerAs: 'SubredditPostController'
    })
    .otherwise({
      redirectTo: '/'
    });
}
