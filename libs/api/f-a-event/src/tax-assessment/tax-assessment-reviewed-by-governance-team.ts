import { Event } from '@ebd-connect/cqrs-framework';

export class TaxAssessmentReviewedByGovernanceTeam implements Event {
  constructor(
    public readonly taxAssessmentId : string,
  ) {}
}
