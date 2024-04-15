<template>
 <router-link
 v-bind:to="{name:'board', params: {name,id}}">
  <span>{{ name }}</span>
 </router-link>
</template>

<script>
export default {
  name: "boardCard",
  props: {
    id:Number,
    name:String
  }
};
</script>