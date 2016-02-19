import { Pipe } from 'angular2/core';

/**
 * Map to Iteratble
 * http://stackoverflow.com/questions/31490713/iterate-over-typescript-dictionary-in-angular-2
 * @param  {'mapToIterable'}} {name [description]
 * @return {[type]}                 [description]
 */
@Pipe({
  name: 'mapToIterable'
})
export class MapToIterable {
  transform(dict: Object): Array {
    let a = [];
    for (let key in dict) {
      if (dict.hasOwnProperty(key)) {
        a.push({key: key, val: dict[key]});
      }
    }
    return a;
  }
}