<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\EmployeeController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
Route::get('/employees',[EmployeeController::class,'index']);
Route::post('/employee/create',[EmployeeController::class,'store']);
Route::post('/employee/delete/{id}', [EmployeeController::class, 'destroy']);
Route::get('/employee/edit/{id}', [EmployeeController::class, 'show']);
Route::put('/employee/edit/{id}', [EmployeeController::class, 'update']);

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
