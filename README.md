# Exe Resource

[![Greenkeeper badge](https://badges.greenkeeper.io/domderen/exe-resource.svg)](https://greenkeeper.io/)

Module allowing to modify resource properties of executable files (.dll, .exe, etc) on Windows.

## Installing

```sh
npm install --save-dev exe-resource
```

## Usage

First parameter is a path the the executable file, which details you try to modify.

Second parameter is an object, with properties that will be subsitituted in the executable. All properties all optional, but you have to provide at least one.

```javascript
exeResource('Path to executable', {
  fileVersion: '1.2.3.4',
  productVersion: '1.2.3.4',
  companyName: 'MyCompany',
  fileDescription: 'The executable.',
  legalCopyright: 'Copyright...',
  productName: 'MyProduct'
});
```
