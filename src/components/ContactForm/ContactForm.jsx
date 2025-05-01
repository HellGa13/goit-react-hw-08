import css from './ContactForm.module.css';
import { nanoid } from 'nanoid';

export default function ContactForm({onAdd}) {
    const handleSubmit = e => {
        e.preventDefault();
        onAdd(
            {
                id: nanoid(),
                name: e.target.elements.username.value,
            }
        );
        e.target.reset();
    }

    return (
        <form className={css.form} onSubmit={handleSubmit} >
            <input className={css.username} type="text" name="username" />
            <button type='submit'>Add contact</button>
        </form>
    );
}