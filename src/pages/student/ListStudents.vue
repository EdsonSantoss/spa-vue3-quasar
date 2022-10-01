<template>
  <q-page padding>
    <q-table title="Aluno" :rows="students" :columns="columns" row-key="name">
      <template v-slot:top>
        <span class="text-h5">Alunos</span>
        <q-space />
        <q-btn
          color="primary"
          label="Novo"
          :to="{ name: 'formStudent' }"
        ></q-btn>
      </template>
      <template v-slot:body-cell-actions="props">
        <q-td :props="props" class="q-gutter-sm">
          <q-btn
            round
            icon="edit"
            color="secondary"
            dense
            size="sm"
            @click="editStudent(props.row.id)"
          />
          <q-btn
            round
            icon="delete"
            color="negative"
            dense
            size="sm"
            @click="removeStudent(props.row.id)"
          />
        </q-td>
      </template>
    </q-table>
  </q-page>
</template>

<script>
import { defineComponent, onMounted, ref } from "vue";
import studentService from "src/services/studentService";
import { useQuasar } from "quasar";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "IndexPage",
  setup() {
    const $q = useQuasar();
    const router = useRouter();
    const students = ref([]);
    const { list, remove } = studentService();
    const columns = [
      {
        name: "id",
        field: "id",
        label: "ID",
        sortable: true,
        align: "left",
      },
      {
        name: "name",
        field: "name",
        label: "Nome",
        sortable: true,
        align: "left",
      },
      {
        name: "cpf",
        field: "cpf",
        label: "CPF",
        sortable: false,
        align: "left",
      },
      {
        name: "email",
        field: "email",
        label: "E-mail",
        sortable: false,
        align: "left",
      },
      {
        name: "actions",
        field: "actions",
        label: "Ações",
        align: "right",
      },
    ];

    onMounted(() => {
      getStudents();
    });

    const getStudents = async () => {
      try {
        const data = await list();
        students.value = data;
      } catch (error) {
        console.error(error);
      }
    };

    const removeStudent = async (id) => {
      try {
        $q.dialog({
          title: "Excluir",
          message: "Deseja excluir este aluno?",
          cancel: true,
          persistent: true,
        }).onOk(async () => {
          await remove(id);
          $q.notify({
            message: "Registro apagado com sucesso!",
            icon: "check",
            color: "positive",
          });
          await getStudents();
        });
      } catch (error) {
        $q.notify({
          message: "Erro ao apagar o registro!",
          icon: "times",
          color: "negative",
        });
      }
    };

    const editStudent = (id) => {
      router.push({ name: "formStudent", params: { id } });
    };

    return { students, columns, removeStudent, editStudent };
  },
});
</script>
