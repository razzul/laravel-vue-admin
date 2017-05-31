<?php

namespace Razzul\LaravelVueAdmin\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Razzul\LaravelVueAdmin\Helpers\LvHelper;

class Menu extends Model
{
    protected $table = 'lv_menus';
    
    protected $guarded = [
        
    ];
}
