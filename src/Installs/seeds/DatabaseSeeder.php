<?php

use Illuminate\Database\Seeder;

use Razzul\LaravelVueAdmin\Models\Module;
use Razzul\LaravelVueAdmin\Models\ModuleFields;
use Razzul\LaravelVueAdmin\Models\ModuleFieldTypes;
use Razzul\LaravelVueAdmin\Models\Menu;
use Razzul\LaravelVueAdmin\Models\LvConfigs;

use App\Role;
use App\Permission;
use App\Models\Department;

class DatabaseSeeder extends Seeder
{
	/**
	 * Run the database seeds.
	 *
	 * @return void
	 */
	public function run()
	{
		
		/* ================ LaravelVueAdmin Seeder Code ================ */
		
		// Generating Module Menus
		$modules = Module::all();
		$teamMenu = Menu::create([
			"name" => "Team",
			"url" => "#",
			"icon" => "fa-group",
			"type" => 'custom',
			"parent" => 0,
			"hierarchy" => 1
		]);
		foreach ($modules as $module) {
			$parent = 0;
			if($module->name != "Backups") {
				if(in_array($module->name, ["Users", "Departments", "Employees", "Roles", "Permissions"])) {
					$parent = $teamMenu->id;
				}
				Menu::create([
					"name" => $module->name,
					"url" => $module->name_db,
					"icon" => $module->fa_icon,
					"type" => 'module',
					"parent" => $parent
				]);
			}
		}
		
		// Create Administration Department
	   	$dept = new Department;
		$dept->name = "Administration";
		$dept->tags = "[]";
		$dept->color = "#000";
		$dept->save();
		
		// Create Super Admin Role
		$role = new Role;
		$role->name = "SUPER_ADMIN";
		$role->display_name = "Super Admin";
		$role->description = "Full Access Role";
		$role->parent = 1;
		$role->dept = $dept->id;
		$role->save();
		
		// Set Full Access For Super Admin Role
		foreach ($modules as $module) {
			Module::setDefaultRoleAccess($module->id, $role->id, "full");
		}
		
		// Create Admin Panel Permission
		$perm = new Permission;
		$perm->name = "ADMIN_PANEL";
		$perm->display_name = "Admin Panel";
		$perm->description = "Admin Panel Permission";
		$perm->save();
		
		$role->attachPermission($perm);
		
		// Generate LaravelVueAdmin Default Configurations
		
		$lvconfig = new LvConfigs;
		$lvconfig->key = "sitename";
		$lvconfig->value = "LaravelVueAdmin 1.0.0";
		$lvconfig->save();

		$lvconfig = new LvConfigs;
		$lvconfig->key = "sitename_part1";
		$lvconfig->value = "Laravel";
		$lvconfig->save();
		
		$lvconfig = new LvConfigs;
		$lvconfig->key = "sitename_part2";
		$lvconfig->value = "VueAdmin 1.0.0";
		$lvconfig->save();
		
		$lvconfig = new LvConfigs;
		$lvconfig->key = "sitename_short";
		$lvconfig->value = "Lv";
		$lvconfig->save();

		$lvconfig = new LvConfigs;
		$lvconfig->key = "site_description";
		$lvconfig->value = "LaravelVueAdmin is a open-source Laravel Admin Panel for quick-start Admin based applications and boilerplate for CRM or CMS systems.";
		$lvconfig->save();

		// Display Configurations
		
		$lvconfig = new LvConfigs;
		$lvconfig->key = "sidebar_search";
		$lvconfig->value = "1";
		$lvconfig->save();
		
		$lvconfig = new LvConfigs;
		$lvconfig->key = "show_messages";
		$lvconfig->value = "1";
		$lvconfig->save();
		
		$lvconfig = new LvConfigs;
		$lvconfig->key = "show_notifications";
		$lvconfig->value = "1";
		$lvconfig->save();
		
		$lvconfig = new LvConfigs;
		$lvconfig->key = "show_tasks";
		$lvconfig->value = "1";
		$lvconfig->save();
		
		$lvconfig = new LvConfigs;
		$lvconfig->key = "show_rightsidebar";
		$lvconfig->value = "1";
		$lvconfig->save();
		
		$lvconfig = new LvConfigs;
		$lvconfig->key = "skin";
		$lvconfig->value = "skin-white";
		$lvconfig->save();
		
		$lvconfig = new LvConfigs;
		$lvconfig->key = "layout";
		$lvconfig->value = "fixed";
		$lvconfig->save();

		// Admin Configurations

		$lvconfig = new LvConfigs;
		$lvconfig->key = "default_email";
		$lvconfig->value = "developer.rajul@gmail.com";
		$lvconfig->save();
		
		$modules = Module::all();
		foreach ($modules as $module) {
			$module->is_gen=true;
			$module->save();	
		}
	}
}
