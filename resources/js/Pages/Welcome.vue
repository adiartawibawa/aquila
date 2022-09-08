<script setup>
</script>

<template>
    <div class="pt-28 md:pt-36">
        <div class="container m-auto px-6 md:px-12 lg:px-6">
            <div class="lg:flex lg:items-center lg:gap-x-16">
                <div class="space-y-8 lg:w-7/12">
                    <h1 class="font-bold text-gray-900 text-4xl md:text-5xl">
                        Aquila is a constellation that is situated on the
                        celestial equator.
                    </h1>
                    <p class="text-gray-600">
                        Aquila is a constellation in the northern sky. Its name
                        is Latin for ‘eagle’. It represents the bird that
                        carried Zeus/Jupiter’s thunderbolts in Greco-Roman
                        mythology.
                    </p>
                    <p class="mt-4 text-gray-600">
                        There are a few ways to find Aquila. The easiest way is
                        to look for the constellation Cygnus, the Swan. Cygnus
                        is a roughly cross-shaped pattern of stars that is high
                        overhead on summer evenings beginning in mid-July.
                        Aquila is located just to the south of Cygnus. Another
                        way to find Aquila is to look for the bright star
                        Altair. Altair is the brightest star in Aquila and one
                        of the brightest stars in the night sky. It forms a
                        triangle with two other bright stars, Vega and Deneb.
                        These three stars are sometimes called the Summer
                        Triangle.
                    </p>

                    <a :href="route('welcome')"
                        class="block w-full py-3 px-6 text-center rounded-full transition bg-blue-200 hover:bg-blue-100 active:bg-blue-300 focus:bg-blue-100 sm:w-max">
                        <span class="block text-blue-900 font-semibold text-sm">
                            Learn More
                        </span>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>
