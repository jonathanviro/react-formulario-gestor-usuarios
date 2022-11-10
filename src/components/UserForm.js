import Input from './Input';
import Button from './Button';
import usefomrulario from '../hooks/useFormulario';

const UserForm = ({ submit }) => {
    const [formulario, handleChange, reset] = usefomrulario({
        name: '',
        lastname: '',
        email: '',
    });

    const handleSubmit = (e) => { 
        e.preventDefault()
        submit(formulario)
        reset()
    }

    return (
        <form onSubmit={handleSubmit}>
            <Input
                label="NOMBRE"
                name="name"
                placeholder="Nombre"
                value={formulario.name}
                onChange={handleChange} />
            <Input
                label="APELLIDO"
                name="lastname"
                placeholder="Apellido"
                value={formulario.lastname}
                onChange={handleChange} />
            <Input
                label="CORREO"
                name="email"
                placeholder="Email"
                value={formulario.email}
                onChange={handleChange} />
            <Button>Enviar</Button>
        </form>
    );
};

export default UserForm;
