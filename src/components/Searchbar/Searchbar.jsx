import { Formik, Form, Field } from 'formik';

export const SearchBar = ({ onSubmit }) => {

  const handleSubmit = (values, actions) => {
    onSubmit(values.query);
    actions.resetForm();
  };

  return (
    <header class="searchbar">
      <Formik initialValues={{ query: '' }} onSubmit={handleSubmit}>
        <Form class="form">
          <button type="submit" class="button">
            <span class="button-label">Search</span>
          </button>
          <Field
            class="input"
            type="text"
            placeholder="Search images and photos"
            name="query"
          />
        </Form>
      </Formik>
    </header>
  );
};
