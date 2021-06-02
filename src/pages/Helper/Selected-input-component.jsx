import { Select } from 'antd';
import React from 'react';

const OPTIONS = ['Apples', 'Nails', 'Bananas', 'Helicopters'];

class SelectWithHiddenSelectedOptions extends React.Component {
  state = {
    selectedItems: [],
    displayedData: OPTIONS
  };

  handleChange = item => {
    this.setState({selectedItems: []})
    this.setState({ selectedItems:item });
    console.log(item);
  };

//   fetchData = value => {
//     this.setState({displayedData: this.state.displayedData.map(
//         item => {
//             item.includes(value);
//         }
//     )})
//     console.log(value);
//   }

  render() {
    const { selectedItems } = this.state;
    //const filteredOptions = OPTIONS.filter(o => !selectedItems.includes(o));
    return (
      <Select
        allowClear
        labelInValue
        placeholder="Inserted are removed"
        value={selectedItems}
        filterOption={false}
        onChange={this.handleChange}
        //onSearch={this.fetchData}
        style={{ width: '100%' }}
      >
        {this.state.displayedData.map(item => (
          <Select.Option key={item} value={item}>
            {item}
          </Select.Option>
        ))}
      </Select>
    );
  }
}

export default SelectWithHiddenSelectedOptions;