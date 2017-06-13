<nav class="navbar topnav-navbar navbar-fixed-top" role="navigation">
	<div class="navbar-header text-center">
		<button id="showMenu"type="button" class="navbar-toggle"  >
			<span class="sr-only">Toggle navigation</span>
			<span class="icon-bar"></span>
			<span class="icon-bar"></span>
			<span class="icon-bar"></span>
		</button>
		<a class="navbar-brand" href="{{ url(config('LaravelVueAdmin.adminRoute')) }}">
			<b>{{ LvConfigs::getByKey('sitename_part1') }} </b>{{ LvConfigs::getByKey('sitename_part2') }}
		</a>
	</div>
	<div class="collapse navbar-collapse">
		@if(LvConfigs::getByKey('sidebar_search'))
		<form class="navbar-form navbar-left" role="search">
			<span class="glyphicon glyphicon-search"></span>
			<div class="form-group">
				<input type="text" name="q" class="form-control" placeholder="">
			</div>			
		</form>
		@endif
		@include('LaravelVueAdmin.layouts.partials.notifs')
		<ul class="nav navbar-nav pull-right navbar-right">	
			<li class="dropdown color-picker">
				<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">
					<span><i class="fa fa-circle"></i></span>
				</a>
				<ul class="dropdown-menu pull-right animated fadeIn" role="menu">
					<li class="padder-h-xs">
						<table class="table color-swatches-table text-center no-m-b">
							<tr>
								<td class="text-center colorr">
									<a href="#" data-theme="blue" class="theme-picker">
										<i class="fa fa-circle blue-base"></i>
									</a>
								</td>
								<td class="text-center colorr">
									<a href="#" data-theme="green" class="theme-picker">
										<i class="fa fa-circle green-base"></i>
									</a>
								</td>
								<td class="text-center colorr">
									<a href="#" data-theme="red" class="theme-picker">
										<i class="fa fa-circle red-base"></i>
									</a>
								</td>
							</tr>
							<tr>
								<td class="text-center colorr">
									<a href="#" data-theme="purple" class="theme-picker">
										<i class="fa fa-circle purple-base"></i>
									</a>
								</td>
								<td class="text-center color">
									<a href="#" data-theme="midnight-blue" class="theme-picker">
										<i class="fa fa-circle midnight-blue-base"></i>
									</a>
								</td>
								<td class="text-center colorr">
									<a href="#" data-theme="lynch" class="theme-picker">
										<i class="fa fa-circle lynch-base"></i>
									</a>
								</td>
							</tr>
						</table>
					</li>
				</ul>
			</li>
			<li>
				<a href="#" id="rtlswitch">
					<span> LTR/RTL </span>
				</a>
			</li> 
			<li class="dropdown admin-dropdown">
				@if (Auth::guest())
				<a href="#" class="dropdown-toggle" data-toggle="dropdown">
					<!-- The user image in the navbar-->
					<img src="{{ asset('LaravelVueAdmin/assets/images/flat-avatar.png') }}" class="topnav-img" alt="User Image"/>
					<!-- hidden-xs hides the username on small devices so only the image appears. -->
					<span class="hidden-xs">Guest</span>
				</a>
				@else
				<a href="#" class="dropdown-toggle" data-toggle="dropdown">
					<!-- The user image in the navbar-->
					<img src="{{ Gravatar::fallback(asset('LaravelVueAdmin/assets/images/flat-avatar.png'))->get(Auth::user()->email) }}" class="topnav-img" alt="User Image"/>
					<!-- hidden-xs hides the username on small devices so only the image appears. -->
					<span class="hidden-xs">{{ Auth::user()->name }}</span>
				</a>
				@endif
				<ul class="dropdown-menu" role="menu">
					@if (Auth::guest())
					<li><a href="{{ url('/login') }}">Login</a></li>
					<li><a href="{{ url('/register') }}">Register</a></li>
					@else
						<li><a href="{{ url(config('LaravelVueAdmin.adminRoute') . '/users/') .'/'. Auth::user()->id }}">Profile</a></li>
						<li><a href="{{ url('/logout') }}">Logout</a></li>
					@endif
				</ul>
			</li>
		</ul>
		<a class="btn btn-primary btn-rounded pull-right btn-bordered visible-lg" href="https://github.com/razzul/laravel-vue-admin/blob/master/README.md" style="margin: 8px 10px 0 0;">Documentation</a>

	</div>
	<ul class="nav navbar-nav pull-right hidd">	
		<li class="dropdown admin-dropdown">
			@if (Auth::guest())
			<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">
				<!-- The user image in the navbar-->
				<img src="{{ asset('LaravelVueAdmin/assets/images/flat-avatar.png') }}" class="topnav-img" alt="User Image"/>
				<!-- hidden-xs hides the username on small devices so only the image appears. -->
				<span class="hidden-xs">Guest</span>
			</a>
			@else
			<a href="#" class="dropdown-toggle" data-toggle="dropdown">
				<!-- The user image in the navbar-->
				<img src="{{ Gravatar::fallback(asset('LaravelVueAdmin/assets/img/user2-160x160.jpg'))->get(Auth::user()->email) }}" class="topnav-img" alt="User Image"/>
				<!-- hidden-xs hides the username on small devices so only the image appears. -->
				<span class="hidden-xs">{{ Auth::user()->name }}</span>
			</a>
			@endif
			<ul class="dropdown-menu" role="menu">
				@if (Auth::guest())
				<li><a href="{{ url('/login') }}">Login</a></li>
				<li><a href="{{ url('/register') }}">Register</a></li>
				@else
				<li><a href="{{ url(config('LaravelVueAdmin.adminRoute') . '/users/') .'/'. Auth::user()->id }}" class="btn btn-default btn-flat">Profile</a></li>
				<li><a href="{{ url('/logout') }}">Sign out</a></li>
				@endif
			</ul>
		</li>
		@if(LvConfigs::getByKey('show_rightsidebar'))
		<!-- Control Sidebar Toggle Button -->
		<!-- <li><a href="#" data-toggle="control-sidebar"><i class="fa fa-comments-o"></i> <span class="label label-warning">10</span></a></li> -->
		@endif
	</ul>
</nav>
