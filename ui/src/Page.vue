<script setup lang="ts">
import { PlBlockPage, PlSpacer, PlTextArea } from '@milaboratory/platforma-uikit';
import { useApp } from './app';
import { computed } from "vue";

const app = useApp();
app.createArgsModel();
const args = app.createArgsModel();
const transformedArg = computed(() => app.getOutputFieldOkOptional("transformedArg"));
</script>

<template>
<div class="container">
  <PlBlockPage>
    <template #title>Hello World Block</template>
    <PlTextArea v-model="args.model.argument" />
    <PlSpacer/>
    <PlTextArea v-model="transformedArg" :readonly="true" />
  </PlBlockPage>
</div>
</template>

<style lang="css">
.container {
  display: flex;
  flex-direction: column;
  max-width: 100%;
  gap: 24px;
}
</style>
