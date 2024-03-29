## Installation

### Prerequisites
- Node.js and npm should be installed on your system.
- Composer and PHP should be installed on your system.
- Laravel CLI should be installed globally.


### Clone the repository
```sh
  git clone https://github.com/elkxuan/vue-laravel-userAuth.git
```

### Frontend (Vue.js)
```sh
   cd vue-laravel-userAuth/frontend
   npm install
   npm run serve
```

### Backend (Laravel)
```sh
cd vue-laravel-userAuth/backend
composer install
cp .env.example .env
php artisan key:generate
php artisan migrate
php artisan serve
```