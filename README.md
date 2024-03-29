## Installation

### Prerequisites
- Node.js and npm should be installed on your system.
- Composer and PHP should be installed on your system.
- Laravel CLI should be installed globally.

  Clone the repository:
  git clone https://github.com/yourusername/yourproject.git

### Frontend (Vue.js)
```sh
   cd yourproject/frontend
   npm install
   npm run serve
```

### Backend (Laravel)
```sh
cd yourproject/backend
composer install
cp .env.example .env
php artisan key:generate
php artisan migrate
php artisan serve
```