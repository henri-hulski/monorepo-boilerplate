import { Cooker } from 'repo-cooker'

/**
 * If you want to use an existing GitHub personal access token
 * for Travis (GH_TOKEN in this case) just uncomment the next line
 */

// process.env.REPO_COOKER_GITHUB_TOKEN = process.env.GH_TOKEN

export const cooker = Cooker(process.argv, {
  devtools: {
    host: 'localhost:8787, reconnect: false',
  },
  path: '.',

  // Adapt to your needs. If you use npm scopes add something like 'packages/@yourscope/*'.
  packagesGlobs: ['packages/*', '!packages/node_modules'],
})
