/*
Welcome to Keystone! This file is what keystone uses to start the app.

It looks at the default export, and expects a Keystone config object.

You can find all the config options in our docs here: https://keystonejs.com/docs/apis/config
*/

import { config } from '@keystone-next/keystone';

// Look in the schema file for how we define our lists, and how users interact with them through graphql or the Admin UI
import { lists } from './schema';

// Keystone auth is configured separately - check out the basic auth setup we are importing from our auth file.
import { withAuth} from './auth';
import { statelessSessions } from '@keystone-next/keystone/session';
import { DATABASE_URL, MAX_SESSION_AGE, PORT, SESSION_SECRET } from './config';


const session = statelessSessions({
  maxAge: MAX_SESSION_AGE || 30* 24* 60 * 60, // 30 days
  secret: SESSION_SECRET || process.env.SESSION_SECRET,
});

export default withAuth(
  // Using the config function helps typescript guide you to the available options.
  config({
    // the db sets the database provider - we're using sqlite for the fastest startup experience
    db: {
      provider: 'postgresql',
      url: DATABASE_URL || process.env.DATABASE_URL || 3000||'NO_DB_HOST_FOUND',
      useMigrations: true,
    },
    // server session
    server: { port: PORT || parseInt(process.env.PORT ||'') || 3000 },
    // image storage
    images:{
      upload:'local',
      local:{
        storagePath:'public/uploads',
        baseUrl:'/images',
      }
    },
    // This config allows us to set up features of the Admin UI https://keystonejs.com/docs/apis/config#ui
    ui: {
      // For our starter, we check that someone has session data before letting them see the Admin UI.
      isAccessAllowed: (context) => !!context.session?.data,
    },
    lists,
    session,
  })
);
