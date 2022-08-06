import "./App.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { App1 } from "./App1";
import { StudentList } from "./components/StudentList";
import { BookList } from "./components/BookList";
import { StudentDetail } from "./components/StudentDetail";
import { BookDetail } from "./components/BookDetail";
import { BookEdit } from "./components/BookEdit";
import { StudentEdit } from "./components/StudentEdit";
import { StudentAdd } from "./components/StudentAdd";
import { BookAdd } from "./components/BookAdd";
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" exact element={<App1 />} />
          <Route path="/StudentList" element={<StudentList />} />
          <Route path="/BookList" element={<BookList />} />
          <Route path="/StudentDetail" element={<StudentDetail />} />
          <Route path="/BookDetail" element={<BookDetail />} />
          <Route path="/BookEdit" element={<BookEdit />} />
          <Route path="/StudentEdit" element={<StudentEdit />} />
          <Route path="/StudentAdd" element={<StudentAdd />} />
          <Route path="/BookAdd" element={<BookAdd />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
