<script setup lang="ts">
import { useBreakpoint, aboveBreakpoint } from '~/composables/useBreakpoint';
import LogoRaw from '~/assets/svg/logo.svg';
import { Bars2Icon } from '@heroicons/vue/20/solid';
import getHeaderFooterHeight from '~/composables/getHeaderFooterHeight';
import { StyleValue } from 'nuxt/dist/app/compat/capi';

const links = [
  "demo 1"
]

const state = reactive({
  hamburgerToggled: false,
  headerHeight: 0
});
const { breakpoints } = useBreakpoint();
watchEffect(() => {
  if (aboveBreakpoint('md', breakpoints.is))
    state.hamburgerToggled = false;
});

const { headerHeight } = getHeaderFooterHeight();
const burgerMenuStyle = computed(() => <StyleValue>{
  top: `${headerHeight.value}px`,
});

function getLinkFromName(link: string) {
  return link.replace(/\s/g, '');
}
</script>

<template>
  <Transition enter-active-class="transition ease-out duration-200" enter-from-class="opacity-0 translate-y-1"
    enter-to-class="opacity-100 translate-y-0" leave-active-class="transition ease-in duration-200"
    leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 translate-y-1">
    <div v-if="state.hamburgerToggled" class="absolute w-full h-full z-10 bg-black p-4 sm:p-8">
      <div class="absolute flex flex-col gap-4" :style="burgerMenuStyle">
        <NuxtLink v-for="link in links"
          class="text-xl my-auto tracking-wider font-medium hover:text-gray-300 no-underline uppercase"
          :to="getLinkFromName(link)" @click.native="state.hamburgerToggled = false">{{
            link }}</NuxtLink>
      </div>
    </div>
  </Transition>
  <div id="header" class="p-4 sm:p-8 lg:px-16 pb-8 z-10">
    <div class="flex flex-row gap-6">
      <NuxtLink class="flex flex-row gap-4 items-center hover:text-gray-300 fill-white hover:fill-gray-300" to="/"
        @click.native="state.hamburgerToggled = false">
        <div v-html="LogoRaw" class="hidden xs:block flex-shrink-0 w-6 md:w-8 "></div>
        <h1 class=" md:text-2xl my-auto hover:no-underline whitespace-nowrap">
          Nuxt AFrame
        </h1>
      </NuxtLink>
      <div class="flex flex-row w-full">
        <!-- Header -->
        <div class="hidden md:flex flex-row gap-6">
          <NuxtLink v-for="link in links" class="text-xl my-auto font-medium hover:text-gray-300 no-underline uppercase"
            :to="getLinkFromName(link)">{{
              link }}</NuxtLink>
        </div>
        <!-- Hamburger -->
        <div class="md:hidden flex flex-row w-full">
          <span class="flex-auto"></span>
          <button @click="state.hamburgerToggled = !state.hamburgerToggled">
            <Bars2Icon class="w-8 h-8" />
          </button>
        </div>
        <div>
        </div>
      </div>
    </div>
  </div>
</template>
