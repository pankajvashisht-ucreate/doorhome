<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProductsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('category_id');
            $table->string('name', 255);
            $table->integer('stock');
            $table->string('description', 255);
            $table->float('price', 8, 2);
            $table->boolean('status')->default(true);
            $table->boolean('isPrintable')->default(false);
            $table->boolean('out_of_stock')->default(false);
            $table->string('sizes', 255)->default('');
            $table->string('colors', 255)->default('');
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
        Schema::dropIfExists('products');
    }
}
