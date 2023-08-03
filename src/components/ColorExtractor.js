import React from 'react'
import { ColorExtractor } from 'react-color-extractor'
 
export default class ColorExtractorComponent extends React.Component {
  state = { colors: [] }
 
  renderSwatches = () => {
    const { colors } = this.state
 
    return colors.map((color, id) => {
      return (
        <div
          key={id}
          style={{
            backgroundColor: color,
            width: 100,
            height: 100
          }}
        />
      )
    })
  }
 
  getColors = colors =>
    this.setState(state => ({ colors: [...state.colors, ...colors] }))
 
  render(props) {
    return (
      <div>
   
        <div
          style={{
            marginTop: 20,
            display: 'flex',
            justifyContent: 'center'
          }}
        >
          {this.renderSwatches()}
        </div>
      </div>
    )
  }
}