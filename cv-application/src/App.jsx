import "./styles/App.scss";

function App() {
  return (
    <div className="main">
      <section className="edit-side">{EditSide()}</section>
      <section className="cv-side">{CvSide()}</section>
    </div>
  );
}

function EditSide() {
  return (
    <>
      <div className="personal-details"></div>
      <div className="education"></div>
      <div className="experience"></div>
    </>
  );
}

function CvSide() {
  return (
    <section className="cv-page">
      <div className="cv-top"></div>
      <div className="cv-body"></div>
    </section>
  );
}

export default App;
