import './App.css';
import CourseList from './components/CourseList/CourseList';
import Navbar from './components/Navbar/Navbar';
function App() {
  return (
    <section className='bg-white '>
      <Navbar />
      <CourseList/>
    </section>
  );
}
export default App;
