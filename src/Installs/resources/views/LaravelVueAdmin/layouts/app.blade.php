<!DOCTYPE html>
<html lang="en">

@section('htmlheader')
	@include('LaravelVueAdmin.layouts.partials.htmlheader')
@show
<body class="" bsurl="{{ url('') }}" adminRoute="{{ config('LaravelVueAdmin.adminRoute') }}">

	@include('LaravelVueAdmin.layouts.partials.mainheader')

	@if(LvConfigs::getByKey('layout') != 'layout-top-nav')
		@include('LaravelVueAdmin.layouts.partials.sidebar')
	@endif
	
	<!-- Main content -->
	<section id="body-container" class="animation">
		@if(!isset($no_header))
			@include('LaravelVueAdmin.layouts.partials.contentheader')
		@endif
		<!-- Your Page Content Here -->
		@yield('main-content')
	</section><!-- /.content -->


@section('scripts')
	@include('LaravelVueAdmin.layouts.partials.scripts')
@show

</body>
</html>
