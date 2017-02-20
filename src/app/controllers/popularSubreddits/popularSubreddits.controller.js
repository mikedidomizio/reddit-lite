import { UpdateController } from '../update/update.controller';

export class PopularSubredditsController extends UpdateController {
  constructor($scope, $interval, RedditService) {
    'ngInject';
    super($interval, RedditService);
    this.makeAPICall('getPopularSubreddits', null, $scope, 'listOfSubreddits');
  }
}
