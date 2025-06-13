<h1 style={{
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '10px',
  fontSize: '2.2rem',
  marginBottom: '1rem'
}}>
  <img src="https://cdn-icons-png.flaticon.com/512/942/942748.png" alt="icon" width="40" />
  1ClickResume
</h1>
import ResumeForm from './components/ResumeForm'
import ResumePreview from './components/ResumePreview'

function App() {
  const [resumeData, setResumeData] = useState(null)

  return (
    <div className="container">
      <h1>1ClickResume</h1>
      {!resumeData ? (
        <ResumeForm onSubmit={setResumeData} />
      ) : (
        <ResumePreview data={resumeData} onEdit={() => setResumeData(null)} />
      )}
    </div>
  )
}

export default App
