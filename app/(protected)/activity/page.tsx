'use server';

import { Column } from '@/components/column';

export default async function ActivityPage() {
  return (
    <Column className="flex-1">
      <div className="flex-1">
        <span>activity</span>
      </div>
    </Column>
  );
}
