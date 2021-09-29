// import shortid from 'shortid';
import { createAction } from '@reduxjs/toolkit';

export const fetchContactsRequest = createAction(
  'contacts/fetchContactsRequest',
);
export const fetchContactsSuccess = createAction(
  'contacts/fetchContactsSuccess',
);
export const fetchContactsError = createAction('contacts/fetchContactsError');

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
