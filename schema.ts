// Code copied (with some modifications) from the Keystone 6 "with-auth" example
// See.. https://github.com/keystonejs/keystone/tree/master/examples/with-auth

import { list } from '@keystone-next/keystone';
import {
  checkbox,
  password,
  relationship,
  text,
  timestamp,
  select,
} from '@keystone-next/keystone/fields';

import {document} from '@keystone-next/fields-document'

export const lists = {
  
  User: list({
    fields: {
      name: text({ validation: { isRequired: true } }),
      email: text({
        validation: { isRequired: true },
        isIndexed: 'unique',
        isFilterable: true,
      }),
      // The password field takes care of hiding details and hashing values
      password: password({ validation: { isRequired: true } }),
    },
    // Here we can configure the Admin UI. We want to show a user's name and email in the Admin UI
    ui: { 
      listView: {
        initialColumns: ['name', 'email'],
      },
    },
  }),

  // The project model
  Project: list({

    // fields
    fields: {
      // the name of the project
      name: text({
        validation:{
          isRequired: true,
        }
      }),
      // slug of the project based on the name
      slug: text({
        // make unique
        isIndexed: true,
        // hooks for slug creation
        hooks: {
          resolveInput: ({ resolvedData }) => {
            return resolvedData.name.toLowerCase().replace(/\s/g, '-');
          },
        },
        ui:{
          // hide from the admin UI
          createView: {
            fieldMode: 'hidden',
          },
        }
      }),

      status: select({
        options: [
          { value: 'active', label: 'Active' },
          { value: 'inactive', label: 'Inactive' },
        ],
      }),
      shortDescription: text({
      }),
    },

    // ui options for the list view
    ui:{
      listView: {
        initialColumns: ['name', 'status'],
      }
    }

  })

};
