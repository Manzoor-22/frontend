// Leaderboard.tsx
import React from 'react';
import './Leaderboard.css'; // Import external stylesheet for component-specific styles
import MainHeading from '../components/MainHeading'; // Assuming MainHeading.tsx is located in '../components/'

const Leaderboard: React.FC = () => {
    // Dummy data for demonstration
    const leaderboardData = [
        { rank: 1, name: 'John Doe', branch: 'Computer Science', rating: 98 },
        { rank: 2, name: 'Jane Smith', branch: 'Electrical Engineering', rating: 96 },
        { rank: 3, name: 'Michael Johnson', branch: 'Mechanical Engineering', rating: 92 },
        { rank: 4, name: 'Sarah Brown', branch: 'Chemistry', rating: 91 },
        { rank: 5, name: 'Alice Green', branch: 'Physics', rating: 90 },
        { rank: 6, name: 'Robert Lee', branch: 'Biology', rating: 90 },
        { rank: 7, name: 'Emily Wang', branch: 'Mathematics', rating: 84 },
    ];

    return (
        
        <div className="leaderboard-container">
            <MainHeading /> {/* Display MainHeading component */}
            <div className='table'>
            <table className="leaderboard-table">
                <caption style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Leaderboard</caption>
                <thead>
                    <tr>
                        <th>Rank</th>
                        <th>Name</th>
                        <th>Branch</th>
                        <th>Rating</th>
                    </tr>
                </thead>
                <tbody>
                    {leaderboardData.map((data, index) => (
                        <tr key={index}>
                            <td>{data.rank}</td>
                            <td>{data.name}</td>
                            <td>{data.branch}</td>
                            <td>{data.rating}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            </div>
        </div>
    );
};

export default Leaderboard;
