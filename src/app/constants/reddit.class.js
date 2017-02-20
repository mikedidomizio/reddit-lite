export class RedditConstants {

  constructor() {
    this.baseUrl = 'https://www.reddit.com/';
  }

  get popularSubredditUrl() {
    return `${this.baseUrl}subreddits/popular.json`;
  }

  getSubredditPostsUrl(subreddit) {
    return `${this.baseUrl}r/${subreddit}.json`;
  }

  getPostCommentsUrl(subreddit, postId) {
    return `${this.baseUrl}r/${subreddit}/comments/${postId}.json`;
  }

}
