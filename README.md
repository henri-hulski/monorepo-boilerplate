# Monorepo Boilerplate

Monorepo Boilerplate based on [repo-cooker][1] containing a test repo.

## Quick start guide

1. Download and unpack the recent [monorepo boilerplate archive][2].
2. Initiate the git repo with `git init` and [add the project to your GitHub account][3].
3. Use the test-repo as blueprint for your packages which must be located under the `packages/` folder.
4. Remember that the path under `packages/` must be exactly the same as the package name in `package.json`.
   So `packages/test-repo/` for the `test-repo` package and `packages/@yourscope/yourrepo/` for `@yourscope/yourrepo`.
5. Make sure that the `repository` entry in `package.json` of the monorepo is correct.
   For The packages you can use the same `repository` entry as for the monorepo.
6. Adapt `.travis.yml`, `repo-cooker.js` and `.cz-config.js` to your needs. There are comments to help you out.
7. Set `REPO_COOKER_GITHUB_TOKEN` in your Travis repo settings to your GitHub personal access token. Alternatively you
   can use an existing personal access token like `GH_TOKEN` and map it in `repo-cooker.js` to `REPO_COOKER_GITHUB_TOKEN`.
8. Set `NPM_TOKEN` in your Travis repo settings to your npm access token.
9. Before using repo-cooker for publishing you need to publish your package the first time manually to npm.
   Use a semver version lower then `1.0.0` like `0.1.0`. Then repo-cooker will publish the first release under `1.0.0`.
10. Create a `next` branch in your repo and make it the default branch in the GitHub settings.
    Protect the `master` and `next` branches accordingly.
11. Now when you push to the `next` branch repo-cooker will create a beta release which you can install with
    `npm install yourpackage@next`. When pushing to the `master` branch repo-cooker creates a stable release with
    release notes retrieved from the commit messages. Commits with the `fix` scope trigger a patch version release,
    commits with `feat` scope a minor version release and commits with breaking changes a major version release.
    Commits containing other scopes will not trigger a release.
12. For creating commits with correct commit messages you can use `npm run commit`.
13. When you add dependencies to your packages you have to run `npm run fixdeps` in the root folder
    to add the dependencies also to the monorepo. To check if all dependencies are correctly installed
    you can use `npm run checkdeps`.
14. `npm run lint` will check for linting errors using eslint and `npm run format` will fix linting and formatting
    problems. With `npm test` you can run your tests for all packages.

[1]: https://github.com/cerebral/repo-cooker
[2]: https://github.com/henri-hulski/monorepo-boilerplate/archive/master.zip
[3]: https://help.github.com/en/articles/adding-an-existing-project-to-github-using-the-command-line
