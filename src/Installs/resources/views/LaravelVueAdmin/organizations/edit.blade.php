@extends("LaravelVueAdmin.layouts.app")

@section("contentheader_title")
	<a href="{{ url(config('LaravelVueAdmin.adminRoute') . '/organizations') }}">Organizations</a> :
@endsection
@section("contentheader_description", $organization->$view_col)
@section("section", "Organizations")
@section("section_url", url(config('LaravelVueAdmin.adminRoute') . '/organizations'))
@section("sub_section", "Edit")

@section("htmlheader_title", "Organization Edit : ".$organization->$view_col)

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
				{!! Form::model($organization, ['route' => [config('LaravelVueAdmin.adminRoute') . '.organizations.update', $organization->id ], 'method'=>'PUT', 'id' => 'organization-edit-form']) !!}
					@lv_form($module)
					
					{{--
					@lv_input($module, 'name')
					@lv_input($module, 'email')
					@lv_input($module, 'phone')
					@lv_input($module, 'website')
					@lv_input($module, 'assigned_to')
					@lv_input($module, 'connect_since')
					@lv_input($module, 'address')
					@lv_input($module, 'city')
					@lv_input($module, 'description')
					@lv_input($module, 'profile_image')
					@lv_input($module, 'profile')
					--}}
                    <br>
					<div class="form-group">
						{!! Form::submit( 'Update', ['class'=>'btn btn-success']) !!} <button class="btn btn-default pull-right"><a href="{{ url(config('LaravelVueAdmin.adminRoute') . '/organizations') }}">Cancel</a></button>
					</div>
				{!! Form::close() !!}
			</div>
		</div>
	</div>
</div>

@include('LaravelVueAdmin.layouts.partials.file_manager')
@endsection

@push('scripts')
<script>
$(function () {
	$("#organization-edit-form").validate({
		
	});
});
</script>
@endpush
