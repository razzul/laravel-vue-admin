@extends('LaravelVueAdmin.layouts.auth')

@section('htmlheader_title')
    Log in
@endsection

@section('content')
<body class="">
    <div class="login-page">
        <div class="row">
            <div class="col-md-4 col-lg-4 col-md-offset-4 col-lg-offset-4">
                <img src="{{ asset('LaravelVueAdmin/assets/images/flat-avatar.png') }}" class="user-avatar" />
                <h1><b>{{ LvConfigs::getByKey('sitename_part1') }} </b>{{ LvConfigs::getByKey('sitename_part2') }}</h1>
                @if (count($errors) > 0)
                    <div class="alert alert-danger">
                        <strong>Whoops!</strong> There were some problems with your input.<br><br>
                        <ul>
                            @foreach ($errors->all() as $error)
                                <li>{{ $error }}</li>
                            @endforeach
                        </ul>
                    </div>
                @endif
                <form action="{{ url('/login') }}" method="post">
                    <input type="hidden" name="_token" value="{{ csrf_token() }}">
                    <div class="form-content">
                        <div class="form-group has-feedback">
                            <input type="email" class="form-control input-underline input-" placeholder="Email" name="email"/>
                            <span class="glyphicon glyphicon-envelope form-control-feedback"></span>
                        </div>

                        <div class="form-group has-feedback">
                            <input type="password" class="form-control input-underline input-lg" placeholder="Password" name="password"/>
                            <span class="glyphicon glyphicon-lock form-control-feedback"></span>
                        </div>
                    </div>
                    <input type="submit" class="btn btn-white btn-outline btn-lg btn-rounded progress-login"  value="Log in">
                </form>
            </div>          
        </div>
    </div>
</body>
@endsection
