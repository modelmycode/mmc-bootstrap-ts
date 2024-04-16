import { TaxAssessmentApplicationService } from './tax-assessment-application-service';

import { Type } from '@ebd-connect/cqrs-framework';

export const fACommandHandlers: Type[] = [
  //services
  TaxAssessmentApplicationService,

];
