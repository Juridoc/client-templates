/*!
 * Copyright (C) 2018-2019 Juridoc
 */
import * as Class from '@singleware/class';
import * as RestDB from '@singleware/restdb';
import * as Core from '@juridoc/client-core';
import * as Requests from './requests';
import { Entity } from './entity';
/**
 * Templates mapper class.
 */
export declare class Mapper extends Class.Null {
    /**
     * Client instance.
     */
    private client;
    /**
     * Mapper instance.
     */
    private mapper;
    /**
     * Get the error entity from the last operation.
     */
    get error(): Core.Entities.Error | undefined;
    /**
     * Create a new template based on the specified creation request.
     * @param request Template creation request.
     * @returns Returns a promise to get the template Id.
     * @throws Throws an error when the template wasn't created.
     */
    create(request: Requests.Create): Promise<string>;
    /**
     * Load the template that corresponds to the specified template Id.
     * @param id Template Id.
     * @param fields Fields to be selected.
     * @returns Returns a promise to get the template entity.
     * @throws Throws an error when the template wasn't found.
     */
    load(id: string, fields?: string[]): Promise<Entity>;
    /**
     * Update the template that corresponds to the specified template Id based on the given update request.
     * @param id Template Id.
     * @param request Template update request.
     * @returns Returns a promise to get true when the template was updated, false otherwise.
     * @throws Throws an error when the template wasn't found.
     */
    modify(id: string, request: Requests.Update): Promise<boolean>;
    /**
     * Clone the template that corresponds to the specified template Id based on the given clone request.
     * @param id Template Id.
     * @param request Template clone request.
     * @returns Returns a promise to get true when the template was cloned, false otherwise.
     * @throws Throws an error when the template wasn't found.
     */
    clone(id: string, request: Requests.Clone): Promise<boolean>;
    /**
     * Share the template that corresponds to the specified template Id based on the given share request.
     * @param id Template Id.
     * @param request Template share request.
     * @returns Returns a promise to get true when the template was shared, false otherwise.
     * @throws Throws an error when the template wasn't found.
     */
    share(id: string, request: Requests.Share): Promise<boolean>;
    /**
     * List all templates that corresponds to the specified filter.
     * @param query Query filter.
     * @param fields Fields to be selected.
     * @returns Returns a promise to get the template list or undefined when an error occurs.
     */
    list(query: RestDB.Query, fields?: string[]): Promise<Entity[] | undefined>;
    /**
     * Count all templates that corresponds to the specified filter.
     * @param query Query filter.
     * @returns Returns a promise to get the number of templates or undefined when an error occurs.
     */
    count(query: RestDB.Query): Promise<number | undefined>;
    /**
     * Delete the template that corresponds to the specified template Id.
     * @param id Template Id.
     * @returns Returns a promise to get true when the template was deleted, false otherwise.
     * @throws Throws an error when the template wasn't found.
     */
    remove(id: string): Promise<boolean>;
}
