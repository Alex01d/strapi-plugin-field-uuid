export namespace Database {
  import { Event as LifecycleEvent } from '@strapi/database/lib/lifecycles'
  import { Knex } from 'knex'

  type Config = {
    connection: Knex.Config
  }

  type Client = 'sqlite' | 'postgres' | 'mysql'

  type BeforeLifecycleEvent<T = any> = LifecycleEvent

  type AfterLifecycleEvent<T = any> = LifecycleEvent & {
    result?: T
  }
}
