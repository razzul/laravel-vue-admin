<?php

$as = "";
if(\Razzul\LaravelVueAdmin\Helpers\LvHelper::laravel_ver() == 5.3) {
    $as     = config('LaravelVueAdmin.adminRoute') . '.';
}
//$prefix = config('LaravelVueAdmin.adminRoute');

Route::group([
    'namespace'  => 'Razzul\LaravelVueAdmin\Controllers',
    'as'         => $as,
    'middleware' => ['web', 'auth', 'permission:ADMIN_PANEL', 'role:SUPER_ADMIN'],
], function () {

    // Modules //
    Route::resource(config('LaravelVueAdmin.adminRoute') . '/modules', 'ModuleController');
    Route::resource(config('LaravelVueAdmin.adminRoute') . '/module_fields', 'FieldController');

    Route::get(config('LaravelVueAdmin.adminRoute') . '/module_generate_crud/{model_id}', 'ModuleController@generate_crud');
    Route::get(config('LaravelVueAdmin.adminRoute') . '/module_generate_migr/{model_id}', 'ModuleController@generate_migr');
    Route::get(config('LaravelVueAdmin.adminRoute') . '/module_generate_update/{model_id}', 'ModuleController@generate_update');
    Route::get(config('LaravelVueAdmin.adminRoute') . '/module_generate_migr_crud/{model_id}', 'ModuleController@generate_migr_crud');
    Route::get(config('LaravelVueAdmin.adminRoute') . '/modules/{model_id}/set_view_col/{column_name}', 'ModuleController@set_view_col');
    Route::post(config('LaravelVueAdmin.adminRoute') . '/save_role_module_permissions/{id}', 'ModuleController@save_role_module_permissions');
    Route::get(config('LaravelVueAdmin.adminRoute') . '/save_module_field_sort/{model_id}', 'ModuleController@save_module_field_sort');
    Route::post(config('LaravelVueAdmin.adminRoute') . '/check_unique_val/{field_id}', 'FieldController@check_unique_val');
    Route::get(config('LaravelVueAdmin.adminRoute') . '/module_fields/{id}/delete', 'FieldController@destroy');
    Route::post(config('LaravelVueAdmin.adminRoute') . '/get_module_files/{module_id}', 'ModuleController@get_module_files');

    // Menu Editor //
    Route::resource(config('LaravelVueAdmin.adminRoute') . '/menus', 'MenuController');
    Route::post(config('LaravelVueAdmin.adminRoute') . '/menus/update_hierarchy', 'MenuController@update_hierarchy');

    // Configuration //
    Route::resource(config('LaravelVueAdmin.adminRoute') . '/configs', '\App\Http\Controllers\LaravelVueAdmin\LvConfigController');

    Route::group([
        'middleware' => 'role',
    ], function () {
        /*
    Route::get(config('LaravelVueAdmin.adminRoute') . '/menu', [
    'as'   => 'menu',
    'uses' => 'LaravelVueAdminController@index'
    ]);
     */
    });
});
