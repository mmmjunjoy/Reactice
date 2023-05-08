import React, { useState } from 'react';
import JSONDATA from './MOCK_DATA.json'
// const data = [
//   { id: 1, name: 'Apple', category: 'fruit' },
//   { id: 2, name: 'Orange', category: 'fruit' },
//   { id: 3, name: 'Carrot', category: 'vegetable' },
//   { id: 4, name: 'Potato', category: 'vegetable' },
// ];

function Boxx() {
  const [pythonChecked, setpythonChecked] = useState(false);
  const [javaChecked, setjavaChecked] = useState(false);

  // 체크박스 상태에 따라 필터링된 데이터 생성
  const filteredData = JSONDATA.filter((val) => {
    if (pythonChecked && val.last_name === 'python') {
      return val;
    }
    if (javaChecked && val.last_name === 'java') {
      return val;
    }
    return false;
  });

  // 체크박스 상태 변경 함수
  const handleCheckboxChange = (event) => {
    const name = event.target.name;
    const checked = event.target.checked;

    if (name === 'python') {
      setpythonChecked(checked);
    } else if (name === 'java') {
      setjavaChecked(checked);
    }
  };

  // 필터링된 데이터 표시
  const renderData = () => {
    if (filteredData.length === 0) {
      return <p>No results found.</p>;
    }

    return (
      <ul>
        {filteredData.map((val,key) => (
          <li key={key}>{val.first_name}</li>
        ))}
      </ul>
    );
  };

  return (
    <div>
      <div>
        <label>
          <input
            type="checkbox"
            name="python"
            checked={pythonChecked}
            onChange={handleCheckboxChange}
          />
          python
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            name="java"
            checked={javaChecked}
            onChange={handleCheckboxChange}
          />
          java
        </label>
      </div>
      {renderData()}
    </div>
  );
}

export default Boxx;
