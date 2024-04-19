import { TextField, Stack, Grid, Button, } from "@mui/material";
import { useState } from "react";

import SubmitDialog from "./Form/submitDialog";

const formState = {
    first: '',
    last: '',
    phone: '',
    email: '',
    address: '',
    rego: '',
    model: '',
    make: '',
    year: '',
    details: ''
}


export default function Form(){
    const [values, setValues] = useState(formState);
    const [open , setOpen] = useState(false);
    const [text, setText] = useState('');

    /* Form */
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
        const { name, value } = e.target
        setValues({
            ...values,
            [name]:value
        })
    }
    /* Form TODO: On submit, wrap to json and send to cloud DB */
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(values);
    }

    /* Dialog */
    const handleClick = () => {
        setOpen(true)
    }

    const handleClose = (value: string) => {
        setOpen(false)
        setText(value)
        setValues(formState); 
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <Grid container justifyContent='center' rowSpacing={4}>
                    <Grid item>
                        <TextField variant='standard' label='First Name' name='first' value={values.first} onChange={handleChange}/>
                        <TextField variant='standard' label='Last Name' name='last' value={values.last} onChange={handleChange}/>
                        <TextField variant='standard' label='Phone' name='phone' value={values.phone} onChange={handleChange}/>
                    </Grid>
                    <Grid item>
                        <TextField variant='standard' label='Email' name='email' value={values.email} onChange={handleChange}/>
                        <TextField variant='standard' label='Repair Address' name='address' value={values.address} onChange={handleChange}/>
                        <TextField variant='standard' label='Rego' name='rego' value={values.rego} onChange={handleChange}/>
                    </Grid>
                    <Grid item>
                        <TextField variant='standard' label='Model' name='model' value={values.model} onChange={handleChange}/>
                        <TextField variant='standard' label='Make' name='make' value={values.make} onChange={handleChange} />
                        <TextField variant='standard' label='Year' name='year' value={values.year} onChange={handleChange}/>
                    </Grid>
                </Grid>
                <Stack direction='column' alignItems='center'>
                    <TextField variant='outlined' multiline rows={6} label="Details" sx={{marginTop: '1rem', width: "50%"}} name='details' value={values.details} onChange={handleChange}/>
                    <Button variant="contained" type="submit" onClick={handleClick} sx={{marginTop: '1rem', backgroundColor: '#42a5f5'}}>Submit</Button>
                    <SubmitDialog
                        closeOption={text}
                        open={open}
                        onClose={handleClose} 
                    />
                </Stack>
            </form>
        </>
    );
}