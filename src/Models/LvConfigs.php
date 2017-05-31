<?php

namespace Razzul\LaravelVueAdmin\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Exception;
use Log;
use DB;
use Razzul\LaravelVueAdmin\Helpers\LvHelper;

class LvConfigs extends Model
{   
	protected $table = 'lv_configs';
	
	protected $fillable = [
		"key", "value"
	];
	
	protected $hidden = [
		
	];

	// LvConfigs::getByKey('sitename');
	public static function getByKey($key) {
		$row = LvConfigs::where('key',$key)->first();
		if(isset($row->value)) {
			return $row->value;
		} else {
			return false;
		}
	}
	
	// LvConfigs::getAll();
	public static function getAll() {
		$configs = array();
		$configs_db = LvConfigs::all();
		foreach ($configs_db as $row) {
			$configs[$row->key] = $row->value;
		}
		return (object) $configs;
	}
}
