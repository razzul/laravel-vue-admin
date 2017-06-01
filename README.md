# laravel-vue-admin
Laravel admin pannel using Vue.js

> *STEP 1:* composer require laravel-vue-admin <br>
> *STEP 2:* update main composer file <br>

```json
"classmap": [
    "src/Controllers",
    "src/Models"
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

> *STEP 3:* add require packages <br>

```bash
composer require laravelcollective/html
composer require yajra/laravel-datatables-oracle
composer require creativeorange/gravatar
composer require doctrine/dbal
composer require zizaco/entrust
composer require spatie/laravel-backup
```

> *STEP 4:* composer dump-autoload <br>
> *STEP 5:* php atrisan <br>

_if you are getting error here like _

```
trait AuthorizesResources not found
```
You need to remove this trait from app/Http/Controllers/Controller.php<br>

> *STEP 6:* update config/database.php <br>

```
'charset' => 'utf8',
'collation' => 'utf8_unicode_ci',
```
> *STEP 7:* php atrisan lv:install && follow onscreen instructions<br>