import { contactListInitialState } from "../contacts/initial-state-contact";
import { filterInitialState } from "./phonebook/filter/initial-state-filter";

export const initialState = {
    contactList: contactListInitialState,
    filter: filterInitialState,
};