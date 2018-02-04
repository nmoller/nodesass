# WEBPACK

# Première fois

Clonner le dépot
```
git clone git@github.com:nmoller/nodesass.git
```

#### Installer les nodes_modules

Installer les dépendances:

**Utiliser le uid (-u 1000) de l'utilisateur locale pour ne pas avoir des problèmes de permissions.**

```
cd [clonning_folder]
docker run -it --rm -u 1000 -v `pwd`:/opt/moodle --workdir="/opt/moodle" node:6 npm install
```


**Le tout est prêt pour commencer le devéloppement.**

Pour générer le fichier [dossier_travail]/dist/testapp.css :

```
docker run -it --rm -u 1000 -v `pwd`:/opt/moodle --workdir="/opt/moodle" node:6 npm run wp
```



# Depuis le début

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
