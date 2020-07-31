import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

export default class Step extends Component {
  constructor() {
    super();
    this.getStyles = this.getStyles.bind(this);
  }

  getStyles() {
    const {
      activeColor, completeColor, defaultColor, circleFontColor,
      activeTitleColor, completeTitleColor, defaultTitleColor,
      size, circleFontSize, titleFontSize,
      circleTop, titleTop, width, completeOpacity, activeOpacity, defaultOpacity,
      completeTitleOpacity, activeTitleOpacity, defaultTitleOpacity, barStyle, defaultBarColor,
      completeBarColor, defaultBorderColor, completeBorderColor, activeBorderColor,
      defaultBorderStyle,completeBorderStyle, activeBorderStyle, lineMarginOffset, defaultBorderWidth, lineHeight, leftBarOffset, rightBarOffset
    } = this.props;

    return {
      step: {
        width: `${width}%`,
        display: 'table-cell',
        position: 'relative',
        paddingTop: circleTop,
      },
      circle: {
        width: size,
        height: size,
        margin: '0 auto',
        backgroundColor: defaultColor,
        borderRadius: '50%',
        textAlign: 'center',
        padding: 1,
        fontSize: circleFontSize,
        color: circleFontColor,
        display: 'block',
        opacity: defaultOpacity,
        borderWidth: (defaultBorderColor ? defaultBorderWidth : 0),
        borderColor: defaultBorderColor,
        borderStyle: defaultBorderStyle
      },
      activeCircle: {
        backgroundColor: activeColor,
        opacity: activeOpacity,
        borderWidth: (activeBorderColor ? defaultBorderWidth : 0),
        borderColor: activeBorderColor,
        borderStyle: activeBorderStyle,
      },
      completedCircle: {
        backgroundColor: completeColor,
        opacity: completeOpacity,
        borderWidth: (completeBorderColor ? defaultBorderWidth : 0),
        borderColor: completeBorderColor,
        borderStyle: completeBorderStyle,
      },
      index: {
        lineHeight: `${size + circleFontSize / 4}px`,
        color: circleFontColor
      },
      title: {
        marginTop: titleTop,
        fontSize: titleFontSize,
        fontWeight: '300',
        textAlign: 'center',
        display: 'block',
        color: defaultTitleColor,
        opacity: defaultTitleOpacity,
      },
      activeTitle: {
        color: activeTitleColor,
        opacity: activeTitleOpacity,
      },
      completedTitle: {
        color: completeTitleColor,
        opacity: completeTitleOpacity,
      },
      leftBar: {
        position: 'absolute',
        top: circleTop + (size - lineHeight) / 2,
        height: lineHeight,
        borderTopStyle: barStyle,
        borderTopWidth: lineHeight,
        borderTopColor: defaultBarColor,
        left: 0,
        right: leftBarOffset,
        marginRight: size / 2 + lineMarginOffset,
        opacity: defaultOpacity,
        zIndex: -1
      },
      rightBar: {
        position: 'absolute',
        top: circleTop + (size - lineHeight) / 2,
        height: lineHeight,
        borderTopStyle: barStyle,
        borderTopWidth: lineHeight,
        borderTopColor: defaultBarColor,
        right: 0,
        left: rightBarOffset,
        marginLeft: size / 2 + lineMarginOffset,
        opacity: defaultOpacity,
        zIndex: -1
      },
      completedBar: {
        borderTopStyle: barStyle,
        borderTopWidth: lineHeight,
        borderTopColor: completeBarColor,
        opacity: completeOpacity,
        zIndex: -1
      },
    };
  }

  render() {
    const { title, icon, index, active, completed, first, isLast, href, onClick, hasLabel } = this.props;

    const styles = this.getStyles();
    const circleStyle = Object.assign(
      styles.circle,
      completed ? styles.completedCircle : {},
      active ? styles.activeCircle : {},
    );
    const titleStyle = Object.assign(
      styles.title,
      completed ? styles.completedTitle : {},
      active ? styles.activeTitle : {},
    );
    const leftStyle = Object.assign(styles.leftBar, (active || completed) ? styles.completedBar : {});
    const rightStyle = Object.assign(styles.rightBar, completed ? styles.completedBar : {});

    const stepContent = icon ? <img src={icon} alt={index + 1} /> : index + 1;

    const renderLabel = () => {
      if(hasLabel){
        return active || completed ? (
          <a href={href} onClick={onClick} style={ styles.index }>{ stepContent }</a>
        ) : (
          <span style={ styles.index }>{ stepContent }</span>
        )
      }
      return null;
    }

    return (
      <div style={ styles.step }>
        <div style={ circleStyle }>
        {renderLabel()}
        </div>
        {active || completed ? (
          <a href={href} onClick={onClick} style={ titleStyle }>{ title }</a>
        ) : (
          <div style={ titleStyle }>{ title }</div>
        )}
        { !first && <div style={ leftStyle }></div> }
        { !isLast && <div style={ rightStyle }></div> }
      </div>
    );
  }
}

Step.defaultProps = {
  activeColor: '#5096FF',
  completeColor: '#5096FF',
  defaultColor: '#E0E0E0',
  activeTitleColor: '#000',
  completeTitleColor: '#000',
  defaultTitleColor: '#757575',
  circleFontColor: '#FFF',
  size: 32,
  circleFontSize: 16,
  titleFontSize: 16,
  circleTop: 24,
  titleTop: 8,
  defaultBarColor: '#E0E0E0',
  barStyle: 'solid',
  borderStyle: 'solid',
  lineMarginOffset: 4,
  defaultBorderWidth: 3,
  leftBarOffset: '50%',
  rightBarOffset: '50%',
  hasLabel: true
};

Step.propTypes = {
  width: PropTypes.number.isRequired,
  activeColor: PropTypes.string,
  completeColor: PropTypes.string,
  defaultColor: PropTypes.string,
  activeTitleColor: PropTypes.string,
  completeTitleColor: PropTypes.string,
  defaultTitleColor: PropTypes.string,
  circleFontColor: PropTypes.string,
  size: PropTypes.number,
  circleFontSize: PropTypes.number,
  titleFontSize: PropTypes.number,
  circleTop: PropTypes.number,
  titleTop: PropTypes.number,
  title: PropTypes.string,
  index: PropTypes.number,
  active: PropTypes.bool,
  completed: PropTypes.bool,
  first: PropTypes.bool,
  isLast: PropTypes.bool,
  completeOpacity: PropTypes.string,
  activeOpacity: PropTypes.string,
  defaultOpacity: PropTypes.string,
  completeTitleOpacity: PropTypes.string,
  activeTitleOpacity: PropTypes.string,
  defaultTitleOpacity: PropTypes.string,
  barStyle: PropTypes.string,
  defaultBarColor: PropTypes.string,
  completeBarColor: PropTypes.string,
  defaultBorderColor: PropTypes.string,
  completeBorderColor: PropTypes.string,
  activeBorderColor: PropTypes.string,
  defaultBorderStyle: PropTypes.string,
  completeBorderStyle: PropTypes.string,
  activeBorderStyle: PropTypes.string,
  lineMarginOffset: PropTypes.number,
  defaultBorderWidth: PropTypes.number,
  lineHeight: PropTypes.number,
  leftBarOffset: PropTypes.string,
  rightBarOffset: PropTypes.string,
  hasLabel: PropTypes.bool
};
