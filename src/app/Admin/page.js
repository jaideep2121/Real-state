'use client'
import { useEffect, useState } from 'react';
import axios from "axios";

export default function AdminPage() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const res = await axios.get('/api/getData');
      console.log(res.data);
      setData(res.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container">
      <h2>Admin Panel</h2>
      <button className="refresh-button" onClick={fetchData}>Refresh</button>
      <div className="table">
        {data.map((item, index) => (
          <div key={item._id} className="row">
            <div className="cell">
              <strong>{index + 1}.</strong>
            </div>
            <div className="cell">
              <strong>Name:</strong> {item.name}
            </div>
            <div className="cell">
              <strong>Email:</strong> {item.email}
            </div>
            <div className="cell">
              <strong>Phone:</strong> {item.phone}
            </div>
            <div className="cell">
              <strong>Comment:</strong> {item.comment || 'N/A'}
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .container {
          padding: 20px;
          font-family: Arial, sans-serif;
        }
        h2 {
          margin-bottom: 20px;
        }
        .refresh-button {
          margin-bottom: 10px;
          padding: 8px 16px;
          background-color: #007bff;
          color: #fff;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          font-size: 16px;
          transition: background-color 0.2s;
        }
        .refresh-button:hover {
          background-color: #0056b3;
        }
        .table {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .row {
          display: grid;
          grid-template-columns: 40px 1fr 1.5fr 1fr 1.5fr;
          gap: 10px;
          padding: 10px;
          background-color: #f9f9f9;
          border: 1px solid #ddd;
          border-radius: 8px;
          align-items: center;
        }
        .cell {
          display: flex;
          align-items: center;
        }
        @media (max-width: 768px) {
          .row {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}
