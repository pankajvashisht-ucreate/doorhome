<?php

namespace App\Response;

use Illuminate\Http\JsonResponse;

interface ResponseInterface
{
    public function getStatusCode(): int;

    public function status(int $status_code): object;
}
