import { RedditConstants } from '../../constants/reddit.class';

export class RedditService extends RedditConstants {

  constructor($http) {
    'ngInject';
    super();
    this.$http = $http;
  }

  getPopularSubreddits() {
    return this.$http({url: `${this.popularSubredditUrl}`});
  }

  getSubredditPosts(params) {
    params.count = 25;
    return this.$http({
      url: `${super.getSubredditPostsUrl(params.subreddit)}`,
      params: params
    });
  }

  getPostComments(params) {
    return this.$http({
      url: `${super.getPostCommentsUrl(params.subreddit, params.postId)}`,
      params: params
    });
  }

}
