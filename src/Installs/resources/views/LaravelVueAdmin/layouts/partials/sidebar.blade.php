    <aside id="sidebar">
        <div class="sidenav-outer">
            <div class="side-menu">
                <div class="menu-body">
                    <ul class="nav nav-pills nav-stacked sidenav">
                        <li >
                            <a href="{{ url(config('LaravelVueAdmin.adminRoute')) }}">
                                <span class="glyphicon glyphicon-home"></span>
                            </a>
                            <ul class="nested-dropdown animated fadeIn">
                                <li><a href="{{ url(config('LaravelVueAdmin.adminRoute')) }}">Dashboard</a></li>
                            </ul>
                        </li>
                        <?php
                        $menuItems = Razzul\LaravelVueAdmin\Models\Menu::where("parent", 0)->orderBy('hierarchy', 'asc')->get();
                        ?>
                        @foreach ($menuItems as $menu)
                            @if($menu->type == "module")
                                <?php
                                $temp_module_obj = Module::get($menu->name);
                                ?>
                                @lv_access($temp_module_obj->id)
                                    @if(isset($module->id) && $module->name == $menu->name)
                                        <?php echo LvHelper::print_menu($menu ,true); ?>
                                    @else
                                        <?php echo LvHelper::print_menu($menu); ?>
                                    @endif
                                @endlv_access
                            @else
                                <?php echo LvHelper::print_menu($menu); ?>
                            @endif
                        @endforeach
                        @role("SUPER_ADMIN")
                        <li >
                            <a href="{{ url(config('LaravelVueAdmin.adminRoute')) . '/configs' }}">
                                <span class="fa fa-cogs"></span>
                            </a>
                            <ul class="nested-dropdown animated fadeIn">
                                <li class="sidemenu-header">Settings</li>
                                <li><a href="{{ url(config('LaravelVueAdmin.adminRoute') . '/configs') }}">Configure</a></li>
                                <li><a href="{{ url(config('LaravelVueAdmin.adminRoute') . '/modules') }}">Modules</a></li>
                                <li><a href="{{ url(config('LaravelVueAdmin.adminRoute') . '/menus') }}">Menus</a></li>
                                <li><a href="{{ url(config('LaravelVueAdmin.adminRoute') . '/backups') }}">Backups</a></li>
                            </ul>
                        </li>
                        @endrole
                    </ul>
                </div>
            </div>
            <div class="side-widgets">
                <div class="widgets-content">
                    <div class="text-center"> 
                        @if (! Auth::guest())
                        <a href="{{ url(config('LaravelVueAdmin.adminRoute') . '/users/') .'/'. Auth::user()->id }}"><img src="{{ Gravatar::fallback(asset('LaravelVueAdmin/assets/img/user2-160x160.jpg'))->get(Auth::user()->email) }}" class="user-avatar" /></a>
                        @else 
                        <a href="{{ url(config('LaravelVueAdmin.adminRoute') . '/users/') .'/'. Auth::user()->id }}"><img src="images/flat-avatar.png" class="user-avatar" /></a>
                        @endif
                        <div class="text-center avatar-name">
                            @if (! Auth::guest())
                            {{ Auth::user()->name }}
                            @else 
                            Guest
                            @endif
                        </div>
                    </div>

                    <div class="calendar-container text-center" >
                        <div id="calendar2" class="fc-header-title"></div>
                    </div>

                    <div class="news-feed">
                        <div class="feed-header">NEWS FEED</div>
                        <div class="feed-content">
                            <ul class="feed">
                                <li>
                                    <a href="#">Anna liked StrapUI - Dashboard Themes &amp; Templates.</a> <span class="feed-date">25/4/2015</span>
                                </li>
                                <li>
                                    <a href="#">Henna birthday at Mezbaan at 7=&gt;00pm.</a> <span class="feed-date">25/4/2015</span>
                                </li>
                                <li>
                                    <a href="#">Animesh Saha commented on your post.</a> <span class="feed-date">25/4/2015</span>
                                </li>
                                <li>
                                    <a href="#">Server Alert=&gt; Need to upgrade your server.</a> <span class="feed-date">25/4/2015</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </aside>