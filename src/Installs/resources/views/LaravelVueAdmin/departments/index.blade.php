@extends("LaravelVueAdmin.layouts.app")

@section("contentheader_title", "Departments")
@section("contentheader_description", "departments listing")
@section("section", "Departments")
@section("sub_section", "Listing")
@section("htmlheader_title", "Departments Listing")

@section("headerElems")
@lv_access("Departments", "create")
	<button class="btn btn-success btn-sm" data-toggle="modal" data-target="#AddModal">Add Department</button>
@endlv_access
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

<div class="box box-info">
	<!--<div class="box-header"></div>-->
	<div class="box-body">
		<table id="example1" class="table table-bordered">
		<thead>
		<tr class="info">
			@foreach( $listing_cols as $col )
			<th>{{ $module->fields[$col]['label'] or ucfirst($col) }}</th>
			@endforeach
			@if($show_actions)
			<th>Actions</th>
			@endif
		</tr>
		</thead>
		<tbody>
			
		</tbody>
		</table>
	</div>
</div>

@lv_access("Departments", "create")
<div class="modal fade" id="AddModal" role="dialog" aria-labelledby="myModalLabel">
	<div class="modal-dialog" role="document">
		<div class="modal-content">
			<div class="modal-header">
				<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
				<h4 class="modal-title" id="myModalLabel">Add Department</h4>
			</div>
			{!! Form::open(['action' => 'LaravelVueAdmin\DepartmentsController@store', 'id' => 'department-add-form']) !!}
			<div class="modal-body">
				<div class="box-body">
                    @lv_form($module)
					
					{{--
					@lv_input($module, 'name')
					@lv_input($module, 'tags')
					@lv_input($module, 'color')
					--}}
				</div>
			</div>
			<div class="modal-footer">
				<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
				{!! Form::submit( 'Submit', ['class'=>'btn btn-success']) !!}
			</div>
			{!! Form::close() !!}
		</div>
	</div>
</div>
@endlv_access

@endsection

@push('styles')
<link rel="stylesheet" type="text/css" href="{{ asset('LaravelVueAdmin/assets/plugins/datatables/datatables.min.css') }}"/>
@endpush

@push('scripts')
<script src="{{ asset('LaravelVueAdmin/assets/plugins/datatables/datatables.min.js') }}"></script>
<script>
$(function () {
	$("#example1").DataTable({
		processing: true,
        serverSide: true,
        ajax: "{{ url(config('LaravelVueAdmin.adminRoute') . '/department_dt_ajax') }}",
		language: {
			lengthMenu: "_MENU_",
			search: "_INPUT_",
			searchPlaceholder: "Search"
		},
		@if($show_actions)
		columnDefs: [ { orderable: false, targets: [-1] }],
		@endif
	});
	$("#department-add-form").validate({
		
	});
});
</script>
@endpush