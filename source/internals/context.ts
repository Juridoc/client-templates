/*!
 * Copyright (C) 2018-2019 Juridoc
 */
import * as Class from '@singleware/class';
import * as RestDB from '@singleware/restdb';

/**
 * Template form context, entity class.
 */
@RestDB.Schema.Entity('templates/context')
@Class.Describe()
export class Context extends Class.Null {
  /**
   * Context Id.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.String()
  @Class.Public()
  public id!: string;

  /**
   * Context inputs Id list.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Array(String)
  @Class.Public()
  public inputsIdList!: string[];

  /**
   * Context title.
   */
  @RestDB.Schema.String()
  @Class.Public()
  public title?: string;
}
