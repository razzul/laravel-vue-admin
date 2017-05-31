<?php
/**
 * Controller genrated using LaravelVueAdmin
 * Help: https://github.com/razzul/laravel-vue-admin
 */

namespace App\Http\Controllers\LaravelVueAdmin;

use App\Http\Controllers\Controller;
use App\Http\Requests;
use Illuminate\Http\Request;

/**
 * Class DashboardController
 * @package App\Http\Controllers
 */
class DashboardController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return Response
     */
    public function index()
    {
        return view('LaravelVueAdmin.dashboard');
    }
}