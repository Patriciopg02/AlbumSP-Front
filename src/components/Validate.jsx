export default function Validate(values) {
    let errors = {};

    if (!values.date) {
        errors.date = '→ Ingresa una fecha';
    }
    else if (!values.description) {
        errors.description = '→ Ingresa una descripcion';
    }
    return errors;
}
