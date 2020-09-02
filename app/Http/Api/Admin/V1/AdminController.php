<?php

namespace App\Http\Api\Admin\V1;

use Illuminate\Http\JsonResponse;
use App\Http\Requests\Authentication;


class AdminController extends ApiController
{

    public function login(Authentication $request): JsonResponse
    {
        $input = $request->validated();
        return $this->json->status(201)->send($input, 'helloword');
    }
}
