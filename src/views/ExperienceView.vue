<template>
  <div class="w-full min-h-screen pt-14 pb-12 px-8 xl:px-16 relative text-cust-white">
    <img :src="BlueDark" alt="" class="fixed top-0 left-0 z-[1]">

    <main class="mt-20">
      <h1 v-motion-fade :duration="1000" class="text-cust-white font-bold text-4xl relative z-[2] leading-relaxed">
        Experiences & Achievment
      </h1>
      <p v-motion-fade :duration="1000" class="text-white text-xl mt-4 w-[80%] leading-relaxed mb-28">
        Here's you could see the diverse projects I've successfully completed and the milestones I've reached in my
        career. From innovative web development to impactful software solutions, this section showcases my journey and
        growth.
      </p>


      <div v-motion-fade :duration="1000" v-for="(valueOfExperienceData, index) in experienceData"
        :class="index === experienceData.length - 1 ? 'pb-0' : 'pb-24'"
        class="flex gap-20 items-start pl-8 border-l border-cust-gray-lighter">
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
          <div class="mt-3 flex gap-3">
            <small class="text-cust-gray-lighter">
              Build with:
            </small>
            <div v-for="stack in valueOfExperienceData.stacks" v-html="stack">
            </div>
          </div>
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
import { IconArrowNarrowRight, IconBrandTailwind, IconBrandVue } from '@tabler/icons-vue';
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
    stacks: [
      '<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="gray"  stroke-width="1.5"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-brand-vue"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M16.5 4l-4.5 8l-4.5 -8" /><path d="M3 4l9 16l9 -16" /></svg>',
      '<small class="text-cust-gray-lighter">Pinia</small>',
      '<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="gray"  stroke-width="1.5"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-brand-tailwind"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M11.667 6c-2.49 0 -4.044 1.222 -4.667 3.667c.933 -1.223 2.023 -1.68 3.267 -1.375c.71 .174 1.217 .68 1.778 1.24c.916 .912 2 1.968 4.288 1.968c2.49 0 4.044 -1.222 4.667 -3.667c-.933 1.223 -2.023 1.68 -3.267 1.375c-.71 -.174 -1.217 -.68 -1.778 -1.24c-.916 -.912 -1.975 -1.968 -4.288 -1.968zm-4 6.5c-2.49 0 -4.044 1.222 -4.667 3.667c.933 -1.223 2.023 -1.68 3.267 -1.375c.71 .174 1.217 .68 1.778 1.24c.916 .912 1.975 1.968 4.288 1.968c2.49 0 4.044 -1.222 4.667 -3.667c-.933 1.223 -2.023 1.68 -3.267 1.375c-.71 -.174 -1.217 -.68 -1.778 -1.24c-.916 -.912 -1.975 -1.968 -4.288 -1.968z" /></svg>',
      '<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="gray"  stroke-width="1.5"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-brand-figma"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M15 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" /><path d="M6 3m0 3a3 3 0 0 1 3 -3h6a3 3 0 0 1 3 3v0a3 3 0 0 1 -3 3h-6a3 3 0 0 1 -3 -3z" /><path d="M9 9a3 3 0 0 0 0 6h3m-3 0a3 3 0 1 0 3 3v-15" /></svg>'
    ]
  },
  {
    type: 'Work Experience',
    title: 'Part time Frontend Web Dev at PT. Mahkota Giri Suprana',
    body: '3-month part-time contract as a frontend web developer at PT Mahkota Giri Suprana, a renowned software house. During this period, I successfully developed Vobis, an accounting web app built with Vue/Nuxt and Bootstrap.',
    year: '2024',
    months: 'Jan - Apr',
    ctaWriting: 'Workplace Linkedin',
    link: 'https://www.linkedin.com/company/pt-mahkota-giri-suprana/',
    stacks: [
      '<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="gray"  stroke-width="1.5"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-brand-nuxt"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12.146 8.583l-1.3 -2.09a1.046 1.046 0 0 0 -1.786 .017l-5.91 9.908a1.046 1.046 0 0 0 .897 1.582h3.913" /><path d="M20.043 18c.743 0 1.201 -.843 .82 -1.505l-4.044 -7.013a.936 .936 0 0 0 -1.638 0l-4.043 7.013c-.382 .662 .076 1.505 .819 1.505h8.086z" /></svg>',
      '<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="gray"  stroke-width="1.5"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-brand-bootstrap"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M2 12a2 2 0 0 0 2 -2v-4a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v4a2 2 0 0 0 2 2" /><path d="M2 12a2 2 0 0 1 2 2v4a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-4a2 2 0 0 1 2 -2" /><path d="M9 16v-8h3.5a2 2 0 1 1 0 4h-3.5h4a2 2 0 1 1 0 4h-4z" /></svg>'
    ]
  },
  {
    type: 'Work Experience',
    title: 'Web Developer Intern at Habitz.id',
    body: 'Habitz.id is an Edutech Parenting Startup. Alhamdulillah, I now have the opportunity to become a web developer & UI/UX Designer there. The website we designed is still in the development stage, therefore, I have attached a link to linkedin Habitz.id on the "Details" button.',
    year: '2023',
    months: 'Jul - Nov',
    ctaWriting: 'Workplace Linkedin',
    link: 'https://www.linkedin.com/company/habitz-id/posts/?feedView=all',
    stacks: [
      '<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="gray"  stroke-width="1.5"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-brand-nuxt"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12.146 8.583l-1.3 -2.09a1.046 1.046 0 0 0 -1.786 .017l-5.91 9.908a1.046 1.046 0 0 0 .897 1.582h3.913" /><path d="M20.043 18c.743 0 1.201 -.843 .82 -1.505l-4.044 -7.013a.936 .936 0 0 0 -1.638 0l-4.043 7.013c-.382 .662 .076 1.505 .819 1.505h8.086z" /></svg>',
      '<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="gray"  stroke-width="1.5"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-brand-tailwind"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M11.667 6c-2.49 0 -4.044 1.222 -4.667 3.667c.933 -1.223 2.023 -1.68 3.267 -1.375c.71 .174 1.217 .68 1.778 1.24c.916 .912 2 1.968 4.288 1.968c2.49 0 4.044 -1.222 4.667 -3.667c-.933 1.223 -2.023 1.68 -3.267 1.375c-.71 -.174 -1.217 -.68 -1.778 -1.24c-.916 -.912 -1.975 -1.968 -4.288 -1.968zm-4 6.5c-2.49 0 -4.044 1.222 -4.667 3.667c.933 -1.223 2.023 -1.68 3.267 -1.375c.71 .174 1.217 .68 1.778 1.24c.916 .912 1.975 1.968 4.288 1.968c2.49 0 4.044 -1.222 4.667 -3.667c-.933 1.223 -2.023 1.68 -3.267 1.375c-.71 -.174 -1.217 -.68 -1.778 -1.24c-.916 -.912 -1.975 -1.968 -4.288 -1.968z" /></svg>',
      '<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="gray"  stroke-width="1.5"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-brand-figma"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M15 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" /><path d="M6 3m0 3a3 3 0 0 1 3 -3h6a3 3 0 0 1 3 3v0a3 3 0 0 1 -3 3h-6a3 3 0 0 1 -3 -3z" /><path d="M9 9a3 3 0 0 0 0 6h3m-3 0a3 3 0 1 0 3 3v-15" /></svg>'
    ]
  }
])
</script>