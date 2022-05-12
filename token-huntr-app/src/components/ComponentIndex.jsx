import Logout from './Logout';
import withAuth from './WithAuth';
import LocationForm from './LocationForm';
import Locations from './LocationList';


const authComponents = { Locations, Logout }
const protComponents = { LocationForm, LocationUpdated, LocationDelete }

const authenticatedComponents = {}
const protectedComponents = {}

for (const [key, value] of Object.entries(authComponents)) {
    authicatedComponents[`Authenticated${key}`] = withAuth(value)
}

for (const [key, value] of Object.entries(protComponents)) {
    protectedComponents[`Protected${key}`] = withAuth(value)
}

export const wrappedComponents = { ...authenticatedComponents, ...protectedComponents }