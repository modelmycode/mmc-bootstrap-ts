import { command, Command } from '@ebd-connect/cqrs-framework';

@command('ReviewAssessmentEnterpriseTeam')
export class ReviewAssessmentEnterpriseTeam implements Command {
  constructor(
    public readonly taxAssessmentId : string,
    public readonly failReason : string,
    public readonly reviewerEmail : string,
) {}

}
