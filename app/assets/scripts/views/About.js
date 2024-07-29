import React, { Component } from 'react';

import App from './App';

class About extends Component {
  render () {
    return (
      <App pageTitle='About'>
        <article className='inpage inpage--single inpage--about'>
          <header className='inpage__header'>
            <div className='inpage__subheader'>
              <div className='inpage__headline'>
                <h1 className='inpage__title'>About</h1>
              </div>
            </div>
          </header>
          <div className='inpage__body'>
            <div className='prose'>
              <h2>The Global Electrification Platform</h2>
              <h6>A Global Good for Achieving Universal Electrification</h6>
              <p>
                The Global Electrification Platform (GEP) is an open
                access, interactive, online platform that allows for
                overview of electrification investment scenarios for a
                selection of countries. The scenarios present pathways
                for achieving universal electricity access (grid,
                mini-grid and SHS), split into an intermediate
                strategy for 2025 and full electrification by
                2030. The results of the model indicate the least-cost
                investment requirements based on publicly available
                information on demand and existing infrastructure.
              </p>

              <p>
                Users can explore 96 different scenarios to meet the
                access goals. These different combinations and
                parameters are presented in the form of
                "levers". Users can overlay additional layers as well
                (e.g. wind potential, electricity networks, location
                of health facilities) to help illustrate useful
                contextual information about a selected country.
              </p>

              <p>
                The current set of results in the GEP were created using the
                Open Source Spatial Electrification Tool (
                <a
                  href='https://github.com/global-electrification-platform/gep-onsset'
                  target='_blank'
                >
                  gep-onsset
                </a>
                ). In the interests of transparency and collaboration, the
                modelling process has been{' '}
                <a
                  href='https://docs.google.com/spreadsheets/d/1JiV6QT1IBkJR7Q-FntC2zl3aZI2X5IMxrDI9gWupG5M/edit?usp=sharing'
                  target='_blank'
                >
                  opened
                </a>{' '}
                for feedback and improvements from other institutions, experts
                and practitioners. In addition to the web platform,
                there are two additional aspects to the GEP model that
                facilitate the creation, exploration, and
                dissemination of novel modelling results:
               <ul>
                 <li>
                   <b>The Generator</b> - enables users to explore the GEP,
                   selecting their own parameters and assumptions, and
                   allowing for combinations customized to a local country
                   context. While the GEP web platform allows users to
                   explore 6 different levers affecting electrification;
                   the complete GEP model has over 150 parameters, and the
                   Generator will allow users to explore all of these
                   levers in any combination that is relevant for their
                   context.
                 </li>
                 <li>
                   <b>The Toolbox</b> - includes the tools used to generate the
                   input data to the GEP model. These allow for greater
                   customization and make it possible for users to
                   incorporate and analyze their own GIS and non-GIS
                   data. While fewer users are expected to engage at this
                   level of the modelling, the combination of the Toolbox
                   and the Generator will allow potential users to
                   customize every aspect of the GEP.
                 </li>
               </ul>
              </p>
              <p>
                To date, three versions of the GEP have been developed:
                <ul>
                  <li>
                    The first instance of the Global Electrification
                    Platform, <b>GEP 1.0</b> was launched in November
                    2019. Based on a version of the Open Source
                    Spatial Electrification Tool (OnSSET), this
                    version identified the least-cost technology to
                    provide access to every household by 2030 in
                    countries with less than 90% electrification rate
                    in 2018, choosing between grid-connection,
                    mini-grids and SHS. For each technology option,
                    the costs associated with generation, transmission
                    and distribution (where applicable) were used to
                    calculate the Levelized Cost of Electricity,
                    drawing in the local characteristics and distance
                    to existing infrastructure of each settlement, and
                    selecting the least-cost option in each
                    location. A set of standardized scenarios, with
                    different assumptions on demand and supply, were
                    developed for each country, allowing the user to
                    explore how technology mixes and investment
                    requirements may change.
                  </li>
                  <li>
                    <b>GEP 2.0</b> was launched in September
                    2021. This version provided updated input data,
                    updated the start of the modelling period from
                    2018 to 2020 and provided refined methodologies
                    for modelling mini-grid systems and demand
                    estimations. Notably, GEP 2.0 also added demand
                    estimates for social uses (based on locations of
                    health and education facilities) as well as
                    small-scale productive uses (based on settlements
                    accessibility, GDP and population size).
                  </li>
                  <li>
                    In addition to input data updates, <b>GEP 3.0 </b>
                    provides methodological updates to account for the
                    GHG emissions stemming from providing increased
                    access to electricity. The emissions associated
                    with new customers’ consumption of grid
                    electricity as well as diesel consumption in
                    mini-grids are accounted for. To do so, the
                    GEP-OnSSET model is coupled with a version of The
                    Electricity Model Base for Africa (TEMBA), a
                    capacity expansion model that includes all
                    mainland countries in sub-Saharan Africa, to
                    provide the average cost and GHG emissions per kWh
                    of grid electricity supplied in each country until
                    2030 under three demand growth
                    scenarios. Additionally, scenarios including a
                    shadow price of carbon have been developed to
                    explore how the technology mix, investment
                    requirements and associated emissions are affected
                    in the GEP-OnSSET and TEMBA models.
                  </li>
                </ul>
              </p>
              <p>
                For any inquiries and potential collaboration please contact the
                development team:
              </p>
              <ul>
                <li>
                  <b>The World Bank:</b> Ashish Shrestha –{' '}
                  <a href='ashrestha1@worldbank.org'>
                    ashrestha1@worldbank.org
                  </a>
                </li>
                <li>
                  <b>KTH Energy Systems:</b> Camilo Ramirez Gomez –{' '}
                  <a href='mailto:camilorg@kth.se'>
                    camilorg@kth.se
                  </a>
                </li>
                <li>
                  <b>Development Seed:</b> Olaf Veerman –{' '}
                  <a href='mailto:olaf@developmentseed.org'>
                    olaf@developmentseed.org
                  </a>
                </li>
                <li>
                  <b>WRI:</b> Dimitrios Mentis –{' '}
                  <a href='mailto:Dimitrios.Mentis@wri.org'>
                    Dimitrios.Mentis@wri.org
                  </a>
                </li>
                <li>
                  <b>Derilinx:</b> Eric Soroos –{' '}
                  <a href='mailto:eric@derilinx.com'>
                    eric@derilinx.com
                  </a>
                </li>
                <li>
                  <b>Google:</b> Saleem Van Groenou –{' '}
                  <a href='mailto:svangroenou@google.com'>
                    svangroenou@google.com
                  </a>
                </li>
              </ul>

              <h2 className='visually-hidden'>Credits</h2>
              <dl className='logo-list'>
                <dt>Consortium</dt>
                <dd>
                  <a
                    href='https://www.worldbank.org/'
                    title='Visit World Bank'
                    target='_blank'
                  >
                    <img
                      alt='WBG Logo'
                      src='/assets/graphics/content/logos/logo-wbg-irbdida.png'
                    />
                    <span>KTH</span>
                  </a>
                </dd>
                <dd>
                  <a
                    href='https://www.esmap.org/'
                    title='Visit Energy Sector Management Assistance Program'
                    className='logo-esmap'
                    target='_blank'
                  >
                    <img
                      alt='ESMAP Logo'
                      src='/assets/graphics/content/logos/logo-esmap.svg'
                    />
                    <span>ESMAP</span>
                  </a>
                </dd>
                <dd>
                  <a
                    href='https://www.kth.se/en'
                    title='Visit KTH'
                    target='_blank'
                  >
                    <img
                      alt='KTH Logo'
                      src='/assets/graphics/content/logos/logo-kth.png'
                    />
                    <span>KTH</span>
                  </a>
                </dd>
                <dd>
                  <a
                    className='logo-devseed'
                    href='https://developmentseed.org/'
                    title='Visit Development Seed'
                    target='_blank'
                  >
                    <img
                      alt='Development Seed logo'
                      src='/assets/graphics/content/logos/logo-devseed.svg'
                    />
                    <span>Development Seed</span>
                  </a>
                </dd>
                <dd>
                  <a
                    href='https://www.derilinx.com/'
                    title='Visit Derilinx'
                    target='_blank'
                  >
                    <img
                      alt='Derilinx Logo'
                      src='/assets/graphics/content/logos/logo-derilinx.png'
                    />
                    <span>Derilinx</span>
                  </a>
                </dd>
                <dd>
                  <a
                    href='https://www.wri.org/'
                    title='Visit World Resources Institute'
                    target='_blank'
                  >
                    <img
                      alt='WRI Logo'
                      src='/assets/graphics/content/logos/logo-wri.png'
                    />
                    <span>WRI</span>
                  </a>
                </dd>
                <dd>
                  <a
                    href='https://www.google.com/'
                    title='Visit Google'
                    target='_blank'
                  >
                    <img
                      alt='Google logo'
                      src='/assets/graphics/content/logos/logo-google.png'
                    />
                    <span>Google</span>
                  </a>
                </dd>
                <dd>
                  <a
                    href='https://www.cam.ac.uk/'
                    title='Visit University of Cambridge'
                    target='_blank'
                  >
                    <img
                      alt='University of Cambridge logo'
                      src='/assets/graphics/content/logos/logo-university-of-cambridge.png'
                    />
                    <span>Google</span>
                  </a>
                </dd>
                <dt>In collaboration with</dt>
                <dd>
                  <a
                    href='https://socialgood.fb.com'
                    title='Visit Facebook'
                    target='_blank'
                  >
                    <img
                      alt='Facebook logo'
                      src='/assets/graphics/content/logos/logo-facebook.png'
                    />
                    <span>Facebook</span>
                  </a>
                </dd>
                <dd>
                  <a
                    href='http://www.optimus.community/'
                    title='Visit Optimus Community'
                    target='_blank'
                  >
                    <img
                      alt='Optimus logo'
                      src='/assets/graphics/content/logos/optimus.png'
                    />
                    <span>Optimus</span>
                  </a>
                </dd>
                <dd>
                  <a
                    href='https://www.powerforall.org/'
                    title='Visit Power for All'
                    target='_blank'
                  >
                    <img
                      alt='Power for All logo'
                      src='/assets/graphics/content/logos/logo-powerforall.png'
                    />
                    <span>Power for All</span>
                  </a>
                </dd>
                <dd>
                  <a
                    href='https://www.seforall.org/'
                    title='Visit SE for All'
                    target='_blank'
                  >
                    <img
                      alt='SE4All logo'
                      src='/assets/graphics/content/logos/logo-seforall.png'
                    />
                    <span>SE for All</span>
                  </a>
                </dd>
                <dd>
                  <a
                    href='https://www.unsdsn.org/'
                    title='Visit Sustainable Development Solutions Network'
                    target='_blank'
                  >
                    <img
                      alt='SDSN logo'
                      src='/assets/graphics/content/logos/logo-sdsn.png'
                    />
                    <span>Sustainable Development Solutions Network</span>
                  </a>
                </dd>
                <dd>
                  <a
                    href='https://www.un.org/development/desa/en/'
                    title='Visit UNDESA'
                    target='_blank'
                  >
                    <img
                      alt='UNDESA logo'
                      src='/assets/graphics/content/logos/logo-undesa.png'
                    />
                    <span>
                      United Nations Department of Economic and Social Affairs
                    </span>
                  </a>
                </dd>
                <dd>
                  <a
                    href='https://www.undp.org/'
                    title='Visit UNDP'
                    target='_blank'
                  >
                    <img
                      alt='UNDP logo'
                      src='/assets/graphics/content/logos/logo-undp.png'
                    />
                    <span>UNDP</span>
                  </a>
                </dd>
                <dd>
                  <a
                    href='https://www.uneca.org/'
                    title='Visit UNECA'
                    target='_blank'
                  >
                    <img
                      alt='UNECA logo'
                      src='/assets/graphics/content/logos/logo-uneca.png'
                    />
                    <span>United Nations for Africa</span>
                  </a>
                </dd>
                <dd>
                  <a
                    href='https://www.ukaiddirect.org/'
                    title='Visit UK Aid'
                    target='_blank'
                  >
                    <img
                      alt='UKaid logo'
                      src='/assets/graphics/content/logos/logo-ukaid.jpg'
                    />
                    <span>UK Aid</span>
                  </a>
                </dd>
              </dl>
            </div>
          </div>
        </article>
      </App>
    );
  }
}

export default About;
