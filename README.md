# react-stepper
Well-designed stepper component for react

## Installation
```
npm install react-stepper-horizontal --save
```
Then just add `import Stepper from 'react-stepper-horizontal';` into your file.

## Screenshot
<img src="https://raw.githubusercontent.com/mu29/react-stepper/master/example/example.png" width="600" />

## Usage
```
render() {
  return (
    <div>
      <Stepper steps={ [{title: 'Step One'}, {title: 'Step Two'}, {title: 'Step Three'}, {title: 'Step Four'}] } activeStep={ 1 } />
    </div>
  );
}
```
See full example [here](https://github.com/mu29/react-stepper/blob/master/example/example.js)

## API

### Main Component

| name     | description    | default    | type     |
|----------|----------------|--------------|--------|
|activeBorderColor|Color of border surrounding active circle||string|
|activeBorderStyle|Style of border surrounding active circle|solid|string|
|activeColor|Active circle color|#5096FF|string|
|activeOpacity|Active circle opacity|1|string|
|activeStep|Active step index, starts at 0|0|number|
|activeTitleColor|Active title color|#000|string|
|activeTitleOpacity|Active title opacity|1|string|
|barStyle|Style of bar separating steps|solid|string|
|circleFontColor|Circle text color (for index)|#FFF|string|
|circleFontSize|Circle text size|16|number|
|circleTop|Top margin of `Stepper` component|24|number|
|completeBarColor|Color of bar connected to a completed step|#E0E0E0|string|
|completeBorderColor|Color of border surrounding completed circle||string|
|completeBorderStyle|Style of border surrounding completed circle|solid|string|
|completeColor|Completed circle color|#5096FF|string|
|completeOpacity|Completed circle opacity|1|string|
|completeTitleColor|Completed title color|#000|string|
|completeTitleOpacity|Completed title opacity|1|string|
|defaultBarColor|Default color of bar separating circles|#E0E0E0|string|
|defaultBorderColor|Default color of border surrounding circle||string|
|defaultBorderStyle|Default style of border surrounding circle|solid|string|
|defaultBorderWidth|Default Border Width|3|number|
|defaultColor|Default circle color - not active or completed|#E0E0E0|string|
|defaultOpacity|Default circle opacity|1|string|
|defaultTitleColor|Default title color - not active or completed|#757575|string|
|defaultTitleOpacity|Default title opacity|1|string|
|leftBarOffset|Left bar offset|50%|string|
|lineHeight|line height||number|
|lineMarginOffset|Offset for line margin|4|number|
|rightBarOffset|Right bar offset|50%|string|
|size|Circle size|32|number|
|steps|List of step objects (see below)||array|
|titleFontSize|Title text size|16|number|
|titleTop|Space between circle and title|8|number|

### Step Objects
| name     | description    | default    | type   |
|----------|----------------|------------|--------|
|title|Displayed text of the step below the number|undefined|string|
|icon|Displayed icon of the step|undefined|image/object|
|href|Link to send them to on click|undefined|string|
|onClick|Event handler for when the step is clicked|undefined|function|

## Original Package

[react-stepper-horizontal](https://www.npmjs.com/package/react-stepper-horizontal)

## Original Author

InJung Chung / [@mu29](http://mu29.github.io/)

## License

[MIT](./LICENSE)
