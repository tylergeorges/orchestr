import { AnyQueryBuilder } from '@/lib/quardian/query-builder';
import {
  useQuery as useTanstackQuery,
  useMutation as useTanstackMutation,
  UseMutationOptions,
  MutationFunction,
  UseMutationResult,
  DefaultError,
  DefinedInitialDataOptions
} from '@tanstack/react-query';

type Await<T> = T extends Promise<infer U> ? U : T;

export const createQueryHooks = <Instance extends AnyQueryBuilder>(instance: Instance) => {
  type Handlers = Await<ReturnType<Instance>>;
  type Queries = Handlers['queries'];
  type Mutations = Handlers['mutations'];

  const useMutation = <
    Key extends keyof Mutations,
    Variables = Parameters<Mutations[Key]>[0],
    Data = Await<ReturnType<Mutations[Key]>>,
    Context = unknown,
    MutationError = DefaultError
  >(
    key: Key,
    options?: Omit<UseMutationOptions<Data, MutationError, Variables, Context>, 'mutationFn'>
  ): UseMutationResult<Data, MutationError, Variables, Context> => {
    return useTanstackMutation<Data, MutationError, Variables, Context>({
      ...options,

      mutationFn: async (...args) => {
        const awaited = await instance();

        const mutationFn = awaited.mutations[key] as MutationFunction<Data, Variables>;

        const res = await mutationFn(...args);

        return res;
      }
    });
  };

  const useQuery = <
    Key extends keyof Queries,
    Params extends Parameters<Queries[Key]>,
    Data = Await<ReturnType<Queries[Key]>>,
    Error = DefaultError,
    Options = Omit<DefinedInitialDataOptions<Data, Error, Data, Key[]>, 'queryKey' | 'queryFn'>
  >(
    key: Key,
    params: Params,
    options?: Options
  ) => {
    return useTanstackQuery<Data, Error, Data, Key[]>({
      ...options,

      queryKey: [key],

      queryFn: async () => {
        const awaited = await instance();

        const queryHandlers = awaited.queries;
        const handlerFn = queryHandlers[key];

        const res = await handlerFn.apply(null, params);

        return res;
      }
    });
  };

  return { useQuery, useMutation };
};
