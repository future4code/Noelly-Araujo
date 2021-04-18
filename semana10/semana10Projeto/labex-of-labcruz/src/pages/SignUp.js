import React, { useState, useMemo } from 'react';
import { useForm } from '../hooks/useForm';
import Select from 'react-select'
import countryList from 'react-select-country-list'


const initialForm = {
    
    name: '',
    age: '',
    applicationText: '',
    profission: '',
    select: ''
}



const SignUp = () => {
    const [form, onChange, resetForm] = useForm(initialForm)
    const [value, setValue] = useState('')
    const options = useMemo(() => countryList().getData(), [])

    // const [form, setForm] = useState(loginForm)
    //
    // const handleInputChange = (event) => {
    //     console.log(event.target)
    //     const { name, value } = event.target
    //     console.log(name,value)
    //
    //     setForm({ ...form, [name]: value })
    // }
    //

    const changeHandler = value => {

        setValue(value)
    }
    const handleClick = (event) => {
        event.preventDefault()
        console.log(form)
        resetForm()


    }
    
    return (

        <>
            <h1>Signup for a trip</h1>

            <form onSubmit={handleClick}>

            
              

                <input type='text'
                    placeholder='your name'
                    name='name'
                    value={form.name}
                    pattern={'(.*[a-z]){2}'}
                    onChange={onChange}
                    required />
                <input type='number'
                    placeholder='Age'
                    name='age'
                    value={form.age}
                    min={18}
                    onChange={onChange}
                    required />
                < input type='text'
                    placeholder='Application text'
                    pattern={'(.*[a-z])'}
                    value={form.applicationText}
                    name='applicationText'
                    onChange={onChange}
                    min={30}
                    required />
                <input type='text'
                    placeholder='profission'
                    name='profission'
                    onChange={onChange}
                    value={form.profission}
                    required />
                <Select options={options} value={value} onChange={changeHandler} />
                <button >Signup</button>

            </form>
            <button>Back</button>

        </>

    )
}

export default SignUp;

