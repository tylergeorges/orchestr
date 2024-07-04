import type { AnyFn, Prettify } from '@/lib/quardian/types';

export class QueryBuilder<Queries, Mutations> {
  handlers: Readonly<{
    queries: Queries;
    mutations: Mutations;
  }>;

  constructor(handlers: { queries?: Queries; mutations?: Mutations } = {}) {
    this.handlers = {
      queries: (handlers?.queries ?? {}) as Queries,
      mutations: (handlers?.mutations ?? {}) as Mutations
    };
  }

  query = <Key extends string, Fn extends AnyFn>(key: Key, fn: Fn) => {
    return new QueryBuilder({
      ...this.handlers,

      queries: {
        ...this.handlers.queries,

        [key]: fn
      } as Prettify<Queries & { [k in Key]: Fn }>
    });
  };

  mutation = <Key extends string, Fn extends AnyFn>(key: Key, fn: Fn) => {
    return new QueryBuilder({
      ...this.handlers,

      mutations: {
        ...this.handlers.mutations,

        [key]: fn
      } as Prettify<Mutations & { [k in Key]: Fn }>
    });
  };

  getServerActions = () => {
    const wrapper = async () => {
      return this.handlers;
    };

    return wrapper;
  };
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type AnyQueryBuilder = ReturnType<QueryBuilder<any, any>['getServerActions']>;
