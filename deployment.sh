npm run build
git add build
git commit -m "Built latest src changes"
git branch -D gh-pages
git subtree split --prefix build --branch gh-pages
git checkout gh-pages
git push origin gh-pages --force
