import { Event } from '@ebd-connect/cqrs-framework';

export class ReviewedFailedByInvestmentTeam implements Event {
  constructor(
    public readonly taxAssessmentId : string,
    public readonly failReason : string,
    public readonly reviewerEmail : string,
  ) {}
}
