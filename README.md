## Development

Since the site is bootstrapped with [Create React App](https://github.com/facebook/create-react-app), `react-scripts` handles the more daunting development workflows such as webpack building. To begin development, run `npm run dev`. This will start a local server with live reload.

## Deployment

The site is deployed on [GitHub Pages](https://docs.github.com/en/github/working-with-github-pages/getting-started-with-github-pages), which means that the content of the directory must somehow be at the top level of the master or gh-pages branch of the repository, we have chosen to use the gh-pages branch so that all of our code can be in the main branch.


Once you have saved all of the changes you made to files in the src directory, test the page by running `npm run dev` in the terminal and opening it in the browser: [localhost:3000](localhost:3000). When you're ready to deploy the changes, follow the instructions below.

1. Run `npm run build` to compile all of the jsx and generate the build directory. Then commit the changes in the [`build`](build/) directory. If you don't commit the changes, the next step will deploy an outdated version (it will deploy whatever was last committed).

	```sh
	npm run build
    git add build
	git commit -m "Some descriptive commit message"
    ```
1. If this is not your first time deploying the changes from your device, you will need to delete the old version of your gh-pages branch (which will contain the build folder from the last time you deployed). Otherwise there will be an error saying "Branch 'gh-pages' is not an ancestor of commit ..." when you try to overwrite it in the next step. This is because the old gh-pages branch is completely unrelated to the new one in terms of commits, so Git won't want to merge the build folder to it.

    ```sh
    #NOTE: This command is unnecessary if it's your first time deploying from your device
    git branch -D gh-pages
    ```

1. From the root of the main part of the repo (where this README file is located) run the command below. You can run this every time you want to deploy new changes. It will merge any changes from the subdirectory of the current branch (which will probably be `main`) to the root of the target branch. The target branch should be `gh-pages` because that's where the site is deployed from. [Stackoverflow post about this command](https://stackoverflow.com/a/32617297/15015834)

    ```sh
    #        subdirectory name---v                v---target branch
    git subtree split --prefix build --branch gh-pages
    ```

1. Now, the updated `gh-pages` branch is ready to push; the last command only merged and committed to the `gh-pages` branch locally, but it did not push the changes to GitHub. Navigate to `gh-pages` and push the changes. To prevent merge conflicts with what was previously in the remote gh-pages branch, you will need to do a forced git push (add `--force` after your git push command); this will make sure to overwrite everything that is different in the remote branch so that your build works properly.
    ```sh
	git checkout gh-pages
	git push origin gh-pages --force
    ```

1. The contents of the [`build`](build/) directory should now be the root of the [`gh-pages`](https://github.com/tj-uav/tj-uav.github.io/tree/gh-pages) branch. Double check that GitHub Pages is serving from that branch by going into settings > GitHub Pages > Source and select [`gh-pages`](https://github.com/tj-uav/tj-uav.github.io/tree/gh-pages) as the branch (you might have to be an admin in order to do this, and it _shouldn't_ change.)

1. After anywhere from a few seconds to a few minutes, the changes should be deployed and visible on the website.

Don't forget to push your changes to any JSX or other files to the [`main`](https://github.com/tj-uav/tj-uav.github.io/tree/main) branch so you don't lose your work! 

*Consolidated deployment script*

	```sh
	npm run build
    git add build
	git commit -m "Built latest src changes"
    git branch -D gh-pages
    git subtree split --prefix build --branch gh-pages
	git checkout gh-pages
	git push origin gh-pages --force
    ```

## Available Scripts

A list of available scripts can be found under `"scripts":` in [`package.json`](package.json).
