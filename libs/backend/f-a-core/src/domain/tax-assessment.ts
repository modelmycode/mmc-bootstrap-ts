import { ReviewedFailedByGovernanceTeam } from '@api/f-a-event';

import { TaxAssessmentReviewedByGovernanceTeam } from '@api/f-a-event';

import { ReviewAssessmentGovernanceTeam } from '@api/f-a-command';


import { ReviewedFailedByEnterpriseTeam } from '@api/f-a-event';

import { TaxAssessmentReviewedByEnterpriseTeam } from '@api/f-a-event';

import { ReviewAssessmentEnterpriseTeam } from '@api/f-a-command';


import { ReviewedFailedByInvestmentTeam } from '@api/f-a-event';

import { TaxAssessmentReviewedByInvestmentTeam } from '@api/f-a-event';

import { ReviewAssessmentInvestmentTeam } from '@api/f-a-command';


import { TaxImpactAssessed } from '@api/f-a-event';

import { AssessImpact } from '@api/f-a-command';


import { TaxAssessmentRequested } from '@api/f-a-event';

import { RequestAssessment } from '@api/f-a-command';


import {
  AggregateRoot,
  eventSourcingHandler,
} from '@ebd-connect/cqrs-framework';

export class TaxAssessment extends AggregateRoot {
  private assesserEmail! : string;
  private assesserName! : string;
  private assessmentId! : string;
  private failReason! : string;
  private investmentProposalId! : string;
  private reviewerEmail! : string;
  private taxAssessmentId! : string;
  //when
  //start ReviewAssessmentGovernanceTeam
  public reviewAssessmentGovernanceTeam( command: ReviewAssessmentGovernanceTeam ) {
    if (!command.failReason) {
      this.apply(TaxAssessmentReviewedByGovernanceTeam, { ...command });
    }
    if (command.failReason) {
      this.apply(ReviewedFailedByGovernanceTeam, { ...command  });
   }
  }
  @eventSourcingHandler({ name: 'TaxAssessmentReviewedByGovernanceTeam' })
  onTaxAssessmentReviewedByGovernanceTeam(event: TaxAssessmentReviewedByGovernanceTeam) {
  }

  @eventSourcingHandler({ name: 'ReviewedFailedByGovernanceTeam' })
  onReviewedFailedByGovernanceTeam(event: ReviewedFailedByGovernanceTeam) {
    this.failReason = event.failReason;
    this.reviewerEmail = event.reviewerEmail;
  }

  //end ReviewAssessmentGovernanceTeam

  //start ReviewAssessmentEnterpriseTeam
  public reviewAssessmentEnterpriseTeam( command: ReviewAssessmentEnterpriseTeam ) {

    if (!command.failReason) {
      this.apply(TaxAssessmentReviewedByEnterpriseTeam, { ...command  });
   }
    if (command.failReason) {
      this.apply(ReviewedFailedByEnterpriseTeam, { ...command  });
   }
  }
  @eventSourcingHandler({ name: 'TaxAssessmentReviewedByEnterpriseTeam' })
  onTaxAssessmentReviewedByEnterpriseTeam(event: TaxAssessmentReviewedByEnterpriseTeam) {
  }

  @eventSourcingHandler({ name: 'ReviewedFailedByEnterpriseTeam' })
  onReviewedFailedByEnterpriseTeam(event: ReviewedFailedByEnterpriseTeam) {
    this.failReason = event.failReason;
    this.reviewerEmail = event.reviewerEmail;
  }

  //end ReviewAssessmentEnterpriseTeam

  //start ReviewAssessmentInvestmentTeam
  public reviewAssessmentInvestmentTeam( command: ReviewAssessmentInvestmentTeam ) {

    if (!command.failReason) {
      this.apply(TaxAssessmentReviewedByInvestmentTeam, { ...command  });
   }
    if (command.failReason) {
      this.apply(ReviewedFailedByInvestmentTeam, { ...command  });
   }
  }
  @eventSourcingHandler({ name: 'TaxAssessmentReviewedByInvestmentTeam' })
  onTaxAssessmentReviewedByInvestmentTeam(event: TaxAssessmentReviewedByInvestmentTeam) {
  }

  @eventSourcingHandler({ name: 'ReviewedFailedByInvestmentTeam' })
  onReviewedFailedByInvestmentTeam(event: ReviewedFailedByInvestmentTeam) {
    this.failReason = event.failReason;
    this.reviewerEmail = event.reviewerEmail;
  }

  //end ReviewAssessmentInvestmentTeam

  //start AssessImpact
  public assessImpact( command: AssessImpact ) {

      this.apply(TaxImpactAssessed, { ...command  });

  }
  @eventSourcingHandler({ name: 'TaxImpactAssessed' })
  onTaxImpactAssessed(event: TaxImpactAssessed) {
    this.investmentProposalId = event.investmentProposalId;
  }

  //end AssessImpact

  //start RequestAssessment
  public requestAssessment(taxAssessmentId: string, command: RequestAssessment ) {

      this.apply(TaxAssessmentRequested, { ...command ,taxAssessmentId });

  }
  @eventSourcingHandler({ name: 'TaxAssessmentRequested' })
  onTaxAssessmentRequested(event: TaxAssessmentRequested) {
    this.taxAssessmentId = event.taxAssessmentId;
    this.assesserName = event.assesserName;
    this.assesserEmail = event.assesserEmail;
  }

  //end RequestAssessment

  //end when
}
