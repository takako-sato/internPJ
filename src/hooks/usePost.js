import { useState, useEffect } from "react";

export const usePost = (
  setCheckedReviewTags,
  isReview,
  setCheckedPersonalTags,
  checkedPersonalTags,
  checkedReviewTags
) => {
  const [personalCustomTag, setPersonalCustomTag] = useState("");
  const [personalCustomTags, setPersonalCustomTags] = useState([]);
  const [reviewCustomTag, setReviewCustomTag] = useState("");
  const [reviewCustomTags, setReviewCustomTags] = useState([]);
  const [isdesabled, setIsDesabled] = useState(false);
  const cliced = (e, res) => {
    if (e.target.checked === true && isReview) {
      const deleteDuplicatecheckedReviewTags = new Set([...checkedReviewTags]);
      setCheckedReviewTags([...deleteDuplicatecheckedReviewTags, res]);
    } else if (e.target.checked === true && !isReview) {
      const deleteDuplicatecheckedPersonalTags = new Set([
        ...checkedPersonalTags,
      ]);
      setCheckedPersonalTags([...deleteDuplicatecheckedPersonalTags, res]);
    }
  };
  const submitHandler = () => {
    if (personalCustomTag.length && !isReview) {
      const checkedDuplicate = new Set([...personalCustomTags]);
      setPersonalCustomTags([...checkedDuplicate, personalCustomTag]);
      checkedPersonalTags.push(personalCustomTag);
      setCheckedPersonalTags(checkedPersonalTags);
      setPersonalCustomTag("");
    }

    if (reviewCustomTag.length && isReview) {
      const checkedDuplicate = new Set([...reviewCustomTags]);
      setReviewCustomTags([...checkedDuplicate, reviewCustomTag]);
      checkedReviewTags.push(reviewCustomTag);
      setCheckedReviewTags(checkedReviewTags);
      setReviewCustomTag("");
    }
  };
  // カスタムボタンをチェックしたら削除
  const deleteHandler = (res) => {
    //delete personal tag
    if (personalCustomTags.length && !isReview) {
      const deleteTags = personalCustomTags.filter((item) => item !== res);
      setPersonalCustomTags(deleteTags);
      const deleteCheckedTags = checkedPersonalTags.filter(
        (item) => item !== res
      );
      setCheckedPersonalTags(deleteCheckedTags);
    }
    //delete review tag
    else if (reviewCustomTags.length && isReview) {
      const deleteTags = reviewCustomTags.filter((item) => item !== res);
      setReviewCustomTags(deleteTags);
      const deleteCheckedTags = checkedReviewTags.filter(
        (item) => item !== res
      );
      setCheckedReviewTags(deleteCheckedTags);
    }
  };
  useEffect(() => {
    if (personalCustomTag.length || reviewCustomTag.length) {
      setIsDesabled(true);
    } else {
      setIsDesabled(false);
    }
  }, [personalCustomTag, reviewCustomTag]);
  return {
    cliced,
    deleteHandler,
    submitHandler,
    reviewCustomTag,
    personalCustomTag,
    setReviewCustomTag,
    setPersonalCustomTag,
    isdesabled,
    reviewCustomTags,
    personalCustomTags,
  };
};
