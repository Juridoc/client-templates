/*!
 * Copyright (C) 2018-2019 Juridoc
 */
import * as Class from '@singleware/class';
import * as Injection from '@singleware/injection';
import * as RestDB from '@singleware/restdb';

import * as Core from '@juridoc/client-core';

import * as Requests from './requests';

import { Entity } from './entity';

/**
 * Templates mapper class.
 */
@Injection.Describe({ singleton: true, name: 'templates' })
@Class.Describe()
export class Mapper extends Class.Null {
  /**
   * Client instance.
   */
  @Injection.Inject(Core.Client)
  @Class.Private()
  private client!: Core.Client;

  /**
   * Mapper instance.
   */
  @Class.Private()
  private mapper = new RestDB.Mapper<Entity>(this.client, Entity);

  /**
   * Get the error entity from the last operation.
   */
  @Class.Public()
  public get error(): Core.Entities.Error | undefined {
    return this.client.error;
  }

  /**
   * Create a new template based on the specified creation request.
   * @param request Template creation request.
   * @returns Returns a promise to get the template Id.
   * @throws Throws an error when the template wasn't created.
   */
  @Class.Public()
  public async create(request: Requests.Create): Promise<string> {
    return (await this.mapper.insertEx<Requests.Create, string>(Requests.Create, request))!;
  }

  /**
   * Load the template that corresponds to the specified template Id.
   * @param id Template Id.
   * @param fields Fields to be selected.
   * @returns Returns a promise to get the template entity.
   * @throws Throws an error when the template wasn't found.
   */
  @Class.Public()
  public async load(id: string, fields?: string[]): Promise<Entity> {
    return (await this.mapper.findById(id, fields))!;
  }

  /**
   * Update the template that corresponds to the specified template Id based on the given update request.
   * @param id Template Id.
   * @param request Template update request.
   * @returns Returns a promise to get true when the template was updated, false otherwise.
   * @throws Throws an error when the template wasn't found.
   */
  @Class.Public()
  public async modify(id: string, request: Requests.Update): Promise<boolean> {
    return (await this.mapper.updateByIdEx(Requests.Update, id, request))!;
  }

  /**
   * Clone the template that corresponds to the specified template Id based on the given clone request.
   * @param id Template Id.
   * @param request Template clone request.
   * @returns Returns a promise to get true when the template was cloned, false otherwise.
   * @throws Throws an error when the template wasn't found.
   */
  @Class.Public()
  public async clone(id: string, request: Requests.Clone): Promise<boolean> {
    return (await this.mapper.updateByIdEx(Requests.Clone, id, request))!;
  }

  /**
   * Share the template that corresponds to the specified template Id based on the given share request.
   * @param id Template Id.
   * @param request Template share request.
   * @returns Returns a promise to get true when the template was shared, false otherwise.
   * @throws Throws an error when the template wasn't found.
   */
  @Class.Public()
  public async share(id: string, request: Requests.Share): Promise<boolean> {
    return (await this.mapper.updateByIdEx(Requests.Share, id, request))!;
  }

  /**
   * List all templates that corresponds to the specified filter.
   * @param query Query filter.
   * @param fields Fields to be selected.
   * @returns Returns a promise to get the template list or undefined when an error occurs.
   */
  @Class.Public()
  public async list(query: RestDB.Query, fields?: string[]): Promise<Entity[] | undefined> {
    return await this.mapper.find(query, fields);
  }

  /**
   * Count all templates that corresponds to the specified filter.
   * @param query Query filter.
   * @returns Returns a promise to get the number of templates or undefined when an error occurs.
   */
  @Class.Public()
  public async count(query: RestDB.Query): Promise<number | undefined> {
    return await this.mapper.count(query);
  }

  /**
   * Delete the template that corresponds to the specified template Id.
   * @param id Template Id.
   * @returns Returns a promise to get true when the template was deleted, false otherwise.
   * @throws Throws an error when the template wasn't found.
   */
  @Class.Public()
  public async remove(id: string): Promise<boolean> {
    return (await this.mapper.deleteById(id))!;
  }
}
