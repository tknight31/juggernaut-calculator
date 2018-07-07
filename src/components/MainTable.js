import React from "react";

class MainTable extends React.Component {
  render() {
    return (
      <div className="main-table">
        <table>
          <tr>
            <th />
            <th>10s Wave</th>
            <th>8s Wave</th>
            <th>5s Wave</th>
            <th>3s Wave</th>
          </tr>
          <tr>
            <td>Accumulation</td>
            <td>{this.props.weight * 0.6} x 5 x 10</td>
            <td>{this.props.weight * 0.65} x 5 x 8</td>
            <td>{this.props.weight * 0.7} x 6 x 5</td>
            <td>{this.props.weight * 0.75} x 7 x 3</td>
          </tr>
          <tr>
            <td>Intensification</td>
            <td>
              {Math.floor(this.props.weight * 0.55)} x 5<br />
              {this.props.weight * 0.625} x 5<br />
              {this.props.weight * 0.675} x 3 x 10<br />
            </td>
            <td>
              {this.props.weight * 0.6} x 3<br />
              {this.props.weight * 0.675} x 3<br />
              {this.props.weight * 0.725} x 3 x 8<br />
            </td>
            <td>
              {this.props.weight * 0.65} x 2<br />
              {this.props.weight * 0.725} x 2<br />
              {this.props.weight * 0.775} x 4 x 5<br />
            </td>
            <td>
              {this.props.weight * 0.7} x 1<br />
              {this.props.weight * 0.775} x 1<br />
              {this.props.weight * 0.825} x 5 x 3<br />
            </td>
          </tr>
          <tr>
            <td>Realization</td>
            <td>
              {this.props.weight * 0.5} x 5<br />
              {this.props.weight * 0.6} x 3<br />
              {this.props.weight * 0.7} x 1<br />
              {this.props.weight * 0.75} x AMAP<br />
            </td>
            <td>
              {this.props.weight * 0.5} x 5<br />
              {this.props.weight * 0.6} x 3<br />
              {this.props.weight * 0.7} x 2<br />
              {this.props.weight * 0.75} x 1<br />
              {this.props.weight * 0.8} x AMAP<br />
            </td>
            <td>
              {this.props.weight * 0.5} x 5<br />
              {this.props.weight * 0.6} x 3<br />
              {this.props.weight * 0.7} x 2<br />
              {this.props.weight * 0.75} x 1<br />
              {this.props.weight * 0.8} x 1<br />
              {this.props.weight * 0.85} x AMAP<br />
            </td>
            <td>
              {this.props.weight * 0.5} x 5<br />
              {this.props.weight * 0.6} x 3<br />
              {this.props.weight * 0.7} x 2<br />
              {this.props.weight * 0.75} x 1<br />
              {this.props.weight * 0.8} x 1<br />
              {this.props.weight * 0.85} x 1<br />
              {this.props.weight * 0.9} x AMAP<br />
            </td>
          </tr>
        </table>
      </div>
    );
  }
}

export default MainTable;
