/*!
 * Copyright (C) 2018-2019 Juridoc
 */
import * as Class from '@singleware/class';
import * as RestDB from '@singleware/restdb';

/**
 * Template form field, entity class.
 */
@RestDB.Schema.Entity('templates/field')
@Class.Describe()
export class Field extends Class.Null {
  /**
   * Field Id.
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
   * Field index.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Number()
  @Class.Public()
  public index!: number;

  /**
   * Field order.
   */
  @RestDB.Schema.Number()
  @Class.Public()
  public order!: number;

  /**
   * Field title.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.String()
  @Class.Public()
  public title!: string;

  /**
   * Field text.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.String()
  @Class.Public()
  public text!: string;

  /**
   * Field type.
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
   * Determines whether or not the field is required.
   */
  @RestDB.Schema.Boolean()
  @Class.Public()
  public required?: boolean;

  /**
   * Determines whether or not the field is public.
   */
  @RestDB.Schema.Boolean()
  @Class.Public()
  public public?: boolean;
}
