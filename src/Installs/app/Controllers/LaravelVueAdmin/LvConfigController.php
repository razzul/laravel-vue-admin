<?php
/**
 * Controller genrated using LaravelVueAdmin
 * Help: https://github.com/razzul/laravel-vue-admin
 */

namespace App\Http\Controllers\LaravelVueAdmin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Razzul\LaravelVueAdmin\Models\LvConfigs;

class LvConfigController extends Controller
{
	var $skin_array = [
		'White Skin' => 'white',
		'Blue Skin' => 'blue',
		'Black Skin' => 'black',
		'Purple Skin' => 'purple',
		'Yellow Sking' => 'yellow',
		'Red Skin' => 'red',
		'Green Skin' => 'green'
	];

	var $layout_array = [
		'Fixed Layout' => 'fixed',
		'Boxed Layout' => 'layout-boxed',
		'Top Navigation Layout' => 'layout-top-nav',
		'Sidebar Collapse Layout' => 'sidebar-collapse',
		'Mini Sidebar Layout' => 'sidebar-mini'
	];

	/**
	 * Display a listing of the resource.
	 *
	 * @return \Illuminate\Http\Response
	 */
	public function index()
	{
		$configs = LvConfigs::getAll();
		
		return View('LaravelVueAdmin.configs.index', [
			'configs' => $configs,
			'skins' => $this->skin_array,
			'layouts' => $this->layout_array
		]);
	}
	
	/**
	 * Store a newly created resource in storage.
	 *
	 * @param  \Illuminate\Http\Request  $request
	 * @return \Illuminate\Http\Response
	 */
	public function store(Request $request) {
		$all = $request->all();
		foreach(['sidebar_search', 'show_messages', 'show_notifications', 'show_tasks', 'show_rightsidebar'] as $key) {
			if(!isset($all[$key])) {
				$all[$key] = 0;
			} else {
				$all[$key] = 1;
			}
		}
		foreach($all as $key => $value) {
			LvConfigs::where('key', $key)->update(['value' => $value]);
		}
		
		return redirect(config('LaravelVueAdmin.adminRoute')."/configs");
	}	
}
