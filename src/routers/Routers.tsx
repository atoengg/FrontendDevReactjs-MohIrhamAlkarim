import { Route, Routes } from 'react-router-dom'
import { Login } from '../pages/Login'
import { HomePage } from '../pages/HomePage'

export const Routers = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/home" element={<HomePage />} />
            </Routes>
        </>
    )
}
