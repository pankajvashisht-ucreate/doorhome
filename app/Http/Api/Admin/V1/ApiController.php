<?php

namespace App\Http\Api\Admin\V1;

use App\Response\ResponseInterface;
use App\Http\Controllers\Controller;

class ApiController extends Controller
{
    protected $json;
    public function __construct(ResponseInterface $response)
    {
        $this->json = $response;
    }
}
