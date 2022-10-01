const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        name: "students",
        component: () => import("pages/student/ListStudents.vue"),
      },
      {
        path: "form-student/:id?",
        name: "formStudent",
        component: () => import("pages/student/FormStudent.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("src/pages/error/ErrorNotFound.vue"),
  },
];

export default routes;
