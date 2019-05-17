/*!
 * Copyright (C) 2018-2019 Juridoc
 */
import * as Class from '@singleware/class';
import * as RestDB from '@singleware/restdb';

/**
 * Template logical block, entity class.
 */
@RestDB.Schema.Entity('templates/logical/block')
@Class.Describe()
export class Block extends Class.Null {
  /**
   * Block value.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.String()
  @Class.Public()
  public value!: string;

  /**
   * Block label.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.String()
  @Class.Public()
  public label!: string;

  /**
   * Block inputs Id list.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Array(String)
  @Class.Public()
  public inputsIdList!: string[];
}
