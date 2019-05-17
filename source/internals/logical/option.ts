/*!
 * Copyright (C) 2018-2019 Juridoc
 */
import * as Class from '@singleware/class';
import * as RestDB from '@singleware/restdb';

import { Block } from './block';

/**
 * Template logic option, entity class.
 */
@RestDB.Schema.Entity('templates/logical/option')
@Class.Describe()
export class Option extends Class.Null {
  /**
   * Option value.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.String()
  @Class.Public()
  public value!: string;

  /**
   * Option label.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.String()
  @Class.Public()
  public label!: string;

  /**
   * Option blocks.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Array(Block)
  @Class.Public()
  public blocks!: Block[];
}
