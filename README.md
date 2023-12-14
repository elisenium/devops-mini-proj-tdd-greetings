# DevOps Mini-Projet 2
Travail de recherche, mettre en place de l'integration continue avec les GitHub Actions

## Informations
- N° de groupe : 34
- Membres du groupe : José Fechado Didia, Grelaud Elise
- Lien vers le dépôt de code contenant la pipeline : https://github.com/elisenium/devops-mini-proj-tdd-greetings/tree/setUpPipeline

## Énoncé

### Pré-requis :
- Sur base de votre mini-projet 1 (TDD)
- Usage de [JEST](https://jestjs.io/docs/getting-started) obligatoire
- Utilisation pulls requests


### Ajouter ce fichier MD à votre mini-projet-1
Compléter les informations concernant votre numéro de groupe et membres du groupe

### Mettre en place une intégration continue
L'intégration continue doit se composer des étapes obligatoires suivantes (non-exhaustif):

    - Les dépendances doivent être installées
    - Une première étape indiquant l'heure de commencement de la pipeline doit être affichée
    - Le code doit être "formatté" correctement (Prettier)
    - Le code doit être "linté" correctement (Lint)
    - Le code doit être "testé" correctement ET le coverage doit être au-dessus de 80% (Jest)
    - Le code doit être "buildé" correctement
    - Une étape indiquant l'heure de fin de la pipeline doit être affichée
    - Une étape indiquant le string suivant "PIPELINE SUCCESS WITHOUT ERRORS" doit être affichée

### Enclencher l'intégration continue lors d'une Pull Request / Merge Request
Ouvrez une Pull Request / Merge Request 
Lors de l'ouverture et/ou de la modification de votre PR/MR vers la branche principale, l'intégration continue doit s'enclencher et les étapes doivent être respectées.
Merci de laisser une PR / MR ouverte afin que l'on puisse évaluer.


Liens utiles:
[GitHub Actions](https://docs.github.com/fr/actions)
[Jest coverage](https://www.valentinog.com/blog/jest-coverage/)

## Questions

- Décrivez brièvement ce que fait votre fichier YML.
```bash
Le fichier YML permet de définir les actions à effectuer.
Ici, notre fichier YML vérifie le formattage avec Prettier, le lintage avec ESLint tester le code coverage et le build avec Webpack
```
- En particulier : à quoi sert le “on” ? dans votre fichier YML ?  Quelle est la différence entre “on push” et “on pull request”. Que conseilleriez-vous comme option parmi ces 2 options à un groupe de développeurs junior ? Pourquoi ? 
```bash
"on" = pour définir l'événement qui excécute le workflow
"on push" = s'exécute lorsqu'un commit est poussé vers la branche main
"on pull request" = s'exécute lorsqu'une pull request est ouverte ou modifiée
```
- Quelle est la différence entre run et run_on ?  Expliquez par rapport à votre pipeline.  
```bash
"run" = exécute les étapes différentes de l'intégration continue
"runs_on" = pour spécifier dans quel environnement les commandes et les scripts vont être exécutées
```
- Quelle est la différence entre “use” et “run”. Expliquez par rapport à votre pipeline. 
```bash
"use" = pour 'checkout' avec git donc récupérer le code source d'une repo GitHub
"run" = exécute les étapes différentes de l'intégration continue
```
- Peut-on intervertir différentes étapes dans votre pipeline ? Que votre réponse soit oui ou non, expliquez par rapport à votre pipeline. 
```bash
Certaines étapes peuvent être interverties mais d'autres non. Par exemple, si on lint et formate au début, les tests suivants risquent d'échouer par la suite. Il est donc préférable de choisir un certain ordre logique pour éviter que les tests échouent
```
- Je veux ajouter un test de sécurité sur mon pipeline en exécutant le programme secure_app. Que devrais-je faire ?  Quelles questions devriez-vous vous poser ? 
```bash
Il faudrait se décider sur le type de sécurité qu'on aimerait utiliser ainsi que les outils adéquats pour ces tests.
Quand intégrer la sécurité dans la pipeline ? Quelles sont les dépendances dont on a besoin pour exécuter les tests de sécurité ? Comment interpréter/formuler la sortie du test ?
```