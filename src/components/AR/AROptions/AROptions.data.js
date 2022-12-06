import * as Yup from "yup";

export function initialVales() {
  return {
    type1: "",
    type2: "",
  };
}

export function validationSchema() {
  return Yup.object({
    type1: Yup.string().required("Debe seleccionar una opción"),
    type2: Yup.string().required("Debe seleccionar una opción"),
  });
}
