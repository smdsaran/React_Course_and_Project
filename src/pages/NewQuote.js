import { useEffect } from "react";
import { useHistory } from "react-router";
import useHttp from "../hooks/use-http";
import { addQuote } from "../lib/api";

import QuoteForm from "../components/quotes/QuoteForm";

const NewQuote = () => {
  const { sendRequest, status } = useHttp(addQuote);
  const history = useHistory();

  useEffect(() => {
    if (status === "completed") {
      history.push("/quotes");
    }
  }, [history, status]);

  const addQuoteHandler = (quote) => {
    sendRequest(quote);
  };
  return <QuoteForm onAddQuote={addQuoteHandler} />;
};

export default NewQuote;
