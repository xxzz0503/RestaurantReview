import React from "react";
import yelp from "../api/yelp";

export default () => {
  const [searchResults, setSearchResults] = React.useState([]);
  const [errorMsg, setErrorMsg] = React.useState("");

  const makeYelpRequest = async (searchTerm) => {
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          // if key and value is identical so can write like this. here key is term and value is term also
          term: searchTerm,
          location: "san jose",
        },
      });
      setSearchResults(response.data.businesses);
    } catch (e) {
      setErrorMsg("Something went wrong. return later!!!!");
    }
  };

  // use useEffect hook to make Yelp API Request when component
  // is first rendered. not assign value directly cause it'll make a infinite loop
  // default value return when screen is open
  React.useEffect(() => {
    makeYelpRequest("pasta");
  }, []);

  return [makeYelpRequest, searchResults, errorMsg];
};
