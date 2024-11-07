import { createBrowserRouter } from 'react-router-dom';
import StudentListPage from './App';
import { StudentDetailPage } from './pages/StudentDetailPage';

// add SubmitStudentPage to the router at the path '/student/submit'
export const router = createBrowserRouter([
  { path: '/', element: <StudentListPage /> },
  { path: '/student/:id', element: <StudentDetailPage /> },
]);
