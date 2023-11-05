# README - Projet Discord Bot

Ce projet consiste en un bot Discord écrit en JavaScript avec l'utilisation de la bibliothèque Discord.js. Le bot gère diverses fonctionnalités, telles que des commandes interactives, des événements, et la connexion à une base de données MySQL.

## Fichiers du Projet

### index.js

Le fichier `index.js` est le point d'entrée de l'application du bot Discord. Il charge les dépendances, configure les intentions du bot, charge les événements et les commandes, puis démarre le bot en se connectant à Discord.

### devbot.js

Le fichier `devbot.js` est semblable à `index.js` mais il est destiné à une version de développement du bot, avec une configuration et un token différents.

### db.js

Le fichier `db.js` contient la configuration et la connexion à une base de données MySQL. Il utilise les informations de connexion à partir du fichier `config.json`.

### config.json

Le fichier `config.json` contient la configuration du bot, y compris les identifiants de bot, les jetons d'accès, les identifiants de serveurs Discord, les canaux de logs, et les informations de la base de données.

### Events/Handlers/eventHandlers.js

Le fichier `eventHandler.js` contient une fonction `loadEvents` qui charge tous les événements du bot. Les événements sont gérés en fonction de leurs intentions et s'ils doivent être exécutés une fois ou en boucle.

### Events/Handlers/commandHandler.js

Le fichier `commandHandler.js` contient une fonction `loadCommands` qui charge toutes les commandes du bot. Les commandes sont enregistrées dans une collection pour une utilisation ultérieure et sont également enregistrées sur Discord.

### Events/interaction/interactionCreate.js

Le fichier `interactionCreate.js` est un gestionnaire d'événements qui gère les interactions utilisateur, y compris les commandes Slash et les boutons. Il exécute les commandes associées et envoie des informations aux canaux de logs.

### Events/Client/ready.js

Le fichier `ready.js` est un gestionnaire d'événements qui s'exécute lorsque le bot est prêt. Il affiche des informations sur la disponibilité du bot, telles que le nombre de serveurs et d'utilisateurs, et définit l'activité du bot.

### Commands/general/ping.js

Le fichier `ping.js` contient une commande Slash appelée "ping" qui renvoie une réponse simple.

### Commands/general/template.js

Le fichier `template.js` contient une commande Slash de modèle avec une réponse simple.

### Commands/info/help.js

Le fichier `help.js` contient une commande Slash qui affiche une liste de toutes les commandes du bot, triées par catégorie.

## Instructions pour l'exécution

1. Assurez-vous d'avoir Node.js installé sur votre système.
2. Configurez les informations nécessaires dans le fichier `config.json`.
3. Exécutez le bot en utilisant la commande `node index.js` pour la version de production ou `node devbot.js` pour la version de développement.

N'oubliez pas d'installer les dépendances Discord.js et autres si elles ne sont pas déjà installées en utilisant `npm install`.