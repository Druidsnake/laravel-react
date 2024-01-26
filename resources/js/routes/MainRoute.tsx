import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from '../views/Home'
import About from '../views/About'
import MainLayout from '../views/layouts/MainLayout'

const MainRoute = () => {
    return (
        <Router>
            <Routes>
                <Route element={<MainLayout />}>
                    <Route path="/admin/" element={<Home />} />
                    <Route path="/admin/about" element={<About />} />
                    {/* <Route path="/blog/*" element={<BlogApp />} />
              <Route path="/users/*" element={<UserApp />} /> */}
                </Route>
            </Routes>
        </Router>
    )
}

export default MainRoute
