import {useState} from 'react';
import Select from 'react-select';


export const useForm = (initialForm) =>{


    const [form, setForm] = useState(initialForm)
    
    const onChange = (event) => { 
        const { name, value } = event.target
        setForm({ ...form, [name]: value })
    }

    const resetForm = () => {
        setForm(initialForm)
    }
    return[form, onChange, setForm];

    

    

}

export default useForm;