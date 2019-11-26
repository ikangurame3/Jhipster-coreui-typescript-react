import 'react-toastify/dist/ReactToastify.css';
import './app.scss';

import React, { useEffect } from 'react';
import Loadable from 'react-loadable';
import { connect } from 'react-redux';
import { Card,Container } from 'reactstrap';
import {BrowserRouter as Router, Switch} from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { hot } from 'react-hot-loader';

import { IRootState } from 'app/shared/reducers';
import { getSession } from 'app/shared/reducers/authentication';
import { getProfile } from 'app/shared/reducers/application-profile';
import { setLocale } from 'app/shared/reducers/locale';
import Header from 'app/customize/layout/header/header';
import Sidebar from "app/customize/components/Sidebar/";
import Breadcrumb from "app/customize/components/Breadcrumb/";
import Aside from "app/customize/components/Aside/";
import Footer from 'app/customize/layout/footer/footer';
import PrivateRoute, { hasAnyAuthority } from 'app/shared/auth/private-route';
import ErrorBoundary from 'app/shared/error/error-boundary';
import { AUTHORITIES } from 'app/config/constants';
import AppRoutes from 'app/routes';
const baseHref = document
  .querySelector('base')
  .getAttribute('href')
  .replace(/\/$/, '');


// Styles
// Import Main styles for this application
import "./scss/style.scss";
// Temp fix for reactstrap
import "./scss/core/_dropdown-menu-right.scss";
// Bootstrap
import "bootstrap/dist/css/bootstrap.css";
import ErrorBoundaryRoute from "app/shared/error/error-boundary-route";
import Login from "app/modules/login/login";
import Logout from "app/modules/login/logout";
import Register from "app/modules/account/register/register";
import Activate from "app/modules/account/activate/activate";
import PasswordResetInit from "app/modules/account/password-reset/init/password-reset-init";
import PasswordResetFinish from "app/modules/account/password-reset/finish/password-reset-finish";
import Entities from "app/entities";
import Home from "app/modules/home/home";
import PageNotFound from "app/shared/error/page-not-found";


export interface IAppProps extends StateProps, DispatchProps {}

export const App = (props: IAppProps) => {
  useEffect(() => {
    props.getSession();
    props.getProfile();
  }, []);

  // from routes

  const Account = Loadable({
    loader: () => import(/* webpackChunkName: "account" */ 'app/modules/account'),
    loading: () => <div>loading ...</div>
  });

  const Admin = Loadable({
    loader: () => import(/* webpackChunkName: "administration" */ 'app/modules/administration'),
    loading: () => <div>loading ...</div>
  });


  const paddingTop = '0px';
  return (
    <Router basename={baseHref}>
      <div className="app" style={{ paddingTop }}>
        <ToastContainer position={toast.POSITION.TOP_LEFT} className="toastify-container" toastClassName="toastify-toast" />
        <ErrorBoundary>
          <Header
            isAuthenticated={props.isAuthenticated}
            isAdmin={props.isAdmin}
            currentLocale={props.currentLocale}
            onLocaleChange={props.setLocale}
            ribbonEnv={props.ribbonEnv}
            isInProduction={props.isInProduction}
            isSwaggerEnabled={props.isSwaggerEnabled}
          />
        </ErrorBoundary>
        <div className="app-body">
           <Sidebar/>
            <main className="main">
              <Breadcrumb />
                <Container fluid={true}>
                      <ErrorBoundary>
                        <Switch>
                          <ErrorBoundaryRoute path="/login" component={Login} />
                          <ErrorBoundaryRoute path="/logout" component={Logout} />
                          <ErrorBoundaryRoute path="/account/register" component={Register} />
                          <ErrorBoundaryRoute path="/account/activate/:key?" component={Activate} />
                          <ErrorBoundaryRoute path="/account/reset/request" component={PasswordResetInit} />
                          <ErrorBoundaryRoute path="/account/reset/finish/:key?" component={PasswordResetFinish} />
                          <PrivateRoute path="/admin" component={Admin} hasAnyAuthorities={[AUTHORITIES.ADMIN]} />
                          <PrivateRoute path="/account" component={Account} hasAnyAuthorities={[AUTHORITIES.ADMIN, AUTHORITIES.USER]} />
                          <PrivateRoute path="/entity" component={Entities} hasAnyAuthorities={[AUTHORITIES.USER]} />
                          <ErrorBoundaryRoute path="/" exact component={Home} />
                          <ErrorBoundaryRoute component={PageNotFound} />
                        </Switch>
                      </ErrorBoundary>
                </Container>
            </main>
          <Aside />
        </div>
        <footer/>
      </div>
    </Router>
  );
};

const mapStateToProps = ({ authentication, applicationProfile, locale }: IRootState) => ({
  currentLocale: locale.currentLocale,
  isAuthenticated: authentication.isAuthenticated,
  isAdmin: hasAnyAuthority(authentication.account.authorities, [AUTHORITIES.ADMIN]),
  ribbonEnv: applicationProfile.ribbonEnv,
  isInProduction: applicationProfile.inProduction,
  isSwaggerEnabled: applicationProfile.isSwaggerEnabled
});

const mapDispatchToProps = { setLocale, getSession, getProfile };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(hot(module)(App));
