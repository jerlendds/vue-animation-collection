<template>
    <div id="app">
    <section class="w-full">
        <header class="flex items-center flex-col mt-2">
            <transition
                appear
                appear-active-class="fade-enter-active"
            >
                <div class="logo-bar-outside"></div>
            </transition>
            <transition
                appear
                appear-active-class="fade-enter-active"
            >
                <div class="logo-bar-inside"></div>
            </transition>

            <transition
                appear
                appear-active-class="slide-enter-active"
            >
                <p class="font-display font-medium text-lg logo-text leading-6 mt-0.5">JERLENDS</p>

            </transition>

            <transition
                appear
                appear-active-class="fade-enter-active"
            >
                <div class="logo-bar-inside"></div>
            </transition>
            <transition
                appear
                appear-active-class="fade-enter-active"
            >
                <div class="logo-bar-outside"></div>
            </transition>
        </header>
    </section>
        <!-- <router-view class="" /> -->
    </div>
</template>

<script>
export default {
    name: "App",
    components: {

    },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Heebo:wght@100;200;300;400;500;600;700;800;900&display=swap");
////////////////////////////////////
// Styling, feel free to remove
////////////////////////////////////

:root {
    --white-1: #f3f4f5;
    --dark-1: #27282b; // c-dark-1
}

body {
    background-color: var(--white-1);
    color: var(--dark-1);
}
// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
////////////////////////////////////

.logo-text {
    color: #414040;
}
.logo-bar-outside {
    display: block;
    width: 46px;
    height: 3px;
    background: #3c3939;
    margin: 1.5px 0 1.5px 0;
}
.logo-bar-inside {
    display: block;
    width: 68px;
    height: 3px;
    background: #3c3939;
    margin: 1.5px 0 1.5px 0;
}
.fade-enter-active {
    animation: logoAppear 0.4s ease-in;
}
.slide-enter-active {
    animation: slideAppear 0.45s ease-out;
}
@keyframes slideAppear {
    0% {
        opacity: 0;
        transform: translateX(3.6rem);
    }

    25% {
        opacity: 0.05;
    }

    50% {
        opacity: 0.45;
    }

    75% {
        opacity: 0.85;
    }

    100% {
        opacity: 0.94;
        transform: translateX(0);
    }
}
@keyframes logoAppear {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}
</style>

