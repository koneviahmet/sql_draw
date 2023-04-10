import { useField, useForm} from 'vee-validate'
import * as yup from 'yup';

export default function () {
    const { value: name, errorMessage: errorName} = useField('name')
    

    
    const { errors, validate, values } = useForm({
        validationSchema: 
            yup.object({
            name: yup.string().required(),
            
        })
    })

    return {
        name,
        
        validate,
        errors,
        errorName,
        
        values         
    }
}
    
