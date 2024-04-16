import { command, RespondingCommand } from '@ebd-connect/cqrs-framework';

@command('RequestAssessment')
export class RequestAssessment implements RespondingCommand {
  constructor(
    public readonly taxAssessmentId : string,
    public readonly assesserName : string,
    public readonly assesserEmail : string,
) {}
  $responseType!: { taxAssessmentId : string }
}
