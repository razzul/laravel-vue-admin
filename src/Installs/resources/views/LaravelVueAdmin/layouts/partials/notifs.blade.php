<ul class="nav navbar-nav">
	@if(LvConfigs::getByKey('show_messages'))
	<li class="dropdown">
		<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button"><span class="glyphicon glyphicon-envelope"></span><span class="badge badge-green">5</span></a>
		<ul class="dropdown-menu animated fadeIn">
			<li class="messages-top text-center">
				You have 4 unread messages.
			</li>
			<li class="dropdown-messages">
				<a href="#">
					<div class="message-sender">
						Lucy Chandler
					</div>
					<div class="message-header">
						Sent you a friend request.
					</div>
				</a>
			</li>
			<li class="dropdown-messages">
				<a href="#">
					<div class="message-sender">
						Diptesh Mishra
					</div>
					<div class="message-header">
						Asked you to join StrapUI.
					</div>
				</a>
			</li>
			<li class="dropdown-messages">
				<a href="#">
					<div class="message-sender">
						Wang Xiao
					</div>
					<div class="message-header">
						Congratulations! your account is activated.			
					</div>
				</a>
			</li>
			<li class="dropdown-messages">
				<a href="#">
					<div class="message-sender">
						Jade Mullick
					</div>
					<div class="message-header">
						Let&#039;s have a meeting at 5=&gt;00pm.			
					</div>
				</a>
			</li>
		</ul>
	</li>
	@endif
	@if(LvConfigs::getByKey('show_notifications'))
	<li class="dropdown">
		<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button">
			<span class="glyphicon glyphicon-bell"></span><span class="badge badge-red">13</span>
		</a>
		<ul class="dropdown-menu animated fadeIn">
			<li class="messages-top text-center">
				You have 3 new notifications.	
			</li>
			<li class="dropdown-notifications">
				<a href="#">
					<div class="notification">
						<i class="fa fa-thumbs-up"></i>
						Runuma Das liked your photo.	
					</div>
				</a>
			</li>
			<li class="dropdown-notifications">
				<a href="#">
					<div class="notification">
						<i class="fa fa-thumbs-up"></i>
						Harshita Borah liked your status.
					</div>
				</a>
			</li>
			<li class="dropdown-notifications">
				<a href="#">
					<div class="notification">
						<i class="fa fa-user-plus"></i>
						Archana wants to be friends.
					</div>
				</a>
			</li>
			<li class="dropdown-notifications">
				<a href="#">
					<div class="notification">
						<i class="fa fa-user-times"></i>
						Animesh Saha unfriended you.
					</div>
				</a>
			</li>
		</ul>
	</li>
	@endif
	@if(LvConfigs::getByKey('show_tasks'))
	<li class="dropdown">
		<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button">
			<span class="glyphicon glyphicon-bell"></span><span class="badge badge-red">13</span>
		</a>
		<ul class="dropdown-menu animated fadeIn">
			<li class="messages-top text-center">
				You have 3 new notifications.	
			</li>
			<li class="dropdown-notifications">
				<a href="#">
					<div class="notification">
						<i class="fa fa-thumbs-up"></i>
						Runuma Das liked your photo.	
					</div>
				</a>
			</li>
			<li class="dropdown-notifications">
				<a href="#">
					<div class="notification">
						<i class="fa fa-thumbs-up"></i>
						Harshita Borah liked your status.
					</div>
				</a>
			</li>
			<li class="dropdown-notifications">
				<a href="#">
					<div class="notification">
						<i class="fa fa-user-plus"></i>
						Archana wants to be friends.
					</div>
				</a>
			</li>
			<li class="dropdown-notifications">
				<a href="#">
					<div class="notification">
						<i class="fa fa-user-times"></i>
						Animesh Saha unfriended you.
					</div>
				</a>
			</li>
		</ul>
	</li>
	@endif
</ul>
		