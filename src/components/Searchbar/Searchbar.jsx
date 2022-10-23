import { Formik, Form, Field } from 'formik';

export const SearchBar = ({ onSubmit, isSubmitting, searchQuery }) => {
  const handleSubmit = (values, actions) => {
    onSubmit(values.query);
    actions.resetForm();
  };

  const initialiaValues = { query: searchQuery };

  return (
    <header class="searchbar">
      <Formik
        initialValues={initialiaValues}
        onSubmit={handleSubmit}
        enableReinitialize
      >
        <Form class="form">
          <button type="submit" class="button" disabled={isSubmitting}>
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
