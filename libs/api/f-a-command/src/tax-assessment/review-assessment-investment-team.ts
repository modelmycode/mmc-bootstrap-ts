import { command, Command } from '@ebd-connect/cqrs-framework';

@command('ReviewAssessmentInvestmentTeam')
export class ReviewAssessmentInvestmentTeam implements Command {
  constructor(
    public readonly taxAssessmentId : string,
    public readonly failReason : string,
    public readonly reviewerEmail : string,
) {}

}
