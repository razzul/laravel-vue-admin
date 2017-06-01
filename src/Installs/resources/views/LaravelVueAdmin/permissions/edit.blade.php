@extends("LaravelVueAdmin.layouts.app")

@section("contentheader_title")
	<a href="{{ url(config('LaravelVueAdmin.adminRoute') . '/permissions') }}">Permissions</a> :
@endsection
@section("contentheader_description", $permission->$view_col)
@section("section", "Permissions")
@section("section_url", url(config('LaravelVueAdmin.adminRoute') . '/permissions'))
@section("sub_section", "Edit")

@section("htmlheader_title", "Permission Edit : ".$permission->$view_col)

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

<div class="box">
	<div class="box-header">
		
	</div>
	<div class="box-body">
		<div class="row">
			<div class="col-md-8 col-md-offset-2">
				{!! Form::model($permission, ['route' => [config('LaravelVueAdmin.adminRoute') . '.permissions.update', $permission->id ], 'method'=>'PUT', 'id' => 'permission-edit-form']) !!}
					@lv_form($module)
					
					{{--
					@lv_input($module, 'name')
					@lv_input($module, 'display_name')
					@lv_input($module, 'description')
					--}}
                    <br>
					<div class="form-group">
						{!! Form::submit( 'Update', ['class'=>'btn btn-success']) !!} <button class="btn btn-default pull-right"><a href="{{ url(config('LaravelVueAdmin.adminRoute') . '/permissions') }}">Cancel</a></button>
					</div>
				{!! Form::close() !!}
			</div>
		</div>
	</div>
</div>

@endsection

@push('scripts')
<script>
$(function () {
	$("#permission-edit-form").validate({
		
	});
});
</script>
@endpush
