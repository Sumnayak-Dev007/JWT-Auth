import React from 'react'

const HomePage = () => {
  return (
    <div className="bg-light" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb')", backgroundSize: "cover", backgroundPosition: "center", minHeight: "100vh" }}>
      
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm py-3">
        <div className="container">
          <a className="navbar-brand fw-bold text-success" href="#">🌿 BloomAuth</a>
          <div className="ms-auto">
            <button className="btn btn-outline-success me-2">Login</button>
            <button className="btn btn-success">Register</button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="container text-center text-dark" style={{ paddingTop: "6rem", paddingBottom: "6rem" }}>
        <h1 className="fw-bold display-4">Welcome to <span className="text-success">BloomAuth</span></h1>
        <p className="lead mb-4">
          A secure and fresh authentication dashboard inspired by nature’s beauty — where flowers bloom and data stays safe.
        </p>
        <div>
          <button className="btn btn-success btn-lg me-3">Get Started</button>
          <button className="btn btn-outline-success btn-lg">Learn More</button>
        </div>
      </div>

      {/* Dashboard Preview */}
      <div className="container py-5">
        <div className="row g-4">
          <div className="col-md-4">
            <div className="card border-0 shadow-sm">
              <img src="https://images.unsplash.com/flagged/photo-1555215241-9612144143ff?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="card-img-top" alt="Tulip" width="300" height="450" />
              <div className="card-body">
                <h5 className="card-title text-success">Tulips</h5>
                <p className="card-text text-muted">Symbol of love, beauty, and passion — manage your garden of users with care.</p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card border-0 shadow-sm">
              <img src="https://upload.wikimedia.org/wikipedia/commons/4/40/Sunflower_sky_backdrop.jpg" className="card-img-top" alt="Sunflowers" width="300" height="450" />
              <div className="card-body">
                <h5 className="card-title text-success">Sunflowers</h5>
                <p className="card-text text-muted">Bright, welcoming, and secure — your dashboard shines like a summer day.</p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card border-0 shadow-sm">
              <img src="https://plus.unsplash.com/premium_photo-1688045685821-4958c1e28322?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dhttps://unsplash.com/photos/a-bunch-of-lavender-flowers-on-a-purple-background-PwU8Hd2jy6Q" className="card-img-top" alt="Lavender" width="300" height="450" />
              <div className="card-body">
                <h5 className="card-title text-success">Lavender</h5>
                <p className="card-text text-muted">Calm and protective — our authentication keeps your peace of mind intact.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white text-center py-4 shadow-sm mt-5">
        <small className="text-muted">© 2025 BloomAuth 🌼 All Rights Reserved</small>
      </footer>
    </div>
  )
}

export default HomePage

