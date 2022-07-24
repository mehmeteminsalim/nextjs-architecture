import type { NextPage } from "next";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import { fetchLanguage } from "../redux/States/Language/languageState";

const IndexPage: NextPage = () => {
  const language = useAppSelector((state) => state.language);
  const dispatch = useAppDispatch();
  console.log(language);

  useEffect(() => {
    dispatch(fetchLanguage());
  }, []);

  return <div>Ana sayfa</div>;
};

export default IndexPage;
