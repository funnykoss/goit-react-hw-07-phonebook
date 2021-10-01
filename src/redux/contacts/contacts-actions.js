// import shortid from 'shortid';
import { createAction } from '@reduxjs/toolkit';

export const fetchContactRequest = createAction(
  'contacts/fetchContactsRequest',
);
export const fetchContactSuccess = createAction(
  'contacts/fetchContactsSuccess',
);
export const fetchContactError = createAction('contacts/fetchContactsError');

export const addContactRequest = createAction('contacts/addContactsRequest');
export const addContactSuccess = createAction('contacts/addContactsSuccess');
export const addContactError = createAction('contacts/addContactsError');

export const deleteContactRequest = createAction(
  'contacts/deleteContactsRequest',
);
export const deleteContactSuccess = createAction(
  'contacts/deleteContactsSuccess',
);
export const deleteContactError = createAction('contacts/deleteContactsError');

export const setFilter = createAction('contacts/setFilter');

// const addContact = createAction('contacts/add', (name, number) => ({
//   payload: {
//     id: shortid.generate(),
//     name,
//     number,
//   },
// }));
// const deleteContact = createAction('contacts/delete');
// const contactCheck = createAction('contacts/filter');

// // eslint-disable-next-line import/no-anonymous-default-export
// export default { addContact, deleteContact, contactCheck };
// const addContact = (name, number) => ({
//   type: types.ADD,
//   payload: {
//     id: shortid.generate(),
//     name,
//     number,
//   },
// });
// const deleteContact = id => ({
//   type: types.DELETE,
//   payload: id,
// });
// const contactCheck = value => ({
//   type: types.FILTER,
//   payload: value,
// });
