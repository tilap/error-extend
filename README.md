# Error extend

Simple way to extend JS Error class with custom code or default message.

## Install

```
npm install --save error-extend
```

## Usage

```
const errorExtends = require('error-extend');
const MyCustomError = errorExtends({ name: 'MyCustomError', code: 418, defaultMessage: 'I am a teapot' });

throw new MyCustomError();
throw new MyCustomError('I am a wonderfull teapot');
```

## Options

- ```name```, the name of the error class
- ```code```, default code of the error
- ```defaultMessage```, default message of the error is none is provided on Error instance
- ```init```: an init function with error to custom on settings

## License

MIT
