import React from 'react'
import MainLayout from '../../layouts/MainLayout'
import TopHome from './TopHome/TopHome'
import TrendingHome from './TrendingHome/TrendingHome'
import PopularHome from './PopularHome/PopularHome'
import './Home.css'
const Home =()=>{
	return(
		<MainLayout>
		<TopHome />
		<TrendingHome />
		<PopularHome />
		</MainLayout>
		)
}
export default Home
