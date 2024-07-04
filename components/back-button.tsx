'use client';

import { useRouter } from 'next/navigation';

import { Icons } from '@/components/icons';
import { Row } from '@/components/row';

export const BackButton = () => {
  const router = useRouter();

  const goBack = () => {
    router.back();
  };

  return (
    <Row className="w-full px-6 py-4 text-sm text-muted center-v">
      <button onClick={goBack}>
        <Row className="gap-2 center-v">
          <Icons.leftArrow className="h-4 w-4" />
          Back
        </Row>
      </button>
    </Row>
  );
};
