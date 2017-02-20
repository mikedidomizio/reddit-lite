export class UpdateController {

  constructor($interval, RedditService) {
    'ngInject';
    this.$interval = $interval;
    this.RedditService = RedditService;
    this.timer = null;
  }

  makeAPICall(method, parameters, $scope, binding, callRate = 60000) {
    const call = () => this.RedditService[method](parameters).then((data) => $scope[binding] = data);
    this.timer = this.$interval(() => call(), callRate);
    $scope.$on("$destroy", () => this.$interval.cancel(this.timer)); // when child scope is killed, destroy the interval
    call();
  }

}
