# RedditLite
RedditLite is a lightweight AngularJS app that displays a list of popular subreddits, list of subreddit posts and post comments.

## Demo
[Demo here](http://mikedidomizio.com/reddit-lite)

## Prerequisites
Requires `npm`, `bower` and `gulp`

## Setup
Run these commands from within the project directory

`npm install`

`bower install`

## Development
`gulp serve`

This project by default will launch the browser and point to http://localhost:3000 if that port is available.
On file change, [browsersync](https://browsersync.io/) will reload the browser with the changes.

## Contributing
Please follow the [Contribution Guide](CONTRIBUTING.md)

## Deployment for Production environment

`gulp build`

## Running tests

`gulp test` to run the tests once

`gulp test:auto` to re-run the tests when files change

## Built With

[AngularJS 1.5](https://angularjs.org/) - Javascript Framework

[Bower](https://bower.io/) - Dependency Management

[Karma](https://karma-runner.github.io/1.0/index.html) - Test Runner
