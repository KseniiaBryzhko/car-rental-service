import { Routes, Route } from 'react-router-dom';
import Home from 'pages/Home/Home';
import Catalog from 'pages/Catalog/Catalog';
import Favorites from 'pages/Favorites/Favorites';
import NotFound from 'pages/NotFound/NotFound';
import Layout from 'components/Layout/Layout';
import { isMobile } from 'react-device-detect';

export const App = () => {
  if (isMobile) {
    return (
      <div>
        <p>На даному пристрої додаток недоступний.</p>
      </div>
    );
  } else {
    return (
      <>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/favorites" element={<Favorites />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </>
    );
  }
};
