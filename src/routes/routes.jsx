import EventList from "../pages/EventList/EventList"
import FilterEvents from "../pages/Filterevents/FilterEvents"
import EventDetails from "../pages/EventDetails/EventDetails"

export const routes = [
  { path: '/', element: <EventList /> },
  { path: '/find-events', element: <FilterEvents /> },
  { path: '/events/:id', element: <EventDetails /> }
]