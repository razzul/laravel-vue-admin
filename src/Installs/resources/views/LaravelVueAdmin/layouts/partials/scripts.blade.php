<!-- REQUIRED JS SCRIPTS -->

<!-- jQuery 2.1.4 -->
<script src="{{ asset('LaravelVueAdmin/assets/plugins/jQuery/jQuery-2.1.4.min.js') }}"></script>
<script src="{{ asset('LaravelVueAdmin/assets/vendor/ckeditor/ckeditor.js') }}"></script>
<script src="{{ asset('LaravelVueAdmin/assets/js/vendor.js') }}" type="text/javascript"></script>

<!-- jquery.validate + select2 -->
<script src="{{ asset('LaravelVueAdmin/assets/plugins/jquery-validation/jquery.validate.min.js') }}" type="text/javascript"></script>
<script src="{{ asset('LaravelVueAdmin/assets/plugins/select2/select2.full.min.js') }}" type="text/javascript"></script>
<script src="{{ asset('LaravelVueAdmin/assets/plugins/bootstrap-datetimepicker/moment.min.js') }}" type="text/javascript"></script>
<script src="{{ asset('LaravelVueAdmin/assets/plugins/bootstrap-datetimepicker/bootstrap-datetimepicker.js') }}" type="text/javascript"></script>
<script src="{{ asset('LaravelVueAdmin/assets/js/app.min.js') }}" type="text/javascript"></script>
<script src="{{ asset('LaravelVueAdmin/assets/plugins/stickytabs/jquery.stickytabs.js') }}" type="text/javascript"></script>
<script src="{{ asset('LaravelVueAdmin/assets/plugins/slimScroll/jquery.slimscroll.min.js') }}" type="text/javascript"></script>

<script>
	$(function(){
		$('#calendar2').fullCalendar({
	      eventClick: function(calEvent, jsEvent, view) {
	        alert('Event: ' + calEvent.title);
	        alert('Coordinates: ' + jsEvent.pageX + ',' + jsEvent.pageY);
	        alert('View: ' + view.name);
	      }
	    });
		$('#rtlswitch').click(function() {
			console.log('hello');
			$('body').toggleClass('rtl');

			var hasClass = $('body').hasClass('rtl');

			$.get('/api/set-rtl?rtl='+ (hasClass ? 'rtl': ''));

		});
		$('.theme-picker').click(function() {
			changeTheme($(this).attr('data-theme'));
		});
		$('#showMenu').click(function() {
		    $('body').toggleClass('push-right');
		});

	});
function changeTheme(the) {
	$("#current-theme").remove();
	$('<link>')
	.appendTo('head')
	.attr('id','current-theme')
	.attr({type : 'text/css', rel : 'stylesheet'})
	.attr('href', '{{ asset("LaravelVueAdmin/assets/css/app-") }}'+the+'.css');
}
</script>


<!-- Optionally, you can add Slimscroll and FastClick plugins.
      Both of these plugins are recommended to enhance the
      user experience. Slimscroll is required when using the
      fixed layout. -->

@stack('scripts')
