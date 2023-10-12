declare module '*.gql' {
  import { DocumentNode } from 'graphql';
  const Schema: DocumentNode;
  export = Schema;
}

declare module 'vue3-tabs-component' {
  import { Component } from 'vue';
  const Tabs: Component;
  const Tab: Component;

  export { Tabs, Tab };
}

interface UserExtra {
  customerId: string;
}

type User = import('@nuxtjs/strapi/dist/runtime/types').StrapiUser & UserExtra;
type PaymentMethod = 'pago_movil' | 'trans_bofa' | 'zelle' | 'venmo';

interface Pagination {
  total: number;
  pageCount: number;
}

interface Meta {
  pagination: Pagination;
}

// Helper interfaces generics to reduce typings code
interface DataWrapper<T> {
  data: T;
}

interface StrapiDataWrapper<T> {
  id?: string;
  attributes?: T;
}

type MetaInfo = { meta: Meta };

interface BcvUsdResponse {
  name: string;
  pair: string;
  sources: {
    BCV: BCVSource;
  };
}

interface BCVSource {
  name: string;
  quote: string;
  last_retrieved: string;
}
