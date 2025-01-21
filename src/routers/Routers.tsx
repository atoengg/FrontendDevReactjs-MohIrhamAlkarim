import { Route, Routes } from 'react-router-dom'
import { Login } from '../pages/Login'
import { HomePage } from '../pages/HomePage'
import { DetailView } from '../pages/DetailView'

export const Routers = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/home" element={<HomePage />} />
                <Route path="/detail/:id" element={<DetailView />} />
            </Routes>
        </>
    )
}
