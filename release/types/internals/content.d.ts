/*!
 * Copyright (C) 2018-2019 Juridoc
 */
import * as Class from '@singleware/class';
import * as RestDB from '@singleware/restdb';
/**
 * Template form content, entity class.
 */
export declare class Content extends Class.Null {
    /**
     * Content Id.
     */
    id: string;
    /**
     * Title.
     */
    title: string;
    /**
     * Type.
     */
    type: string;
    /**
     * Custom properties.
     */
    properties: RestDB.Map<any>;
}
