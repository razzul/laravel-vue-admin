# laravel-vue-admin
Laravel admin pannel using Vue.js


![alt tag](https://raw.githubusercontent.com/razzul/laravel-vue-admin/master/screenshots/dashboard.png)
![alt tag](https://raw.githubusercontent.com/razzul/laravel-vue-admin/master/screenshots/modules.png)
![alt tag](https://raw.githubusercontent.com/razzul/laravel-vue-admin/master/screenshots/config.png)

> *STEP 1:* Create folder packages/Razzul in the root dir in the laravel application <br>
> *STEP 2:* Get the package under packages/Razzul and rename laravel-vue-admin to LaravelVueAdmin <br>

```
composer require razzul/laravelvueadmin
or
clone the package from https://github.com/razzul/laravel-vue-admin
```

> *STEP 3:* update main composer file <br>

```json
"classmap": [
    "packages/Razzul/LaravelVueAdmin/src/Controllers",
    "packages/Razzul/LaravelVueAdmin/src/Models"
],
"autoload": {
    "psr-4": {
        "App\\": "app/",
        "Razzul\\LaravelVueAdmin\\": "packages/Razzul/LaravelVueAdmin/src/"
    },
    "files": [
    ]
}
```

> *STEP 4:* add require packages <br>

```bash
composer require laravelcollective/html
composer require yajra/laravel-datatables-oracle
composer require creativeorange/gravatar
composer require doctrine/dbal
composer require zizaco/entrust
composer require spatie/laravel-backup
```

> *STEP 5:* composer dump-autoload <br>
> *STEP 6:* php artisan <br>

_if you are getting error here like_

```
trait AuthorizesResources not found
```
You need to remove this trait from app/Http/Controllers/Controller.php<br>

> *STEP 7:* update config/database.php <br>

```
'mysql' => [
    'charset' => 'utf8',
    'collation' => 'utf8_unicode_ci',
```
> *STEP 8:* move gulpfile.js from _packages/Razzul/LaravelVueAdmin_ to the root folder <br>
> *STEP 9:* register package in config/app.php<br>

```php
...
Razzul\LaravelVueAdmin\LaravelVueAdminServiceProvider::class,
```
> *STEP 10:* php atrisan lv:install && follow onscreen instructions<br>

> *STEP 11:* update config/database.php <br>
_we need to change this to make backup functional_
```
'mysql' => [
    'dump_command_path' => 'c:\xampp\mysql\bin',
```