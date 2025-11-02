import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './TrialSession.css';

interface TrialSession {
  id: number;
  firstName: string;
  secondName: string;
  email: string;
  createdAt?: string;
}

const TrialSession = () => {
  const [sessions, setSessions] = useState<TrialSession[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchSessions();
  }, []);

  const fetchSessions = async () => {
    try {
      const response = await axios.get(process.env.FORM as string, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem('access_token')}`,
        },
      });
      setSessions(response.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div className="loading">Loading...</div>;

  return (
    <section className="trial-session-container">
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>
        Пробні заняття ({sessions.length})
      </h2>

      <div className="sessions-list">
        {sessions.length === 0 ? (
          <p style={{ textAlign: 'center', color: '#aaa' }}>
            Поки нічого немає. Очікуйте...
          </p>
        ) : (
          sessions.map((session) => (
            <div key={session.id} className="data-session-user">
              <div className="sessions-names">
                <span>
                  {session.firstName} {session.secondName}
                </span>
                {session.createdAt && (
                  <span className="created-at">
                    {new Date(session.createdAt).toLocaleDateString()}
                  </span>
                )}
                    <i className="fa-solid fa-check"></i>
              </div>
              <div className="email">{session.email}</div>
            </div>
          ))
        )}
      </div>
    </section>
  );
};

export default TrialSession;