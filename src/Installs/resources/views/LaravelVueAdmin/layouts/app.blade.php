<!DOCTYPE html>
<html lang="en">

@section('htmlheader')
	@include('LaravelVueAdmin.layouts.partials.htmlheader')
@show
<body class="{{ LvConfigs::getByKey('skin') }} {{ LvConfigs::getByKey('layout') }} @if(LvConfigs::getByKey('layout') == 'sidebar-mini') sidebar-collapse @endif" bsurl="{{ url('') }}" adminRoute="{{ config('LaravelVueAdmin.adminRoute') }}">
<div class="wrapper">

	@include('LaravelVueAdmin.layouts.partials.mainheader')

	@if(LvConfigs::getByKey('layout') != 'layout-top-nav')
		@include('LaravelVueAdmin.layouts.partials.sidebar')
	@endif

	<!-- Content Wrapper. Contains page content -->
	<div class="content-wrapper">
		@if(LvConfigs::getByKey('layout') == 'layout-top-nav') <div class="container"> @endif
		@if(!isset($no_header))
			@include('LaravelVueAdmin.layouts.partials.contentheader')
		@endif
		
		<!-- Main content -->
		<section class="content {{ $no_padding or '' }}">
			<!-- Your Page Content Here -->
			@yield('main-content')
		</section><!-- /.content -->

		@if(LvConfigs::getByKey('layout') == 'layout-top-nav') </div> @endif
	</div><!-- /.content-wrapper -->

	@include('LaravelVueAdmin.layouts.partials.controlsidebar')

	@include('LaravelVueAdmin.layouts.partials.footer')

</div><!-- ./wrapper -->

@include('LaravelVueAdmin.layouts.partials.file_manager')

@section('scripts')
	@include('LaravelVueAdmin.layouts.partials.scripts')
@show

</body>
</html>
