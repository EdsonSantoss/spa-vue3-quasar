import postApi from "src/composables/PostApi";

export default function postService() {
  const { list } = postApi("posts");

  return { list };
}
