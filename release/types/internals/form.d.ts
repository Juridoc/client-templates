/*!
 * Copyright (C) 2018-2019 Juridoc
 */
import * as Class from '@singleware/class';
import * as RestDB from '@singleware/restdb';
import { Context } from './context';
import { Content } from './content';
import { Section } from './section';
import { Field } from './field';
import { Logic } from './logic';
/**
 * Template form, entity class.
 */
export declare class Form extends Class.Null {
    /**
     * Content map.
     */
    contentMap: RestDB.Map<Content>;
    /**
     * Context map.
     */
    contextMap: RestDB.Map<Context>;
    /**
     * Section list.
     */
    sectionMap: RestDB.Map<Section>;
    /**
     * Logic map.
     */
    logicMap: RestDB.Map<Logic>;
    /**
     * Field map.
     */
    fieldMap: RestDB.Map<Field>;
}
