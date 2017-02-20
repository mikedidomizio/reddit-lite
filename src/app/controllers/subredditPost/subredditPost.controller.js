import { UpdateController } from '../update/update.controller';

export class SubredditPostController extends UpdateController {
  constructor($scope, $routeParams, $interval, RedditService) {
    'ngInject';
    super($interval, RedditService);
    this.makeAPICall('getPostComments', $routeParams, $scope, 'post');
  }
}
