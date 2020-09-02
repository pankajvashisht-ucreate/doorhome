<?php



$router->group(['prefix' => 'v1/admin', 'namespace' => '\App\Http\APIS\Admin\v1'], function ($router) {
    $router->get('/', function () {
        return "welcome to apis ";
    });
});
