import {
  ClientIdentification, configLogger,
  credentials,
  logger,
  QueryRebuildingApp,
  readBuildMeta
} from '@ebd-connect/cqrs-framework';
import { environment } from './environments/environment';
readBuildMeta();
const isProduction = environment.production
const appLogger = logger.forContext('App')
configLogger();
const env = {
  PORT: 3105,
  AXON_HOST: 'localhost:8124',

  DB_HOST: 'localhost',
  DB_PORT: 5432,
  DB_USER: 'admin',
  DB_PASSWORD: 'secret',
  DB_NAME: 'mmc',
  DB_LOGGING: false,
}

const axonApp = new QueryRebuildingApp({
  connection: {
    serviceClientInit: {
      address: env.AXON_HOST,
      credentials: credentials.createInsecure(),
    },
    clientIdentification: new ClientIdentification()
      .setComponentName('query-rebuilding')
      .setClientId(isProduction ? crypto.randomUUID() : 'local'),
    forceStayOnSameConnection: !isProduction,
  },
  database: {
    postgres: {
      host: env.DB_HOST,
      port: env.DB_PORT,
      user: env.DB_USER,
      password: env.DB_PASSWORD,
      database: env.DB_NAME,
      logging: env.DB_LOGGING,
    },
  },
  rebuildGroups: [],
})
axonApp.connect().catch((error) => appLogger.error(error, true))
