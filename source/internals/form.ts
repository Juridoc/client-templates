/*!
 * Copyright (C) 2018-2019 Juridoc
 */
import * as Class from '@singleware/class';
import * as RestDB from '@singleware/restdb';

import { Context } from './context';
import { Content } from './content';
import { Section } from './section';
import { Field } from './field';
import { Logic } from './logic';

/**
 * Template form, entity class.
 */
@RestDB.Schema.Entity('templates/form')
@Class.Describe()
export class Form extends Class.Null {
  /**
   * Content map.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Map(Content)
  @Class.Public()
  public contentMap!: RestDB.Map<Content>;

  /**
   * Context map.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Map(Context)
  @Class.Public()
  public contextMap!: RestDB.Map<Context>;

  /**
   * Section list.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Map(Section)
  @Class.Public()
  public sectionMap!: RestDB.Map<Section>;

  /**
   * Logic map.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Map(Logic)
  @Class.Public()
  public logicMap!: RestDB.Map<Logic>;

  /**
   * Field map.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Map(Field)
  @Class.Public()
  public fieldMap!: RestDB.Map<Field>;
}
