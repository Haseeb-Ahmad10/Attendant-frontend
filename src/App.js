import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header/Header';

const AddTour = () => <div>Add Tour Page</div>;
const BookTour = () => <div>Book Tour Page</div>;
const MyTour = () => <div>My Tour Page</div>;
const Explore = () => <div>Explore Tours</div>;

function App() {
  return (
    <Router>
      <Header />
      <div className="p-4">
        <Routes>
          <Route path="/add-tour" element={<AddTour />} />
          <Route path="/book-tour" element={<BookTour />} />
          <Route path="/my-tour" element={<MyTour />} />
          <Route path="/explore" element={<Explore />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
