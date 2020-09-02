<?php

namespace App\Response;

use Illuminate\Http\JsonResponse;

class ApiResponse implements ResponseInterface
{
    private $status_code = 200;

    public function getStatusCode(): int
    {
        return $this->status_code;
    }

    public function status(int $statusCode): object
    {
        $this->status_code = $statusCode;
        return $this;
    }

    public function respondWithNoContent(): JsonResponse
    {
        return new JsonResponse([], 204);
    }

    public function respondWithArray(array $array, array $headers = []): JsonResponse
    {
        return new JsonResponse($array, $this->status_code, $headers);
    }

    public function send(array $data, string $message): JsonResponse
    {
        return $this->respondWithArray(
            [
                'data' => $data,
                'message' => $message,
            ]
        );
    }

    public function respondWithError(string $message, $errors = []): JsonResponse
    {
        return $this->respondWithArray(
            [
                'errors'  => $errors,
                'message' => $message,
            ]
        );
    }

    public function errorInternal(string $message = 'Internal Error', $errors = []): JsonResponse
    {
        return $this->status(500)
            ->respondWithError($message, $errors);
    }

    public function errorNotFound(string $message = 'Resource Not Found', $errors = []): JsonResponse
    {
        return $this->status(404)
            ->respondWithError($message, $errors);
    }

    public function errorUnauthorized(string $message = 'Unauthorized', $errors = []): JsonResponse
    {
        return $this->status(401)
            ->respondWithError($message, $errors);
    }

    public function errorForbidden(string $message = 'Forbidden', $errors = []): JsonResponse
    {
        return $this->status(403)
            ->respondWithError($message, $errors);
    }

    public function errorValidation(string $message = 'Validation Error', $errors = []): JsonResponse
    {
        return $this->status(400)
            ->respondWithError($message, $errors);
    }
}
