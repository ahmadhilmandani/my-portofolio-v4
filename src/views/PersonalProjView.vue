<template>
  <div
    class="w-full min-h-screen flex justify-center items-end bg-cust-black pt-14 pb-12 px-8 xl:px-16 relative gap-28 text-cust-white">
    <img  :src="BlueDark" alt="" class="fixed top-0 left-0 z-[1]">

    <main class="mt-20">
      <h1 v-motion-fade :duration="1000" class="text-cust-white font-bold text-4xl relative z-[2]">
        Personal Projects
      </h1>
      <p v-motion-fade :duration="1000" class="text-white text-xl mt-4 w-[80%] leading-relaxed mb-28">
        Here's you could see the passion-driven creations that highlight my skills and creativity. These projects reflect my commitment to continuous learning and innovation in web development.
      </p>

      <div class="flex flex-wrap gap-10">
        <div v-motion-fade :duration="1000" v-for="valueOfProjects in projectsData" class="xl:w-[40%] border border-cust-gray rounded-md p-5 hover:bg-cust-gray/20 backdrop-blur-md transition-all relative z-[2]">
          <div class="w-fit aspect-square p-2 bg-cust-gray-lighter border border-cust-gray rounded-full mb-6">
            <img :src="valueOfProjects.logo" alt="" class="w-9 rounded-full">
          </div>
          <h2 class="font-extrabold text-xl mb-2">
            {{ valueOfProjects.title }}
          </h2>

          <p class="leading-loose">
            {{ valueOfProjects.body }}
          </p>

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
  },
  {
    title: 'To Do List',
    body: 'To Do List is a website make a list of things to do in a daily basis.',
    logo: ProjectPlannerLogo,
    siteLink: 'https://to-do-list-ahmadhilmandani.netlify.app/',
    codeLink: 'https://github.com/ahmadhilmandani/Frontendmentor-Hilman/tree/to-do-list-part-2',
  },
  {
    title: 'Calculator App',
    body: 'Calculator App is a website to do math operations online. There also 3 theme of the site.',
    logo: CalculatorAppLogo,
    siteLink: 'https://ahmadhilmandani.github.io/Frontendmentor-Hilman/calculator/',
    codeLink: 'https://github.com/ahmadhilmandani/Frontendmentor-Hilman/tree/main/calculator',
  }
])

</script>