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

import { document } from '@keystone-next/fields-document';

export const lists = {
 
  Person: list({
    fields: {
      name: text({ isRequired: true }),
      // Added an email and password pair to be used with authentication
      // The email address is going to be used as the identity field, so it's
      // important that we set both isRequired and isUnique
      email: text({ isRequired: true, isUnique: true, isIndexed: 'unique' }),
      // The password field stores a hash of the supplied password, and
      // we want to ensure that all people have a password set, so we use
      // the isRequired flag.
      password: password({ isRequired: true }),
    },
  }),

  Project: list({
    fields: {
      name: text({ isRequired: true, isUnique: true }),
      shortDescription: text(),
      content: document({
        formatting: {
          inlineMarks: {
            code: true,
          },
          listTypes: {
            unordered: true,
            ordered: true,
          },

          headingLevels: [1, 2, 3, 4, 5, 6],
        },
      }), 
      // image url
      image:text(),
      slug: text({
        hooks:{
          // create a slug from the name field
          resolveInput: ({ inputData:{name} }) => {
            if (name) {
              return name.toLowerCase().replace(/\s+/g, '-');
            }
          }
        },
        ui: {
          // don't show the slug field in the admin UI
          createView: {
            fieldMode: 'hidden',
          }
        }
      }),
    },
    
  }),
};
