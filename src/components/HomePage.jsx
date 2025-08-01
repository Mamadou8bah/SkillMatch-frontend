import Header from "./Header";

function HomePage() {
  return (
    <div className="home-page" style={{ width: '75vw', height:'100%', display: 'flex', flexDirection: 'column' }}>
      <Header />
    </div>
  );
}

export default HomePage;
