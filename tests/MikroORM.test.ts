import { MikroORM, EntityManager } from '../lib';
import { Author } from './entities';
import { BASE_DIR } from './bootstrap';
import { FooBaz2 } from './entities-sql/FooBaz2';

/**
 * @class MikroORMTest
 */
describe('MikroORM', () => {

  test('should throw when not enough options provided', async () => {
    expect(() => new MikroORM({ entitiesDirs: ['entities'], dbName: '' })).toThrowError('No database specified, please fill in `dbName` option');
    expect(() => new MikroORM({ entities: [], entitiesDirs: [], dbName: 'test' })).toThrowError('No entities found, please use `entities` or `entitiesDirs` option');
    expect(() => new MikroORM({ dbName: 'test', entities: [Author], clientUrl: 'test' })).not.toThrowError();
    expect(() => new MikroORM({ dbName: 'test', entitiesDirs: ['entities'], clientUrl: 'test' })).not.toThrowError();
  });

  test('should throw when TS entity directory does not exist', async () => {
    let error = /Path .*\/entities-invalid does not exist/;
    await expect(MikroORM.init({ dbName: 'test', baseDir: BASE_DIR, entities: [FooBaz2], cache: { enabled: false }, entitiesDirsTs: ['entities-invalid'] })).rejects.toThrowError(error);
    error = /Source file for entity .* not found, check your 'entitiesDirsTs' option/;
    await expect(MikroORM.init({ dbName: 'test', baseDir: BASE_DIR, entities: [FooBaz2], cache: { enabled: false }, entitiesDirsTs: ['entities'] })).rejects.toThrowError(error);
  });

  test('should init itself with entity manager', async () => {
    const orm = await MikroORM.init({
      entitiesDirs: ['entities'],
      dbName: 'mikro-orm-test',
      baseDir: __dirname,
    });

    expect(orm).toBeInstanceOf(MikroORM);
    expect(orm.em).toBeInstanceOf(EntityManager);
    expect(await orm.isConnected()).toBe(true);

    await orm.close();
    expect(await orm.isConnected()).toBe(false);
  });

});
