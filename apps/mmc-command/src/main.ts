import {
  AxonApplication,
  ClientIdentification,
  configLogger,
  credentials,
} from '@ebd-connect/cqrs-framework';

const isProduction = false;
const AXON_HOST = process.env.AXON_HOST ?? 'localhost:8124';
//axon connector
configLogger();
const axonConnector = new AxonApplication({
  commandHandlers: [
    // contextCommandHandlers
  ],
  connection: {
    serviceClientInit: {
      address: AXON_HOST,
      credentials: credentials.createInsecure(),
    },
    clientIdentification: new ClientIdentification()
      .setComponentName('mmc-command')
      .setClientId(isProduction ? crypto.randomUUID() : 'local'),
    forceStayOnSameConnection: !isProduction,
  },
});
axonConnector.connect();

