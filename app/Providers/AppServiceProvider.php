<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use App\Response\ApiResponse;
use App\Response\ResponseInterface;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->singleton(ResponseInterface::class, ApiResponse::class);
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }
}
