/*!
 * Copyright (C) 2018-2019 Juridoc
 */
import * as Class from '@singleware/class';
import * as Workflows from '@juridoc/client-workflows';
import * as Types from '../types';
import * as Internals from '../internals';
/**
 * Template creation request.
 */
export declare class Create extends Class.Null {
    /**
     * Category Id.
     */
    categoryId: string;
    /**
     * Folder Id.
     */
    folderId?: string | null;
    /**
     * Status.
     */
    status?: Types.Status;
    /**
     * Language option.
     */
    languageOption: string;
    /**
     * Name.
     */
    name: string;
    /**
     * Description.
     */
    description?: string;
    /**
     * Content.
     */
    content?: string;
    /**
     * Form schema.
     */
    form?: Internals.Form;
    /**
     * Approval workflow.
     */
    approvers?: Workflows.Internals.Stack;
    /**
     * Negotiation workflow.
     */
    negotiators?: Workflows.Internals.Stack;
}
