import { ReviewAssessmentGovernanceTeam } from '@api/f-a-command';


import { ReviewAssessmentEnterpriseTeam } from '@api/f-a-command';


import { ReviewAssessmentInvestmentTeam } from '@api/f-a-command';


import { AssessImpact } from '@api/f-a-command';


import { RequestAssessment } from '@api/f-a-command';


import { TaxAssessment } from '../domain/tax-assessment';

import { CommandContext, commandHandler,CommandReturnType } from '@ebd-connect/cqrs-framework';

export class TaxAssessmentApplicationService {
  //commandHandlers
  @commandHandler({ name: 'ReviewAssessmentGovernanceTeam' })
  async reviewAssessmentGovernanceTeam(command: ReviewAssessmentGovernanceTeam, { eventSourcing }: CommandContext) {
    await eventSourcing.load(TaxAssessment, command.taxAssessmentId, (eventStream) =>
      eventStream.reviewAssessmentGovernanceTeam(command )
    );
  }

  //end ReviewAssessmentGovernanceTeam

  @commandHandler({ name: 'ReviewAssessmentEnterpriseTeam' })
  async reviewAssessmentEnterpriseTeam(command: ReviewAssessmentEnterpriseTeam, { eventSourcing }: CommandContext) {
    await eventSourcing.load(TaxAssessment, command.taxAssessmentId, (eventStream) =>
      eventStream.reviewAssessmentEnterpriseTeam(command )
    );
  }

  //end ReviewAssessmentEnterpriseTeam

  @commandHandler({ name: 'ReviewAssessmentInvestmentTeam' })
  async reviewAssessmentInvestmentTeam(command: ReviewAssessmentInvestmentTeam, { eventSourcing }: CommandContext) {
    await eventSourcing.load(TaxAssessment, command.taxAssessmentId, (eventStream) =>
      eventStream.reviewAssessmentInvestmentTeam(command )
    );
  }

  //end ReviewAssessmentInvestmentTeam

  @commandHandler({ name: 'AssessImpact' })
  async assessImpact(command: AssessImpact, { eventSourcing }: CommandContext) {
    await eventSourcing.load(TaxAssessment, command.taxAssessmentId, (eventStream) =>
      eventStream.assessImpact(command )
    );
  }

  //end AssessImpact

  @commandHandler({ name: 'RequestAssessment' })

  async requestAssessment(command: RequestAssessment, { eventSourcing }: CommandContext): CommandReturnType<RequestAssessment> {
    const taxAssessmentId= command?.taxAssessmentId ? command?.taxAssessmentId : crypto.randomUUID();

    await eventSourcing.create(TaxAssessment, taxAssessmentId, (eventStream) => eventStream.requestAssessment(taxAssessmentId, command)
  );
  return { taxAssessmentId };
  }
  //end RequestAssessment

}
