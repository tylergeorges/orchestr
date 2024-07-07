import { Column } from '@/components/column';
import { Icons } from '@/components/icons';
import { Row } from '@/components/row';
import { ButtonLink } from '@/components/ui/button';

export default function Index() {
  return (
    <Column className="h-full w-full flex-1 px-6 pb-20 center sm:pb-32 md:pt-32">
      <Column className="xl:max-w-screen-lg mb-16 w-full gap-3 rounded-b-2xl py-8 sm:mb-20 xl:self-auto">
        <div className="relative text-center text-5xl font-black leading-tight md:text-7xl">
          <div className="relative m-0 animate-fade-up">
            <h1 className="relative m-0 inline">Orchestr</h1>
          </div>

          <div className="relative animate-fade-up animate-delay-75">
            Your
            <span className="relative m-0 bg-gradient-to-r from-green-500 to-brand bg-clip-text text-transparent lg:mb-12">
              {' Social Symphony'}
              <span className="absolute bottom-0 mb-8 size-7 animate-pop md:mb-8 md:ml-0 md:size-10 lg:size-12">
                <Icons.music1 className="size-8 text-brand md:size-10 lg:size-12 [&>circle]:fill-current" />
              </span>
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

          <ButtonLink
            className="group relative size-14 overflow-hidden"
            size="icon"
            target="_blank"
            href="https://github.com/tylergeorges/orchestr"
          >
            <Icons.gitHub className="size-6 text-current" />
          </ButtonLink>
        </Row>
      </Column>
    </Column>
  );
}
