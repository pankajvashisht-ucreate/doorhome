<?php



$router->group(['namespace' => '\App\Http\Api\Admin\V1'], function ($router) {
    $router->get('/', function () {
        return "welcome to admin apis ";
    });
    $router->post('/login', [
        'as' => 'admin_login',
        'uses' => 'AdminController@login'
    ]);
});
