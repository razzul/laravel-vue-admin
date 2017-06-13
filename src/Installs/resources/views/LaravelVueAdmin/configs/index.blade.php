@extends("LaravelVueAdmin.layouts.app")

@section("contentheader_title", "Configuration")
@section("contentheader_description", "")
@section("section", "Configuration")
@section("sub_section", "")
@section("htmlheader_title", "Configuration")

@section("headerElems")
@endsection

@section("main-content")

@if (count($errors) > 0)
	<div class="alert alert-danger">
		<ul>
			@foreach ($errors->all() as $error)
				<li>{{ $error }}</li>
			@endforeach
		</ul>
	</div>
@endif

<div class="panel panel-info">
	<div class="panel-heading">
		<h3 class="panel-title">GUI Settings
			<div class="panel-control pull-right">
				<a class="panelButton"><i class="fa fa-refresh"></i></a>
				<a class="panelButton"><i class="fa fa-minus"></i></a>
				<a class="panelButton"><i class="fa fa-remove"></i></a>
			</div>
		</h3>
	</div>
	<div class="panel-body">
		<form action="{{route(config('LaravelVueAdmin.adminRoute').'.configs.store')}}" method="POST">
			{{ csrf_field() }}
			<div class="form-group">
				<label for="sitename" class="">Sitename</label>
				<input type="text" class="form-control underline" id="sitename" placeholder="Lara" name="sitename" value="{{$configs->sitename}}">
			</div>
			<div class="form-group">
				<label for="sitename_part1" class="">Sitename First Word</label>
				<input type="text" class="form-control underline" id="sitename_part1" placeholder="Lara" name="sitename_part1" value="{{$configs->sitename_part1}}">
			</div>
			<div class="form-group">
				<label for="sitename_part2" class="">Sitename Second Word</label>
				<input type="text" class="form-control underline" id="sitename_part2" placeholder="Admin 1.0" name="sitename_part2" value="{{$configs->sitename_part2}}">
			</div>
			<div class="form-group">
				<label for="sitename_short" class="">Sitename Short (2/3 Characters)</label>
				<input type="text" class="form-control underline" id="sitename_short" placeholder="LA" maxlength="2" name="sitename_short" value="{{$configs->sitename_short}}">
			</div>
			<div class="form-group">
				<label for="sitename_short" class="">Site Description</label>
				<input type="text" class="form-control underline" id="sitename_short" placeholder="Description in 140 Characters" maxlength="140" name="site_description" value="{{$configs->site_description}}">
			</div>
			<div class="form-group">
				<label class="checkbox1" for="sidebar_search">
					<input type="checkbox" id="sidebar_search" name="sidebar_search" @if($configs->sidebar_search) checked @endif>
					<span></span>		
				</label>
				<label for="sidebar_search" class="">Show Search Bar</label>
			</div>
			<div class="form-group">
				<label class="checkbox1" for="show_messages">
					<input type="checkbox" id="show_messages" name="show_messages" @if($configs->show_messages) checked @endif>
					<span></span>
				</label>
				<label for="show_messages" class="">Show Messages Icon</label>
			</div>
			<div class="form-group">
				<label class="checkbox1" for="show_notifications">
					<input type="checkbox" id="show_notifications" name="show_notifications" @if($configs->show_notifications) checked @endif>
					<span></span>
				</label>
				<label for="show_notifications" class="">Show Notifications Icon</label>
			</div>
			<div class="form-group">
				<label class="checkbox1" for="show_tasks">
					<input type="checkbox" id="show_tasks" name="show_tasks" @if($configs->show_tasks) checked @endif>
					<span></span>		
				</label>
				<label for="show_tasks" class="">Show Tasks Icon</label>
			</div>
			<div class="form-group">
				<label class="checkbox1" for="show_rightsidebar">
					<input type="checkbox" id="show_rightsidebar" name="show_rightsidebar" @if($configs->show_rightsidebar) checked @endif>
					<span></span>
				</label>
				<label for="show_rightsidebar" class="">Show Right SideBar Icon</label>
			</div>
			<div class="form-group">
				<label for="skin" class="">Skin Color</label>
				<select class="form-control" id="skin" name="skin">
					@foreach($skins as $name=>$property)
						<option value="{{ $property }}" @if($configs->skin == $property) selected @endif>{{ $name }}</option>
					@endforeach
				</select>
			</div>
			<div class="form-group">
				<label for="layout" class="">Layout</label>
				<select class="form-control" name="layout">
					@foreach($layouts as $name=>$property)
						<option value="{{ $property }}" @if($configs->layout == $property) selected @endif>{{ $name }}</option>
					@endforeach
				</select>
			</div>
			<div class="form-group">
				<label for="default_email" class="">Default Email Address</label>
				<input type="text" class="form-control underline" id="default_email" placeholder="To send emails to others via SMTP" maxlength="100" name="default_email" value="{{$configs->default_email}}">
			</div>
			<div class="form-group">
				<div class="">
					<button type="submit" class="btn btn-primary">Save</button>
				</div>
			</div><!-- /.box-footer -->
		</form>
	</div>
</div>

@endsection

@push('styles')
<link rel="stylesheet" type="text/css" href="{{ asset('LaravelVueAdmin/assets/plugins/datatables/datatables.min.css') }}"/>
@endpush

@push('scripts')
<script src="{{ asset('LaravelVueAdmin/assets/plugins/datatables/datatables.min.js') }}"></script>

@endpush
