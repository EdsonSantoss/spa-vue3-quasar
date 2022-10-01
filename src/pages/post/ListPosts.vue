<template>
  <q-page padding>
    <div class="q-pa-sm" v-for="item in post" :key="item.id">
      <q-card class="my-card">
        <q-card-section class="bg-primary text-white">
          <div class="text-h6">{{ item.title }}</div>
        </q-card-section>
        <q-card-section class="my-card">
          <div class="text-subtitle2">{{ item.body }}</div>
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>
<script>
import { onMounted, ref } from "vue";
import postService from "src/services/postService";

export default {
  name: "ListPosts",
  setup() {
    const post = ref([]);
    const { list } = postService();

    onMounted(() => {
      getPosts();
    });

    const getPosts = async () => {
      try {
        const data = await list();
        post.value = data;
        console.log(post);
      } catch (error) {
        console.error(error);
      }
    };

    return { post };
  },
};
</script>
