/*!
 * Copyright (C) 2018-2019 Juridoc
 */
import * as Class from '@singleware/class';
import * as RestDB from '@singleware/restdb';
import * as Logical from './logical';
/**
 * Template form logic, entity class.
 */
export declare class Logic extends Class.Null {
    /**
     * Logic Id.
     */
    id: string;
    /**
     * Context Id.
     */
    contextId: string;
    /**
     * Section Id.
     */
    sectionId: string;
    /**
     * Reference counter.
     */
    references: number;
    /**
     * Logic index.
     */
    index: number;
    /**
     * Logic order.
     */
    order: number;
    /**
     * Logic title.
     */
    title: string;
    /**
     * Logic type.
     */
    type: string;
    /**
     * Custom properties.
     */
    properties: RestDB.Map<any>;
    /**
     * Determines whether or not the logic is required.
     */
    required?: boolean;
    /**
     * Determines whether or not the logic is public.
     */
    public?: boolean;
    /**
     * Logic options.
     */
    optionsList: Logical.Option[];
}
