/*!
 * Copyright (C) 2018-2019 Juridoc
 */
import * as Class from '@singleware/class';
import { Block } from './block';
/**
 * Template logic option, entity class.
 */
export declare class Option extends Class.Null {
    /**
     * Option value.
     */
    value: string;
    /**
     * Option label.
     */
    label: string;
    /**
     * Option blocks.
     */
    blocks: Block[];
}
