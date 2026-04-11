// created by Aaron Thomas
// NSCC INET (2026)
// sources:
// https://www.w3schools.com/bootstrap4/bootstrap_flex.asp
// https://www.typescriptlang.org/docs/handbook/functions.html
// https://www.w3schools.com/jsref/jsref_tolocaledatestring.asp
// https://www.w3schools.com/cssref/css3_pr_filter.php
// https://www.w3schools.com/html/html_css.asp
// https://www.w3schools.com/react/react_hooks.asp

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './index.css'

import Home from './components/routes/Home'
import Details from './components/routes/Details'
import Layout from './components/routes/Layout';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<Details />} />
      </Route>
    </Routes>
    </BrowserRouter>
  </StrictMode>,
)
