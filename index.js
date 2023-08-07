const { listContacts, getContactById, removeContact, addContact } = require('./contacts');
const argv = require('yargs').argv;

const invokeAction = async ({action, id, name, email, phone}) => {
    switch(action) {
        case "read":
           const allContacts = await listContacts();
           return console.table(allContacts);
           break;
        
        case "getById":
            const oneContact = await getContactById(id);
            return console.log(oneContact);
            break;

        case "deleteById":
            const deleteContact = await removeContact(id);
            return console.log(deleteContact);

        case "add":
            const newContact = await addContact({name, email, phone});
            return console.log(newContact);
    }
}

// invokeAction({action: "read"});
// invokeAction({action: "getById", id: "qdggE76Jtbfd9eWJHrssH"});
// invokeAction({action: "deleteById", id: "D_VyZ39NIfb9696siZF0r"});
// invokeAction({action: "add", name: "Ivanov Ivan", email: "ivan@mail.com", phone: "(050) 240-3674"});