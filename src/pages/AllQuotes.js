import { useEffect } from "react";
import QuoteList from "../components/quotes/QuoteList";
import useHttp from "../hooks/use-http";
import { getAllQuotes } from "../lib/api";
import LoadingSpinner from "../components/UI/LoadingSpinner";

const AllQuotes = () => {
  const {
    sendRequest,
    status,
    error,
    data: loadedQuote,
  } = useHttp(getAllQuotes, true);

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  if (status === "pending") {
    return <LoadingSpinner className="centered" />;
  }

  if (error) {
    return <p className="centered">{error}</p>;
  }

  return <QuoteList quotes={loadedQuote} />;
};

export default AllQuotes;
