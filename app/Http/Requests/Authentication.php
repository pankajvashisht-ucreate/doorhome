<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Request;

class Authentication extends FormRequest
{
    private $input;

    public function __construct(Request $request)
    {
        $this->input = $request->all();
        if (!empty($this->input['email'])) {
            $request->request->add(['email' => strtolower($this->input['email'])]);
        }
    }

    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {

        return [
            'email' => 'required|regex:/^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/',
            'password' => 'required'
        ];
    }
    public function messages()
    {
        return trans('apiMessage.adminLoginFields');
    }
}
