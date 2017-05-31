<?php

$as = "";
if(\Razzul\LaravelVueAdmin\Helpers\LvHelper::laravel_ver() == 5.3) {
    $as     = config('LaravelVueAdmin.adminRoute') . '.';
}
$prefix = config('LaravelVueAdmin.adminRoute');

Route::group([
    'namespace'  => 'Razzul\LaravelVueAdmin\Controllers',
    'as'         => $as,
    'middleware' => ['web', 'auth', 'permission:ADMIN_PANEL', 'role:SUPER_ADMIN'],
], function () {

    // Modules //
    Route::resource($prefix . '/modules', 'ModuleController');
    Route::resource($prefix . '/module_fields', 'FieldController');

    Route::get($prefix . '/module_generate_crud/{model_id}', 'ModuleController@generate_crud');
    Route::get($prefix . '/module_generate_migr/{model_id}', 'ModuleController@generate_migr');
    Route::get($prefix . '/module_generate_update/{model_id}', 'ModuleController@generate_update');
    Route::get($prefix . '/module_generate_migr_crud/{model_id}', 'ModuleController@generate_migr_crud');
    Route::get($prefix . '/modules/{model_id}/set_view_col/{column_name}', 'ModuleController@set_view_col');
    Route::post($prefix . '/save_role_module_permissions/{id}', 'ModuleController@save_role_module_permissions');
    Route::get($prefix . '/save_module_field_sort/{model_id}', 'ModuleController@save_module_field_sort');
    Route::post($prefix . '/check_unique_val/{field_id}', 'FieldController@check_unique_val');
    Route::get($prefix . '/module_fields/{id}/delete', 'FieldController@destroy');
    Route::post($prefix . '/get_module_files/{module_id}', 'ModuleController@get_module_files');

    // Menu Editor //
    Route::resource($prefix . '/menus', 'MenuController');
    Route::post($prefix . '/menus/update_hierarchy', 'MenuController@update_hierarchy');

    // Configuration //
    Route::resource($prefix . '/configs', '\App\Http\Controllers\LaravelVueAdmin\ConfigController');

    Route::group([
        'middleware' => 'role',
    ], function () {
        /*
    Route::get($prefix . '/menu', [
    'as'   => 'menu',
    'uses' => 'LaravelVueAdminController@index'
    ]);
     */
    });
});
