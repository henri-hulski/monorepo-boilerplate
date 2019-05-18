# Monorepo Boilerplate

Monorepo Boilerplate based on [repo-cooker][1] containing a test repo.

## Quick start

1. Download and unpack the recent [monorepo boilerplate archive][2].
2. Use the test-repo as blueprint for your packages which must be located under the `packages/` folder.
3. Remember that the path under `packages/` must be exactly the same as the package name in `package.json`.
   So `packages/test-repo/` for the `test-repo` package and `packages/@yourscope/yourrepo/` for `@yourscope/yourrepo`.
4. Make sure that the `repository` entry in `package.json` of the monorepo is correct.
   For The packages you can use the same `repository` entry as for the monorepo.
5. Adapt `.travis.yml` and `repo-cooker.js` to your needs. There are comments to help you out.
6. Set `REPO_COOKER_GITHUB_TOKEN` in your Travis repo settings to your GitHub personal access token. Alternatively you
   can use an existing personal access token like `GH_TOKEN` and map it in `repo-cooker.js` to `REPO_COOKER_GITHUB_TOKEN`.
7. Set `NPM_TOKEN` in your Travis repo settings to your npm access token.
8. Before using repo-cooker for publishing you need to publish your package the first time manually to npm.
   Use a semver version lower then `1.0.0` like `0.1.0`. Then repo-cooker will publish the first release under `1.0.0`.
9. Create a `next` branch in your repo and make it the default branch in the GitHub settings.
   Protect the `master` and `next` branches accordingly.
10. Now when you push to the `next` branch repo-cooker will create a beta release which you can install with
    `npm install yourpackage@next`. When pushing to the `master` branch repo-cooker creates a stable release with
    release notes retrieved from the commit messages. Commits with the `fix` scope trigger a patch version release,
    commits with `feat` scope a minor version release and commits with breaking changes a major version release.
    Commits containing other scopes will not trigger a release.

[1]: https://github.com/cerebral/repo-cooker
[2]: https://github.com/henri-hulski/monorepo-boilerplate/archive/master.zip
