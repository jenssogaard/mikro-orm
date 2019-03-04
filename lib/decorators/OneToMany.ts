import { PropertyOptions } from './Property';
import { Cascade, EntityProperty, IEntity, ReferenceType } from './Entity';
import { MetadataStorage } from '../metadata/MetadataStorage';
import { Utils } from '../utils/Utils';

export function OneToMany(options: OneToManyOptions): Function {
  return function (target: IEntity, propertyName: string) {
    const meta = MetadataStorage.getMetadata(target.constructor.name);
    Utils.lookupPathFromDecorator(meta);

    if (!options.entity) {
      throw new Error(`'@OneToMany({ entity: string | Function })' is required in '${target.constructor.name}.${propertyName}'`);
    }

    const property = { name: propertyName, reference: ReferenceType.ONE_TO_MANY, cascade: [Cascade.PERSIST] };
    meta.properties[propertyName] = Object.assign(property, options) as EntityProperty;
  };
}

export interface OneToManyOptions extends PropertyOptions {
  entity: () => string | Function;
  fk: string;
  cascade?: Cascade[];
}
