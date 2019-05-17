/*!
 * Copyright (C) 2018-2019 Juridoc
 */
import * as Class from '@singleware/class';
import * as Folders from '@juridoc/client-folders';
import * as Categories from '@juridoc/client-categories';
import * as Workflows from '@juridoc/client-workflows';
import * as Profiles from '@juridoc/client-profiles';
import * as Types from './types';
import * as Internals from './internals';
/**
 * Template entity class.
 */
export declare class Entity extends Class.Null {
    /**
     * Template Id.
     */
    id: string;
    /**
     * Account Id.
     */
    accountId: string;
    /**
     * Profile Id.
     */
    profileId: string;
    /**
     * Profile Id.
     */
    profile: Profiles.Entity;
    /**
     * Category Id.
     */
    categoryId: string;
    /**
     * Category entity.
     */
    category: Categories.Entity;
    /**
     * Folder Id.
     */
    folderId?: string;
    /**
     * Folder entity.
     */
    folder?: Folders.Entity;
    /**
     * List of sharing grants.
     */
    grantsIdList: string[];
    /**
     * Creation date.
     */
    createdAt: Date;
    /**
     * Update date.
     */
    updatedAt?: Date;
    /**
     * Status.
     */
    status: Types.Status;
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
    description: string;
    /**
     * Content.
     */
    content: string;
    /**
     * Form schema.
     */
    form: Internals.Form;
    /**
     * Number of uses.
     */
    nUses: number;
    /**
     * Approval workflow.
     */
    approvers: Workflows.Internals.Stack;
    /**
     * Negotiation workflow.
     */
    negotiators: Workflows.Internals.Stack;
    /**
     * Determines whether or not this entity is in the trash can.
     */
    get isTrash(): boolean;
    /**
     * Test if the specified profile is the entity ownership.
     * @param profile Profile entity.
     * @returns Returns true when the given profile is the ownership, false otherwise.
     */
    isOwnership(profile: Profiles.Entity): boolean;
}
