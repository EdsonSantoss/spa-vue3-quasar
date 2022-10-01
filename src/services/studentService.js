import studentApi from "src/composables/StudentApi";

export default function studentService() {
  const { list, getById, insert, update, remove } = studentApi("students");

  return { list, getById, insert, update, remove };
}
