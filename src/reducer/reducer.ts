import { combineReducers } from 'redux';
import { AppReducer } from '../App/App.reducer';
import { loginReducer } from '../Pages/Login/Login.reducer';
import { TopHomeReducer } from '../Pages/Home/TopHome/TopHome.reducer';
import { TrendingHomeReducer } from '../Pages/Home/TrendingHome/TrendingHome.reducer';
import { PopularHomeReducer } from '../Pages/Home/PopularHome/PopularHome.reducer';
import { SearchReducer } from '../Pages/Search/Search.reducer';

const rootReducer = combineReducers({
  app: AppReducer,
  login: loginReducer,
  topHome: TopHomeReducer,
  trendingHome: TrendingHomeReducer,
  popularHome: PopularHomeReducer,
  searchApi: SearchReducer,
});

export default rootReducer;
