import { command, Command } from '@ebd-connect/cqrs-framework';

@command('AssessImpact')
export class AssessImpact implements Command {
  constructor(
    public readonly taxAssessmentId : string,
    public readonly investmentProposalId : string,
) {}

}
