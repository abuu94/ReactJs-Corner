# Hooks were added to React in version 16.8.

Hooks allow function components to have access to state and other React features. It replace class components. Still class components exist in React.
It allow us to use React features such as state and lifecycle methods.

# React Hooks:
 - useState: For managing state.
 - useEffect: For side effects like fetching data or subscriptions.
 - useContext: For using context in functional components.

# Example of React Hook
```
function App() {
  const [student, setStudent] = useState({
    name: "Abubakar",
    dob: "2000-01-01",
    university: "Suza",
    course: "Software Engineering",
    admissionYear: "2020",
    programlength: 4,
  });

  const updateName =()=>{
    setStudent(previousState =>{
      return {...previousState, name:"Ahmad"}
    })
  }

  const ChangeStudent = (name, dob, university, course, admissionYear, programlength) => {
    setStudent({
      name: name,
      dob: dob,
      university: university,
      course: course,
      admissionYear: admissionYear,
      programlength: programlength,
    });
  };
  const updateStudent = () => {
    ChangeStudent("Ahmad", "2000-11-11", "ZU", "Computer Engineering", "2025", 5);
  };
 
  
  return (
    <>
      <h6>Welcome to React Hook demo</h6>
      <div className="card">
        <h4>{student.name}</h4>
        <p>University: {student.university}</p>
        <p>Course: {student.course}</p>
        <p>Admission Year: {student.admissionYear}</p>
        <p>Program Length: {student.programlength} years</p>
        <p>Date of Birth: {student.dob}</p>


      </div>
     
   
      <button type="button" onClick={updateName}>
        Change Name
      </button>
      <button type="button" onClick={updateStudent}>
        Update Student
      </button>

      
    </>
  );
}

export default App;
```
