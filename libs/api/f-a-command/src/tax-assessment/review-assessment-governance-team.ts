import { command, Command } from '@ebd-connect/cqrs-framework';

@command('ReviewAssessmentGovernanceTeam')
export class ReviewAssessmentGovernanceTeam implements Command {
  constructor(
    public readonly taxAssessmentId : string,
    public readonly failReason : string,
    public readonly reviewerEmail : string,
) {}

}
