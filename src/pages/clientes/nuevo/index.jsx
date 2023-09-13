import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
const NuevoClienteScreen = () => {

    const [initialValues, setInitialValues] = React.useState({
        nombre: "",
        apellido: ""
    })

    const validationSchema = Yup.object().shape({
        nombre: Yup.string().required("Campo obligatorio").min(1, 'Campo obligatorio'),
        apellido: Yup.string().required("Campo obligatorio").min(1, 'Campo obligatorio'),
    })

    const handleSubmit = (values, {setSubmitting}) => {
        console.log(values)
        setTimeout(()=>{setSubmitting(false)},2000)
    }

    return (
        <div className='container'>
            <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            enableReinitialize={true}
            onSubmit={handleSubmit}
            >
                {({ values, errors,  isSubmitting }) => (
                    <Form>
                        {JSON.stringify(errors)}
                        <div className='row'>
                            <div className='col'>
                                <label>Nombre</label>
                                <Field name={'nombre'} className='form-control' />
                                <div className='text-danger'><ErrorMessage name='nombre' /></div>
                            </div>
                            <div className='col'>
                                <label>Apellido</label>
                                <Field name={'apellido'} className='form-control' />
                                <div className='text-danger'><ErrorMessage name='apellido' /></div>
                            </div>
                        </div>
                        <div className='row'>
                            <button type="submit" disabled={isSubmitting} className='btn btn-success'>{isSubmitting ? 'Enviando' : 'Enviar'}</button>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    )
}
export default NuevoClienteScreen;