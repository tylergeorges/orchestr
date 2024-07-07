// typesafe implementation of - https://github.com/freearhey/dayjs-twitter

import * as dayjs from 'dayjs';

import Duration from '@icholy/duration';
import locales from './locale';

const second = 1e3;
const minute = 6e4;
const hour = 36e5;
const day = 864e5;
// const week = 6048e5;
// const month = 2592e6;
const year = 31536e6;

type Unit = 'now' | 'seconds' | 'minutes' | 'hours' | 'days' | 'years';

const durationLookup = ['seconds', 'minutes', 'hours'] as Unit[];

type D = 'seconds' | 'minutes' | 'hours';

const isDuration = (u: Unit): u is D => durationLookup.indexOf(u) > -1;

const twitterFormat = (instance: dayjs.Dayjs) => {
  const loc = instance.$locale();

  const locName = (loc ? loc.name : 'en') as keyof typeof locales;

  let diff = Math.abs(instance.diff(new Date()));
  let unit: Unit;
  let num: number | undefined;

  if (diff <= second) {
    unit = 'now';
  } else if (diff < minute) {
    unit = 'seconds';
  } else if (diff < hour) {
    unit = 'minutes';
  } else if (diff < day) {
    unit = 'hours';
  } else if (diff < year) {
    unit = 'days';
  } else {
    unit = 'years';
  }

  if (!(num && unit) && isDuration(unit)) {
    let d = new Duration(diff);

    num = d[unit]();
  }

  if (unit === 'days' || unit === 'years') {
    const format = locales[locName][unit];

    return instance.format(format);
  } else {
    const template = locales[locName][unit];

    return template.replace('%d', num as unknown as string);
  }
};

const dayjsTwitterPlugin = (o: unknown, c: typeof dayjs.Dayjs) => {
  const proto = c.prototype;

  proto.twitter = function () {
    return twitterFormat(this);
  };
};

export default dayjsTwitterPlugin;
