<?php

/* ================== Homepage ================== */
Route::get('/', 'HomeController@index');
Route::get('/home', 'HomeController@index');
Route::auth();

/* ================== Access Uploaded Files ================== */
Route::get('files/{hash}/{name}', 'LaravelVueAdmin\UploadsController@get_file');

/*
|--------------------------------------------------------------------------
| Admin Application Routes
|--------------------------------------------------------------------------
*/

$as = "";
if(\Razzul\LaravelVueAdmin\Helpers\LvHelper::laravel_ver() == 5.3) {
	$as = config('LaravelVueAdmin.adminRoute').'.';
	
	// Routes for Laravel 5.3
	Route::get('/logout', 'Auth\LoginController@logout');
}
$prefix = config('LaravelVueAdmin.adminRoute');

Route::group(['as' => $as, 'middleware' => ['auth', 'permission:ADMIN_PANEL']], function () {
	
	// Dashboard //
	
	Route::get($prefix, 'LaravelVueAdmin\DashboardController@index');
	Route::get($prefix. '/dashboard', 'LaravelVueAdmin\DashboardController@index');
	
	// Users //
	Route::resource($prefix . '/users', 'LaravelVueAdmin\UsersController');
	Route::get($prefix . '/user_dt_ajax', 'LaravelVueAdmin\UsersController@dtajax');
	
	// Uploads //
	Route::resource($prefix . '/uploads', 'LaravelVueAdmin\UploadsController');
	Route::post($prefix . '/upload_files', 'LaravelVueAdmin\UploadsController@upload_files');
	Route::get($prefix . '/uploaded_files', 'LaravelVueAdmin\UploadsController@uploaded_files');
	Route::post($prefix . '/uploads_update_caption', 'LaravelVueAdmin\UploadsController@update_caption');
	Route::post($prefix . '/uploads_update_filename', 'LaravelVueAdmin\UploadsController@update_filename');
	Route::post($prefix . '/uploads_update_public', 'LaravelVueAdmin\UploadsController@update_public');
	Route::post($prefix . '/uploads_delete_file', 'LaravelVueAdmin\UploadsController@delete_file');
	
	// Roles //
	Route::resource($prefix . '/roles', 'LaravelVueAdmin\RolesController');
	Route::get($prefix . '/role_dt_ajax', 'LaravelVueAdmin\RolesController@dtajax');
	Route::post($prefix . '/save_module_role_permissions/{id}', 'LaravelVueAdmin\RolesController@save_module_role_permissions');
	
	// Permissions //
	Route::resource($prefix . '/permissions', 'LaravelVueAdmin\PermissionsController');
	Route::get($prefix . '/permission_dt_ajax', 'LaravelVueAdmin\PermissionsController@dtajax');
	Route::post($prefix . '/save_permissions/{id}', 'LaravelVueAdmin\PermissionsController@save_permissions');
	
	// Departments //
	Route::resource($prefix . '/departments', 'LaravelVueAdmin\DepartmentsController');
	Route::get($prefix . '/department_dt_ajax', 'LaravelVueAdmin\DepartmentsController@dtajax');
	
	// Employees //
	Route::resource($prefix . '/employees', 'LaravelVueAdmin\EmployeesController');
	Route::get($prefix . '/employee_dt_ajax', 'LaravelVueAdmin\EmployeesController@dtajax');
	Route::post($prefix . '/change_password/{id}', 'LaravelVueAdmin\EmployeesController@change_password');
	
	// Organizations //
	Route::resource($prefix . '/organizations', 'LaravelVueAdmin\OrganizationsController');
	Route::get($prefix . '/organization_dt_ajax', 'LaravelVueAdmin\OrganizationsController@dtajax');

	// Backups //
	Route::resource($prefix . '/backups', 'LaravelVueAdmin\BackupsController');
	Route::get($prefix . '/backup_dt_ajax', 'LaravelVueAdmin\BackupsController@dtajax');
	Route::post($prefix . '/create_backup_ajax', 'LaravelVueAdmin\BackupsController@create_backup_ajax');
	Route::get($prefix . '/downloadBackup/{id}', 'LaravelVueAdmin\BackupsController@downloadBackup');
});
