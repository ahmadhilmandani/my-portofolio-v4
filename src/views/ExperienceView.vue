<template>
  <div class="w-full min-h-screen  pt-14 pb-12 px-8 xl:px-16 relative text-cust-white">
    <img :src="BlueDark" alt="" class="fixed top-0 left-0 z-[1]">

    <main class="mt-20">
      <h1 class="text-cust-white font-bold text-4xl relative z-[2] leading-relaxed">
        Experiences & Achievment
      </h1>
      <p class="text-white text-xl mt-4 w-[80%] leading-relaxed mb-28">
        Here's you could see the diverse projects I've successfully completed and the milestones I've reached in my career. From innovative web development to impactful software solutions, this section showcases my journey and growth.
      </p>


      <div v-for="(valueOfExperienceData, index) in experienceData" :class="index === experienceData.length-1 ? 'pb-0' : 'pb-24'" class="flex gap-20 items-start pl-8 border-l border-cust-gray-lighter">
        <div class="hidden xl:block text-cust-gray-lighter">
          {{ valueOfExperienceData.year }} <br>
          {{ valueOfExperienceData.months }}
        </div>
        <div class="max-w-[560px] w-full">
          <div class="xl:hidden block text-cust-gray-lighter mb-2">
          {{ valueOfExperienceData.year }} <br>
          {{ valueOfExperienceData.months }}
        </div>
          <h2 class="font-bold">{{ valueOfExperienceData.title }}</h2>
          <p class="text-sm mt-3 leading-[1.8]">
            {{ valueOfExperienceData.body }}
          </p>
          <a :href="valueOfExperienceData.link" target="_blank" class="block w-fit mt-5 relative z-[2]">
            <ButtonComp styleProp="fill">
             {{ valueOfExperienceData.ctaWriting }}
              <IconArrowNarrowRight class="w-5" />
            </ButtonComp>
          </a>
        </div>
      </div>
    </main>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { IconArrowNarrowRight } from '@tabler/icons-vue';
import ButtonComp from '../components/ButtonComp.vue';
import BlueDark from '../assets/blue-dark.png';

const experienceData = ref([
  {
    type: 'Achievment',
    title: 'Top 20 in "IDCamp 2023 Challenge: Transformasi Teknologi Pendidikan Indonesia Emas 2045',
    body: 'Taking down a challenge held by Indosat Ooredoo Hutchison Digital Camp and Dicoding Indonesia Develop a web called CAMABA that provide a university major recommendation. Build with Vue, Pinia, and Tailwind. Insya Allah, CAMABA is a work in progress. I plan to continuously update its features. ',
    year: '2024',
    months: 'Jun - Jul',
    ctaWriting: 'Go To Site',
    link: 'https://camaba.netlify.app/',
  },
  {
    type: 'Work Experience',
    title: 'Part time Frontend Web Dev at PT. Mahkota Giri Suprana',
    body: '3-month part-time contract as a frontend web developer at PT Mahkota Giri Suprana, a renowned software house. During this period, I successfully developed Vobis, an accounting web app built with Vue/Nuxt and Bootstrap.',
    year: '2024',
    months: 'Jan - Apr',
    ctaWriting: 'Workplace Linkedin',
    link: 'https://www.linkedin.com/company/pt-mahkota-giri-suprana/',
  },
  {
    type: 'Work Experience',
    title: 'Web Developer Intern at Habitz.id',
    body: 'Habitz.id is an Edutech Parenting Startup. Alhamdulillah, I now have the opportunity to become a web developer & UI/UX Designer there. The website we designed is still in the development stage, therefore, I have attached a link to linkedin Habitz.id on the "Details" button.',
    year: '2023',
    months: 'Jul - Nov',
    ctaWriting: 'Workplace Linkedin',
    link: 'https://www.linkedin.com/company/habitz-id/posts/?feedView=all',
  }
])
</script>