import { useState } from 'react';
import './ColorPicker.css';
import classNames from 'classnames';

export function ColorPicker({ options }) {
  const [activeOptionIdx, setActiveOptionIdx] = useState(0);

  const { label } = options[activeOptionIdx];

  const makeOptionClassName = index => {
    return classNames('ColorPicker__option', {
      'ColorPicker__option--active': index === activeOptionIdx,
    });
  };

  return (
    <div className="ColorPicker">
      <h2 className="ColorPicker__title">Color Picker</h2>
      <p>Вибраний колір: {label}</p>
      <div>
        {options.map(({ label, color }, index) => {
          const optionsClasName = makeOptionClassName(index);

          return (
            <button
              key={label}
              className={optionsClasName}
              style={{
                backgroundColor: color,
              }}
              onClick={() => setActiveOptionIdx(index)}
            ></button>
          );
        })}
      </div>
    </div>
  );
}

// export class ColorPicker extends Component {
//   state = {
//     activeOptionIdx: 4,
//   };

//   makeOptionClassName = index => {
//     return classNames('ColorPicker__option', {
//       'ColorPicker__option--active': index === this.state.activeOptionIdx,
//     });
//   };

//   setActiveIdx = index => {
//     this.setState({ activeOptionIdx: index });
//   };

//   render() {
//     const { options } = this.props;
//     const { activeOptionIdx } = this.state;
//     const { label } = options[activeOptionIdx];

//     return (
//       <div className="ColorPicker">
//         <h2 className="ColorPicker__title">Color Picker</h2>
//         <p>Вибраний колір: {label}</p>
//         <div>
//           {this.props.options.map(({ label, color }, index) => {
//             const optionsClasName = this.makeOptionClassName(index);

//             return (
//               <button
//                 key={label}
//                 className={optionsClasName}
//                 style={{
//                   backgroundColor: color,
//                 }}
//                 onClick={() => this.setActiveIdx(index)}
//               ></button>
//             );
//           })}
//         </div>
//       </div>
//     );
//   }
// }
