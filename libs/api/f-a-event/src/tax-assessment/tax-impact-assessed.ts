import { Event } from '@ebd-connect/cqrs-framework';

export class TaxImpactAssessed implements Event {
  constructor(
    public readonly taxAssessmentId : string,
    public readonly investmentProposalId : string,
  ) {}
}
