import css from "./Contact.module.css";

export default function Contact({ data: { id, name }, onDelete }) {
    return (
        <div className={css.conteiner} > 
            <p className={css.text}>{ name }</p>
            <button className={css.button} onClick={() => onDelete(id)} >Delete</button>
        </div> 
    );
}