<template>
  <q-page padding>
    <q-form @submit="save" class="row q-col-gutter-sm">
      <q-input
        outlined
        v-model="formStudent.name"
        label="Nome"
        lazy-rules
        :rules="[(val) => (val && val.length > 0) || 'Campo obrigatório.']"
        class="col-lg-6 col-xs-12"
        clearable
      />
      <q-input
        outlined
        v-model="formStudent.email"
        label="E-mail"
        type="email"
        lazy-rules
        :rules="[(val) => (val && val.length > 0) || 'Campo obrigatório.']"
        class="col-lg-6 col-xs-12"
        clearable
      />
      <q-input
        outlined
        v-model="formStudent.cpf"
        label="CPF"
        mask="###.###.###-##"
        lazy-rules
        :rules="[(val) => (val && val.length > 0) || 'Campo obrigatório.']"
        class="col-lg-6 col-xs-12"
        clearable
      />
      <div class="col-12 q-gutter-sm">
        <q-btn
          label="Salvar"
          color="primary"
          class="float-right"
          icon="save"
          type="submit"
        />
        <q-btn
          label="Cancelar"
          color="white"
          class="float-right"
          text-color="primary"
          icon="cancel"
          :to="{ name: 'students' }"
        />
      </div>
    </q-form>
  </q-page>
</template>

<script>
import { defineComponent, onMounted, ref } from "vue";
import studentService from "src/services/studentService";
import { useQuasar } from "quasar";
import { useRouter, useRoute } from "vue-router";

export default defineComponent({
  name: "FormStudent",
  setup() {
    const $q = useQuasar();
    const router = useRouter();
    const route = useRoute();
    const { insert, getById, update } = studentService();
    const formStudent = ref({
      name: "",
      cpf: "",
      email: "",
    });

    onMounted(async () => {
      if (route.params.id) {
        const studentData = await getById(route.params.id);
        formStudent.value = studentData;
      }
    });

    const save = async () => {
      try {
        if (route.params.id) {
          await update(formStudent.value, route.params.id);
        } else {
          await insert(formStudent.value);
        }
        $q.notify({
          message: "Aluno salvo com sucesso!",
          icon: "check",
          color: "positive",
        });
        router.push({ name: "students" });
      } catch (error) {
        $q.notify({
          message: "Erro ao salvar o aluno!",
          icon: "times",
          color: "negative",
        });
      }
    };
    return { formStudent, save };
  },
});
</script>
