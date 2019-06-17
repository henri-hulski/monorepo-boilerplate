# Monorepo Boilerplate

Monorepo Boilerplate is an example for a typescript monorepo, which is based on the [repo-cooker][1] library. It contains a test repo which can be used as a blueprint for your packages.

## Overview

The idea of a monorepo is to have all your packages at one place where they're linked against each other, so that they always use the newest build of a dependent internal package. Furthermore the monorepo allows to have consistent linting, testing and building work-flows, where part of the configuration needs to be setup only once for all packages and it keeps the dependencies of the packages in sync.

Monorepo Boilerplate is based on the awesome [repo-cooker][1] library, which helps us to setup and maintain a monorepo. It uses the `node_module` directory to link the packages against each other. The idea was inspired by the [alle concept][2].

The original setup was to put all packages in the `packages/node_modules` folder, where they get automatically linked against each other. But here we discovered some problems with linting, testing, build and other tools, which by default ignore the `node_modules` directory. Some wired hacks were necessary to fix that.

In Monorepo Boilerplate we use a new concept were we put the source code of the packages directly under the `packages` directory and only the compiled code is created under `packages/node_modules`. So we still get the linking, but the source code is outside of `node_modules`, which makes our tools happy.

## Install

Download and unpack the recent [monorepo boilerplate archive][3].

## Customize

Feel free to adapt the boilerplate to your needs.

### Tweak the configuration files

- **package.json:** Update the monorepo's name and the `repository` entry, which is used for publishing to GitHub.
- **.travis.yml:** You need to put your GitHub credentials into the `after_success` script.
- **repo-cooker.js:** If you use [npm scopes][4] set the `packagesGlobs` variable to ['packages/@yourscope/*']. You can also map the `REPO_COOKER_GITHUB_TOKEN` e.g. to an existing `GH_TOKEN`.
- **.cz-config.js:** replace the `scopes` field with the packages and scopes you want to use in your commit messages.

You can find some hints in the comments.

### Add your packages

Add your packages to the `packages` folder. You can use the test-repo as a blueprint.

The path under the `packages` folder must be exactly the same as the package name in `package.json`. So `packages/test-repo` for the `test-repo` package and `packages/@yourscope/yourrepo/` for `@yourscope/yourrepo`.

When using [npm scopes][4] you need to replace all occurrences of `../node_modules/test-repo` with `../../node_modules/@yourscope/test-repo` inside `package.json`.

## Prepare

### GitHub

- Initiate the git repo with `git init` and [add the project to your GitHub account][5].
- Create a `next` branch in your repo and make it the default branch in the GitHub settings. Protect the `master` and `next` branches accordingly.
- Create a [GitHub personal access][6] token with repo scope to use it with Travis, if you don't already have one.

### npm

- Install, link and build your monorepo locally with `npm install`.
- Before you can publish packages with repo-cooker you need to manually [pre-publish them to npm][7].
- Create a [npm access token][8] to use it with Travis.

### Travis

- Activate your Monorepo in the Travis Repositories Settings.
- Set `REPO_COOKER_GITHUB_TOKEN` in your Travis repo settings to your GitHub personal access token. Alternatively you can use an existing personal access token like `GH_TOKEN` and map it in `repo-cooker.js` to `REPO_COOKER_GITHUB_TOKEN`.
- Set `NPM_TOKEN` in your Travis repo settings to your npm access token.

## How it works

When you push commits to the `next` branch repo-cooker will create a beta release which you can install with `npm install yourpackage@next`.

When pushing to the `master` branch repo-cooker creates a stable release with release notes retrieved from the commit messages.

Commits with the `fix` type trigger a patch version release, commits with `feat` type a minor version release and commits with breaking changes a major version release. Commits containing other types will not trigger any release.

## Helpers

The boilerplate ships with some useful scripts to manage your monorepo:

- `npm run commit`: guide you through creating commits with correct commit messages
- `npm run checkdeps`: check if all dependencies are correctly installed and in sync
- `npm run fixdeps`: add missing dependencies to the monorepo when you add or upgrade dependencies for your packages.
- `npm test`: run the tests for all packages
- `npm run lint`: check for linting errors using eslint
- `npm run format`: fix linting and formatting problems
- `npm run typecheck`: check if the types of your packages are correct

[1]: https://github.com/cerebral/repo-cooker
[2]: https://github.com/boennemann/alle
[3]: https://github.com/henri-hulski/monorepo-boilerplate/archive/master.zip
[4]: https://docs.npmjs.com/about-scopes
[5]: https://help.github.com/en/articles/adding-an-existing-project-to-github-using-the-command-line
[6]: https://github.com/settings/tokens
[7]: https://docs.npmjs.com/cli/publish
[8]: https://www.npmjs.com/settings/henri-hulski/tokens/create
