import React, { useState } from 'react';
import classes from  './UserDashboard.module.css';
import LetterAvatars from '../UI/Avatars';
import PaginationTable from '../UI/Pagination';


// AttendanceUI Component
const AttendanceUI = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('Status');

  const attendanceData = [
    { date: '03/03/2022', status: 'Present' },
    { date: '02/03/2022', status: 'Present' },
    { date: '01/03/2022', status: 'Present' },
    { date: '01/03/2022', status: 'Present' },
    { date: '01/03/2022', status: 'Present' },
    { date: '29/02/2022', status: 'Leave' },
    { date: '28/02/2022', status: 'Absent' },
    { date: '28/02/2022', status: 'Absent' },
    { date: '28/02/2022', status: 'Absent' },
    { date: '28/02/2022', status: 'Absent' },
    { date: '27/02/2022', status: 'Present' },
  ];

  // Filter the attendance data based on search term and status filter
  const filteredData = attendanceData.filter(record => {
    const matchesSearch = searchTerm === '' || 
      record.date.toLowerCase().includes(searchTerm.toLowerCase()) ||
      record.status.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = statusFilter === 'Status' || 
      record.status === statusFilter;
    
    return matchesSearch && matchesStatus;
  });


  
  return (
    <div className={classes['attendance-container']}>
      {/* Header */}
      <div className={classes.header}>
        <h1>Attendance</h1>
        <LetterAvatars name={'Haseeb'} />
      </div>

      {/* Welcome Message */}
      <div className={classes['welcome-message']}>
        <div className={classes['info-icon']}>ℹ</div>
        <div className={classes['welcome-text']}>
          <strong>Welcome back, Haseeb!</strong>
          <br />
          Are you ready to punch in your attendance?
        </div>
        <button className={classes['punch-btn']}>PUNCH IN ATTENDANCE</button>
      </div>

      {/* Past Attendance Section */}
      <div className={classes['past-attendance']}>
        <h2>Past attendance</h2>
        
        {/* Search and Filter */}
        <div className={classes['search-filter']}>
          <div className={classes['search-section']}>
            <label>Search</label>
            <input
              type="text"
              placeholder="Date, status, etc..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className={classes['search-input']}
            />
          </div>
          
          <div className={classes['filter-section']}>
            <label>Attribute</label>
            <div className={classes['filter-container']}>
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className={classes['status-filter']}
              >
                <option>Status</option>
                <option>Present</option>
                <option>Leave</option>
                <option>Absent</option>
              </select>
              <button className={classes['filter-btn']}>≡</button>
            </div>
          </div>
        </div>

        
      </div> 

      {/* Pagination Component */}
      <PaginationTable data={filteredData} rowsPerPageOptions={[5, 10, 25]} defaultRowsPerPage={5} />


      {/* Apply for Leave Button */}
      <button className={classes['apply-leave-btn']}>
        APPLY FOR LEAVE +
      </button>
    </div>
  );
};

export default AttendanceUI;