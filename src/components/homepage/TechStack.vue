<template>
  <div>
    <div id="tech_stack" class="flex flex-col gap-8">
      <CollapsableSection title="Mobile Development Stack">
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
      </CollapsableSection>
      <CollapsableSection title="Software Development Stack">
        <LazyImageContainer class="techs-container">
          <template v-for="icon in techIcons.software" :key="icon">
            <WithSuspense
              ><img :data-src="`/imgs/techs/${icon}.svg`" loading="lazy" :title="nameToImageAlt(icon)"
            /></WithSuspense>
          </template>
        </LazyImageContainer>
      </CollapsableSection>
      <CollapsableSection title="Infrastructure Tools">
        <LazyImageContainer class="techs-container">
          <template v-for="icon in techIcons.infrastructure" :key="icon">
            <WithSuspense
              ><img :data-src="`/imgs/techs/${icon}.svg`" loading="lazy" :title="nameToImageAlt(icon)"
            /></WithSuspense>
          </template>
        </LazyImageContainer>
      </CollapsableSection>
      <CollapsableSection title="Data Science And ML Stack">
        <LazyImageContainer class="techs-container">
          <template v-for="icon in techIcons.ml" :key="icon">
            <WithSuspense
              ><img :data-src="`/imgs/techs/${icon}.svg`" loading="lazy" :title="nameToImageAlt(icon)"
            /></WithSuspense>
          </template>
          <span title="LangChain" class="text-5xl my-auto">🦜️🔗</span>
        </LazyImageContainer>
      </CollapsableSection>
    </div>
  </div>
</template>
<script setup>
import CollapsableSection from '@/components/general/CollapsableSection.vue';
import LazyImageContainer from '@/components/general/LazyImageContainer.vue';
import WithSuspense from '@/components/general/WithSuspense.vue';

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

@media (max-width: 640px) {
  .techs-container > * {
    min-height: 3rem;
    max-width: 7rem;
  }
}
@media (min-width: 641px) {
  .techs-container > * {
    min-height: 3rem;
    max-width: 10rem;
  }
}
.techs-container > *:hover {
  transform: scale(1.1);
  transition: all 0.2s ease-in-out;
  /* cursor: pointer; */
}
</style>
