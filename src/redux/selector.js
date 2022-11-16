export const getFilter = state =>
state.contactList.contacts.filter(contact => contact.name.toLowerCase().includes(state.filter.filter.toLowerCase()));