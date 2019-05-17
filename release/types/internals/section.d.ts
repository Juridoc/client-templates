/*!
 * Copyright (C) 2018-2019 Juridoc
 */
import * as Class from '@singleware/class';
/**
 * Template form section, entity class.
 */
export declare class Section extends Class.Null {
    /**
     * Section Id.
     */
    id: string;
    /**
     * Section index.
     */
    index: number;
    /**
     * Section inputs Id list.
     */
    inputsIdList: string[];
    /**
     * Section title.
     */
    title?: string;
    /**
     * Section description.
     */
    description?: string;
    /**
     * Determines whether the section starts a new page.
     */
    page?: boolean;
}
