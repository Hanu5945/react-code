import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [message, setMessage] = useState('');
  const [click, setClick] = useState(false);

  useEffect(() => {
    // Spring Boot API 호출
    // axios.get('http://localhost:13799/api/test') // http://43.201.132.91:13799/api/test 서버 실행시 주소
    axios.get('http://43.201.132.91:13799/api/test') //  서버 실행시 주소
      .then(response => {
        setMessage(response.data); // axios는 기본적으로 JSON 응답을 파싱합니다
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, [click]);

  return (
    <div>
      <h1>Response from Spring Boot API</h1>
      <button onClick={() => { setClick(!click) }}>button</button>
      <p>{message}</p> {/* API에서 받은 메시지를 출력 */}
    </div>
  );
}

export default App;