import * as Yup from "yup";

export function initialValues(data) {
  const usuario_data = data?.usuario_data;
  const persona_data = usuario_data?.persona_data;
  return {
    ci: persona_data?.ci || "",
    nombre: persona_data?.nombre || "",
    apellido_paterno: persona_data?.apellido_paterno || "",
    apellido_materno: persona_data?.apellido_materno || "",
    telefono: persona_data?.telefono || "",
    email: usuario_data?.email || "",
    direccion: persona_data?.direccion || "",
    genero: persona_data?.genero || "",
    fecha_nacimiento: persona_data?.fecha_nacimiento || "",
    ciudad: persona_data?.ciudad || "",
    foto: persona_data?.foto || "",
  };
}

export function addValidationSchema() {
  return Yup.object({
    ci: Yup.string()
      .trim(
        "El carnet de identidad no debe incluir espacios en blanco por demas"
      )
      .strict(true)
      .min(5, "El carnet de identidad debe ser mayor a 5 digitos")
      .max(20, "El carnet de identidad debe ser menor a 20 digitos")
      .required("El carnet de identidad es obligatorio"),
    nombre: Yup.string()
      .trim("El nombre no debe incluir espacios en blanco por demas")
      .strict(true)
      .max(255, "El nombre debe ser menor a 255 digitos")
      .required("El nombre es obligatorio"),
    apellido_paterno: Yup.string()
      .trim("El apellido paterno no debe incluir espacios en blanco por demas")
      .strict(true)
      .max(50, "El apellido paterno debe ser menor a 50 digitos")
      .required("El apellido paterno es obligatorio"),
    apellido_materno: Yup.string()
      .trim("El apellido materno no debe incluir espacios en blanco por demas")
      .strict(true)
      .max(50, "El apellido materno debe ser menor a 50 digitos")
      .required("El apellido materno es obligatorio"),
    telefono: Yup.string()
      .trim("El teléfono no debe incluir espacios en blanco por demas")
      .strict(true)
      .min(5, "El teléfono debe ser mayor a 5 digitos")
      .max(20, "El teléfono debe ser menor a 20 digitos")
      .required("El teléfono es obligatorio"),
    email: Yup.string()
      .trim(
        "El correo electrónico no debe incluir espacios en blanco por demas"
      )
      .strict(true)
      .email("El correo electrónico no es válido")
      .max(
        255,
        "El correo electrónico debe contener como máximo 255 caracteres"
      )
      .required("El correo electrónico es obligatorio"),
    direccion: Yup.string()
      .trim("La direccion no debe incluir espacios en blanco por demas")
      .strict(true)
      .max(500, "La direccion debe ser menor a 500 digitos"),
    genero: Yup.string()
      .trim("El género no debe incluir espacios en blanco por demas")
      .default("UNDEFINED")
      .strict(true),
    fecha_nacimiento: Yup.date("La fecha no es válida")
      .default(new Date())
      .required("La fecha de nacimiento es obligatorio"),
    ciudad: Yup.string()
      .trim("La ciudad no debe incluir espacios en blanco por demas")
      .strict(true)
      .required("La ciudad es obligatorio"),
    foto: Yup.string("La imagen no es válida"),
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

export function updateValidationSchema() {
  return Yup.object({
    ci: Yup.string()
      .trim(
        "El carnet de identidad no debe incluir espacios en blanco por demas"
      )
      .strict(true)
      .min(5, "El carnet de identidad debe ser mayor a 5 digitos")
      .max(20, "El carnet de identidad debe ser menor a 20 digitos")
      .required("El carnet de identidad es obligatorio"),
    nombre: Yup.string()
      .trim("El nombre no debe incluir espacios en blanco por demas")
      .strict(true)
      .max(255, "El nombre debe ser menor a 255 digitos")
      .required("El nombre es obligatorio"),
    apellido_paterno: Yup.string()
      .trim("El apellido paterno no debe incluir espacios en blanco por demas")
      .strict(true)
      .max(50, "El apellido paterno debe ser menor a 50 digitos")
      .required("El apellido paterno es obligatorio"),
    apellido_materno: Yup.string()
      .trim("El apellido materno no debe incluir espacios en blanco por demas")
      .strict(true)
      .max(50, "El apellido materno debe ser menor a 50 digitos")
      .required("El apellido materno es obligatorio"),
    telefono: Yup.string()
      .trim("El teléfono no debe incluir espacios en blanco por demas")
      .strict(true)
      .min(5, "El teléfono debe ser mayor a 5 digitos")
      .max(20, "El teléfono debe ser menor a 20 digitos")
      .required("El teléfono es obligatorio"),
    email: Yup.string()
      .trim(
        "El correo electrónico no debe incluir espacios en blanco por demas"
      )
      .strict(true)
      .email("El correo electrónico no es válido")
      .max(
        255,
        "El correo electrónico debe contener como máximo 255 caracteres"
      )
      .required("El correo electrónico es obligatorio"),
    direccion: Yup.string()
      .trim("La direccion no debe incluir espacios en blanco por demas")
      .strict(true)
      .max(500, "La direccion debe ser menor a 500 digitos"),
    genero: Yup.string()
      .default("UNDEFINED")
      .trim("El género no debe incluir espacios en blanco por demas")
      .strict(true),
    fecha_nacimiento: Yup.date("La fecha no es válida").required(
      "La fecha de nacimiento es obligatorio"
    ),
    ciudad: Yup.string()
      .trim("La ciudad no debe incluir espacios en blanco por demas")
      .strict(true)
      .required("La ciudad es obligatorio"),
    foto: Yup.string("La imagen no es válida"),
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
