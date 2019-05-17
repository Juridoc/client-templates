/*!
 * Copyright (C) 2018-2019 Juridoc
 */
import * as Class from '@singleware/class';
import * as RestDB from '@singleware/restdb';

/**
 * Template form section, entity class.
 */
@RestDB.Schema.Entity('templates/section')
@Class.Describe()
export class Section extends Class.Null {
  /**
   * Section Id.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.String()
  @Class.Public()
  public id!: string;

  /**
   * Section index.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Number()
  @Class.Public()
  public index!: number;

  /**
   * Section inputs Id list.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Array(String)
  @Class.Public()
  public inputsIdList!: string[];

  /**
   * Section title.
   */
  @RestDB.Schema.String()
  @Class.Public()
  public title?: string;

  /**
   * Section description.
   */
  @RestDB.Schema.String()
  @Class.Public()
  public description?: string;

  /**
   * Determines whether the section starts a new page.
   */
  @RestDB.Schema.Boolean()
  @Class.Public()
  public page?: boolean;
}
