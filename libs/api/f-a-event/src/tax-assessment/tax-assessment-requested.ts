import { Event } from '@ebd-connect/cqrs-framework';

export class TaxAssessmentRequested implements Event {
  constructor(
    public readonly taxAssessmentId : string,
    public readonly assesserName : string,
    public readonly assesserEmail : string,
  ) {}
}
