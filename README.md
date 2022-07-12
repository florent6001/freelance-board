
# Freelance-Board

![MIT License](https://img.shields.io/badge/License-MIT-blue.svg)
![Laravel](https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white)
![NextJS](https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

<!> Application toujours en cours de développement, ne pas utiliser pour le moment. <!>

Ceci est une application Next.JS lié à une API Laravel pour aider les freelancer à gérer leur auto-entreprise.
Ajouter des clients, créers des devis et transformer-les en factures


## Fonctionnalités

- Système de compte (Inscription, connexion, mot de passe oublié, modification des informations, suppression du compte)
- Dark mode pour le dashboard.
- Responsive Design

## Captures d'écran

A venir

## A faire

- Société (Renseigner les informations de sa société (logo, nom, adresse, siret, ..)) -> Pour les devis et les factures
- Clients (CRUD)
- Devis (Créer un devis lié à un client, génère également un PDF que vous pouvez envoyer à votre client)
- Factures (Passer le devis au status "Accepté" le transforme en facture, téléchargeable en PDF également)

## Installation

Pour commencer, vous devrez cloner le rpeository.

```bash
  git clone https://github.com/florent6001/freelance-board
```

Une fois le clone effectué, télécharger les packages pour le front et le back-end.
```bash
  cd freelance-board/frontend-freelance-board
  yarn
  cd ../backend-freelance-board
  composer install
```
    
## Utilisation


Avant de démarrer le serveur Next.JS ou Laravel, assuré vous d'avoir copier les fichiers .env.example en fichier .env et d'y affecter vos variables.

Ce projet utilise [Laravel Sail](https://laravel.com/docs/9.x/sail). Vous pouvez donc démarrer le serveur laravel avec Docker, pour ce faire rendez-vous dans le dossier back-end et tapez la commande suivante: 

```bash
  ./vendor/bin/sail up
```

Démarrer ensuite le serveur Next.JS
```bash
  yarn dev
```


## Remerciements

 - [NextJS](https://nextjs.org/) - Utilisé pour le front-end
 - [TailwindCSS](https://tailwindcss.com/) - Utilisé pour le design
 - [Laravel](https://laravel.com/) - Utilisé pour le back-end
 - [breeze-next](https://github.com/laravel/breeze-next) - Starter utilisé pour coupler rapidement Next.JS et Laravel [Taylor Otwell](https://github.com/taylorotwell)

 


## Auteur

- [Florent Vandroy - @florent6001](https://www.github.com/florent6001)

