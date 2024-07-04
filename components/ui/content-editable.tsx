'use client';

import { forwardRef, useRef } from 'react';

import type { InputVariants } from '@/components/ui/input';

import { inputVariants } from '@/components/ui/input';
import { cn } from '@/utils/cn';

type BaseDivProps = ElementPropsWithVariants<ElementProps<'div'>, InputVariants>;

interface ContentEditableProps extends Omit<BaseDivProps, 'onSubmit'> {
  onSubmit?: (content: string) => void;
  placeholder?: string;
}

export const ContentEditable = forwardRef<HTMLDivElement, ContentEditableProps>(
  ({ className, variant, onSubmit, ...props }, ref) => {
    const inputRef = useRef<HTMLDivElement>(null);

    if (ref) {
      ref.current = inputRef.current;
    }

    const clearInput = () => {
      const input = inputRef.current;

      if (!input) {
        return;
      }

      input.textContent = '';
      input.innerText = '';
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
      if (!onSubmit) {
        return;
      }

      const isHoldingShift = e.shiftKey;

      if (e.key === 'Enter') {
        if (!isHoldingShift) {
          // prevent newline if not holding shift
          e.preventDefault();

          const textContent = e.currentTarget?.textContent;

          if (textContent) {
            onSubmit(textContent);

            clearInput();
          }
        }
      }
    };

    function pasteAsPlainText(e: React.ClipboardEvent<HTMLDivElement>) {
      e.preventDefault();

      const text = e.clipboardData.getData('text');

      document.execCommand('insertText', false, text);
    }

    return (
      <div
        {...props}
        className={cn(
          inputVariants({ variant }),
          'relative w-full cursor-text whitespace-pre-wrap break-words px-1',
          className
        )}
        onPaste={pasteAsPlainText}
        contentEditable="true"
        role="textbox"
        spellCheck
        aria-multiline="true"
        autoCorrect="off"
        tabIndex={0}
        onKeyDown={handleKeyDown}
        ref={inputRef}
      />
    );
  }
);

ContentEditable.displayName = 'ContentEditable';
