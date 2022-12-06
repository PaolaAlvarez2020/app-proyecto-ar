import * as Yup from "yup";

export function initialValues(data) {
  const enfermedad_data = data?.enfermedad_data;
  return {
    fecha: data?.fecha || "",
    descripcion: data?.descripcion || "",
    foto: data?.foto || "",
    enfermedad: enfermedad_data?.nombre || "",
    subtipo: enfermedad_data?.subtipo || "",
    type1: "",
    type2: "",
  };
}

export function addValidationSchema() {
  return Yup.object({
    descripcion: Yup.string()
      .trim("La descripción no debe incluir espacios en blanco por demas")
      .strict(true)
      .max(500, "La descripción debe ser menor a 500 digitos"),
    fecha: Yup.date("La fecha no es válida")
      .default(new Date())
      .required("La fecha de registro es obligatorio"),
    foto: Yup.string().required("La foto es requerida"),
    type1: Yup.string().required("Debe seleccionar una opción"),
    type2: Yup.string().required("Debe seleccionar una opción"),
    enfermedad: Yup.string().required("Debe seleccionar una opción"),
    subtipo: Yup.string().required("Debe seleccionar una opción"),
  });
}

export function updateValidationSchema() {
  return Yup.object({
    descripcion: Yup.string()
      .trim("La descripción no debe incluir espacios en blanco por demas")
      .strict(true)
      .max(500, "La descripción debe ser menor a 500 digitos"),
    fecha: Yup.date("La fecha no es válida")
      .default(new Date())
      .required("La fecha de registro es obligatorio"),
    foto: Yup.string().required("La foto es requerida"),
    type1: Yup.string().required("Debe seleccionar una opción"),
    type2: Yup.string().required("Debe seleccionar una opción"),
    enfermedad: Yup.string().required("Debe seleccionar una opción"),
    subtipo: Yup.string().required("Debe seleccionar una opción"),
    // .test(
    //   "Valor correcto",
    //   "La imagen no es válida",
    //   (val, optionsValue) => {
    //     const file = optionsValue.options.originalValue;
    //     if (file) {
    //       return true;
    //     }
    //     return false;
    //   }
    // ),
  });
}
