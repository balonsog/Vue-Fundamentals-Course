<template>
  <button type="button" class=“nice-button“>
    <LoadingSpinner v-if="isLoading" />
    <template v-else>
      <template v-if="iconLeftName">
        <LoadingSpinner v-if="isLoadingLeft" />
        <AppIcon v-else :icon=“iconLeftName” />
      </template>
      {{ text }}
      <template v-if="iconRightName">
        <LoadingSpinner v-if="isLoadingRight" />
        <AppIcon v-else :icon=“iconRightName” />
      </template>
    </template>
  </button>
</template>

<!-- Last solution
<template>
  <button class="button">
    <slot />
  </button>
</template>
-->

<!-- Second solution
<template>
  <button class="button">
      <svg v-if="svgName" class="top"></svg>
      {{text}}
  </button>
</template>

<template>
  <h1>My App</h1>
  <BaseButton text="Submit" :showSVG="true"><AppIcon name="arrow-right" /></BaseButton>
</template> 
-->

<!-- first solution
<template>
  <h1>My App</h1>
  <BaseButton 
    text="Submit" 
    :isLoading="loading"
    iconLeftName="left-arrow"
    iconRightName="right-arrow"
    :isLoadingLeft="loadingLeft"
    :isLoadingRight="loadingRight"
  />
</template>
-->

<script>
/**
 * Requirements:
 * - Button can display custom text
 * - Button can display an icon to the right
 * - Button can display an icon on either side
 * - Replace content with a loading spinner
 * - Replace an icon with a loading spinner
 */
export default {
    // props: {
    //     text: {
    //         type: String,
    //         required: true
    //     },
    //     svgName: {
    //         type: Boolean,
    //         default: false
    //     }
    // }

    props: [
    'text', 
    'iconLeftName', 
    'iconRightName', 
    'isLoading', 
    'isLoadingLeft', 
    'isLoadingRight'
  ]
}

}
</script>

<style>
</style>

