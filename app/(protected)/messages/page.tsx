'use server';

import { Column } from '@/components/column';

export default async function MessagesPage() {
  return (
    <Column className="flex-1">
      <div className="flex-1">
        <span>messages</span>
      </div>
    </Column>
  );
}
