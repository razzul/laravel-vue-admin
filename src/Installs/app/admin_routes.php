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
//$prefix = config('LaravelVueAdmin.adminRoute');

Route::group(['as' => $as, 'middleware' => ['auth', 'permission:ADMIN_PANEL']], function () {
	
	// Dashboard //
	
	Route::get(config('LaravelVueAdmin.adminRoute'), 'LaravelVueAdmin\DashboardController@index');
	Route::get(config('LaravelVueAdmin.adminRoute'). '/dashboard', 'LaravelVueAdmin\DashboardController@index');
	
	// Users //
	Route::resource(config('LaravelVueAdmin.adminRoute') . '/users', 'LaravelVueAdmin\UsersController');
	Route::get(config('LaravelVueAdmin.adminRoute') . '/user_dt_ajax', 'LaravelVueAdmin\UsersController@dtajax');
	
	// Uploads //
	Route::resource(config('LaravelVueAdmin.adminRoute') . '/uploads', 'LaravelVueAdmin\UploadsController');
	Route::post(config('LaravelVueAdmin.adminRoute') . '/upload_files', 'LaravelVueAdmin\UploadsController@upload_files');
	Route::get(config('LaravelVueAdmin.adminRoute') . '/uploaded_files', 'LaravelVueAdmin\UploadsController@uploaded_files');
	Route::post(config('LaravelVueAdmin.adminRoute') . '/uploads_update_caption', 'LaravelVueAdmin\UploadsController@update_caption');
	Route::post(config('LaravelVueAdmin.adminRoute') . '/uploads_update_filename', 'LaravelVueAdmin\UploadsController@update_filename');
	Route::post(config('LaravelVueAdmin.adminRoute') . '/uploads_update_public', 'LaravelVueAdmin\UploadsController@update_public');
	Route::post(config('LaravelVueAdmin.adminRoute') . '/uploads_delete_file', 'LaravelVueAdmin\UploadsController@delete_file');
	
	// Roles //
	Route::resource(config('LaravelVueAdmin.adminRoute') . '/roles', 'LaravelVueAdmin\RolesController');
	Route::get(config('LaravelVueAdmin.adminRoute') . '/role_dt_ajax', 'LaravelVueAdmin\RolesController@dtajax');
	Route::post(config('LaravelVueAdmin.adminRoute') . '/save_module_role_permissions/{id}', 'LaravelVueAdmin\RolesController@save_module_role_permissions');
	
	// Permissions //
	Route::resource(config('LaravelVueAdmin.adminRoute') . '/permissions', 'LaravelVueAdmin\PermissionsController');
	Route::get(config('LaravelVueAdmin.adminRoute') . '/permission_dt_ajax', 'LaravelVueAdmin\PermissionsController@dtajax');
	Route::post(config('LaravelVueAdmin.adminRoute') . '/save_permissions/{id}', 'LaravelVueAdmin\PermissionsController@save_permissions');
	
	// Departments //
	Route::resource(config('LaravelVueAdmin.adminRoute') . '/departments', 'LaravelVueAdmin\DepartmentsController');
	Route::get(config('LaravelVueAdmin.adminRoute') . '/department_dt_ajax', 'LaravelVueAdmin\DepartmentsController@dtajax');
	
	// Employees //
	Route::resource(config('LaravelVueAdmin.adminRoute') . '/employees', 'LaravelVueAdmin\EmployeesController');
	Route::get(config('LaravelVueAdmin.adminRoute') . '/employee_dt_ajax', 'LaravelVueAdmin\EmployeesController@dtajax');
	Route::post(config('LaravelVueAdmin.adminRoute') . '/change_password/{id}', 'LaravelVueAdmin\EmployeesController@change_password');
	
	// Organizations //
	Route::resource(config('LaravelVueAdmin.adminRoute') . '/organizations', 'LaravelVueAdmin\OrganizationsController');
	Route::get(config('LaravelVueAdmin.adminRoute') . '/organization_dt_ajax', 'LaravelVueAdmin\OrganizationsController@dtajax');

	// Backups //
	Route::resource(config('LaravelVueAdmin.adminRoute') . '/backups', 'LaravelVueAdmin\BackupsController');
	Route::get(config('LaravelVueAdmin.adminRoute') . '/backup_dt_ajax', 'LaravelVueAdmin\BackupsController@dtajax');
	Route::post(config('LaravelVueAdmin.adminRoute') . '/create_backup_ajax', 'LaravelVueAdmin\BackupsController@create_backup_ajax');
	Route::get(config('LaravelVueAdmin.adminRoute') . '/downloadBackup/{id}', 'LaravelVueAdmin\BackupsController@downloadBackup');
});
