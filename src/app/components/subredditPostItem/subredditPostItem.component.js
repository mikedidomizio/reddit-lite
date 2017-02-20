export let SubredditPostItem = {
  bindings: {
    author: '<',
    createdUtc: '<',
    permalink: '<',
    thumbnail: '<',
    title: '<',
    url: '<'
  },
  template: `
      <div class="pull-left">
          <a class="image-link" target="_blank" href="{{ $ctrl.url }}"
          ng-if="$ctrl.thumbnail !== 'nsfw' && $ctrl.thumbnail !== 'self' && $ctrl.thumbnail !== 'default'">
          <img
                  class="thumbnail"
                  onerror='this.style.display = "none"'
                  src="{{ $ctrl.thumbnail }}"/></a>
      </div>
      <div>
          <a target="_blank" class="url" href="{{ $ctrl.url }}"><span class="title">{{ $ctrl.title }}</span></a>
          <div><a class="permalink" href="#{{ $ctrl.permalink }}">comments</a></div>
          <div>submitted <span class="created-utc">{{ ($ctrl.createdUtc * 1000) | date: 'short' : 'UTC' }}</span> by
              <span class="author">{{ $ctrl.author }}</span>
          </div>
      </div>
    `
};
