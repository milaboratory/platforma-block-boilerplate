<script
  setup
  lang="ts"
>
import { PlAlert, PlBlockPage, PlTextField } from '@platforma-sdk/ui-vue';
import { useApp } from '../app';

const app = useApp();
const args = app.createArgsModel()

</script>

<template>
  <PlBlockPage>
  
    <PlTextField v-model="args.model.name" label="Enter your name" clearable />

    <PlAlert type="success" v-if="app.outputValues.message">

      {{ app.outputValues.message }}

    </PlAlert>

  </PlBlockPage>
</template>
