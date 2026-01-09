import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { MyData } from './types';

function App() {
  const [items, setItems] = useState<MyData[]>([]);
  const [loading, setLoading] = useState<boolean>(true); // 로딩 상태 추가
  const [error, setError] = useState<string | null>(null); // 에러 상태 추가

  const fetchData = async () => {
    try {
      setLoading(true);
      // 백엔드 연결 지연을 시뮬레이션하고 싶다면 아래 주석을 해제하세요.
      // await new Promise(resolve => setTimeout(resolve, 1000)); 
      
      const response = await axios.get('http://127.0.0.1:8000/api/data/');
      setItems(response.data);
      setError(null);
    } catch (err) {
      setError("서버에서 데이터를 가져오는 데 실패했습니다. 장고 서버를 확인하세요!");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // 로딩 중일 때 보여줄 화면
  if (loading) return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '100px', fontSize: '20px' }}>
      데이터를 불러오는 중입니다... 🚀
    </div>
  );

  // 에러 발생 시 보여줄 화면
  if (error) return (
    <div style={{ color: 'red', textAlign: 'center', marginTop: '100px' }}>
      <h2>⚠️ 에러 발생</h2>
      <p>{error}</p>
      <button onClick={fetchData} style={{ padding: '10px 20px', cursor: 'pointer' }}>다시 시도</button>
    </div>
  );

  return (
    <div style={{ maxWidth: '800px', margin: '50px auto', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h1 style={{ color: '#333' }}>사용자 목록</h1>
        <button 
          onClick={fetchData} 
          style={{ backgroundColor: '#4CAF50', color: 'white', border: 'none', padding: '10px 15px', borderRadius: '5px', cursor: 'pointer' }}
        >
          새로고침
        </button>
      </header>

      <div style={{ overflowX: 'auto', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', borderRadius: '10px' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', backgroundColor: 'white' }}>
          <thead>
            <tr style={{ backgroundColor: '#333', color: 'white', textAlign: 'left' }}>
              <th style={{ padding: '15px' }}>ID</th>
              <th style={{ padding: '15px' }}>이름</th>
              <th style={{ padding: '15px' }}>이메일 주소</th>
            </tr>
          </thead>
          <tbody>
            {items.length > 0 ? (
              items.map((item) => (
                <tr key={item.id} style={{ borderBottom: '1px solid #ddd' }}>
                  <td style={{ padding: '15px' }}>{item.id}</td>
                  <td style={{ padding: '15px', fontWeight: 'bold' }}>{item.name}</td>
                  <td style={{ padding: '15px', color: '#666' }}>{item.email}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={3} style={{ padding: '30px', textAlign: 'center', color: '#999' }}>데이터가 없습니다.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <footer style={{ marginTop: '20px', textAlign: 'right', fontSize: '14px', color: '#888' }}>
        총 {items.length}명의 사용자가 있습니다.
      </footer>
    </div>
  );
}

export default App;