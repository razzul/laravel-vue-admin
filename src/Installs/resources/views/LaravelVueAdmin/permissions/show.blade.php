@extends('LaravelVueAdmin.layouts.app')

@section('htmlheader_title')
	Permission View
@endsection


@section('main-content')
<div id="page-content" class="profile2">
	<div class="bg-primary clearfix">
		<div class="col-md-5">
			<div class="row">
				<div class="col-md-2">
					<!--<img class="profile-image" src="{{ asset('LaravelVueAdmin/assets/img/avatar5.png') }}" alt="">-->
					<div class="profile-icon text-primary"><i class="fa {{ $module->fa_icon }}"></i></div>
				</div>
				<div class="col-md-10">
					<h4 class="name">{{ $permission->$view_col }}</h4>
					<p class="desc">{{ $permission->description }}</p>
				</div>
			</div>
		</div>
		<div class="col-md-3">
			
		</div>
		<div class="col-md-3">
			
		</div>
		<div class="col-md-1 actions">
			@lv_access("Permissions", "edit")
				<a href="{{ url(config('LaravelVueAdmin.adminRoute') . '/permissions/'.$permission->id.'/edit') }}" class="btn btn-xs btn-edit btn-default"><i class="fa fa-pencil"></i></a><br>
			@endlv_access
			
			@lv_access("Permissions", "delete")
				{{ Form::open(['route' => [config('LaravelVueAdmin.adminRoute') . '.permissions.destroy', $permission->id], 'method' => 'delete', 'style'=>'display:inline']) }}
					<button class="btn btn-default btn-delete btn-xs" type="submit"><i class="fa fa-times"></i></button>
				{{ Form::close() }}
			@endlv_access
		</div>
	</div>

	<ul data-toggle="ajax-tab" class="nav nav-tabs profile" role="tablist">
		<li class=""><a href="{{ url(config('LaravelVueAdmin.adminRoute') . '/permissions') }}" data-toggle="tooltip" data-placement="right" title="Back to Permissions"><i class="fa fa-chevron-left"></i></a></li>
		<li class="active"><a role="tab" data-toggle="tab" class="active" href="#tab-general-info" data-target="#tab-info"><i class="fa fa-bars"></i> General Info</a></li>
		@role("SUPER_ADMIN")
		<li class=""><a role="tab" data-toggle="tab" href="#tab-access" data-target="#tab-access"><i class="fa fa-key"></i> Access</a></li>
		@endrole
	</ul>

	<div class="tab-content">
		<div role="tabpanel" class="tab-pane active fade in" id="tab-info">
			<div class="tab-content">
				<div class="panel infolist">
					<div class="panel-default panel-heading">
						<h4>General Info</h4>
					</div>
					<div class="panel-body">
						@lv_display($module, 'name')
						@lv_display($module, 'display_name')
						@lv_display($module, 'description')
					</div>
				</div>
			</div>
		</div>
		@role("SUPER_ADMIN")
		<div role="tabpanel" class="tab-pane fade in p20 bg-white" id="tab-access">
			<div class="tab-content">
				<div class="panel infolist">
					<form action="{{ url('/admin/save_permissions/'.$permission->id) }}"  method="post">
					<input type="hidden" name="_token" value="{{ csrf_token() }}">
						<div class="panel-default panel-heading">
							<h4>Permissions for Roles</h4>
						</div>
						<div class="panel-body">
							@foreach ($roles as $role)
								<div class="form-group">
									<label for="ratings_innovation" class="col-md-2">{{ $role->display_name }} :</label>
									<div class="col-md-10 fvalue star_class">
										<?php
										$query = DB::table('permission_role')->where('permission_id', $permission->id)->where('role_id', $role->id);
										?>
										@if($query->count() > 0)
											<input type="checkbox" name="permi_role_{{ $role->id }}" value="1" checked>
										@else
											<input type="checkbox" name="permi_role_{{ $role->id }}" value="1">
										@endif
									</div>
								</div>
							@endforeach
							
							<div class="form-group">
								<label for="ratings_innovation" class="col-md-2"></label>
								<div class="col-md-10 fvalue star_class">
									<input class="btn btn-success" type="submit" value="Save">
								</div>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
		@endrole
	</div>
	</div>
	</div>
</div>
@endsection
