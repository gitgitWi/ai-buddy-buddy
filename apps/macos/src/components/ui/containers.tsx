import type { ComponentProps, PropsWithChildren } from 'react';
import { cn } from '~/lib/utils';

type ContainerCoreProps = PropsWithChildren<ComponentProps<'div'>>;

function FlexContainer({ children, className, ...props }: ContainerCoreProps) {
  return (
    <div {...props} className={cn('flex', className)}>
      {children}
    </div>
  );
}

function FlexColumnContainer({
  children,
  className,
  ...props
}: ContainerCoreProps) {
  return (
    <FlexContainer
      {...props}
      className={cn('flex-col items-start justify-start', className)}
    >
      {children}
    </FlexContainer>
  );
}

function FlexRowContainer({
  children,
  className,
  ...props
}: ContainerCoreProps) {
  return (
    <FlexContainer
      {...props}
      className={cn('flex-row items-center justify-start', className)}
    >
      {children}
    </FlexContainer>
  );
}

function GridContainer({ children, className, ...props }: ContainerCoreProps) {
  return (
    <div {...props} className={cn('grid', className)}>
      {children}
    </div>
  );
}

export const Containers = {
  Flex: FlexContainer,
  Column: FlexColumnContainer,
  Row: FlexRowContainer,
  Grid: GridContainer,
};
