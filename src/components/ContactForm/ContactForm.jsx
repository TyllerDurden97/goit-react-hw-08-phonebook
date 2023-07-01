import { React } from "react";
import css from 'components/ContactForm/ContactForm.module.css';
import { useDispatch, useSelector } from "react-redux";
import { phonebookSelector } from "redux/contacts/selectors";
import { addContactThunk } from "redux/contacts/thunks";
import { toast } from 'react-toastify';


export const ContactForm = () => {
   const { items } = useSelector(phonebookSelector);
   const dispatch = useDispatch();
   
   const handleFormSubmit = (e) => {
      e.preventDefault();
      const newContact = {
         name: e.currentTarget.elements.name.value,
         number: e.currentTarget.elements.number.value,         
      };
       const filteredContact = items.filter(contact =>
          contact.name.toLowerCase() === newContact.name.toLowerCase()).length;
    
      if (filteredContact) {
         return toast.info(`${newContact.name} is already in Contacts`)
      } else {
         dispatch(addContactThunk(newContact));
         e.currentTarget.reset();
      };
   };

   return (
         <form
            className={css.fhonebForm}
            onSubmit={handleFormSubmit}>
               <label className={css.fhonebFormLabel}>Name 
               <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            className={css.fhonebFormInpt}
               />
               </label>
                <label className={css.fhonebFormLabel}>Number 
               <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            className={css.fhonebFormInpt}
               />
               </label>
               <button type="submit" className={css.fhonebFormBtn}>Add contact</button>
      </form>)   
}
