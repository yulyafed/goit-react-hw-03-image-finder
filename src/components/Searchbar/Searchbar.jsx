import { Formik, Form, Field } from 'formik';

export const SearchBar = ({ onSubmit }) => { 
  const handleSubmit = (name, page = 1, actions) => {
    onSubmit(name, (page = 1));
    actions.resetForm();
  };
  return (
    <header class="searchbar">
      <Formik initialValues={{image: ''}} onSubmit = {handleSubmit}>
        <Form class="form" >
          <button type="submit" class="button">
            <span class="button-label">Search</span>
          </button>

          <Field
            class="input"
            type="text"
            autocomplete="off"
            autofocus
            placeholder="Search images and photos"
          />
        </Form>
      </Formik>
    </header>
  );
}


