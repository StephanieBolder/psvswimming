import Vue from "vue";
import Router from "vue-router";
import LoginInput from "../components/LoginInput/index";
import Logout from "../components/Logout/index";
import MeetsOverview from "../components/MeetsOverview/index";
import Meet from "../components/Meet/index";
import Dashboard from "../components/Dashboard/index";
import Profile from "../components/Profile";
import Settings from "../components/Settings/index";
import UserRegister from "../components/UserRegister/index";
import MeetsRegister from "../components/MeetsRegister/index";
import NewsCreate from "../components/NewsCreate/index";
import News from "../components/News/index";
import MediaOverview from "../components/MediaOverview/index";
import AthleteRequestedEvents from "../components/AthleteRequestedEvents/index";
import AthleteParticipatedEvents from "../components/AthleteParticipatedEvents/index";
import NotificationsOverview from "../components/NotificationsOverview/index";
import NotificationsCreate from "../components/NotificationsCreate/index";
import SwimmersOverview from "../components/SwimmersOverview/index";
import EventRequestsOverview from "../components/EventRequestsOverview/index";
import Training from "../components/Training/index";
import TrainingClass from "../components/TrainingClass/index";
import TrainingCreate from "../components/TrainingCreate/index";
import Events from "../v2/pages/Events";
import EventRegistration from "../v2/pages/EventRegistration";
import Information from "../v2/pages/Information";
import Notifications from "../components/Notifications";
import MeetCreate from "../components/MeetCreate"

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "dashboard",
      component: Dashboard,
    },
    {
      path: "/login",
      name: "login",
      component: LoginInput,
    },
    {
      path: "/logout",
      name: "logout",
      component: Logout,
    },
    { 
      path: "/meet/create",
      name: "meetCreate",
      component: MeetCreate,
    },
    {
      path: "/meet/:meetId",
      name: "meet",
      component: Meet,
    },
    {
      path: "/profile",
      name: "profile",
      component: Profile,
    },
    {
      path: "/settings",
      name: "settings",
      component: Settings,
    },
    {
      path: "/user/register",
      name: "user-register",
      component: UserRegister,
    },
    {
      path: "/meets-register",
      name: "meets-register",
      component: MeetsRegister,
    },
    {
      path: "/create-news",
      name: "news-create",
      component: NewsCreate,
    },
    {
      path: "/news/:id",
      name: "news",
      component: News,
    },
    {
      path: "/media",
      name: "media-overview",
      component: MediaOverview,
    },
    {
      path: "/meetrequests",
      name: "meetrequests",
      component: AthleteRequestedEvents,
    },
    {
      path: "/meethistory",
      name: "meethistory",
      component: AthleteParticipatedEvents,
    },
    {
      path: "/meets",
      name: "meets",
      component: MeetsOverview,
    },
    {
      path: "/notificationsCreate",
      name: "notificationsCreate",
      component: NotificationsCreate,
    },
    {
      path: "/notifications",
      name: "notifications",
      component: Notifications,
    },

    {
      path: "/swimmers",
      name: "swimmers",
      component: SwimmersOverview,
    },
    {
      path: "/eventrequests",
      name: "eventrequests",
      component: EventRequestsOverview,
    },
    {
      path: "/events",
      name: "events",
      component: Events,
    },
    {
      path: "/information",
      name: "information",
      component: Information,
    },
    {
      path: "/events/:id",
      name: "eventDetail",
      component: EventRegistration,
    },
    /* TODO ADD NEXT 3 PATHS TO BLACKLIST FOR ROLES WHICH MAY NOT SEE THE COMPONENTS */
    {
      path: "/training",
      name: "training",
      component: Training,
    },
    {
      path: "/training/:appId",
      name: "trainingid",
      component: TrainingClass,
    },
    {
      path: "/trainingCreate",
      name: "trainingCreate",
      component: TrainingCreate,
    },
  ],
});
