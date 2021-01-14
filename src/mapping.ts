import { SubmitProposal } from '../generated/Moloch/Molochv1'
import { Proposal } from '../generated/schema'

export function handleSubmitProposal(event: SubmitProposal): void {
  let gravatar = new Proposal(event.params.proposalIndex.toHex())
  gravatar.applicant = event.params.applicant
  gravatar.tokentribute = event.params.tokenTribute
  gravatar.sharesRequested = event.params.sharesRequested

  gravatar.save()
}