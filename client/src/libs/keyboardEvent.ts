/*eslint-env es6*/
const gaugeState = (state: any) => (state === 'mid' ? 'left' : state === 'left' ? 'right' : 'left');
const danceList = ['leftUp', 'rightMid', 'rightUp', 'leftMid'];

const danceState = (state: any) =>
  !danceList.includes(state)
    ? danceList[0]
    : state === danceList[0]
    ? danceList[1]
    : state === danceList[1]
    ? danceList[2]
    : state === danceList[2]
    ? danceList[3]
    : danceList[1];

const moveDistance = 20;

const direction: any = {
  ArrowRight: {
    background: function (props: any): any {
      return { top: props.top, left: props.left - moveDistance };
    },
    character: function (props: any): any {
      return {
        name: props.name,
        x: props.x + moveDistance,
        y: props.y,
        direction: 'right',
        state: gaugeState(props.state),
        cId: props.cId,
      };
    },
  },
  ArrowLeft: {
    background: function (props: any): any {
      return { top: props.top, left: props.left + moveDistance };
    },
    character: function (props: any): any {
      return {
        name: props.name,
        x: props.x - moveDistance,
        y: props.y,
        direction: 'left',
        state: gaugeState(props.state),
        cId: props.cId,
      };
    },
  },
  ArrowUp: {
    background: function (props: any): any {
      return { top: props.top + moveDistance, left: props.left };
    },
    character: function (props: any): any {
      return {
        name: props.name,
        x: props.x,
        y: props.y - moveDistance,
        direction: 'up',
        state: gaugeState(props.state),
        cId: props.cId,
      };
    },
  },
  ArrowDown: {
    background: function (props: any): any {
      return { top: props.top - moveDistance, left: props.left };
    },
    character: function (props: any): any {
      return {
        name: props.name,
        x: props.x,
        y: props.y + moveDistance,
        direction: 'down',
        state: gaugeState(props.state),
        cId: props.cId,
      };
    },
  },
  KeyZ: {
    background: function () {
      return this;
    },
    character: function (props: any): any {
      return {
        name: props.name,
        x: props.x,
        y: props.y,
        direction: props.direction,
        state: danceState(props.state),
        cId: props.cId,
      };
    },
  },
};

export default direction;
