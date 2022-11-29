import * as Yup from "yup";

export function initialValues() {
  return {
    ci: "",
    password: "",
  };
}

export function validationSchema() {
  return Yup.object({
    ci: Yup.string()
      .trim("El carnet de identidad no debe contener espacios")
      .min(5, "El carnet debe ser mayor a 5 digitos")
      .max(20, "El carnet debe ser menor a 20 digitos")
      .required("El carnet de identidad es obligatorio"),
    password: Yup.string()
      .trim("La contraseña no debe contener espacios")
      .min(6, "La contraseña debe ser mayor a 6 digitos")
      .max(100, "La contraseña debe ser menor a 100 digitos")
      .required("La contraseña es obligatoria"),
  });
}
