import React, { useState, useMemo } from 'react';
import { Search, Users } from 'lucide-react';
import classes from './AdminDashboard.module.css';
import LetterAvatars from '../UI/Avatars';
import StatusCard from '../Pages/StatusCard';
import PaginationTable from '../UI/Pagination';

const AttendanceDashboard = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPeriod, setSelectedPeriod] = useState('1');

  // Sample data
  const presentEmployees = [
    { id: 1, name: "John Doe", role: "UX/UI Designer", initials: "JD" },
    { id: 2, name: "Jane Doette", role: "Frontend Engineer", initials: "JD" },
    { id: 3, name: "Xin Yue", role: "DevOps", initials: "XY" },
    { id: 4, name: "Kate John", role: "Accounts", initials: "KJ" },
    { id: 5, name: "Saad Ahmed", role: "IT", initials: "SA" }
  ];

  const absentEmployees = [
    { id: 6, name: "John Doe", role: "UX/UI Designer", initials: "JD" },
    { id: 7, name: "Jane Doette", role: "Frontend Engineer", initials: "JD" },
    { id: 8, name: "Xin Yue", role: "DevOps", initials: "XY" },
    { id: 9, name: "Kate John", role: "Accounts", initials: "KJ" },
    { id: 10, name: "Saad Ahmed", role: "IT", initials: "SA" }
  ];

  const onLeaveEmployees = [
    { id: 11, name: "John Doe", role: "UX/UI Designer", initials: "JD" },
    { id: 12, name: "Jane Doette", role: "Frontend Engineer", initials: "JD" },
    { id: 13, name: "Saad Ahmed", role: "IT", initials: "SA" }
  ];

  const employeeColumns = [
    {id: 'avatar', label: 'Avatar',},
    { id: 'name', label: 'Name' },
    { id: 'totalHours', label: 'Total Hours' },
    { id: 'avgHours', label: 'Daily Average Hours' }
  ];

  const allEmployees = useMemo(() => {
    return [
    { id: 1, name: "Prabodhan Fitzgerald", totalHours: 160, avgHours: 8.00, avatar: <LetterAvatars name="PF" /> },
    { id: 2, name: "Hiro Joyce", totalHours: 150, avgHours: 7.50, avatar: <LetterAvatars name="HJ" /> },
    { id: 3, name: "Lloyd Jefferson", totalHours: 150, avgHours: 6.80, avatar: <LetterAvatars name="LJ" /> },
    { id: 4, name: "Ceran Mayo", totalHours: 130, avgHours: 7.60, avatar: <LetterAvatars name="CM" /> },
    { id: 5, name: "Thumbiko James", totalHours: 152, avgHours: 7.90, avatar: <LetterAvatars name="TJ" /> },
    { id: 6, name: "Sarah Williams", totalHours: 145, avgHours: 7.25, avatar: <LetterAvatars name="SW" /> },
    { id: 7, name: "Mike Chen", totalHours: 165, avgHours: 8.25, avatar: <LetterAvatars name="MC" /> },
    { id: 8, name: "Emma Rodriguez", totalHours: 140, avgHours: 7.00, avatar: <LetterAvatars name="ER" /> },
    { id: 9, name: "Alex Thompson", totalHours: 155, avgHours: 7.75, avatar: <LetterAvatars name="AT" /> },
    { id: 10, name: "Lisa Park", totalHours: 148, avgHours: 7.40, avatar: <LetterAvatars name="LP" /> },
     ]
    } , []);

    const filterFn = (row) =>
    row.name.toLowerCase().includes(searchTerm.toLowerCase())


  return (
    <div className={classes.dashboard}>
      {/* Header */}
      <div className={classes.header}>
      <h2 className={classes['header-title']}>Attendance</h2>
      <LetterAvatars name={'Admin'} />
      </div>

      <div className={classes['main-content']}>
        {/* Breadcrumb */}
        <div className={classes.breadcrumb}>
          <span>🏠</span>
          <span>Dashboard</span>
        </div>

        {/* Today's Availability */}
        <div>
          <h2 className={classes['section-title']}>Today's Availability</h2>
          <div className={classes['status-grid']}>
            <StatusCard 
              title="Present" 
              employees={presentEmployees} 
              statusType="present" 
            />
            <StatusCard 
              title="Absent" 
              employees={absentEmployees} 
              statusType="absent" 
            />
            <StatusCard 
              title="On Leave" 
              employees={onLeaveEmployees} 
              statusType="on-leave" 
            />
          </div>
        </div>

        {/* Overall Stats */}
        <div className={classes['stats-section']}>
          <div className={classes['stats-header']}>
            <h2 className={classes['section-title']} style={{marginBottom: 0}}>Overall Stats</h2>
            <button className={classes['manage-btn']}>
              <Users />
              <span>MANAGE USERS</span>
            </button>
          </div>

          {/* Controls */}
          <div className={classes.controls}>
            <div className={classes['search-container']}>
              <Search className={classes['search-icon']} />
              <input
                type="text"
                placeholder="Search employees..."
                className={classes['search-input']}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <select
              className={classes['period-select']}
              value={selectedPeriod}
              onChange={(e) => setSelectedPeriod(e.target.value)}
            >
              <option value="1">Last 1 Month</option>
              <option value="3">Last 3 Months</option>
              <option value="6">Last 6 Months</option>
              <option value="12">Last 12 Months</option>
            </select>
          </div>

          {/* Table */}
         
          <PaginationTable columns={employeeColumns} rows={allEmployees} filterFn={filterFn }  />

        </div>
      </div>
    </div>
  );
};

export default AttendanceDashboard;