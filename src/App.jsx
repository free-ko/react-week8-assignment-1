import React from 'react';

import {
  Switch,
  Route,
  Link,
} from 'react-router-dom';

import { useDispatch } from 'react-redux';

import styled from '@emotion/styled';
import HomePage from './pages/Home';
import AboutPage from './pages/About';
import LoginPage from './pages/LogIn';
import RestaurantsPage from './pages/Restaurants';
import RestaurantPage from './pages/Restaurant';
import NotFoundPage from './pages/NotFound';

import { setAccessToken } from './redux/slice';

import { loadItem } from './services/storage';

import { LogoSvg } from './commons/svg';

// Steps to Implement features
/**
 *
 * 1. Pure Componentize
 * 2. Simplify Redux with Redux ToolKit
 * 3. Styling with Emotion
 *
 */

const Header = styled.header(({ theme }) => ({
  padding: '1rem',

  // Visual Properties
  backgroundColor: theme.colors.orange,
  color: 'white',
}));

export default function App() {
  const dispatch = useDispatch();

  const accessToken = loadItem('accessToken');
  if (accessToken) {
    dispatch(setAccessToken(accessToken));
  }

  return (
    <div>
      <Header>
        <h1>
          <Link to="/">
            <LogoSvg />
          </Link>
        </h1>
      </Header>
      <main>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/login" component={LoginPage} />
          <Route exact path="/restaurants" component={RestaurantsPage} />
          <Route path="/restaurants/:id" component={RestaurantPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </main>
    </div>
  );
}
