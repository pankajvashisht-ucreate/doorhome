<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateOrdersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('orders', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('user_id');
            $table->bigInteger('product_id');
            $table->integer('totalQty')->default(1);
            $table->float('totalPrice', 8, 2)->default(0);
            $table->integer('category_id');
            $table->json('productDetails');
            $table->json('addressDetails');
            $table->json('paymentDetails');
            $table->integer('status', 2)->default(0);
            $table->integer('paymentStatus', 2)->default(0);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('orders');
    }
}
