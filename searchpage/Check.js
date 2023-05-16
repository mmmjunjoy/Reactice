import React from "react";

import { useState ,useEffect } from "react";
import userImage from "../img/profileimg.png";
import "../style/Main.css";
import "../style/Check.css";
import "../style/CheckBox.css";
import axios from "axios";

function Check() {
  const [pythoncheck, setpythoncheck] = useState(false);
  const [javacheck, setjavacheck] = useState(false);
  const [htmlcheck , sethtmlcheck] = useState(false);
  const [data,setdata] = useState([]);

    useEffect(() => {
    axios
      .get("http://localhost:8081/member/getList")
      .then((response) => setdata(response.data))
      .catch((error) => console.log(error));
  }, []);
 
  
  // 체크박스 상태에 따라 필터링된 데이터 생성
  const filteredData = data.filter((val) => {
    if (pythoncheck && val.firstSkill === "python") {
      return val;
    }
    else if (javacheck && val.firstSkill === "java") {
      return val;
    }
    else if (htmlcheck && val.firstSkill === "html") {
      return val;
    }
    return false;
  });

  // 체크박스 상태 변경 함수
  const handleCheckboxChange = (event) => {
    const name = event.target.name;
    const checked = event.target.checked;

    if (name === "python") {
      setpythoncheck(checked);
    } else if (name === "java") {
      setjavacheck(checked);
    } else if (name === "html") {
      sethtmlcheck(checked);
    }
  };

  // 필터링된 데이터 표시
  const renderData = () => {
    if (filteredData.length === 0) {
      return <p>No results found.</p>;
    }
    return (
      <div class="SearchList">
        {filteredData.map((val, key) => (
          <div id="SearchData-Box" className="user" key={key}>
            <img id="SearchData-Image" src={userImage} />
            <p id="SearchData-Name">{val.id}</p>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div>
      <div>
        <label>
          <input
            type="checkbox"
            class="python-checkbox"
            name="python"
            checked={pythoncheck}
            onChange={handleCheckboxChange}
          />
          python
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            class="java-checkbox"
            name="java"
            checked={javacheck}
            onChange={handleCheckboxChange}
          />
          java
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            class="html-checkbox"
            name="html"
            checked={htmlcheck}
            onChange={handleCheckboxChange}
          />
          html
        </label>
      </div>
      {renderData()}
    </div>
  );
}

export default Check;
