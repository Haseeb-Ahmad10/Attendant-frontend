// import React, { useState } from 'react';
// import { Search, ChevronDown, MoreVertical, Plus, Home, Users } from 'lucide-react';

// // Sample employee data
// const employeesData = [
//   {
//     id: 1,
//     name: 'Prabodhan Fitzgerald',
//     position: 'Frontend Engineer',
//     email: 'prabodhan@gmail.com',
//     totalHours: 160,
//     dailyAvgHours: 8.00,
//     avatar: '👨‍💻'
//   },
//   {
//     id: 2,
//     name: 'Hiro Joyce',
//     position: 'Frontend Engineer',
//     email: 'hiro@gmail.com',
//     totalHours: 150,
//     dailyAvgHours: 7.9,
//     avatar: '👩‍💻'
//   },
//   {
//     id: 3,
//     name: 'Lloyd Jefferson',
//     position: 'Backend Engineer',
//     email: 'lloyd@gmail.com',
//     totalHours: 150,
//     dailyAvgHours: 6.80,
//     avatar: '👨‍🔧'
//   },
//   {
//     id: 4,
//     name: 'Celran Mayo',
//     position: 'HR Manager',
//     email: 'celran@mayo.com',
//     totalHours: 130,
//     dailyAvgHours: 7.50,
//     avatar: '👩‍💼'
//   },
//   {
//     id: 5,
//     name: 'Thumbiko James',
//     position: 'DevOps',
//     email: 'james@james.co',
//     totalHours: 152,
//     dailyAvgHours: 7.90,
//     avatar: '👨‍⚙️'
//   }
// ];

// // Reusable Header Component
// const Header = ({ title }) => (
//   <div className="bg-blue-500 text-white p-4 flex items-center">
//     <div className="flex items-center space-x-2">
//       <div className="w-6 h-6 bg-white bg-opacity-20 rounded flex items-center justify-center">
//         <div className="w-3 h-0.5 bg-white"></div>
//         <div className="w-3 h-0.5 bg-white mt-1"></div>
//         <div className="w-3 h-0.5 bg-white mt-1"></div>
//       </div>
//       <span className="font-medium">{title}</span>
//     </div>
//     <div className="ml-auto">
//       <div className="w-8 h-8 bg-orange-400 rounded-full flex items-center justify-center text-sm font-bold">
//         A
//       </div>
//     </div>
//   </div>
// );

// // Reusable Breadcrumb Component
// const Breadcrumb = ({ items }) => (
//   <div className="flex items-center space-x-2 text-gray-600 mb-4">
//     {items.map((item, index) => (
//       <React.Fragment key={index}>
//         {index > 0 && <span>›</span>}
//         <div className="flex items-center space-x-1">
//           {item.icon}
//           <span className={index === items.length - 1 ? 'text-gray-800 font-medium' : 'hover:text-blue-500 cursor-pointer'}>
//             {item.label}
//           </span>
//         </div>
//       </React.Fragment>
//     ))}
//   </div>
// );

// // Reusable Search Input Component
// const SearchInput = ({ placeholder, value, onChange }) => (
//   <div className="relative">
//     <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
//     <input
//       type="text"
//       placeholder={placeholder}
//       value={value}
//       onChange={onChange}
//       className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-full"
//     />
//   </div>
// );

// // Reusable Dropdown Component
// const Dropdown = ({ options, value, onChange, placeholder }) => (
//   <div className="relative">
//     <select
//       value={value}
//       onChange={onChange}
//       className="appearance-none bg-white border border-gray-300 rounded-md px-4 py-2 pr-8 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-full"
//     >
//       <option value="">{placeholder}</option>
//       {options.map((option, index) => (
//         <option key={index} value={option.value}>
//           {option.label}
//         </option>
//       ))}
//     </select>
//     <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
//   </div>
// );

// // Reusable Action Menu Component
// const ActionMenu = ({ isOpen, onToggle, onEdit, onDelete }) => (
//   <div className="relative">
//     <button
//       onClick={onToggle}
//       className="p-1 hover:bg-gray-100 rounded-full"
//     >
//       <MoreVertical className="w-4 h-4 text-gray-500" />
//     </button>
//     {isOpen && (
//       <div className="absolute right-0 mt-1 w-32 bg-white border border-gray-200 rounded-md shadow-lg z-10">
//         <button
//           onClick={onEdit}
//           className="block w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-50"
//         >
//           Edit
//         </button>
//         <button
//           onClick={onDelete}
//           className="block w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-50"
//         >
//           Delete
//         </button>
//       </div>
//     )}
//   </div>
// );

// // Reusable Avatar Component
// const Avatar = ({ emoji, name }) => (
//   <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-lg">
//     {emoji}
//   </div>
// );

// // Reusable Button Component
// const Button = ({ children, onClick, variant = 'primary', size = 'md', className = '' }) => {
//   const baseClasses = 'font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors';
//   const variantClasses = {
//     primary: 'bg-blue-500 text-white hover:bg-blue-600 focus:ring-blue-500',
//     secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-500',
//     outline: 'border border-blue-500 text-blue-500 hover:bg-blue-50 focus:ring-blue-500'
//   };
//   const sizeClasses = {
//     sm: 'px-3 py-1.5 text-sm',
//     md: 'px-4 py-2',
//     lg: 'px-6 py-3 text-lg'
//   };

//   return (
//     <button
//       onClick={onClick}
//       className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
//     >
//       {children}
//     </button>
//   );
// };

// // Reusable Pagination Component
// const Pagination = ({ currentPage, totalPages, onPageChange }) => {
//   const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

//   return (
//     <div className="flex items-center justify-center space-x-1 mt-6">
//       <button
//         onClick={() => onPageChange(1)}
//         disabled={currentPage === 1}
//         className="p-2 text-gray-400 hover:text-gray-600 disabled:opacity-50"
//       >
//         «
//       </button>
//       <button
//         onClick={() => onPageChange(currentPage - 1)}
//         disabled={currentPage === 1}
//         className="p-2 text-gray-400 hover:text-gray-600 disabled:opacity-50"
//       >
//         ‹
//       </button>
      
//       {pages.map(page => (
//         <button
//           key={page}
//           onClick={() => onPageChange(page)}
//           className={`px-3 py-1 rounded ${
//             currentPage === page
//               ? 'bg-blue-500 text-white'
//               : 'text-gray-600 hover:bg-gray-100'
//           }`}
//         >
//           {page}
//         </button>
//       ))}
      
//       <button
//         onClick={() => onPageChange(currentPage + 1)}
//         disabled={currentPage === totalPages}
//         className="p-2 text-gray-400 hover:text-gray-600 disabled:opacity-50"
//       >
//         ›
//       </button>
//       <button
//         onClick={() => onPageChange(totalPages)}
//         disabled={currentPage === totalPages}
//         className="p-2 text-gray-400 hover:text-gray-600 disabled:opacity-50"
//       >
//         »
//       </button>
//     </div>
//   );
// };

// // Main Employee Management Component
// const EmployeeManagement = () => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [positionFilter, setPositionFilter] = useState('');
//   const [currentPage, setCurrentPage] = useState(1);
//   const [openMenuId, setOpenMenuId] = useState(null);
//   const itemsPerPage = 5;

//   // Get unique positions for filter dropdown
//   const positions = [...new Set(employeesData.map(emp => emp.position))].map(pos => ({
//     value: pos,
//     label: pos
//   }));

//   // Filter employees based on search and position
//   const filteredEmployees = employeesData.filter(employee => {
//     const matchesSearch = employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//                          employee.email.toLowerCase().includes(searchTerm.toLowerCase());
//     const matchesPosition = !positionFilter || employee.position === positionFilter;
//     return matchesSearch && matchesPosition;
//   });

//   // Pagination
//   const totalPages = Math.ceil(filteredEmployees.length / itemsPerPage);
//   const startIndex = (currentPage - 1) * itemsPerPage;
//   const paginatedEmployees = filteredEmployees.slice(startIndex, startIndex + itemsPerPage);

//   const handleMenuToggle = (employeeId) => {
//     setOpenMenuId(openMenuId === employeeId ? null : employeeId);
//   };

//   const handleEdit = (employee) => {
//     alert(`Edit ${employee.name}`);
//     setOpenMenuId(null);
//   };

//   const handleDelete = (employee) => {
//     alert(`Delete ${employee.name}`);
//     setOpenMenuId(null);
//   };

//   const handleAddUser = () => {
//     alert('Add new user');
//   };

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <Header title="Attendance" />
      
//       <div className="p-6">
//         <Breadcrumb
//           items={[
//             { label: 'Dashboard', icon: <Home className="w-4 h-4" /> },
//             { label: 'Users', icon: <Users className="w-4 h-4" /> }
//           ]}
//         />

//         <h1 className="text-2xl font-semibold text-gray-800 mb-6">Users</h1>

//         {/* Search and Filter Section */}
//         <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-6">
//           <div className="flex flex-col md:flex-row gap-4">
//             <div className="flex-1">
//               <SearchInput
//                 placeholder="Name, email, etc..."
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//               />
//             </div>
//             <div className="w-full md:w-48">
//               <Dropdown
//                 options={positions}
//                 value={positionFilter}
//                 onChange={(e) => setPositionFilter(e.target.value)}
//                 placeholder="Frontend, ..."
//               />
//             </div>
//           </div>
//         </div>

//         {/* Employee Table */}
//         <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
//           <div className="overflow-x-auto">
//             <table className="w-full">
//               <thead className="bg-gray-50">
//                 <tr>
//                   <th className="text-left py-3 px-4 font-medium text-gray-700">Name</th>
//                   <th className="text-left py-3 px-4 font-medium text-gray-700">Position</th>
//                   <th className="text-left py-3 px-4 font-medium text-gray-700">Email</th>
//                   <th className="text-left py-3 px-4 font-medium text-gray-700">Total Hours</th>
//                   <th className="text-left py-3 px-4 font-medium text-gray-700">Daily Avg. Hours</th>
//                   <th className="text-center py-3 px-4 font-medium text-gray-700">Actions</th>
//                 </tr>
//               </thead>
//               <tbody className="divide-y divide-gray-200">
//                 {paginatedEmployees.map((employee) => (
//                   <tr key={employee.id} className="hover:bg-gray-50">
//                     <td className="py-3 px-4">
//                       <div className="flex items-center space-x-3">
//                         <Avatar emoji={employee.avatar} name={employee.name} />
//                         <span className="font-medium text-gray-900">{employee.name}</span>
//                       </div>
//                     </td>
//                     <td className="py-3 px-4 text-gray-700">{employee.position}</td>
//                     <td className="py-3 px-4 text-gray-700">{employee.email}</td>
//                     <td className="py-3 px-4 text-gray-700">{employee.totalHours}</td>
//                     <td className="py-3 px-4 text-gray-700">{employee.dailyAvgHours}</td>
//                     <td className="py-3 px-4 text-center">
//                       <div className="flex items-center justify-center space-x-2">
//                         <Button variant="outline" size="sm">
//                           VIEW
//                         </Button>
//                         <ActionMenu
//                           isOpen={openMenuId === employee.id}
//                           onToggle={() => handleMenuToggle(employee.id)}
//                           onEdit={() => handleEdit(employee)}
//                           onDelete={() => handleDelete(employee)}
//                         />
//                       </div>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>

//           {/* Pagination */}
//           <Pagination
//             currentPage={currentPage}
//             totalPages={totalPages}
//             onPageChange={setCurrentPage}
//           />
//         </div>

//         {/* Add User Button */}
//         <div className="fixed bottom-6 right-6">
//           <Button
//             onClick={handleAddUser}
//             className="flex items-center space-x-2 shadow-lg"
//           >
//             <Plus className="w-4 h-4" />
//             <span>ADD USER</span>
//           </Button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EmployeeManagement;