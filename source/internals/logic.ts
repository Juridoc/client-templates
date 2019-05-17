/*!
 * Copyright (C) 2018-2019 Juridoc
 */
import * as Class from '@singleware/class';
import * as RestDB from '@singleware/restdb';

import * as Logical from './logical';

/**
 * Template form logic, entity class.
 */
@RestDB.Schema.Entity('templates/logic')
@Class.Describe()
export class Logic extends Class.Null {
  /**
   * Logic Id.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.String()
  @Class.Public()
  public id!: string;

  /**
   * Context Id.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.String()
  @Class.Public()
  public contextId!: string;

  /**
   * Section Id.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.String()
  @Class.Public()
  public sectionId!: string;

  /**
   * Reference counter.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Number()
  @Class.Public()
  public references!: number;

  /**
   * Logic index.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Number()
  @Class.Public()
  public index!: number;

  /**
   * Logic order.
   */
  @RestDB.Schema.Number()
  @Class.Public()
  public order!: number;

  /**
   * Logic title.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.String()
  @Class.Public()
  public title!: string;

  /**
   * Logic type.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.String()
  @Class.Public()
  public type!: string;

  /**
   * Custom properties.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Object(Object)
  @Class.Public()
  public properties!: RestDB.Map<any>;

  /**
   * Determines whether or not the logic is required.
   */
  @RestDB.Schema.Boolean()
  @Class.Public()
  public required?: boolean;

  /**
   * Determines whether or not the logic is public.
   */
  @RestDB.Schema.Boolean()
  @Class.Public()
  public public?: boolean;

  /**
   * Logic options.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Array(Logical.Option)
  @Class.Public()
  public optionsList!: Logical.Option[];
}
