import type { TimelineEvent } from '@tao-passport/shared-types';

export function getDemoTimeline(): TimelineEvent[] {
  return [
    {
      id: 'first-seen',
      title: 'Wallet first observed',
      description: 'Wallet began accumulating public Bittensor ecosystem history.',
      occurredAt: '2023-02-01T00:00:00.000Z',
      source: 'chain',
    },
    {
      id: 'validator-active',
      title: 'Validator activity detected',
      description: 'Validator reliability contributed to the wallet reputation model.',
      occurredAt: '2024-06-10T00:00:00.000Z',
      source: 'chain',
    },
    {
      id: 'gittensor-contribution',
      title: 'GitTensor contribution recorded',
      description: 'Developer activity was mapped into the passport achievement graph.',
      occurredAt: '2025-09-14T00:00:00.000Z',
      source: 'gittensor',
    },
  ];
}
