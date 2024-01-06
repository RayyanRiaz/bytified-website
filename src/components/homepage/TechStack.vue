<template>
  <div>
    <HeadingH2 class="text-center pb-10">Our Services And Stacks</HeadingH2>
    <div id="tech_stack" class="flex flex-col md:flex-row gap-8 flex-wrap">
      <HomePageServicesSection class="w-full">
        <template #heading>Mobile App Development</template>
        <div class="w-full text-justify md:text-center">
          Embark on a mobile journey with Bytified. Our expert developers craft innovative, user-centric mobile apps
          that resonate with your audience and elevate your brand presence
        </div>
        <LazyImageContainer class="techs-container">
          <template v-for="icon in techIcons.mobile" :key="icon">
            <WithSuspense
              ><img
                :data-src="`/imgs/techs/${icon}.svg`"
                loading="lazy"
                :alt="nameToImageAlt(icon)"
                :title="nameToImageAlt(icon)"
            /></WithSuspense>
          </template>
        </LazyImageContainer>
      </HomePageServicesSection>
      <HomePageServicesSection class="w-full">
        <template #heading>Full-Stack Development</template>
        <div class="w-full text-justify md:text-center">
          Bytified is your partner in comprehensive software development. From ideation to deployment, our seasoned
          developers ensure robust, scalable, and customized solutions aligned with your business goals.
        </div>
        <LazyImageContainer class="techs-container">
          <template v-for="icon in techIcons.software" :key="icon">
            <WithSuspense
              ><img
                :data-src="`/imgs/techs/${icon}.svg`"
                loading="lazy"
                :alt="nameToImageAlt(icon)"
                :title="nameToImageAlt(icon)"
            /></WithSuspense>
          </template>
        </LazyImageContainer>
      </HomePageServicesSection>
      <HomePageServicesSection class="w-full">
        <template #heading>Infrastructure Tools</template>
        <div class="w-full text-justify md:text-center">
          Streamline your development workflow with Bytified's expertise in cutting-edge infrastructure tools. We
          leverage tools like Docker, Git, and Jenkins to optimize efficiency, enhance collaboration, and deliver
          top-notch solutions.
        </div>
        <LazyImageContainer class="techs-container">
          <template v-for="icon in techIcons.infrastructure" :key="icon">
            <WithSuspense
              ><img
                :data-src="`/imgs/techs/${icon}.svg`"
                loading="lazy"
                :alt="nameToImageAlt(icon)"
                :title="nameToImageAlt(icon)"
            /></WithSuspense>
          </template>
        </LazyImageContainer>
      </HomePageServicesSection>
      <HomePageServicesSection class="w-full">
        <template #heading>Data Science And Machine Learning</template>
        <div class="w-full text-justify md:text-center">
          Unlock the power of data with Bytified's machine learning and data science services. Our seasoned experts
          leverage advanced algorithms to extract valuable insights, driving data-driven decisions and innovation.
        </div>
        <LazyImageContainer class="techs-container">
          <template v-for="icon in techIcons.ml" :key="icon">
            <WithSuspense
              ><img
                :data-src="`/imgs/techs/${icon}.svg`"
                loading="lazy"
                :alt="nameToImageAlt(icon)"
                :title="nameToImageAlt(icon)"
            /></WithSuspense>
          </template>
          <span title="LangChain" class="text-2xl md:text-5xl my-auto text-nowrap">🦜️🔗</span>
        </LazyImageContainer>
      </HomePageServicesSection>
      <HomePageServicesSection class="w-full">
        <template #heading>UI UX Design</template>
        <div class="w-full text-justify md:text-center">
          User experience is at the core of Bytified's design philosophy. Our UI/UX experts blend creativity with
          functionality, ensuring visually stunning and intuitively designed interfaces that captivate users and enhance
          engagement.
        </div>
        <LazyImageContainer class="techs-container">
          <template v-for="icon in techIcons.ui" :key="icon">
            <WithSuspense
              ><img
                :data-src="`/imgs/techs/${icon}.svg`"
                loading="lazy"
                :alt="nameToImageAlt(icon)"
                :title="nameToImageAlt(icon)"
            /></WithSuspense>
          </template>
        </LazyImageContainer>
      </HomePageServicesSection>
    </div>
  </div>
</template>
<script setup>
import LazyImageContainer from '@/components/general/LazyImageContainer.vue';
import WithSuspense from '@/components/general/WithSuspense.vue';
import HeadingH2 from '@/components/general/typography/HeadingH2.vue';
import HomePageServicesSection from '@/components/homepage/HomePageServicesSection.vue';

const techIcons = {
  mobile: ['android', 'ios', 'flutter', 'codemagic', 'firebase'],
  software: [
    'fastapi',
    'django',
    'flask',
    'laravel',
    'typescript',
    'nestjs',
    'nextjs',
    'nodejs',
    'vuejs',
    'nuxtjs',
    'svelte',
    'react',
    'redux',
    'graphql',
    'jquery',
    'squeelize',
    'tailwind',
    'materialui',
  ],
  infrastructure: ['aws', 'gcp', 'git', 'docker', 'argocd', 'jenkins', 'redis'],
  ml: [
    'jupyter',
    'pytorch',
    'tensoflow',
    'pyg',
    'mlflow',
    'streamlit',
    'chainlit',
    'numpy',
    'opencv',
    'pandas',
    'latex',
    'networkx',
    'neo4j',
    'd3',
    'sagemaker',
  ],
  ui: ['illustrator', 'photoshop', 'figma', 'canva'],
};

const nameToImageAlt = (iconName) => {
  const words = iconName.split(/(?=[A-Z])/);
  const capitalizedWords = words.map((word) => word.charAt(0).toUpperCase() + word.slice(1));
  const result = capitalizedWords.join(' ');
  return result;
};
</script>
<style scoped>
.techs-container > * {
  filter: drop-shadow(0px 0px 5px #777);
  padding: 1rem;
}
.techs-container img {
  height: 5rem;
}

.techs-container * {
  text-align: justify;
}
@media (max-width: 640px) {
  .techs-container > * {
    height: 6rem;
    max-width: 10rem;
  }
}
@media (min-width: 641px) {
  .techs-container img {
    height: 8rem;
  }
}
.techs-container > *:hover {
  transform: scale(1.1);
  transition: all 0.2s ease-in-out;
  /* cursor: pointer; */
}
</style>
