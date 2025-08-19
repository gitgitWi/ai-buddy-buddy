import type { ComponentProps } from 'react';
import { cn } from '~/lib/utils';

function Paragraph({ children, className }: ComponentProps<'p'>) {
  return <p className={cn('inline text-base', className)}>{children}</p>;
}

function Heading1({ children, className }: ComponentProps<'h1'>) {
  return (
    <h1 className={cn('my-2 font-black text-3xl', className)}>{children}</h1>
  );
}

function Heading2({ children, className }: ComponentProps<'h2'>) {
  return (
    <h2 className={cn('my-1 font-extrabold text-2xl', className)}>
      {children}
    </h2>
  );
}

function Heading3({ children, className }: ComponentProps<'h3'>) {
  return (
    <h3 className={cn('font-extrabold text-xl', className)}>{children}</h3>
  );
}

function Heading4({ children, className }: ComponentProps<'h4'>) {
  return <h4 className={cn('font-bold text-lg', className)}>{children}</h4>;
}

function Heading5({ children, className }: ComponentProps<'h5'>) {
  return <h5 className={cn('font-bold text-base', className)}>{children}</h5>;
}

function Heading6({ children, className }: ComponentProps<'h6'>) {
  return <h6 className={cn('font-bold text-base', className)}>{children}</h6>;
}

export const Text = {
  P: Paragraph,
  H1: Heading1,
  H2: Heading2,
  H3: Heading3,
  H4: Heading4,
  H5: Heading5,
  H6: Heading6,
} as const;
