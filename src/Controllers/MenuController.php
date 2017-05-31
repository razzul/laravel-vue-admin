<?php
/**
 * Controller genrated using LaravelVueAdmin
 * Help: https://github.com/razzul/laravel-vue-admin
 */

namespace Razzul\LaravelVueAdmin\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Input;
use Illuminate\Http\Request;
use App\Http\Requests;
use DB;

use Razzul\LaravelVueAdmin\Models\Menu;
use Razzul\LaravelVueAdmin\Models\Module;
use Razzul\LaravelVueAdmin\Models\ModuleFields;
use Razzul\LaravelVueAdmin\Models\ModuleFieldTypes;
use Razzul\LaravelVueAdmin\Helpers\LvHelper;

class MenuController extends Controller
{
    
    public function __construct() {
        // for authentication (optional)
        $this->middleware('auth');
    }
    
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $modules = Module::all();
        $menuItems = Menu::where("parent", 0)->orderBy('hierarchy', 'asc')->get();
        
        return View('LaravelVueAdmin.menus.index', [
            'menus' => $menuItems,
            'modules' => $modules
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $name = Input::get('name');
        $url = Input::get('url');
        $icon = Input::get('icon');
        $type = Input::get('type');

        if($type == "module") {
            $module_id = Input::get('module_id');
            $module = Module::find($module_id);
            if(isset($module->id)) {
                $name = $module->name;
                $url = $module->name_db;
                $icon = $module->fa_icon;
            } else {
                return response()->json([
                    "status" => "failure",
                    "message" => "Module does not exists"
                ], 200);
            }
        }
        Menu::create([
            "name" => $name,
            "url" => $url,
            "icon" => $icon,
            "type" => $type,
            "parent" => 0
        ]);
        if($type == "module") {
            return response()->json([
                "status" => "success"
            ], 200);
        } else {
            return redirect(config('LaravelVueAdmin.adminRoute').'/menus');
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        // $ftypes = ModuleFieldTypes::getFTypes2();
        // $module = Module::find($id);
        // $module = Module::get($module->name);
        // return view('LaravelVueAdmin.modules.show', [
        //     'no_header' => true,
        //     'no_padding' => "no-padding",
        //     'ftypes' => $ftypes
        // ])->with('module', $module);
    }

    /**
     * Update Custom Menu
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $name = Input::get('name');
        $url = Input::get('url');
        $icon = Input::get('icon');
        $type = Input::get('type');

        $menu = Menu::find($id);
        $menu->name = $name;
        $menu->url = $url;
        $menu->icon = $icon;
        $menu->save();

        return redirect(config('LaravelVueAdmin.adminRoute').'/menus');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        Menu::find($id)->delete();

        // Redirecting to index() method for Listing
        return redirect()->route(config('LaravelVueAdmin.adminRoute').'.menus.index');
    }

    /**
     * Update Menu Hierarchy
     *
     * @return \Illuminate\Http\Response
     */
    public function update_hierarchy()
    {
        $parents = Input::get('jsonData');
        $parent_id = 0;

        for ($i=0; $i < count($parents); $i++) {
            $this->apply_hierarchy($parents[$i], $i+1, $parent_id);
        }

        return $parents;
    }

    function apply_hierarchy($menuItem, $num, $parent_id)
    {
        // echo "apply_hierarchy: ".json_encode($menuItem)." - ".$num." - ".$parent_id."  <br><br>\n\n";
        $menu = Menu::find($menuItem['id']);
        $menu->parent = $parent_id;
        $menu->hierarchy = $num;
        $menu->save();

        if(isset($menuItem['children'])) {
            for ($i=0; $i < count($menuItem['children']); $i++) {
                $this->apply_hierarchy($menuItem['children'][$i], $i+1, $menuItem['id']);
            }
        }
    }
}
