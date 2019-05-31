# tsapis
Various cloud services API response types documented and written in TypeScript

[![npm version](https://badge.fury.io/js/tsapis.svg)](https://badge.fury.io/js/tsapis)
[![npm](https://img.shields.io/npm/dw/tsapis.svg)](https://www.npmjs.com/package/tsapis)
![npm type definitions](https://img.shields.io/npm/types/tsapis.svg)
[![Build Status](https://travis-ci.org/joonhocho/tsapis.svg?branch=master)](https://travis-ci.org/joonhocho/tsapis)
[![Dependency Status](https://david-dm.org/joonhocho/tsapis.svg)](https://david-dm.org/joonhocho/tsapis)
[![GitHub](https://img.shields.io/github/license/joonhocho/tsapis.svg)](https://github.com/joonhocho/tsapis/blob/master/LICENSE)

## Get Started
```
npm install -D tsapis
```
or
```
yarn add -D tsapis
```

## How to Use
```typescript
import { IpwhoisResponse } from 'tsapis';

// ...later in code
const res: IpwhoisResponse = await axios.get('http://free.ipwhois.io/json/1.1.1.1').data;
```

## Supported Services

### IP Geolocation API:
 - [ipwhois.io](https://ipwhois.io)
 - [ipdata.co](https://ipdata.co)

### User agent parsing service:
 - [UserAgent.App](https://useragent.app/)

## Contribute
Pull Requests are welcome!  
Just try to be consistent with existing naming conventions and coding styles.  
Names must be concise, easy to read, and precisely descriptive.  
I've setup prettier, so make sure your codes are auto formatted according to my prettier setup.

## License
[MIT License](https://github.com/joonhocho/tsapis/blob/master/LICENSE)
