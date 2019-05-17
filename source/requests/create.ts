/*!
 * Copyright (C) 2018-2019 Juridoc
 */
import * as Class from '@singleware/class';
import * as RestDB from '@singleware/restdb';

import * as Workflows from '@juridoc/client-workflows';

import * as Types from '../types';
import * as Internals from '../internals';

/**
 * Template creation request.
 */
@RestDB.Schema.Entity('templates')
@Class.Describe()
export class Create extends Class.Null {
  /**
   * Category Id.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Id()
  @Class.Public()
  public categoryId!: string;

  /**
   * Folder Id.
   */
  @RestDB.Schema.Id()
  @RestDB.Schema.Null()
  @Class.Public()
  public folderId?: string | null;

  /**
   * Status.
   */
  @RestDB.Schema.Enumeration(Object.values(Types.Status))
  @Class.Public()
  public status?: Types.Status;

  /**
   * Language option.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.String()
  @Class.Public()
  public languageOption!: string;

  /**
   * Name.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.String()
  @Class.Public()
  public name!: string;

  /**
   * Description.
   */
  @RestDB.Schema.String()
  @Class.Public()
  public description?: string;

  /**
   * Content.
   */
  @RestDB.Schema.String()
  @Class.Public()
  public content?: string;

  /**
   * Form schema.
   */
  @RestDB.Schema.Object(Internals.Form)
  @Class.Public()
  public form?: Internals.Form;

  /**
   * Approval workflow.
   */
  @RestDB.Schema.Object(() => Workflows.Internals.Stack)
  @Class.Public()
  public approvers?: Workflows.Internals.Stack;

  /**
   * Negotiation workflow.
   */
  @RestDB.Schema.Object(() => Workflows.Internals.Stack)
  @Class.Public()
  public negotiators?: Workflows.Internals.Stack;
}
