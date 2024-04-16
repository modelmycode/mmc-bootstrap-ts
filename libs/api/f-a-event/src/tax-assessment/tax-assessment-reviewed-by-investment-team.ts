import { Event } from '@ebd-connect/cqrs-framework';

export class TaxAssessmentReviewedByInvestmentTeam implements Event {
  constructor(
    public readonly taxAssessmentId : string,
  ) {}
}
