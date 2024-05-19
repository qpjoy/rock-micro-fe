# lerna scripts
```bash
yarn init
yarn add lerna -WD
(yarn) lerna init --packages="packages/*" --independent


yarn add rimraf scripty -WD
# eslint
yarn add -WD eslint @typescript-eslint/eslint-plugin @typescript-eslint/parser
# commitlint
yarn add -WD @commitlint/cli @commitlint/config-conventional @commitlint/config-lerna-scopes commitlint husky lerna-changelog

# verdaccio
rm -rf ~/.local/share/verdaccio
```