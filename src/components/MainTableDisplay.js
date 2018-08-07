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
            <td>60% x 5 x 10</td>
            <td>65% x 5 x 8</td>
            <td>70% x 6 x 5</td>
            <td>75% x 7 x 3</td>
          </tr>
          <tr>
            <td>Intensification</td>
            <td>
              55% x 5<br />
              62.5% x 5<br />
              67.5% x 3 x 10<br />
            </td>
            <td>
              60% x 3<br />
              67.5% x 3<br />
              72.5% x 3 x 8<br />
            </td>
            <td>
              65% x 2<br />
              72.5% x 2<br />
              77.5% x 4 x 5<br />
            </td>
            <td>
              70% x 1<br />
              77.5% x 1<br />
              82.5% x 5 x 3<br />
            </td>
          </tr>
          <tr>
            <td>Realization</td>
            <td>
              50% x 5<br />
              60% x 3<br />
              70% x 1<br />
              75% x AMAP<br />
            </td>
            <td>
              50% x 5<br />
              60% x 3<br />
              70% x 2<br />
              75% x 1<br />
              80% x AMAP<br />
            </td>
            <td>
              50% x 5<br />
              60% x 3<br />
              70% x 2<br />
              75% x 1<br />
              80% x 1<br />
              85% x AMAP<br />
            </td>
            <td>
              50% x 5<br />
              60% x 3<br />
              70% x 2<br />
              75% x 1<br />
              80% x 1<br />
              85% x 1<br />
              90% x AMAP<br />
            </td>
          </tr>
          <tr>
            <td>Deload</td>
            <td>
              40% x 5<br />
              50% x 5<br />
              60% x 5<br />
            </td>
            <td>
              40% x 5<br />
              50% x 5<br />
              60% x 5<br />
            </td>
            <td>
              40% x 5<br />
              50% x 5<br />
              60% x 5<br />
            </td>
            <td>
              40% x 5<br />
              50% x 5<br />
              60% x 5<br />
            </td>
          </tr>
        </table>
      </div>
    );
  }
}

export default MainTable;
