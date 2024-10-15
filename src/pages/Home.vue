<script setup lang="ts">

</script>

<template>
    <!-- Carousel ภาพสไลด์ -->
    <div id="carouselExampleIndicators" class="carousel slide">
        <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
            <div class="carousel-item active">
            <img src="/images/slides/slide1.jpg" class="d-block w-100">
            </div>
            <div class="carousel-item">
            <img src="/images/slides/slide2.webp" class="d-block w-100">
            </div>
            <div class="carousel-item">
            <img src="/images/slides/slide3.jpg" class="d-block w-100">
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>

    <!-- Feature 3 Columns-->
    <div class="container py-5">
        <div class="row">
            <div class="col-md-4">
                <div class="card">
                    <img src="/images/products/product1.jpg"
                        class="card-img-top">
                    <div class="card-body">
                        <h5 class="card-title
                            text-center">Product 1</h5>
                        <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum blanditiis sapiente, quidem.</p>
                        <div class="text-center"><a href="#"
                            class="btn btn-primary">Buy</a></div>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card">
                    <img src="/images/products/product2.jpg"
                        class="card-img-top">
                    <div class="card-body">
                        <h5 class="card-title
                            text-center">Product 2</h5>

                        <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum blanditiis sapiente, quidem.</p>
                        <div class="text-center"><a href="#"
                            class="btn btn-primary">Buy</a></div>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card">
                    <img src="/images/products/product3.jpg"
                        class="card-img-top">
                    <div class="card-body">
                        <h5 class="card-title
                            text-center">Product 3</h5>
                        <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum blanditiis sapiente, quidem.</p>
                        <div class="text-center"><a href="#"
                            class="btn btn-primary">Buy</a></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>