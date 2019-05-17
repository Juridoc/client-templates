/*!
 * Copyright (C) 2018-2019 Juridoc
 */
import * as Class from '@singleware/class';
import * as RestDB from '@singleware/restdb';
/**
 * Template form field, entity class.
 */
export declare class Field extends Class.Null {
    /**
     * Field Id.
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
     * Field index.
     */
    index: number;
    /**
     * Field order.
     */
    order: number;
    /**
     * Field title.
     */
    title: string;
    /**
     * Field text.
     */
    text: string;
    /**
     * Field type.
     */
    type: string;
    /**
     * Custom properties.
     */
    properties: RestDB.Map<any>;
    /**
     * Determines whether or not the field is required.
     */
    required?: boolean;
    /**
     * Determines whether or not the field is public.
     */
    public?: boolean;
}
