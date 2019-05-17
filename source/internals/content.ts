/*!
 * Copyright (C) 2018-2019 Juridoc
 */
import * as Class from '@singleware/class';
import * as RestDB from '@singleware/restdb';

/**
 * Template form content, entity class.
 */
@RestDB.Schema.Entity('templates/content')
@Class.Describe()
export class Content extends Class.Null {
  /**
   * Content Id.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.String()
  @Class.Public()
  public id!: string;

  /**
   * Title.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.String()
  @Class.Public()
  public title!: string;

  /**
   * Type.
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
}
