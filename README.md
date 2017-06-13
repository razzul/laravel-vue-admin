# laravel-vue-admin
Laravel admin pannel using Vue.js


![alt tag](https://raw.githubusercontent.com/razzul/laravel-vue-admin/master/screenshots/dashboard.png)
![alt tag](https://raw.githubusercontent.com/razzul/laravel-vue-admin/master/screenshots/modules.png)
![alt tag](https://raw.githubusercontent.com/razzul/laravel-vue-admin/master/screenshots/config.png)

> *STEP 1:* composer require "razzul/laravelvueadmin:dev-master" <br>
> *STEP 2:* create gulpfile.js in the root folder <br>
_else you will get error while installing, we will fix this later_
> *STEP 3:* create new db for you application if not created <br>
> *STEP 4:* update .env with database details <br>
> *STEP 5:* update config/database.php <br>
```
'mysql' => [
    'charset' => 'utf8',
    'collation' => 'utf8_unicode_ci',
```
> *STEP 6:* register package in config/app.php<br>
```php
...
Razzul\LaravelVueAdmin\LaravelVueAdminServiceProvider::class,
```
> *STEP 7:* php artisan <br>
_if you are getting error here like_
```
trait AuthorizesResources not found
```
You need to remove this trait from app/Http/Controllers/Controller.php<br>
> *STEP 8:* php atrisan lv:install && follow onscreen instructions<br>
> *STEP 9:* update config/database.php <br>
_we need to change this to make backup functional_
```
'mysql' => [
    'dump_command_path' => 'c:\xampp\mysql\bin',
```