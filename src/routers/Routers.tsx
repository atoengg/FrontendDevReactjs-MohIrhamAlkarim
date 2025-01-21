import { Route, Routes } from 'react-router-dom'
import { Login } from '../pages/Login'
import { HomePage } from '../pages/HomePage'
import { DetailView } from '../pages/DetailView'
import { PrivateRoute } from './PrivateRoute'

export const Routers = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/home" element={
                    <PrivateRoute>
                        <HomePage />
                    </PrivateRoute>
                } />
                <Route path="/detail/:id" element={
                    <PrivateRoute>
                        <DetailView />
                    </PrivateRoute>
                } />
            </Routes>
        </>
    )
}
