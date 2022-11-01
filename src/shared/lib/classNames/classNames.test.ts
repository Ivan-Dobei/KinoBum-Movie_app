import {describe, expect, test} from '@jest/globals';
import {classNames} from './classNames';

describe('classNames test', () => {
   test('test with only first param', () => {
      expect(classNames('someClass', {}, [])).toEqual('someClass');
   });

   test('test additional classes', () => {
      const expected = 'someClass additional1 additional2';
      expect(classNames('someClass', {}, ['additional1', 'additional2'])).toEqual(expected);
   });

   test('test mods', () => {
      const expected = 'someClass hovered active additional';
      expect(classNames('someClass', { hovered: true, active: true}, ['additional'])).toEqual(expected);
   });

   test('test false mods', () => {
      const expected = 'someClass additional';
      expect(classNames('someClass', { hovered: false, active: false}, ['additional'])).toEqual(expected);
   });

   test('test undefined mods', () => {
      const expected = 'someClass additional';
      expect(classNames('someClass', { hovered:undefined }, ['additional'])).toEqual(expected);
   });
});
