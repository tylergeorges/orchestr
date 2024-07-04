import { Column } from '@/components/column';
import { Icons } from '@/components/icons';
import { Row } from '@/components/row';
import { ButtonLink } from '@/components/ui/button';

export default function Index() {
  return (
    <Column className="h-full w-full flex-1 px-6 pb-20 center sm:pb-32 md:pt-32">
      <Column className="xl:max-w-screen-lg mb-16 w-full gap-3 overflow-hidden rounded-b-2xl py-8 sm:mb-20 xl:self-auto">
        {/* <span className="absolute bottom-0 mb-9 text-brand lg:mb-10 lg:ml-2">
          <Icons.orchestr className="size-6 text-brand lg:size-12" animate />
        </span> */}

        <div className="relative animate-fade-up text-center text-5xl font-black leading-tight md:text-7xl">
          <h1 className="m-0 animate-fade-up">Orchestr </h1>

          <div className="animate-fade-up animate-delay-75">
            Your{' '}
            <span className="m-0 bg-gradient-to-r from-green-500 to-brand bg-clip-text text-transparent">
              Social Symphony
            </span>
          </div>
        </div>

        <p className="m-0 animate-fade-up text-center text-xl font-medium text-muted-foreground animate-delay-100 md:text-2xl">
          Where your passions meet a symphony of connections.
        </p>

        <Row className="mt-5 animate-fade-up gap-6 center-h animate-delay-150">
          <ButtonLink href="/login" color="primary" className="group" size="xl">
            <span className="transition duration-300 ease-in-out group-hover:-translate-x-2">
              Get Started
            </span>

            <Icons.rightArrow className="absolute right-1 size-5 translate-x-full text-current opacity-0 transition duration-300 ease-in-out group-hover:-translate-x-1 group-hover:opacity-100" />
          </ButtonLink>

          <ButtonLink className="group relative size-14 overflow-hidden" size="icon">
            <Icons.gitHub className="size-6 text-current" />
          </ButtonLink>
        </Row>
      </Column>
    </Column>
  );
}
