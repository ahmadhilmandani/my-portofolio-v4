<template>
  <div
    class="w-full min-h-screen flex justify-center items-end bg-cust-black pt-14 pb-12 px-8 xl:px-16 relative gap-28 text-cust-white">
    <img :src="BlueDark" alt="" class="fixed top-0 left-0 z-[1]">

    <main class="mt-20">
      <h1 v-motion-fade :duration="1000" class="text-cust-white font-bold text-4xl relative z-[2]">
        Personal Projects
      </h1>
      <p v-motion-fade :duration="1000" class="text-white text-xl mt-4 w-[80%] leading-relaxed mb-28">
        Here's you could see the passion-driven creations that highlight my skills and creativity. These projects
        reflect my commitment to continuous learning and innovation in web development.
      </p>

      <div class="flex flex-wrap gap-10">
        <div v-motion-fade :duration="1000" v-for="valueOfProjects in projectsData"
          class="xl:w-[40%] border border-cust-gray rounded-md p-5 hover:bg-cust-gray/20 backdrop-blur-md transition-all relative z-[2]">
          <div class="w-fit aspect-square p-2 bg-cust-gray-lighter border border-cust-gray rounded-full mb-6">
            <img :src="valueOfProjects.logo" alt="" class="w-9 rounded-full">
          </div>
          <h2 class="font-extrabold text-xl mb-2">
            {{ valueOfProjects.title }}
          </h2>

          <p class="leading-loose">
            {{ valueOfProjects.body }}
          </p>

          <div class="mt-3 flex gap-3">
            <small class="text-cust-gray-lighter">Build With:</small>
            <div v-for="stack in valueOfProjects.stacks" v-html="stack">
            </div>
          </div>

          <div class="flex gap-5">
            <a :href="valueOfProjects.siteLink" target="_blank" class="block w-fit mt-5 relative z-[2]">
              <ButtonComp styleProp="fill">
                Go To Site
                <IconArrowNarrowRight class="w-5" />
              </ButtonComp>
            </a>
            <a :href="valueOfProjects.codeLink" target="_blank" class="block w-fit mt-5 relative z-[2]">
              <ButtonComp styleProp="outline">
                Go To Code
                <IconArrowNarrowRight class="w-5" />
              </ButtonComp>
            </a>
          </div>
        </div>

      </div>
    </main>
  </div>
</template>

<script lang="ts" setup>
import ButtonComp from '../components/ButtonComp.vue';
import BlueDark from '../assets/blue-dark.png';
import ToDoListLogo from '../assets/to-do-list-react-logo.png';
import ProjectPlannerLogo from '../assets/to-do-list-vue-logo.png';
import CalculatorAppLogo from '../assets/calculator-app-logo.png';
import { ref } from 'vue';
import { IconArrowNarrowRight } from '@tabler/icons-vue';

const projectsData = ref([
  {
    title: 'Project Planner',
    body: 'Project Planner is a website to take a note of projects we want to created.',
    logo: ToDoListLogo,
    siteLink: 'https://simple-project-planner.netlify.app/',
    codeLink: 'https://github.com/ahmadhilmandani/project-planner-vue-pinia/tree/deploy',
    stacks: [
      '<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="gray"  stroke-width="1.5"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-brand-vue"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M16.5 4l-4.5 8l-4.5 -8" /><path d="M3 4l9 16l9 -16" /></svg>',
      '<small class="text-cust-gray-lighter">Pinia</small>',
      '<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="gray"  stroke-width="1.5"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-brand-tailwind"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M11.667 6c-2.49 0 -4.044 1.222 -4.667 3.667c.933 -1.223 2.023 -1.68 3.267 -1.375c.71 .174 1.217 .68 1.778 1.24c.916 .912 2 1.968 4.288 1.968c2.49 0 4.044 -1.222 4.667 -3.667c-.933 1.223 -2.023 1.68 -3.267 1.375c-.71 -.174 -1.217 -.68 -1.778 -1.24c-.916 -.912 -1.975 -1.968 -4.288 -1.968zm-4 6.5c-2.49 0 -4.044 1.222 -4.667 3.667c.933 -1.223 2.023 -1.68 3.267 -1.375c.71 .174 1.217 .68 1.778 1.24c.916 .912 1.975 1.968 4.288 1.968c2.49 0 4.044 -1.222 4.667 -3.667c-.933 1.223 -2.023 1.68 -3.267 1.375c-.71 -.174 -1.217 -.68 -1.778 -1.24c-.916 -.912 -1.975 -1.968 -4.288 -1.968z" /></svg>',
      '<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="gray"  stroke-width="1.5"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-brand-figma"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M15 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" /><path d="M6 3m0 3a3 3 0 0 1 3 -3h6a3 3 0 0 1 3 3v0a3 3 0 0 1 -3 3h-6a3 3 0 0 1 -3 -3z" /><path d="M9 9a3 3 0 0 0 0 6h3m-3 0a3 3 0 1 0 3 3v-15" /></svg>'
    ]
  },
  {
    title: 'To Do List',
    body: 'To Do List is a website make a list of things to do in a daily basis.',
    logo: ProjectPlannerLogo,
    siteLink: 'https://to-do-list-ahmadhilmandani.netlify.app/',
    codeLink: 'https://github.com/ahmadhilmandani/Frontendmentor-Hilman/tree/to-do-list-part-2',
    stacks: [
      '<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="gray"  stroke-width="1.5"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-brand-react"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6.306 8.711c-2.602 .723 -4.306 1.926 -4.306 3.289c0 2.21 4.477 4 10 4c.773 0 1.526 -.035 2.248 -.102" /><path d="M17.692 15.289c2.603 -.722 4.308 -1.926 4.308 -3.289c0 -2.21 -4.477 -4 -10 -4c-.773 0 -1.526 .035 -2.25 .102" /><path d="M6.305 15.287c-.676 2.615 -.485 4.693 .695 5.373c1.913 1.105 5.703 -1.877 8.464 -6.66c.387 -.67 .733 -1.339 1.036 -2" /><path d="M17.694 8.716c.677 -2.616 .487 -4.696 -.694 -5.376c-1.913 -1.105 -5.703 1.877 -8.464 6.66c-.387 .67 -.733 1.34 -1.037 2" /><path d="M12 5.424c-1.925 -1.892 -3.82 -2.766 -5 -2.084c-1.913 1.104 -1.226 5.877 1.536 10.66c.386 .67 .793 1.304 1.212 1.896" /><path d="M12 18.574c1.926 1.893 3.821 2.768 5 2.086c1.913 -1.104 1.226 -5.877 -1.536 -10.66c-.375 -.65 -.78 -1.283 -1.212 -1.897" /><path d="M11.5 12.866a1 1 0 1 0 1 -1.732a1 1 0 0 0 -1 1.732z" /></svg>',
      '<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="gray"  stroke-width="1.5"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-brand-tailwind"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M11.667 6c-2.49 0 -4.044 1.222 -4.667 3.667c.933 -1.223 2.023 -1.68 3.267 -1.375c.71 .174 1.217 .68 1.778 1.24c.916 .912 2 1.968 4.288 1.968c2.49 0 4.044 -1.222 4.667 -3.667c-.933 1.223 -2.023 1.68 -3.267 1.375c-.71 -.174 -1.217 -.68 -1.778 -1.24c-.916 -.912 -1.975 -1.968 -4.288 -1.968zm-4 6.5c-2.49 0 -4.044 1.222 -4.667 3.667c.933 -1.223 2.023 -1.68 3.267 -1.375c.71 .174 1.217 .68 1.778 1.24c.916 .912 1.975 1.968 4.288 1.968c2.49 0 4.044 -1.222 4.667 -3.667c-.933 1.223 -2.023 1.68 -3.267 1.375c-.71 -.174 -1.217 -.68 -1.778 -1.24c-.916 -.912 -1.975 -1.968 -4.288 -1.968z" /></svg>',
      '<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="gray"  stroke-width="1.5"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-brand-figma"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M15 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" /><path d="M6 3m0 3a3 3 0 0 1 3 -3h6a3 3 0 0 1 3 3v0a3 3 0 0 1 -3 3h-6a3 3 0 0 1 -3 -3z" /><path d="M9 9a3 3 0 0 0 0 6h3m-3 0a3 3 0 1 0 3 3v-15" /></svg>'
    ]

  },
  {
    title: 'Calculator App',
    body: 'Calculator App is a website to do math operations online. There also 3 theme of the site.',
    logo: CalculatorAppLogo,
    siteLink: 'https://ahmadhilmandani.github.io/Frontendmentor-Hilman/calculator/',
    codeLink: 'https://github.com/ahmadhilmandani/Frontendmentor-Hilman/tree/main/calculator',
    stacks: [
      '<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="gray"  stroke-width="1.5"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-brand-javascript"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M20 4l-2 14.5l-6 2l-6 -2l-2 -14.5z" /><path d="M7.5 8h3v8l-2 -1" /><path d="M16.5 8h-2.5a.5 .5 0 0 0 -.5 .5v3a.5 .5 0 0 0 .5 .5h1.423a.5 .5 0 0 1 .495 .57l-.418 2.93l-2 .5" /></svg>',
      '<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="gray"  stroke-width="1.5"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-brand-css3"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M20 4l-2 14.5l-6 2l-6 -2l-2 -14.5z" /><path d="M8.5 8h7l-4.5 4h4l-.5 3.5l-2.5 .75l-2.5 -.75l-.1 -.5" /></svg>'
    ]
  }
])

</script>