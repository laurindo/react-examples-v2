// resources
import React from "react";
import {Route, HashRouter, Switch, Redirect} from "react-router-dom";
import NotFoundPage from "./pages/NotFoundPage";
// components
import Header from "./components/header";
// pages
import HomePage from "./pages/home/homePage";
import UICardsPage from "./pages/ui/cards/uiCardsPage";
import UISimpleCardPage from "./pages/ui/cards/details/uiSimpleCardPage";
import UIAirbnbCardPage from "./pages/ui/cards/details/uiAirbnbCardPage";
import UIReviewCardPage from "./pages/ui/cards/details/uiReviewCardPage";
import UIEcommerceCardPage from "./pages/ui/cards/details/uiEcommerceCardPage";

import UIListsPage from "./pages/ui/lists/uiListsPage";
import UISimpleListPage from "./pages/ui/lists/details/uiSimpleListPage";

// main single pages
import UISinglePage from "./pages/ui/singlePage/UISinglePage";
// sub single pages
import UIFightCovidPage from "./pages/ui/singlePage/details/UIFightCovidPage";
import UIDeliveryFoodPage from "./pages/ui/singlePage/details/UIDeliveryFoodPage";
import UIDeliveryFoodPage01 from "./pages/ui/singlePage/details/UIDeliveryFoodPage01";
import UIDeliveryFoodPage02 from "./pages/ui/singlePage/details/UIDeliveryFoodPage02";
import UIMobilePage from "./pages/ui/singlePage/UIMobilePage";
import UIMobilePage01 from "./pages/ui/singlePage/details/UIMobilePage01";
import UIMobilePage02 from "./pages/ui/singlePage/details/UIMobilePage02";
import UIMobilePage03 from "./pages/ui/singlePage/details/UIMobilePage03";

class BrowserRouter extends React.Component {

  render() {
    return (
      <HashRouter history={this.props.history}>
        <Switch>
          <Route component={Header}/>
        </Switch>
        <Switch>
          {/*<Route exact path="/base-page" component={BasePage}/>*/}
          <Route exact path="/" component={HomePage}/>
          <Route exact path="/ui/cards" component={UICardsPage}/>
          <Route exact path="/ui/cards/simpleCard" component={UISimpleCardPage}/>
          <Route exact path="/ui/cards/airbnbCard" component={UIAirbnbCardPage}/>
          <Route exact path="/ui/cards/reviewCard" component={UIReviewCardPage}/>
          <Route exact path="/ui/cards/ecommerceCard" component={UIEcommerceCardPage}/>

          <Route exact path="/ui/lists" component={UIListsPage}/>
          <Route exact path="/ui/lists/simpleList" component={UISimpleListPage}/>

          <Route exact path="/ui/single-pages" component={UISinglePage}/>
          <Route exact path="/ui/single-pages/covid" component={UIFightCovidPage}/>

          <Route exact path="/ui/single-pages/delivery-food" component={UIDeliveryFoodPage}/>
          <Route exact path="/ui/single-pages/delivery-food/details/01" component={UIDeliveryFoodPage01}/>
          <Route exact path="/ui/single-pages/delivery-food/details/02" component={UIDeliveryFoodPage02}/>

          <Route exact path="/ui/single-pages/mobile" component={UIMobilePage}/>
          <Route exact path="/ui/single-pages/mobile/details/01" component={UIMobilePage01}/>
          <Route exact path="/ui/single-pages/mobile/details/02" component={UIMobilePage02}/>
          <Route exact path="/ui/single-pages/mobile/details/03" component={UIMobilePage03}/>

          <Redirect to="/notfound"/>
        </Switch>
        <Switch>
          <Route exact path="/notfound" component={NotFoundPage}/>
        </Switch>
      </HashRouter>
    );
  }
}

export default BrowserRouter;
