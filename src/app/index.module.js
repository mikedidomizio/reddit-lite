import { routerConfig } from './index.route';
import { RedditKindsEnum } from './constants/redditKindsEnum';
import { UpdateController } from './controllers/update/update.controller';
import { PopularSubredditsController } from './controllers/popularSubreddits/popularSubreddits.controller';
import { SubredditController } from './controllers/subreddit/subreddit.controller';
import { SubredditPostController } from './controllers/subredditPost/subredditPost.controller';
import { RedditService } from './services/reddit/reddit.service';
import { SubredditPostItem } from './components/subredditPostItem/subredditPostItem.component';
import { Comment } from './components/comment/comment.component';

angular.module('redditLite', ['ngRoute'])

  .config(routerConfig)
  .constant('RedditKindsEnum', RedditKindsEnum)
  .controller('UpdateController', UpdateController)
  .controller('PopularSubredditsController', PopularSubredditsController)
  .controller('SubredditController', SubredditController)
  .controller('SubredditPostController', SubredditPostController)
  .service('RedditService', RedditService)
  .component('subredditPostItem', SubredditPostItem)
  .component('comment', Comment);
