
# Freelance-Board

![MIT License](https://img.shields.io/badge/License-MIT-blue.svg)
![Laravel](https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white)
![NextJS](https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

<!> Work in Progress, the app is not production ready <!>

A Next.JS application built with Laravel back-end to help freelancer to maanger their society. Add customers, create quotations, generate and manage invoices.




## Features

- Register, login, password reset, profile settings, account deletion.
- Light/dark mode toggle
- Responsive Design

## Screenshots

![App Screenshot](https://via.placeholder.com/468x300?text=App+Screenshot+Here)


## Roadmap

- Account system (Implement delete account features)
- Society (Company information for quotations and invoices (Society name, logo, ..))
- Customers (create, edit, update, delete)
- Quotations (Create quotations linked to a customers, also generate a PDF files you can send to your customer.)
- Invoices (You can pass the quotations as "accepted", then the quotations become an invoice, with downloadable PDF too.).
## Installation

First, you have to clone the project

```bash
  git clone https://github.com/florent6001/freelance-board
```

Once the clone is finished, you have to download front-end and back-end packages.

```bash
    cd freelance-board/frontend-freelance-board
    yarn
    cd ../backend-freelance-board
    composer install
```
    
## Usage


Before try to launch any server, be sure you have copy the .env.example to a .env file and change the variable to yours.

The project use [Laravel Sail](https://laravel.com/docs/9.x/sail). You can run the Docker container using the following command inside the backend folder :
```bash
./vendor/bin/sail up
```

Then, you have to go the the frontend folder and start the frontend server
```bash
yarn dev
```


## Acknowledgements

 - [NextJS](https://nextjs.org/) - Front End Framework
 - [TailwindCSS](https://tailwindcss.com/) - CSS Framework
 - [Laravel](https://laravel.com/) - Back End Framework
 - [breeze-next](https://github.com/laravel/breeze-next) - Starter for Laravel and Next.JS App by [Taylor Otwell](https://github.com/taylorotwell)

 


## Authors

- [Florent Vandroy - @florent6001](https://www.github.com/florent6001)

