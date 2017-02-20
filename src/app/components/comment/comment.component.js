export const Comment = {
  bindings: {
    data: '<',
    cssClass: '<'
  },
  controller: function ($scope, $sce, RedditKindsEnum) {
    'ngInject';
    $scope.renderHtml = (html) => $sce.trustAsHtml(html);

    this.redditKindsEnum = RedditKindsEnum;
    this.cssClass = this.cssClass === 'even' ? 'odd' : 'even';

    if (typeof this.data.data.replies !== 'undefined' && this.data.data.replies !== '') {
      this.comments = this.data.data.replies.data.children;
    }
  },
  template: `
      <div>
        <span class="author">{{ ::$ctrl.data.data.author }}</span>
      </div>
      <p class="reply" ng-bind-html="::renderHtml($ctrl.data.data.body)"></p>
      <comment ng-if="::($ctrl.redditKindsEnum[item.kind] === 'comment')" css-class="::$ctrl.cssClass"
               class="{{ ::$ctrl.cssClass }}" data="item" ng-repeat="item in ::$ctrl.comments"></comment>
  `
};
