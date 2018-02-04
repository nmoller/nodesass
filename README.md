# WEBPACK

### Préalables:

- nodejs
```
$ node -v
```
- npm
```
npm -v
```

Initialiser le projet (npm)

- À la racine du projet
```
npm init -y
```
pour avoir votre fichier package.json

Installer webpack comme dépendence de dev:
```
npm i webpack --save-dev
```

Pour avoir accès au executable, modifier package.json pour ajouter dans scripts:
```
"wp": "webpack"
```
pour ne pas avoir besoin d'ajouter tout le chemin (node_module/.bin/webpack ou modifier $PATH). 

On lancera
```
$ npm run wp
```
Si l'on veut passer des options à webpack, on doit ajouter --, example:
```
$ npm run wp -- -p
$ npm run wp -- --help
```

## Doing SASS

Installer les loader nécessaires:

```
npm i sass-loader node-sass -D
```

## Dev using docker

Pour ne pas poluer la machine du developpeur:
```
docker run -it --rm -v [folder_path]:/opt/moodle node:6 bash
```

Les images node utilisent utilisateur uid 1000 (ça marche bien quand on est en linux et on est le uid 1000).

Sinon il faudra voir le uid des folders mountés et travailler avec:
```
docker run -it --rm -u [uid] -v [folder_path]:/opt/moodle node:6 bash
```
