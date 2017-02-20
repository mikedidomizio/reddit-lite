import { UpdateController } from '../update/update.controller';

export class SubredditController extends UpdateController {
  constructor($scope, $routeParams, $interval, RedditService) {
    'ngInject';
    super($interval, RedditService);
    $scope.subreddit = $routeParams.subreddit;
    this.makeAPICall('getSubredditPosts', $routeParams, $scope, 'listOfPopularPosts');
  }
}
